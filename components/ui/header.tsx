"use client"

import Link from 'next/link'
import Image from 'next/image'

import Logo from '@/public/images/logo.png'

const navigation = [
  { href: '#modulos', label: 'Modulos' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/65 px-4 py-3 shadow-[0_20px_50px_rgba(2,12,27,0.35)] backdrop-blur">
          <Link href="/" className="flex items-center gap-3" aria-label="Nexuco">
            <Image className="h-11 w-11 rounded-full" src={Logo} alt="Logo Nexuco" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Nexuco</p>
              <p className="text-xs text-slate-400">ERP y desarrollo empresarial</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:px-5"
          >
            Solicitar diagnostico
          </a>
        </div>
      </div>
    </header>
  )
}
