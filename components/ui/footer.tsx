import Link from 'next/link'
import Image from 'next/image'

import Logo from '@/public/images/logo.png'

const links = [
  { href: '#modulos', label: 'Modulos clave' },
  { href: '#contacto', label: 'Solicitar contacto' },
  { href: 'https://www.nexuco.com', label: 'Sitio corporativo' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-xl">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Nexuco">
              <Image className="h-12 w-12 rounded-full" src={Logo} alt="Logo Nexuco" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Nexuco</p>
                <p className="text-xs text-slate-400">ERP y desarrollo empresarial</p>
              </div>
            </Link>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Centralizamos procesos de negocio para que inventarios, compras, ventas, produccion y finanzas trabajen con la misma informacion.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h6 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">Navegacion</h6>
              <ul className="mt-4 space-y-3 text-sm">
                {links.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-slate-400 transition hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">Enfoque</h6>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li>Diagnostico operativo</li>
                <li>Implementacion gradual</li>
                <li>Datos confiables para decision</li>
              </ul>
            </div>
            <div>
              <h6 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">Contacto</h6>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li>
                  <a href="mailto:b.godoy@nexuco.com" className="transition hover:text-white">
                    b.godoy@nexuco.com
                  </a>
                </li>
                <li>
                  <a href="tel:+50230463107" className="transition hover:text-white">
                    +502 3046 3107
                  </a>
                </li>
                <li>Respuesta en 24 horas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© Nexuco. ERP para empresas que necesitan ordenar su operacion.</p>
          <p>Hecho para priorizar claridad, procesos y conversion.</p>
        </div>
      </div>
    </footer>
  )
}
