# WTechApp / WFIX Tech 🚀

Um sistema completo (SaaS / Painel Interno) e aplicação voltada para clientes de assistência técnica de ponta, focado na resolução de problemas em hardware, notebooks e computadores de alta performance. Desenvolvido para facilitar o fluxo de Atendimento, Diagnóstico, Envio de Orçamentos (via PDF) e Gestão de TI (B2B).

## 🛠 Tecnologias Principais

Este projeto foi construído utilizando as mais modernas tecnologias web para garantir velocidade e estabilidade:

- **[Next.js 16](https://nextjs.org/)** - O framework principal para construção de ambas as partes (Painel interno e Landing Pages)
- **[React 19](https://react.dev/)** - Biblioteca pilar
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Estilização utility-first, rápida e com aparência premium (Dark Theme customizado)
- **[Supabase](https://supabase.com/)** - Banco de Dados PostgreSQL, Autenticação, e Storage
- **[n8n](https://n8n.io/)** - Utilizado para automações de processos em background e interações (ex: notificações enviadas pelo webhook)
- **[@react-pdf/renderer](https://react-pdf.org/)** - Utilizado para geração nativa de PDFs diretamente do navegador para Orçamentos e Laudos
- **[Framer Motion](https://www.framer.com/motion/)** - Para lidar com micro-interações fluidas na interface.
- **[Lucide React](https://lucide.dev/)** - Biblioteca de Ícones consistente e enxuta.
- **[Zod](https://zod.dev/)** - Esquemas de Validação (Schema Validation)
- **[React Hook Form](https://react-hook-form.com/)** - Gestão avançada dos vários formulários da aplicação.

## 🚀 Como Iniciar (Getting Started)

Siga estas instruções para obter o projeto rodando na sua máquina local de desenvolvimento.

### Pré-requisitos
- Node.js versão v20 ou superior (Devido à exigência do Next.js e Tailwind V4)
- NPM, Yarn, pnpm ou Bun;
- Um banco configurado no Supabase para rodar as variáveis de ambiente baseadas no `.env`.

### 1. Instalação
Faça a instalação dos pacotes utilizando o gerenciador de pacote de sua escolha:
```bash
npm install
# ou
yarn
```

### 2. Configuração de Variáveis de Ambiente
Renomeie ou crie seu arquivo `.env` com as seguintes credenciais obrigatórias de sua plataforma (referências do provedor e da URL local se for o caso):

```env
NEXT_PUBLIC_SUPABASE_URL=seu_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_anon_key_do_supabase
# As outras variáveis para os webhooks do N8A, chaves da OpenAI, etc, conforme as automações.
```

### 3. Rodando o Servidor de Desenvolvimento
Inicie a aplicação:
```bash
npm run dev
# ou
yarn dev
```

Abra em seu navegador em [http://localhost:3000](http://localhost:3000).

## 🗂 Estruturação de Pastas

* `/src/app/` - App Router do Next. Toda regra de visualização e roteamento está aqui. 
    - `(b2b)/para-empresas` - Nossa Landing Page focada para soluções em massa corporativas.
    - `/dashboard` - Todo o controle de chamados do lojista, estatísticas, e clientes.
    - O restante das LPs dinâmicas.
* `/supabase/` - Diretório principal relacionado as _Migrations_ feitas para subir para o Supabase e Backups de _snapshots_.
* `/public/` - Os Assets geradores de cache do Next.js (Logos, e Imagens do Background para o layout das LPs que usamos em campanhas).
* `/.ai-prompts/` - Configurações textuais passadas aos assistentes geradores (como os Agentes/Superprompts).


## ⭐ Principais Processos Documentados
- Todas as rotas fechadas de preview (`_lp1`, `_lp2`...) não são indexadas, pois são baseadas em abordagens agressivas de anúncios a serem validadas com Ads.
- O Painel cria requisições pro atalho de **Assinatura Canvas** nos Termos de Entrada digital.
- Qualquer alteração na listagem dos Orçamentos e Ordens de Serviço afetam a infraestrutura central de webhook que conversa diretamente com os agentes do WhatsApp.
 
---
Desenvolvido por **WFIX Tech** | *Focado em reparo.*
