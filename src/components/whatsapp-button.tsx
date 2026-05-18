'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
    phone: string
    message?: string
    className?: string
    label?: string
}

export default function WhatsAppButton({
    phone,
    message = "Olá! Gostaria de falar com um especialista.",
    className = "",
    label = "Falar no WhatsApp"
}: WhatsAppButtonProps) {
    function handleClick() {
        // Limpa o número de telefone de formatações
        const cleaned = phone.replace(/\D/g, '')
        const formattedPhone = cleaned.startsWith('55') ? cleaned : `55${cleaned}`

        const encodedMessage = encodeURIComponent(message)
        const url = `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodedMessage}`

        window.open(url, '_blank')
    }

    return (
        <Button
            onClick={handleClick}
            className={`bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center shadow-lg transition-all duration-300 hover:scale-105 ${className}`}
        >
            <MessageCircle className="mr-2 h-5 w-5" />
            {label}
        </Button>
    )
}
