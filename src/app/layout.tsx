import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KS - Kart In Side',
  description: 'Kart In Side, Sito ufficiale del Kartodromo di Rivanzzano Terme. Consulta i nostri prezzi e prenota la tua sessione di guida, e traccia le tue statistiche',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
