export interface ServiceCatalogItem {
    id: string
    tenant_id: string
    name: string
    description: string
    preco_base: number
    aplica_multiplicador: boolean
    category: string
    active: boolean
    created_at: string
}

export type NewServiceCatalogItem = Omit<ServiceCatalogItem, 'id' | 'created_at' | 'tenant_id'>

export interface ServiceCatalogState {
    errors?: {
        name?: string[]
        description?: string[]
        preco_base?: string[]
        category?: string[]
        _form?: string[]
    }
    message?: string
}
