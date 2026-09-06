-- =====================================================
-- SCHEMA OFICIAL DO SUPABASE PARA "DEPOIS DOS 60"
-- =====================================================

CREATE TABLE IF NOT EXISTS compras (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  nome_comprador TEXT,
  telefone TEXT,
  produto TEXT,
  codigo_venda TEXT NOT NULL UNIQUE,
  status_pagamento TEXT NOT NULL,
  valor_pago NUMERIC,
  payload_bruto JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS ebook_access (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  compra_id UUID REFERENCES compras(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  ebook_id TEXT DEFAULT 'depois-dos-60' NOT NULL,
  token_hash TEXT,
  status TEXT NOT NULL CHECK (status IN ('active', 'pending', 'refunded', 'canceled', 'chargeback', 'revoked')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS ebook_reading_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  current_page INTEGER DEFAULT 1 NOT NULL,
  total_pages INTEGER DEFAULT 50 NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS webhook_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  origem TEXT DEFAULT 'perfectpay',
  codigo_venda TEXT,
  email TEXT,
  status_evento TEXT,
  payload JSONB NOT NULL,
  processado BOOLEAN DEFAULT FALSE,
  sucesso BOOLEAN DEFAULT FALSE,
  mensagem_erro TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS ebook_files (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  file_name TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  total_pages INTEGER DEFAULT 0 NOT NULL,
  file_size TEXT,
  status TEXT DEFAULT 'processing' NOT NULL,
  processing_progress TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE compras ENABLE ROW LEVEL SECURITY;
ALTER TABLE ebook_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE ebook_reading_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE webhook_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE ebook_files ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuários podem ver apenas suas próprias compras"
  ON compras FOR SELECT
  USING (auth.jwt() ->> 'email' = email);

CREATE POLICY "Usuários podem ler apenas seus próprios acessos"
  ON ebook_access FOR SELECT
  USING (auth.jwt() ->> 'email' = email);

CREATE POLICY "Usuários podem ler e escrever seu próprio progresso"
  ON ebook_reading_progress FOR ALL
  USING (auth.jwt() ->> 'email' = email);

CREATE POLICY "Leitura de ebook_files para autenticados"
  ON ebook_files FOR SELECT
  USING (auth.role() = 'authenticated');
