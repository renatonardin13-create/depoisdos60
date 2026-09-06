-- =====================================================
-- SCHEMA OFICIAL DO SUPABASE PARA "DEPOIS DOS 60"
-- =====================================================

-- 1. Tabela de controle de acesso (Preenchida pelo Webhook PerfectPay)
CREATE TABLE IF NOT EXISTS ebook_access (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  transaction_id TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('active', 'pending', 'refunded', 'canceled', 'chargeback')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Tabela de progresso de leitura
CREATE TABLE IF NOT EXISTS ebook_reading_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  current_page INTEGER DEFAULT 1 NOT NULL,
  total_pages INTEGER DEFAULT 50 NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Tabela de logs de webhook
CREATE TABLE IF NOT EXISTS webhook_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  payload JSONB NOT NULL,
  status TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Tabela de arquivos PDF oficiais enviados pelo Admin
CREATE TABLE IF NOT EXISTS ebook_files (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  file_name TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  total_pages INTEGER DEFAULT 50 NOT NULL,
  file_size TEXT,
  status TEXT DEFAULT 'published' NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- =====================================================
-- ROW LEVEL SECURITY (RLS)
-- =====================================================

ALTER TABLE ebook_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE ebook_reading_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE webhook_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE ebook_files ENABLE ROW LEVEL SECURITY;

-- Políticas de segurança para ebook_access
CREATE POLICY "Usuários podem ler apenas seus próprios acessos"
  ON ebook_access FOR SELECT
  USING (auth.jwt() ->> 'email' = email);

-- Políticas para ebook_reading_progress
CREATE POLICY "Usuários podem gerenciar seu próprio progresso"
  ON ebook_reading_progress FOR ALL
  USING (auth.jwt() ->> 'email' = email);

-- Políticas para ebook_files (Leitura por autenticados, escrita por admins)
CREATE POLICY "Leitura de ebook_files para autenticados"
  ON ebook_files FOR SELECT
  USING (auth.role() = 'authenticated');
