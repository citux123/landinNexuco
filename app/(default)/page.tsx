import type { Metadata } from 'next'

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import ContactForm from '@/components/contacto'

const sectors = [
  'Distribuidoras de varios productos',
  'Retail y puntos de venta',
  'Librerias y depositos',
  'Fabricas de calzado',
  'Manufactura de plasticos',
  'Panaderias y operaciones con inventario',
]

const strengths = [
  {
    title: 'Conocimiento del mercado local',
    copy: 'El ERP esta pensado para la legislacion, la operacion y las formas de trabajo de Guatemala, con experiencia tambien en El Salvador.',
  },
  {
    title: 'Implementacion mas aterrizada',
    copy: 'Muchos clientes llegan despues de probar herramientas que nunca terminaron de adaptarse o de implementaciones demasiado largas.',
  },
  {
    title: 'Cobertura completa o por modulos',
    copy: 'Puedes implementar un ERP completo o arrancar por contabilidad, facturacion, ventas o dashboards gerenciales.',
  },
]

const useCases = [
  {
    title: 'Distribucion y bodegas',
    pain: 'Cuando compras, inventario, rutas, ventas y cobros no comparten la misma informacion, la operacion pierde control muy rapido.',
    outcome: 'Nexuco ayuda a ordenar existencias, facturacion, movimientos de bodega y seguimiento comercial desde una misma base.',
  },
  {
    title: 'Manufactura',
    pain: 'En fabricas de calzado, plasticos o produccion por etapas, suele haber retrasos por falta de visibilidad entre materiales, ordenes y producto terminado.',
    outcome: 'El ERP permite conectar inventario, produccion, costos y ventas para que el equipo opere con mayor coordinacion.',
  },
  {
    title: 'Retail y puntos de venta',
    pain: 'Muchos negocios venden bien, pero no tienen claro que rota, que se estanca, que margen deja cada linea o donde se fugan los datos.',
    outcome: 'Con facturacion, ventas e indicadores en un solo flujo, direccion gana claridad para decidir mas rapido.',
  },
]

export const metadata: Metadata = {
  title: 'ERP para operaciones en crecimiento',
  description: 'Nexuco ayuda a centralizar ventas, inventarios, compras, produccion y finanzas con un ERP alineado a tus procesos.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />

      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="border-t border-white/10 py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
              <div className="max-w-xl">
                <span className="inline-flex rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-sm font-semibold text-violet-200">
                  Experiencia real en distintos giros
                </span>
                <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                  No vendemos un sistema aislado. Nos metemos a entender la operacion.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Nexuco opera desde 2010 y ha trabajado con empresas grandes y pequeñas en Guatemala y El Salvador. Esa experiencia permite adaptar el ERP a procesos reales, no al reves.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {strengths.map((item) => (
                  <article key={item.title} className="interactive-card rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">{item.copy}</p>
                  </article>
                ))}
                <article className="interactive-card rounded-[1.75rem] border border-cyan-400/20 bg-cyan-400/10 p-6 md:col-span-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Servicios principales</p>
                  <p className="mt-3 text-2xl font-semibold text-white">Contabilidad, facturacion, ventas y dashboards gerenciales.</p>
                  <p className="mt-3 text-base leading-7 text-slate-200">
                    Tambien desarrollamos procesos a medida para empresas que necesitan algo mas cercano a su forma de operar.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="border-t border-white/10 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-sm font-semibold text-amber-200">
                Sectores atendidos
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Empresas con operaciones distintas, pero con el mismo problema: procesos que no se terminan de acomodar.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Hemos trabajado con empresas que necesitan controlar inventarios, ventas, produccion, bodegas y seguimiento financiero sin depender de herramientas que se quedan a medias.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {sectors.map((sector) => (
                <div key={sector} className="interactive-card rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-base font-medium text-slate-200">
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="border-t border-white/10 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-200">
                Casos de uso
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                El mensaje cambia segun el giro, pero el objetivo es el mismo: una operacion mas ordenada.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Estas son algunas de las situaciones donde un ERP bien adaptado deja de ser un gasto tecnico y se vuelve una herramienta real para operar mejor.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {useCases.map((item) => (
                <article key={item.title} className="interactive-card rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">{item.title}</p>
                  <p className="mt-4 text-base leading-7 text-slate-300">{item.pain}</p>
                  <div className="mt-5 h-px w-full bg-gradient-to-r from-cyan-300/40 via-white/20 to-transparent" />
                  <p className="mt-5 text-base leading-7 text-white">{item.outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 border-t border-white/10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
            <div className="max-w-xl">
              <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-200">
                Solicita una conversacion de diagnostico
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Conversemos sobre tu operacion actual y lo que te esta frenando.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Cuanto mas claro tengas el estado de tus procesos, mas facil es decidir si necesitas un ERP completo, una implementacion por fases o un desarrollo mas puntual.
              </p>
              <div className="mt-8 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">Enfoque consultivo</p>
                  <p className="mt-1 text-slate-400">Partimos de procesos, no de modulos aislados.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">Implementacion gradual</p>
                  <p className="mt-1 text-slate-400">Priorizamos los cuellos de botella con mayor impacto.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">Datos centralizados</p>
                  <p className="mt-1 text-slate-400">Mismas cifras para ventas, finanzas y operaciones.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">Escalable</p>
                  <p className="mt-1 text-slate-400">Crece junto con tus procesos y equipo.</p>
                </div>
              </div>
              <div className="interactive-card mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 text-sm text-slate-300">
                <p className="font-semibold text-white">Despues del primer contacto</p>
                <p className="mt-2 leading-7">
                  Hacemos un acercamiento para diagnostico y demostracion, definimos el alcance y luego acompañamos implementacion, capacitacion y soporte de los modulos contratados.
                </p>
                <div className="mt-4 flex flex-col gap-2 text-slate-200">
                  <a href="mailto:b.godoy@nexuco.com" className="transition hover:text-cyan-200">
                    b.godoy@nexuco.com
                  </a>
                  <a href="tel:+50230463107" className="transition hover:text-cyan-200">
                    +502 3046 3107
                  </a>
                  <p className="text-slate-400">Respuesta estimada: dentro de 24 horas.</p>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
