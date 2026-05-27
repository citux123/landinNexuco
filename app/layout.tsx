import './css/style.css'

import type { Metadata } from 'next'
import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architectsDaughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nexuco.com'),
  title: {
    default: 'Nexuco ERP',
    template: '%s | Nexuco ERP',
  },
  description: 'Software ERP para centralizar operaciones, finanzas, ventas e inventario con procesos adaptados a tu empresa.',
  applicationName: 'Nexuco ERP',
  keywords: [
    'ERP',
    'software empresarial',
    'inventarios',
    'ventas',
    'finanzas',
    'produccion',
    'Nexuco',
  ],
  openGraph: {
    title: 'Nexuco ERP',
    description: 'Centraliza tu operacion con un ERP diseñado para procesos reales.',
    url: 'https://www.nexuco.com',
    siteName: 'Nexuco ERP',
    locale: 'es_GT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexuco ERP',
    description: 'Software ERP para ordenar procesos, equipos y datos en una sola plataforma.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${architectsDaughter.variable} font-inter antialiased bg-gray-950 text-gray-100 tracking-tight`}>
        <div className="flex min-h-screen flex-col overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.16),_transparent_32%),linear-gradient(180deg,_#08111f_0%,_#0b1320_45%,_#050816_100%)]">
          <Header />
          {children}
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  )
}
