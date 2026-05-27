const modules = [
  {
    title: 'Inventarios',
    copy: 'Controla entradas, salidas, existencias, costos y trazabilidad sin depender de hojas sueltas.',
    accent: 'bg-cyan-400/15 text-cyan-200',
  },
  {
    title: 'Ventas y CRM',
    copy: 'Da seguimiento a clientes, oportunidades, cotizaciones, pedidos y facturacion desde un mismo flujo.',
    accent: 'bg-emerald-400/15 text-emerald-200',
  },
  {
    title: 'Finanzas',
    copy: 'Concilia operaciones con cuentas por cobrar, pagar, presupuestos y reportes financieros.',
    accent: 'bg-amber-400/15 text-amber-200',
  },
  {
    title: 'Produccion',
    copy: 'Planea materiales, ordenes, tiempos y capacidad para reducir retrabajos y cuellos de botella.',
    accent: 'bg-fuchsia-400/15 text-fuchsia-200',
  },
  {
    title: 'Compras',
    copy: 'Ordena requisiciones, cotizaciones, proveedores y ordenes para evitar compras reactivas.',
    accent: 'bg-sky-400/15 text-sky-200',
  },
  {
    title: 'Reporteria',
    copy: 'Convierte datos operativos en indicadores utiles para decisiones de direccion y seguimiento.',
    accent: 'bg-orange-400/15 text-orange-200',
  },
]

export default function Features() {
  return (
    <section id="modulos" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-white/10 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-slate-200">
              Modulos que responden a la operacion completa
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Deja de apagar incendios con sistemas separados.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Un ERP no deberia ser una coleccion de pantallas. Debe conectar datos, responsables y decisiones entre areas que hoy probablemente trabajan aisladas.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3" data-aos-id-blocks>
            {modules.map((module, index) => (
              <article
                key={module.title}
                className="interactive-card group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
                data-aos="fade-up"
                data-aos-delay={index * 80}
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${module.accent}`}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">{module.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{module.copy}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-cyan-300/40 via-white/20 to-transparent" />
                <p className="mt-4 text-sm font-medium text-slate-200">
                  Procesos conectados, menos captura manual y mejor visibilidad para el equipo.
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
