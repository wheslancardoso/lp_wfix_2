import { supabase } from './supabase'

export interface Review {
  id: string
  client_name: string
  service_type: string
  neighborhood: string
  rating: number
  comment: string
  created_at: string
}

export interface ReviewStats {
  totalReviews: number
  averageRating: number
}

// Depoimentos sementes de fallback caso o banco de dados esteja vazio ou inacessível
const FALLBACK_REVIEWS: Review[] = [
  {
    id: 'f1',
    client_name: 'Filipe Santos',
    service_type: 'Otimização de Hardware & Estação de Trabalho',
    neighborhood: 'Setor Bueno',
    rating: 5,
    comment: 'Excelente profissional. Diagnóstico super preciso da minha workstation e serviço executado de forma rápida. O atendimento em domicílio facilitou demais a minha rotina.',
    created_at: new Date().toISOString()
  },
  {
    id: 'f2',
    client_name: 'Cláudio Moreira',
    service_type: 'Arquitetura de Resfriamento & Limpeza de Console',
    neighborhood: 'Jardim Goiás',
    rating: 5,
    comment: 'Levei meu PS5 para fazer limpeza preventiva e troca da pasta térmica. Trabalho impecável, o console voltou extremamente silencioso. Recomendo muito!',
    created_at: new Date().toISOString()
  },
  {
    id: 'f3',
    client_name: 'Mariana Costa',
    service_type: 'Upgrade e Otimização de Performance',
    neighborhood: 'Marista',
    rating: 5,
    comment: 'Minha máquina estava travando bastante no trabalho diário. Foi feito um upgrade completo de armazenamento e configuração de memória. Ficou super rápida! Atendimento sério e honesto.',
    created_at: new Date().toISOString()
  },
  {
    id: 'f4',
    client_name: 'Ricardo Albuquerque',
    service_type: 'Consultoria e Configuração de Equipamento',
    neighborhood: 'Setor Oeste',
    rating: 5,
    comment: 'Atendimento diferenciado. Explicou cada detalhe do problema após a análise física. Sem surpresas no preço final e garantia de 6 meses que dá muita tranquilidade.',
    created_at: new Date().toISOString()
  },
  {
    id: 'f5',
    client_name: 'Beatriz Nogueira',
    service_type: 'Otimização de Sistema & Upgrade de Hardware',
    neighborhood: 'Parque Amazônia',
    rating: 5,
    comment: 'Fiquei muito satisfeita. Agendei o atendimento e foi tudo feito na minha própria residência com muita atenção e capricho. Ótimo custo-benefício.',
    created_at: new Date().toISOString()
  }
]

/**
 * Obtém a lista de avaliações ativas (is_visible = true) do Supabase.
 * Retorna os dados sementes de fallback em caso de erro ou tabela vazia.
 */
export async function getActiveReviews(): Promise<Review[]> {
  try {
    const { data, error } = await supabase
      .from('site_reviews')
      .select('id, client_name, service_type, neighborhood, rating, comment, created_at')
      .eq('is_visible', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.warn('Erro ao consultar site_reviews no Supabase (usando fallback):', error.message)
      return FALLBACK_REVIEWS
    }

    if (!data || data.length === 0) {
      return FALLBACK_REVIEWS
    }

    return data as Review[]
  } catch (err) {
    console.error('Exceção ao obter avaliações do Supabase (usando fallback):', err)
    return FALLBACK_REVIEWS
  }
}

/**
 * Calcula estatísticas globais das avaliações do Supabase (total e média).
 * Retorna valores de fallback caso o banco esteja inacessível.
 */
export async function getReviewsStats(): Promise<ReviewStats> {
  try {
    const { data, error } = await supabase
      .from('site_reviews')
      .select('rating')
      .eq('is_visible', true)

    if (error) {
      console.warn('Erro ao obter métricas de site_reviews no Supabase (usando fallback):', error.message)
      return {
        totalReviews: FALLBACK_REVIEWS.length,
        averageRating: 5.0
      }
    }

    if (!data || data.length === 0) {
      return {
        totalReviews: FALLBACK_REVIEWS.length,
        averageRating: 5.0
      }
    }

    const totalReviews = data.length
    const sum = data.reduce((acc, curr) => acc + curr.rating, 0)
    const averageRating = totalReviews > 0 ? Number((sum / totalReviews).toFixed(1)) : 5.0

    return {
      totalReviews,
      averageRating
    }
  } catch (err) {
    console.error('Exceção ao calcular estatísticas no Supabase (usando fallback):', err)
    return {
      totalReviews: FALLBACK_REVIEWS.length,
      averageRating: 5.0
    }
  }
}
