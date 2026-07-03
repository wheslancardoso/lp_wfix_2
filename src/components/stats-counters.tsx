'use client'

import { AnimatedCounter, getYearsOfExperience } from '@/components/ui/animated-counter'
import { Star, Clock, Award, Users } from 'lucide-react'
import { AnimateIn } from '@/components/ui/animate-in'

interface StatsCountersProps {
  averageRating: number
  totalReviews: number
}

export function StatsCounters({ averageRating, totalReviews }: StatsCountersProps) {
  const yearsOfExperience = getYearsOfExperience()

  return (
    <section className="relative py-12 md:py-16 -mt-6 md:-mt-12 z-20">
      {/* Glow sutil de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

          {/* Anos de experiência */}
          <AnimateIn delay={0.1}>
            <div className="group text-center p-5 md:p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:border-green-500/20 transition-all duration-500 hover:-translate-y-1">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300">
                <Award className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">
                <AnimatedCounter end={yearsOfExperience} prefix="+" suffix="" />
              </p>
              <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                Anos de Experiência
              </p>
            </div>
          </AnimateIn>

          {/* Nota Google */}
          <AnimateIn delay={0.2}>
            <div className="group text-center p-5 md:p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:border-yellow-500/20 transition-all duration-500 hover:-translate-y-1">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors duration-300">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
              </div>
              <p className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">
                <AnimatedCounter end={averageRating} decimals={1} suffix="/5" />
              </p>
              <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                Nota no Google
              </p>
            </div>
          </AnimateIn>

          {/* Total de avaliações */}
          <AnimateIn delay={0.3}>
            <div className="group text-center p-5 md:p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:border-blue-500/20 transition-all duration-500 hover:-translate-y-1">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">
                <AnimatedCounter end={totalReviews} prefix="+" />
              </p>
              <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                Avaliações
              </p>
            </div>
          </AnimateIn>

          {/* Tempo de resposta */}
          <AnimateIn delay={0.4}>
            <div className="group text-center p-5 md:p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:border-emerald-500/20 transition-all duration-500 hover:-translate-y-1">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                <Clock className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">
                <AnimatedCounter end={24} suffix="h" />
              </p>
              <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                Resolução Média
              </p>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}
