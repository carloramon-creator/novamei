
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NovaMei - Contabilidade Simplificada para MEI',
  description: 'Contabilidade especializada para MEI. Abertura, DAS mensal, declaração anual e regularização. Atendimento rápido pelo WhatsApp.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={cn(inter.className, "bg-slate-50 text-slate-900 antialiased")}>
        {children}
      </body>
    </html>
  )
}
