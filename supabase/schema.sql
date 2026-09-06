-- ==============================================================================
-- SCHEMA SUPABASE: Webhook Kiwify & Gestão Segura de Acessos e Progresso do eBook
-- ==============================================================================

-- 1. Habilitar extensão para geração de UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Tabela de Compras
CREATE TABLE IF NOT EXISTS public.compras (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL,
    nome_comprador TEXT,
    telefone TEXT,
    produto TEXT DEFAULT 'Depois dos 60: 50 Cuidados',
    codigo_venda TEXT UNIQUE NOT NULL,
    status_pagamento TEXT NOT NULL, -- 'paid', 'refunded', 'charged_back', etc.
    valor_pago NUMERIC(10,2),
    metodo_pagamento TEXT,
    payload_bruto JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_compras_email ON public.compras(email);
CREATE INDEX IF NOT EXISTS idx_compras_codigo_venda ON public.compras(codigo_venda);

-- 3. Tabela de Acesso ao eBook (ebook_access) — Token Seguro e Exclusivo
CREATE TABLE IF NOT EXISTS public.ebook_access (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    compra_id UUID NOT NULL REFERENCES public.compras(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    ebook_id TEXT DEFAULT 'depois-dos-60',
    access_token TEXT UNIQUE NOT NULL, -- Token criptografado/aleatório de acesso seguro
    status TEXT DEFAULT 'active', -- 'active', 'revoked', 'expired'
    expires_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ebook_access_token ON public.ebook_access(access_token);
CREATE INDEX IF NOT EXISTS idx_ebook_access_email ON public.ebook_access(email);
CREATE INDEX IF NOT EXISTS idx_ebook_access_compra ON public.ebook_access(compra_id);

-- 4. Tabela de Progresso de Leitura do eBook
CREATE TABLE IF NOT EXISTS public.reading_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ebook_access_id UUID NOT NULL REFERENCES public.ebook_access(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    ebook_id TEXT DEFAULT 'depois-dos-60',
    current_page INTEGER DEFAULT 1,
    total_pages INTEGER DEFAULT 1,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_reading_progress_access ON public.reading_progress(ebook_access_id);
CREATE INDEX IF NOT EXISTS idx_reading_progress_email ON public.reading_progress(email);

-- 5. Tabela de Auditoria e Logs de Webhook (com idempotência garantida por transação+evento)
CREATE TABLE IF NOT EXISTS public.webhook_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    origem TEXT DEFAULT 'kiwify',
    codigo_venda TEXT,
    email TEXT,
    status_evento TEXT,
    processado BOOLEAN DEFAULT FALSE,
    sucesso BOOLEAN DEFAULT FALSE,
    mensagem_erro TEXT,
    payload JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT uniq_webhook_event UNIQUE (codigo_venda, status_evento)
);

CREATE INDEX IF NOT EXISTS idx_webhook_logs_codigo_venda ON public.webhook_logs(codigo_venda);
CREATE INDEX IF NOT EXISTS idx_webhook_logs_created_at ON public.webhook_logs(created_at DESC);

-- 6. Configuração de Row Level Security (RLS) RIGOROSA
ALTER TABLE public.compras ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ebook_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reading_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.webhook_logs ENABLE ROW LEVEL SECURITY;

-- Ninguém da internet (anon/authenticated) tem acesso direto às tabelas de compras e logs.
-- Apenas a service_role (usada exclusivamente nas Edge Functions do Supabase) possui acesso total.

CREATE POLICY "Acesso restrito service_role em compras"
ON public.compras FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Acesso restrito service_role em ebook_access"
ON public.ebook_access FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Acesso restrito service_role em reading_progress"
ON public.reading_progress FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Acesso restrito service_role em webhook_logs"
ON public.webhook_logs FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Negar explicitamente acesso público anônimo
CREATE POLICY "Nenhum acesso anonimo em compras" ON public.compras FOR ALL TO anon USING (false);
CREATE POLICY "Nenhum acesso anonimo em ebook_access" ON public.ebook_access FOR ALL TO anon USING (false);
CREATE POLICY "Nenhum acesso anonimo em reading_progress" ON public.reading_progress FOR ALL TO anon USING (false);
CREATE POLICY "Nenhum acesso anonimo em webhook_logs" ON public.webhook_logs FOR ALL TO anon USING (false);

-- 7. Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_compras_updated_at ON public.compras;
CREATE TRIGGER trigger_compras_updated_at
BEFORE UPDATE ON public.compras
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS trigger_ebook_access_updated_at ON public.ebook_access;
CREATE TRIGGER trigger_ebook_access_updated_at
BEFORE UPDATE ON public.ebook_access
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS trigger_progress_updated_at ON public.reading_progress;
CREATE TRIGGER trigger_progress_updated_at
BEFORE UPDATE ON public.reading_progress
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();
