import Link from 'next/link'
import { Instagram, MessageCircle, MapPin, Clock, ShieldCheck, Star, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimateIn } from '@/components/ui/animate-in'
import Image from 'next/image'
import { ImageModal } from '@/components/ui/image-modal'
import { FloatingOrbs, GridBackground, GlowLine, MouseGlow, ParticleField } from '@/components/ui/visual-effects'

import { getTenantData } from '@/lib/get-tenant-data'

export function generateMetadata() {
  const { brandName } = getTenantData()
  return {
    title: 'WFIX Tech | Sua Referência em Goiânia',
    description: 'Qualidade, rapidez e garantia. Estamos prontos para te ajudar em Goiânia.',
  }
}

export default function Home() {
  const { whatsappNumber, formattedPhone, brandName } = getTenantData()

  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento.`

  return (
    <div className="dark flex min-h-screen flex-col bg-black text-white noise-overlay">

      {/* === EFEITOS VISUAIS GLOBAIS === */}
      <FloatingOrbs />
      <GridBackground />
      <MouseGlow />
      <ParticleField />
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
        <section className="relative min-h-[45vh] md:min-h-[50vh] flex flex-col items-center justify-center pt-20 pb-2 md:pb-4 overflow-hidden">
          {/* Imagens de fundo alternadas (Fundo animado gerado por IA) */}
          <div className="absolute inset-0 bg-black">
            <Image
              src="/hero/hero-01.webp"
              alt="Design e inovação em ambiente tecnológico"
              fill
              quality={85}
              className="object-cover object-[center_35%] md:object-[center_40%] brightness-[0.5] contrast-[1.1] md:blur-[2px] animate-hero-bg-1 opacity-0 absolute"
              sizes="100vw"
              priority
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
              sizes="100vw"
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
              sizes="100vw"
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
                Sua Referência em Goiânia
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
                Entre em contato via WhatsApp e tire todas suas dúvidas, estamos prontos para te ajudar.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.4}>
              <Button size="lg" id="cta-whatsapp-hero" className="h-14 px-10 text-base font-black uppercase tracking-widest rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 transform hover:scale-105 animate-glow-green mb-2 md:mb-4" asChild>
                <Link href={whatsappLink} target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5 pointer-events-none" />
                  <span className="pointer-events-none">Iniciar Conversa</span>
                </Link>
              </Button>
            </AnimateIn>

          </div>
        </section>

        {/* Glow Line Separator */}
        <GlowLine />

        {/* SEÇÃO VISUAL — Infográficos de Processo e Serviços */}
        <section className="py-2 md:py-8 relative overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-2 sm:px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              
              {/* Card Como Funciona */}
              <AnimateIn delay={0.1}>
                <ImageModal 
                  src="/services/infografico-processo.webp" 
                  alt="Fluxo de trabalho e qualidade"
                  className="rounded-[30px]"
                >
                  <div className="group relative aspect-video rounded-[30px] overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-green-500/30 transition-all duration-500 card-3d flex items-center justify-center w-full">
                    <Image 
                      src="/services/infografico-processo.webp" 
                      alt="Fluxo de trabalho e qualidade" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-0 md:p-4 group-hover:scale-[1.05] transition-transform duration-700"
                    />
                    {/* Overlay sutil para manter o estilo glass */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                  </div>
                </ImageModal>
              </AnimateIn>

              {/* Card Resumo de Serviços */}
              <AnimateIn delay={0.2}>
                <ImageModal 
                  src="/services/resumo-servicos.webp" 
                  alt="Soluções corporativas e diferenciais"
                  className="rounded-[30px]"
                >
                  <div className="group relative aspect-video rounded-[30px] overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-green-500/30 transition-all duration-500 card-3d flex items-center justify-center w-full">
                    <Image 
                      src="/services/resumo-servicos.webp" 
                      alt="Soluções corporativas e diferenciais" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-0 md:p-4 group-hover:scale-[1.05] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                  </div>
                </ImageModal>
              </AnimateIn>

            </div>
          </div>
        </section>

        {/* Glow Line Separator */}
        <GlowLine />

        {/* CARDS DE CONTATO — Glass (Estilo LP-Base) */}
        <section className="py-10 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

              {/* WhatsApp Card */}
              <AnimateIn delay={0.1}>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  id="cta-whatsapp-card"
                  className="card-3d card-glow-border group bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-green-500/30 p-8 rounded-[30px] flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300 pointer-events-none">
                    <MessageCircle className="w-7 h-7 text-green-400 pointer-events-none" />
                  </div>
                  <h2 className="text-xl font-black uppercase mb-2 pointer-events-none text-white">WhatsApp</h2>
                  <p className="text-[9px] uppercase font-bold tracking-widest text-white/30 mb-6 pointer-events-none">Resposta em 5 minutos</p>
                  <span className="bg-white/5 text-[9px] font-black px-6 py-2 rounded-full uppercase tracking-widest group-hover:bg-green-500 group-hover:text-black transition-colors pointer-events-none text-white">
                    Iniciar Conversa
                  </span>
                </Link>
              </AnimateIn>

              {/* Instagram Card */}
              <AnimateIn delay={0.2}>
                <a
                  href="https://instagram.com/wfixtech"
                  target="_blank"
                  className="card-3d card-glow-border-instagram group bg-white/[0.03] backdrop-blur-xl border border-pink-500/20 hover:border-pink-500/30 p-8 rounded-[30px] flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400/20 via-pink-500/20 to-purple-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gradient-to-tr group-hover:from-yellow-400/20 group-hover:via-pink-500/20 group-hover:to-purple-600/20 group-hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] transition-all duration-500 animate-float-subtle" style={{ animationDelay: '1s' }}>
                    <Instagram className="w-7 h-7 text-pink-400 group-hover:text-pink-400 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h2 className="text-xl font-black uppercase mb-2 text-white">Instagram</h2>
                  <p className="text-[9px] uppercase font-bold tracking-widest text-white/30 mb-6">Conheça nosso trabalho</p>
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-[9px] font-black px-6 py-2 rounded-full uppercase tracking-widest group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                    Seguir Perfil
                  </span>
                </a>
              </AnimateIn>

            </div>

            {/* Info Cards Compactos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
              <AnimateIn delay={0.3}>
                <div className="group shimmer-border bg-white/[0.03] border border-white/5 hover:border-white/15 p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-white/40 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/30">Ligar Agora</p>
                    <p className="text-[10px] font-bold text-white">{formattedPhone}</p>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.4}>
                <div className="group shimmer-border bg-white/[0.03] border border-white/5 hover:border-white/15 p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-blue-500/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Clock className="w-4 h-4 text-white/40 group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/30">Horário</p>
                    <div className="text-[9px] font-bold text-white leading-tight mt-0.5">
                      <p>Seg-Sex: a partir das 17h</p>
                      <p>Sáb: 09h às 14h</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.5}>
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

        {/* Glow Line Separator */}
        <GlowLine />

        {/* GALERIA — Imagens que falam pelo trabalho */}
        <section className="py-10 md:py-20 relative">
          {/* Background glow atrás da galeria */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <AnimateIn>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">Nosso Trabalho</h2>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-white/30 italic">As imagens falam por nós</p>
              </div>
            </AnimateIn>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {[
                { src: '/hero/high-performance-hardware.webp', alt: 'Equipamento moderno e inovador' },
                { src: '/hero/precision-notebook-hardware.webp', alt: 'Hardware moderno de alta precisão' },
                { src: '/hero/gallery-03.webp', alt: 'Inovação e engenharia moderna' },
                { src: '/services/performance-workstation.webp', alt: 'Tecnologia para alta produtividade' },
                { src: '/services/technology-infrastructure.webp', alt: 'Infraestrutura de ponta e tecnologia' },
                { src: '/hero/high-performance-configuration.webp', alt: 'Configuração robusta e moderna' },
              ].map((img, i) => (
                <AnimateIn key={i} delay={0.1 * i}>
                  <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)] card-3d">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 brightness-[0.7] group-hover:brightness-100"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    {/* Gradient overlay no hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
                    {/* Glow verde sutil no canto */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Glow Line Separator */}
        <GlowLine />

        {/* DIFERENCIAIS — Cards Glass com Ícones */}
        <section className="py-16 md:py-24 relative">
          {/* Background glow */}
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <AnimateIn>
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-2 tracking-tighter">Nossos Diferenciais</h2>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] mb-12 md:mb-16 font-bold text-white/30 italic">Estrutura, qualidade e atendimento</p>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <AnimateIn delay={0.1}>
                <div className="card-3d card-glow-border group bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-8 md:p-10 rounded-3xl relative overflow-hidden">
                  <span className="absolute -top-2 -right-2 text-white/[0.03] text-7xl font-black italic">01</span>
                  <div className="animate-float-subtle">
                    <MapPin className="w-12 h-12 md:w-14 md:h-14 mb-6 text-primary mx-auto group-hover:scale-110 transition-transform duration-300 group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black mb-3 uppercase">Presença Local</h3>
                  <p className="text-sm text-white/60 leading-relaxed">Atuação em Goiânia e região, com estrutura física para facilitar o contato.</p>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <div className="card-3d card-glow-border group bg-white/[0.03] backdrop-blur-xl border border-primary/20 p-8 md:p-10 rounded-3xl relative overflow-hidden">
                  <span className="absolute -top-2 -right-2 text-white/[0.03] text-7xl font-black italic">02</span>
                  <div className="animate-float-subtle" style={{ animationDelay: '2s' }}>
                    <ShieldCheck className="w-12 h-12 md:w-14 md:h-14 mb-6 text-primary mx-auto group-hover:scale-110 transition-transform duration-300 group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black mb-3 uppercase">Garantia de 180 dias</h3>
                  <p className="text-sm text-white/60 leading-relaxed">Confiança total no que fazemos. Todos os trabalhos com garantia estendida.</p>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <div className="card-3d card-glow-border group bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-8 md:p-10 rounded-3xl relative overflow-hidden">
                  <span className="absolute -top-2 -right-2 text-white/[0.03] text-7xl font-black italic">03</span>
                  <div className="animate-float-subtle" style={{ animationDelay: '4s' }}>
                    <Star className="w-12 h-12 md:w-14 md:h-14 mb-6 text-green-500 mx-auto group-hover:scale-110 transition-transform duration-300 group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black mb-3 uppercase">Atendimento Rápido</h3>
                  <p className="text-sm text-white/60 leading-relaxed italic">Canal direto pelo WhatsApp. Resposta e orçamento sem enrolação.</p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>


        {/* BOTÃO FLUTUANTE WHATSAPP */}
        <a
          href={whatsappLink}
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
        </a>
      </main>

      {/* FOOTER MÍNIMO */}
      <footer className="py-10 md:py-14 border-t border-white/5 text-center relative z-[2]">
        <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.5em] text-white/20">
          {brandName} • Goiânia - GO • {new Date().getFullYear()}
        </p>
        <div className="mt-5 flex items-center justify-center gap-5">
          <a href={whatsappLink} target="_blank" className="w-8 h-8 rounded-full bg-white/5 hover:bg-green-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="WhatsApp">
            <MessageCircle className="w-4 h-4 text-white/30 hover:text-green-400 transition-colors duration-300" />
          </a>
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
