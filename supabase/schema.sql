-- =====================================================
-- SCHEMA DO SUPABASE PARA "DEPOIS DOS 60" (PÁGINA DE VENDAS)
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

ALTER TABLE compras ENABLE ROW LEVEL SECURITY;
ALTER TABLE webhook_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuários podem ver apenas suas próprias compras"
  ON compras FOR SELECT
  USING (auth.jwt() ->> 'email' = email);

