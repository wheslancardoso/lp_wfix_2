"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface WhatsAppLinkProps extends Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> {
  phone: string
  children: React.ReactNode
}

export function WhatsAppLink({ phone, children, ...props }: WhatsAppLinkProps) {
  const defaultText = "Olá! Vim pelo site e gostaria de fazer um orçamento."
  const [href, setHref] = useState(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(defaultText)}`)

  useEffect(() => {
    const hours = new Date().getHours()
    let greeting = "Olá!"
    
    if (hours >= 5 && hours < 12) {
      greeting = "Bom dia!"
    } else if (hours >= 12 && hours < 18) {
      greeting = "Boa tarde!"
    } else {
      greeting = "Boa noite!"
    }

    const text = `${greeting} Vim pelo site e gostaria de fazer um orçamento.`
    setHref(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`)
  }, [phone])

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}

interface WhatsAppAnchorProps extends Omit<React.ComponentPropsWithoutRef<'a'>, 'href'> {
  phone: string
  children: React.ReactNode
}

export function WhatsAppAnchor({ phone, children, ...props }: WhatsAppAnchorProps) {
  const defaultText = "Olá! Vim pelo site e gostaria de fazer um orçamento."
  const [href, setHref] = useState(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(defaultText)}`)

  useEffect(() => {
    const hours = new Date().getHours()
    let greeting = "Olá!"
    
    if (hours >= 5 && hours < 12) {
      greeting = "Bom dia!"
    } else if (hours >= 12 && hours < 18) {
      greeting = "Boa tarde!"
    } else {
      greeting = "Boa noite!"
    }

    const text = `${greeting} Vim pelo site e gostaria de fazer um orçamento.`
    setHref(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`)
  }, [phone])

  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}
