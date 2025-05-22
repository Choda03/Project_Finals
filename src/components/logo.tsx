'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

export function Logo() {
  const { theme } = useTheme()
  
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative h-8 w-8">
        <Image
          src={theme === 'dark' ? '/images/logo-dark.svg' : '/images/logo-light.svg'}
          alt="Gallery Hub Logo"
          width={32}
          height={32}
          className="transition-opacity duration-300"
          priority
        />
      </div>
      <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
        Gallery Hub
      </span>
    </Link>
  )
} 