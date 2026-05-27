import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'

const painPoints = [
  'Informacion dispersa entre Excel, correo y llamadas',
  'Inventario sin visibilidad en tiempo real',
  'Procesos de compra, venta y produccion desconectados',
]

const stats = [
  { value: 'Desde 2010', label: 'implementando procesos empresariales en la region' },
  { value: 'Guatemala y El Salvador', label: 'con conocimiento del mercado local' },
  { value: 'ERP a medida', label: 'completo o por modulos segun tu operacion' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_left,_rgba(249,115,22,0.14),_transparent_28%)]"
        aria-hidden="true"
      />
      <div className="hero-orb glow-pulse absolute left-[8%] top-24 -z-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />
      <div className="hero-orb hero-orb-delayed absolute right-[6%] top-40 -z-10 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-14 pb-16 md:grid-cols-[1.1fr_0.9fr] md:pb-24">
          <div className="max-w-2xl">
            <span
              className="hero-reveal inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-200"
              style={{ animationDelay: '80ms' }}
              data-aos="fade-up"
            >
              ERP para empresas que ya no pueden operar con informacion fragmentada
            </span>
            <h1 className="hero-reveal mt-6 text-5xl font-bold leading-[1.02] text-white md:text-7xl" style={{ animationDelay: '180ms' }} data-aos="fade-up" data-aos-delay="100">
              Un ERP hecho en Guatemala para la operacion real de tu empresa.
            </h1>
            <p className="hero-reveal mt-6 max-w-xl text-lg leading-8 text-slate-300 md:text-xl" style={{ animationDelay: '280ms' }} data-aos="fade-up" data-aos-delay="200">
              Nexuco centraliza inventario, produccion, ventas, facturacion, contabilidad y tableros gerenciales para que tu empresa trabaje con procesos mas claros y decisiones mejor informadas.
            </p>

            <div className="hero-reveal mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '380ms' }} data-aos="fade-up" data-aos-delay="300">
              <a
                href="#contacto"
                className="cta-link inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Solicitar diagnostico
                <span className="cta-arrow">→</span>
              </a>
              <a
                href="#modulos"
                className="cta-link inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver modulos clave
                <span className="cta-arrow">→</span>
              </a>
            </div>

            <ul className="mt-8 grid gap-3 text-sm text-slate-300" data-aos="fade-up" data-aos-delay="400">
              {painPoints.map((item, index) => (
                <li
                  key={item}
                  className="hero-reveal interactive-card flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  style={{ animationDelay: `${480 + index * 90}ms` }}
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-reveal relative" style={{ animationDelay: '240ms' }} data-aos="fade-left">
            <div className="hero-orb absolute -left-4 -top-4 -z-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden="true" />
            <div className="interactive-card rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_30px_80px_rgba(2,12,27,0.55)] backdrop-blur">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-3">
                <ModalVideo
                  thumb={VideoThumb}
                  thumbWidth={1024}
                  thumbHeight={576}
                  thumbAlt="Vista previa del producto Nexuco ERP"
                  video="/videos/video.mp4"
                  videoWidth={1920}
                  videoHeight={1080}
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {stats.map((stat, index) => (
                  <div
                    key={stat.value}
                    className="hero-reveal interactive-card rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                    style={{ animationDelay: `${520 + index * 100}ms` }}
                  >
                    <p className="text-xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
