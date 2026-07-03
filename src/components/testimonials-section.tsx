import { Star, Quote } from 'lucide-react'
import { AnimateIn } from '@/components/ui/animate-in'
import type { Review } from '@/lib/reviews'

interface TestimonialsSectionProps {
  reviews: Review[]
}

export function TestimonialsSection({ reviews }: TestimonialsSectionProps) {
  // Mostra no máximo 3 depoimentos na LP
  const displayReviews = reviews.slice(0, 3)

  if (displayReviews.length === 0) return null

  return (
    <section className="py-16 md:py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <AnimateIn>
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">O Que Dizem</h2>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-white/30 italic">Avaliações reais dos nossos clientes</p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayReviews.map((review, index) => (
            <AnimateIn key={review.id} delay={0.1 * (index + 1)}>
              <div className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-yellow-500/20 p-6 md:p-8 rounded-3xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                {/* Ícone de aspas decorativo */}
                <Quote className="w-8 h-8 text-white/[0.06] absolute top-4 right-4 rotate-180" />

                {/* Estrelas */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="w-3.5 h-3.5 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Depoimento */}
                <p className="text-sm text-white/60 leading-relaxed flex-1 mb-5 italic">
                  &ldquo;{review.comment}&rdquo;
                </p>

                {/* Autor */}
                <div className="border-t border-white/[0.06] pt-4 mt-auto">
                  <p className="text-sm font-bold text-white">{review.client_name}</p>
                  <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold mt-0.5">{review.neighborhood}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
