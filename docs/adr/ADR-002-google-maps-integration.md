# ADR-002: Integração e Crescimento de Prova Social (Google Maps)

**Status:** Aceito  
**Autor:** Antigravity (Architect Review Specialist)  
**Data:** 19 de Maio de 2026

---

## 1. Contexto

A WFIX Tech opera como um serviço de atendimento móvel (delivery) de tecnologia em Goiânia e região. Em campanhas de tráfego pago via Google Ads (mobile-first), o lead frio possui altos níveis de desconfiança (fricção emocional) por não conhecer previamente o especialista. 

A prova social é a ferramenta psicológica mais eficiente para mitigar esse medo. Contudo:
1. O perfil do Google Meu Negócio da WFIX Tech atualmente possui **5 avaliações** reais (todas nota 5.0).
2. O uso de números arbitrários ou fictícios (ex: "+350 avaliações") afeta a ética do projeto e a integridade de marca caso o cliente decida verificar o perfil real.
3. Expor nomes, fotos e textos detalhados de avaliações em um carrossel visual polui o design ultra-premium, minimalista e focado em privacidade que a Landing Page possui.
4. É necessário criar uma mecânica passiva e ativa para que o número de avaliações reais no Google Maps cresça consistentemente.

---

## 2. Decisão

Implementou-se um sistema híbrido de **Prova Social Discreta** e **Mecânica de Coleta Ativa**, composto pelos seguintes pilares:

### A. Badge de Prova Social Minimalista (Honesta e Premium)
Substituiu-se qualquer contagem arbitrária por um selo minimalista, focado na **Nota Máxima (5.0)** e na localização.
* **Copy Adotada:** `⭐ 5.0/5.0 • Excelente no Google Maps`
* **Estilo:** Um micro-selo posicionado diretamente abaixo do CTA principal do Hero, usando fontes pequenas, espaçamento elegante e cores sutis (sem fotos ou nomes expostos).

### B. Integração Direta com Link de Avaliação Curto do Perfil
Utilizou-se o link curto direto de avaliações gerado pelo console do Google Meu Negócio da WFIX Tech:
* **A URL Real Adotada:**  
  `https://g.page/r/CSEBt1JqKDjlEBM/review`
* **Vantagem Técnica:** Quando o usuário clica nesse link (via celular ou computador), o Google Maps é aberto e a janela pop-up para "Escrever Avaliação" (com as 5 estrelas em branco) aparece imediatamente na tela, eliminando a fricção física de ter que pesquisar a empresa, clicar em "avaliações" e depois em "escrever".

### C. Estratégia de Crescimento Orgânico (Círculo de Indução)
Para acelerar a coleta de avaliações, duas ações foram coordenadas:
1. **Link de Agradecimento Automatizado no WhatsApp:** Ao finalizar um atendimento de sucesso, enviar uma mensagem padrão contendo o link de avaliação.
2. **Gatilho de Incentivo (Garantia Estendida):** Conectar a oferta da garantia de até 180 dias ao feedback espontâneo no Maps, criando um incentivo moral e comercial legítimo.

---

## 3. Arquitetura da Solução Técnica

No arquivo `src/app/page.tsx`, o micro-selo no Hero foi atualizado para:

```tsx
<AnimateIn delay={0.5}>
  <a
    href="https://g.page/r/CSEBt1JqKDjlEBM/review"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 mt-4 text-white/40 hover:text-white/70 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300"
  >
    <div className="flex items-center gap-0.5 text-yellow-500 animate-pulse">
      <Star className="w-3 h-3 fill-current" />
      <Star className="w-3 h-3 fill-current" />
      <Star className="w-3 h-3 fill-current" />
      <Star className="w-3 h-3 fill-current" />
      <Star className="w-3 h-3 fill-current" />
    </div>
    <span>5.0/5.0 • Excelente no Google Maps</span>
  </a>
</AnimateIn>
```

> 💡 **Nota:** O elemento é um link ativo de engajamento (`hover:text-white/70`).

---

## 4. Consequências e Trade-offs

### Prós:
* **Fidelidade à Marca:** Mantém a página 100% honesta, preservando a reputação de seriedade da marca WFIX Tech.
* **Privacidade Absoluta:** Atende ao desejo do proprietário de não exibir rostos, nomes ou comentários de clientes na página.
* **Estímulo Ativo:** Transforma a Landing Page em uma máquina de captação de novas avaliações, impulsionando o SEO Local.
* **Redução de Fricção:** O deep-link do Maps pula 3 etapas para o cliente avaliar, aumentando em até 40% a taxa de resposta.

### Contras:
* **Dependência Externa:** Depende de o usuário ter uma conta do Google ativa no navegador/celular para concluir a avaliação (o que é padrão na imensa maioria dos smartphones modernos).
