# Estágio 1: Instalação de dependências
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copia arquivos de definição de dependências
COPY package.json package-lock.json ./
RUN npm ci

# Estágio 2: Construção da aplicação
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desativa a telemetria do Next.js durante o build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Variáveis de build para o Supabase (necessárias para geração estática durante o build)
# Se você tiver variáveis locais ou build-time, passe-as por ARG.
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY

ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY

RUN npm run build

# Estágio 3: Execução (Runner)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar arquivos estáticos e de assets necessários
COPY --from=builder /app/public ./public

# Configurar permissões de cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Aproveitar a saída 'standalone' do Next.js para um contêiner ultra leve
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# O Next.js standalone gera o server.js na raiz da pasta standalone
CMD ["node", "server.js"]
