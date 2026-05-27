import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'

const journey = [
  {
    eyebrow: 'Paso 1',
    title: 'Mapeamos la operacion antes de hablar de pantallas.',
    copy: 'Identificamos donde se rompe el flujo entre compras, inventario, ventas, produccion o finanzas para priorizar el alcance correcto.',
    bullets: ['Procesos criticos primero', 'Responsables claros por etapa', 'Objetivos medibles desde el arranque'],
    image: FeatImage01,
    alt: 'Mapeo de procesos operativos',
  },
  {
    eyebrow: 'Paso 2',
    title: 'Configuramos el sistema alrededor de tus reglas de negocio.',
    copy: 'La implementacion gana valor cuando el sistema refleja tu forma de operar y no obliga a trabajar con atajos o dobles registros.',
    bullets: ['Catalogos y flujos alineados', 'Integracion entre areas', 'Menos friccion en la captura diaria'],
    image: FeatImage02,
    alt: 'Configuracion de ERP',
  },
  {
    eyebrow: 'Paso 3',
    title: 'Convertimos datos operativos en seguimiento ejecutivo.',
    copy: 'Reportes y tableros dejan de ser un cierre tardio y se vuelven una herramienta diaria para reaccionar a tiempo.',
    bullets: ['KPIs utiles para direccion', 'Visibilidad sobre cuellos de botella', 'Decisiones con informacion consistente'],
    image: FeatImage03,
    alt: 'Analitica y seguimiento de indicadores',
  },
]

export default function Zigzag() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-white/10 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-200">
              Implementacion enfocada en resultados
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Un ERP bien implementado cambia la forma en que opera toda la empresa.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              El valor no esta en tener mas modulos, sino en reducir la friccion entre equipos y volver confiable la informacion que usa direccion para decidir.
            </p>
          </div>

          <div className="mt-16 grid gap-16">
            {journey.map((item, index) => (
              <div key={item.title} className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
                <div
                  className={`max-w-xl md:col-span-5 lg:col-span-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}
                  data-aos="fade-up"
                >
                  <div className="interactive-card rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_25px_60px_rgba(2,12,27,0.35)]">
                    <Image
                      className="h-auto w-full rounded-[1.4rem]"
                      src={item.image}
                      width={540}
                      height={405}
                      alt={item.alt}
                    />
                  </div>
                </div>

                <div
                  className={`max-w-xl md:col-span-7 lg:col-span-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}
                  data-aos={index % 2 === 1 ? 'fade-right' : 'fade-left'}
                >
                  <div className={index % 2 === 1 ? 'md:pr-8' : 'md:pl-8'}>
                    <p className="font-architects-daughter text-2xl text-cyan-300">{item.eyebrow}</p>
                    <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{item.title}</h3>
                    <p className="mt-4 text-lg leading-8 text-slate-300">{item.copy}</p>
                    <ul className="mt-6 space-y-3 text-base text-slate-200">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <svg className="mt-1 h-5 w-5 shrink-0 fill-current text-emerald-300" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
