# Guia de Deploy - NovaMei

Como as ferramentas de linha de comando (`gh` e `vercel`) não estão instaladas, você precisará fazer o deploy manualmente seguindo estes passos.

## 1. GitHub (Código)

1. Crie um novo repositório vazio no [GitHub](https://github.com/new) com o nome `novamei`.
2. No seu terminal, dentro da pasta `novamei`, execute:

```bash
# Substitua SEU_USUARIO pelo seu usuário do GitHub
git remote add origin https://github.com/SEU_USUARIO/novamei.git
git branch -M main
git push -u origin main
```

## 2. Supabase (Banco de Dados)

Siga as instruções no arquivo `SUPABASE_SETUP.md` criado na raiz do projeto para configurar o banco de dados e obter as credenciais.

## 3. Vercel (Hospedagem)

1. Acesse [vercel.com](https://vercel.com) e faça login.
2. Clique em **"Add New..."** > **"Project"**.
3. Selecione o repositório `novamei` que você acabou de subir para o GitHub.
4. Na seção **Environment Variables**, adicione as variáveis do Supabase:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Clique em **Deploy**.

## Próximos Passos
- O site estará online em instantes.
- Verifique se o domínio `novamei.com.br` já está comprado e configure-o na aba **Domains** do projeto na Vercel.
