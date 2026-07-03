import Link from 'next/link'
import { Instagram, MessageCircle, MapPin, Clock, ShieldCheck, Star, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimateIn } from '@/components/ui/animate-in'
import Image from 'next/image'
import { ImageModal } from '@/components/ui/image-modal'
import { GlowLine, GlobalVisualEffects } from '@/components/ui/visual-effects'
import { WhatsAppLink, WhatsAppAnchor } from '@/components/ui/whatsapp-link'
import { StatsCounters } from '@/components/stats-counters'

import { getTenantData } from '@/lib/get-tenant-data'
import { getReviewsStats } from '@/lib/reviews'

export const revalidate = 86400; // Revalida a cada 24 horas (Incremental Static Regeneration)

export function generateMetadata() {
  const { brandName } = getTenantData()
  return {
    title: 'WFIX Tech | Sua Referência em Goiânia',
    description: 'Qualidade, rapidez e garantia. Estamos prontos para te ajudar em Goiânia.',
  }
}

export default async function Home() {
  const { whatsappNumber, formattedPhone, brandName } = getTenantData()
  const stats = await getReviewsStats()

  return (
    <div className="dark flex min-h-screen flex-col bg-black text-white noise-overlay overflow-x-hidden w-full max-w-full">

      {/* === EFEITOS VISUAIS GLOBAIS === */}
      <GlobalVisualEffects />
      {/* HEADER MINIMALISTA */}
      <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">WFIX</span>
            <span className="text-white/90">Tech</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Online</span>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16 relative z-[2]">

        {/* HERO — Centralizada e Compacta */}
        <section className="relative min-h-[45vh] md:min-h-[50vh] flex flex-col items-center justify-center pt-20 pb-20 md:pb-32 overflow-hidden">
          {/* Imagens de fundo alternadas (Fundo animado gerado por IA) */}
          <div className="absolute inset-0 bg-black">
            <Image
              src="/hero/hero-01.webp"
              alt="Design e inovação em ambiente tecnológico"
              fill
              quality={85}
              className="object-cover object-[center_35%] md:object-[center_40%] brightness-[0.5] contrast-[1.1] md:blur-[2px] animate-hero-bg-1 opacity-0 absolute"
              sizes="(max-width: 1080px) 100vw, 1080px"
              style={{
                maskImage: 'linear-gradient(to top, transparent 0%, black 60%)',
                WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 60%)',
              }}
            />
            <Image
              src="/hero/hero-02.webp"
              alt="Espaço corporativo moderno"
              fill
              quality={85}
              className="object-cover object-center md:object-[center_30%] brightness-[0.5] contrast-[1.1] md:blur-[2px] animate-hero-bg-2 opacity-0 absolute"
              sizes="(max-width: 1080px) 100vw, 1080px"
              style={{
                maskImage: 'linear-gradient(to top, transparent 0%, black 60%)',
                WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 60%)',
              }}
            />
            <Image
              src="/hero/hero-03.webp"
              alt="Estrutura moderna e de alta qualidade"
              fill
              quality={85}
              className="object-cover object-[center_20%] md:object-[center_40%] brightness-[0.4] contrast-[1.1] md:blur-[2px] animate-hero-bg-3 opacity-0 absolute"
              sizes="(max-width: 1080px) 100vw, 1080px"
              style={{
                maskImage: 'linear-gradient(to top, transparent 0%, black 60%)',
                WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 60%)',
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

          {/* Glow atrás do texto */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[400px] bg-green-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <AnimateIn delay={0.1}>
              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-white/50 mb-3">
                Qualidade e Confiança para Seu Equipamento
              </p>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-3">
                Bem-vindo à <br />
                <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent animate-gradient-text drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]">WFIX Tech.</span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <p className="text-xs md:text-sm text-white/60 uppercase tracking-[0.2em] font-bold max-w-md mx-auto mb-6">
                Atendimento em Goiânia com rapidez, garantia e total transparência.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.4}>
              <div className="flex flex-col items-center mb-2 md:mb-4">
                <Button size="lg" id="cta-whatsapp-hero" className="h-14 px-10 text-base font-black uppercase tracking-widest rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 transform hover:scale-105 animate-glow-green" asChild>
                  <WhatsAppLink phone={whatsappNumber} target="_blank">
                    <MessageCircle className="mr-2 h-5 w-5 pointer-events-none" />
                    <span className="pointer-events-none">Falar no WhatsApp</span>
                  </WhatsAppLink>
                </Button>
                <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest mt-4 animate-pulse">
                  🟢 Atendimento hoje disponível • Resposta em 5 min
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.5}>
              <a
                href="https://www.google.com/maps/place/WFIX+Tech/@-16.6403881,-49.1617139,17z/data=!4m8!3m7!1s0x935eed36ddc0c8fb:0xe538286a52b70121!8m2!3d-16.6403881!4d-49.1617139!9m1!1b1!16s%2Fg%2F11yy4_wtds?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-2.5 mt-5 px-4 py-2 rounded-full bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] hover:border-white/[0.12] text-white/40 hover:text-white/80 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 backdrop-blur-sm group shadow-sm hover:shadow-md active:scale-[0.98]"
              >
                <div className="flex items-center gap-0.5 text-yellow-500 animate-pulse">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
                <span className="flex items-center gap-1.5">
                  {stats.averageRating.toFixed(1)}/5.0 • Ver {stats.totalReviews} avaliações no Google Maps
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </span>
              </a>
              <p className="text-[10px] text-white/30 italic mt-3 max-w-sm mx-auto tracking-wide">
                "Resolução no mesmo dia e transparência total do início ao fim. Profissionalismo raro no mercado."
              </p>
            </AnimateIn>

          </div>
        </section>

        {/* SEÇÃO VISUAL — Infográficos de Processo e Serviços (Full-Bleed Otimizado) */}
        <section className="pb-16 md:pb-24 pt-0 relative z-20 -mt-12 md:-mt-24">
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-[1000px] mx-auto px-4 relative z-10">
            <AnimateIn>
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2 drop-shadow-md">Metodologia Exclusiva</h2>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-white/40 italic">Transparência do diagnóstico à entrega</p>
              </div>
            </AnimateIn>

            <div className="grid grid-cols-1 gap-12 md:gap-20">

              {/* Card Como Funciona */}
              <AnimateIn delay={0.1}>
                <ImageModal
                  src="/services/infografico-processo.webp"
                  alt="Fluxo de trabalho e qualidade"
                  className="rounded-3xl sm:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                  <div className="group relative w-full h-[400px] md:h-[700px] rounded-3xl sm:rounded-[40px] overflow-hidden bg-black/60 backdrop-blur-2xl border-2 border-white/10 hover:border-green-500/50 hover:shadow-[0_0_60px_rgba(34,197,94,0.3)] transition-all duration-700 card-3d flex items-center justify-center">
                    <Image
                      src="/services/infografico-processo.webp"
                      alt="Fluxo de trabalho e qualidade"
                      fill
                      sizes="100vw"
                      className="object-contain p-4 md:p-8 group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    {/* Overlay sutil para manter o estilo glass */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                  </div>
                </ImageModal>
                <div className="mt-6 text-center md:hidden">
                  <p className="text-[10px] text-white/60 font-black uppercase tracking-widest bg-white/10 inline-block px-5 py-2 rounded-full backdrop-blur-sm border border-white/5 shadow-lg">Toque para ampliar imagem</p>
                </div>
              </AnimateIn>

              {/* Card Resumo de Serviços */}
              <AnimateIn delay={0.2}>
                <ImageModal
                  src="/services/resumo-servicos.webp"
                  alt="Soluções corporativas e diferenciais"
                  className="rounded-3xl sm:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                  <div className="group relative w-full h-[400px] md:h-[700px] rounded-3xl sm:rounded-[40px] overflow-hidden bg-black/60 backdrop-blur-2xl border-2 border-white/10 hover:border-green-500/50 hover:shadow-[0_0_60px_rgba(34,197,94,0.3)] transition-all duration-700 card-3d flex items-center justify-center">
                    <Image
                      src="/services/resumo-servicos.webp"
                      alt="Soluções corporativas e diferenciais"
                      fill
                      sizes="100vw"
                      className="object-contain p-4 md:p-8 group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                  </div>
                </ImageModal>
                <div className="mt-6 text-center md:hidden">
                  <p className="text-[10px] text-white/60 font-black uppercase tracking-widest bg-white/10 inline-block px-5 py-2 rounded-full backdrop-blur-sm border border-white/5 shadow-lg">Toque para ampliar imagem</p>
                </div>
              </AnimateIn>

            </div>
          </div>
        </section>

        {/* CONTADORES — Prova Social Numérica */}
        <StatsCounters averageRating={stats.averageRating} totalReviews={stats.totalReviews} />

        {/* CTA INTERMEDIÁRIO — Captura quem já se convenceu */}
        <section className="py-4 md:py-6">
          <div className="max-w-md mx-auto px-4 text-center">
            <AnimateIn>
              <Button size="lg" id="cta-whatsapp-mid" className="w-full h-14 text-base font-black uppercase tracking-widest rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 transform hover:scale-105 animate-glow-green" asChild>
                <WhatsAppLink phone={whatsappNumber} target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5 pointer-events-none" />
                  <span className="pointer-events-none">Falar no WhatsApp</span>
                </WhatsAppLink>
              </Button>
              <p className="text-[10px] text-green-400/70 font-bold uppercase tracking-widest mt-3">
                Resposta em até 5 minutos
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* GALERIA — Imagens que falam pelo trabalho */}
        <section className="py-10 md:py-16 relative">
          {/* Background glow atrás da galeria */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 relative z-10">
            <AnimateIn>
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">Nosso Trabalho</h2>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-white/30 italic">Padrão de excelência em cada detalhe</p>
              </div>
            </AnimateIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-6">
              {[
                { src: '/hero/high-performance-hardware.webp', alt: 'Tecnologia moderna e inovadora' },
                { src: '/hero/precision-notebook-hardware.webp', alt: 'Estrutura tecnológica de alta precisão' },
                { src: '/hero/gallery-03.webp', alt: 'Inovação e engenharia moderna' },
                { src: '/services/performance-workstation.webp', alt: 'Tecnologia para alta produtividade' },
                { src: '/services/technology-infrastructure.webp', alt: 'Infraestrutura de ponta e tecnologia' },
                { src: '/hero/high-performance-configuration.webp', alt: 'Configuração robusta e moderna' },
              ].map((img, i) => (
                <div key={i} className={i >= 3 ? 'hidden sm:block' : ''}>
                  <AnimateIn delay={0.1 * i}>
                    <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] md:shadow-none hover:border-green-500/30 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(34,197,94,0.15)] card-3d">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 brightness-[0.8] group-hover:brightness-100"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                      {/* Gradient overlay sutil no hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
                      {/* Glow verde sutil no canto */}
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
                    </div>
                  </AnimateIn>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS — Cards Glass com Ícones */}
        <section className="py-10 md:py-16 relative">
          {/* Background glow */}
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <AnimateIn>
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-2 tracking-tighter">Nossos Diferenciais</h2>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] mb-12 md:mb-16 font-bold text-white/30 italic">Comodidade, precisão e seriedade</p>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <AnimateIn delay={0.1}>
                <div className="card-3d card-glow-border group bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-8 md:p-10 rounded-3xl relative overflow-hidden">
                  <span className="absolute -top-2 -right-2 text-white/[0.03] text-7xl font-black italic">01</span>
                  <div className="animate-float-subtle">
                    <MapPin className="w-12 h-12 md:w-14 md:h-14 mb-6 text-primary mx-auto group-hover:scale-110 transition-transform duration-300 group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black mb-3 uppercase">Atendimento On-Site</h3>
                  <p className="text-sm text-white/60 leading-relaxed">Máxima conveniência. Deslocamento de especialistas até o seu local para total praticidade, com a maioria das demandas solucionadas em 24h a 48h.</p>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <div className="card-3d card-glow-border group bg-white/[0.03] backdrop-blur-xl border border-primary/20 p-8 md:p-10 rounded-3xl relative overflow-hidden">
                  <span className="absolute -top-2 -right-2 text-white/[0.03] text-7xl font-black italic">02</span>
                  <div className="animate-float-subtle" style={{ animationDelay: '2s' }}>
                    <ShieldCheck className="w-12 h-12 md:w-14 md:h-14 mb-6 text-primary mx-auto group-hover:scale-110 transition-transform duration-300 group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black mb-3 uppercase">Até 180 dias de Garantia</h3>
                  <p className="text-sm text-white/60 leading-relaxed">Garantia documentada de 30 a 180 dias. Cobertura estendida de acordo com a complexidade da solução.</p>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <div className="card-3d card-glow-border group bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-8 md:p-10 rounded-3xl relative overflow-hidden">
                  <span className="absolute -top-2 -right-2 text-white/[0.03] text-7xl font-black italic">03</span>
                  <div className="animate-float-subtle" style={{ animationDelay: '4s' }}>
                    <Star className="w-12 h-12 md:w-14 md:h-14 mb-6 text-green-500 mx-auto group-hover:scale-110 transition-transform duration-300 group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black mb-3 uppercase">Análise Precisa</h3>
                  <p className="text-sm text-white/60 leading-relaxed">Avaliação técnica detalhada para definição transparente de escopo. Sem surpresas ou taxas ocultas.</p>
                </div>
              </AnimateIn>
            </div>

            {/* Info Cards Compactos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10 md:mt-12 text-left">
              <AnimateIn delay={0.1}>
                <div className="group shimmer-border bg-white/[0.03] border border-white/5 hover:border-green-500/20 p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-green-500/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <MessageCircle className="w-4 h-4 text-white/40 group-hover:text-green-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/30">Suporte</p>
                    <p className="text-[10px] font-bold text-white group-hover:text-green-400 transition-colors">Via WhatsApp</p>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <div className="group shimmer-border bg-white/[0.03] border border-white/5 hover:border-white/15 p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-blue-500/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Clock className="w-4 h-4 text-white/40 group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/30">Horário</p>
                    <div className="text-[9px] font-bold text-white leading-tight mt-0.5">
                      <p>Flexível (Seg-Sáb)</p>
                      <p>Sob agendamento prévio</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <div className="group shimmer-border bg-white/[0.03] border border-white/5 hover:border-white/15 p-4 rounded-2xl flex items-center gap-4 sm:col-span-1 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-red-500/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-white/40 group-hover:text-red-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/30">Localização</p>
                    <p className="text-[10px] font-bold text-white">Goiânia - GO</p>
                  </div>
                </div>
              </AnimateIn>
            </div>

          </div>
        </section>

        {/* DEPOIMENTOS — Prova Social Real (Via Imagem para Google Ads Compliance) */}
        <section className="py-10 md:py-16 relative z-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-[1000px] mx-auto px-4 relative z-10">
            <AnimateIn>
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">O Que Dizem</h2>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-white/30 italic">Avaliações reais dos nossos clientes</p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <ImageModal
                src="/services/avaliacoes.webp"
                alt="Avaliações de Clientes"
                className="rounded-3xl sm:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div className="group relative w-full h-[300px] md:h-[500px] rounded-3xl sm:rounded-[40px] overflow-hidden bg-black/60 backdrop-blur-2xl border-2 border-white/10 hover:border-yellow-500/50 hover:shadow-[0_0_60px_rgba(234,179,8,0.2)] transition-all duration-700 card-3d flex items-center justify-center">
                  <Image
                    src="/services/avaliacoes.webp"
                    alt="Avaliações de Clientes"
                    fill
                    sizes="100vw"
                    className="object-contain p-4 md:p-8 group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                </div>
              </ImageModal>
              <div className="mt-6 text-center md:hidden">
                <p className="text-[10px] text-white/60 font-black uppercase tracking-widest bg-white/10 inline-block px-5 py-2 rounded-full backdrop-blur-sm border border-white/5 shadow-lg">Toque para ampliar</p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Glow Line Separator (Mantido apenas antes do footer/CTA final) */}
        <GlowLine />

        {/* CARDS DE CONTATO — Glass (Estilo LP-Base) */}
        <section className="py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              {/* Single WhatsApp Card */}
              <AnimateIn delay={0.1}>
                <WhatsAppLink
                  phone={whatsappNumber}
                  target="_blank"
                  id="cta-whatsapp-card"
                  className="card-3d card-glow-border group bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-green-500/30 p-8 rounded-[30px] flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300 pointer-events-none">
                    <MessageCircle className="w-7 h-7 text-green-400 pointer-events-none" />
                  </div>
                  <h2 className="text-2xl font-black uppercase mb-2 pointer-events-none text-white">Chamar no WhatsApp</h2>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-green-400/80 mb-6 pointer-events-none">Atendimento Hoje • Resposta em 5 min</p>
                  <span className="bg-white/5 text-[10px] font-black px-8 py-3 rounded-full uppercase tracking-widest group-hover:bg-green-500 group-hover:text-black transition-colors pointer-events-none text-white">
                    Falar com Técnico
                  </span>
                </WhatsAppLink>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* BOTÃO FLUTUANTE WHATSAPP */}
        <WhatsAppAnchor
          phone={whatsappNumber}
          target="_blank"
          rel="noopener noreferrer"
          id="cta-whatsapp-flutuante"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-[0_4px_30px_rgba(34,197,94,0.4)] hover:bg-green-400 hover:scale-110 transition-all duration-300 group"
        >
          {/* Tooltip */}
          <div className="absolute right-full mr-4 px-4 py-2 bg-zinc-900 border border-white/10 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <p className="text-sm font-bold text-white uppercase tracking-wider pointer-events-none">Fale Conosco</p>
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-zinc-900 border-t border-r border-white/10 rotate-45 pointer-events-none" />
          </div>

          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full animate-ping bg-green-500/30 pointer-events-none" />

          <MessageCircle className="w-6 h-6 text-white pointer-events-none" />
        </WhatsAppAnchor>
      </main>

      {/* FOOTER MÍNIMO */}
      <footer className="py-10 md:py-14 border-t border-white/5 text-center relative z-[2]">
        <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.5em] text-white/20">
          {brandName} • Goiânia - GO • {new Date().getFullYear()}
        </p>
        <div className="mt-5 flex items-center justify-center gap-5">
          <WhatsAppAnchor phone={whatsappNumber} target="_blank" className="w-8 h-8 rounded-full bg-white/5 hover:bg-green-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="WhatsApp">
            <MessageCircle className="w-4 h-4 text-white/30 hover:text-green-400 transition-colors duration-300" />
          </WhatsAppAnchor>
          <a href="https://instagram.com/wfixtech" target="_blank" className="w-8 h-8 rounded-full bg-white/5 hover:bg-pink-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Instagram">
            <Instagram className="w-4 h-4 text-white/30 hover:text-pink-400 transition-colors duration-300" />
          </a>
          <a href={`tel:+5562994516025`} className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Ligar">
            <Phone className="w-4 h-4 text-white/30 hover:text-primary transition-colors duration-300" />
          </a>
        </div>
        <div className="mt-4 flex items-center justify-center gap-6 text-white/20">
          <Link href="/politica-privacidade" className="text-[8px] uppercase tracking-widest hover:text-white/40 transition-colors">Privacidade</Link>
          <Link href="/termos-uso" className="text-[8px] uppercase tracking-widest hover:text-white/40 transition-colors">Termos</Link>
        </div>
        <p className="mt-4 text-[8px] text-white/10">CNPJ: 64.928.869/0001-83</p>
      </footer>
    </div>
  )
}
