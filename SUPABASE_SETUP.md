# Configuração do Supabase

Para ativar o backend do projeto, você precisa criar um projeto no Supabase e configurar as variáveis de ambiente.

## 1. Criar Projeto no Supabase
1. Acesse [supabase.com](https://supabase.com) e faça login.
2. Clique em "New Project".
3. Dê um nome ao projeto (ex: `novamei-db`).
4. Defina uma senha forte para o banco de dados.
5. Selecione a região mais próxima (ex: São Paulo / Brazil).
6. Clique em "Create new project".

## 2. Obter Credenciais
Assim que o projeto for criado:
1. Vá em **Project Settings** (ícone de engrenagem) > **API**.
2. Copie a `Project URL`.
3. Copie a `anon` `public` key.

## 3. Configurar Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto `novamei` e adicione:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_project_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_anon_key_aqui
```

## 4. Banco de Dados
Acesse o **Table Editor** no Supabase e crie as tabelas necessárias para o seu sistema (ex: `leads`, `clientes`, etc.), conforme a necessidade futura.
