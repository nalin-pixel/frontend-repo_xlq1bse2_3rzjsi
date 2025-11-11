import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/80 backdrop-blur pointer-events-none">
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
              Cosmic Guidance, Tailored to You
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              Trinetra Astrology
            </h1>
            <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed">
              Personalized astrology, Vaastu consultation, and powerful remedies to harmonize your space, align your journey, and transform your life.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#services" className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-3 font-medium shadow-lg shadow-fuchsia-500/10 hover:shadow-fuchsia-500/30 transition-shadow">
                Explore Services
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 text-white px-5 py-3 font-medium">
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b12] via-transparent to-transparent" />
    </section>
  )
}
