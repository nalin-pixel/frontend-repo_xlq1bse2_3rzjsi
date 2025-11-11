export default function Services() {
  const services = [
    {
      title: 'Personalized Astrology',
      desc: 'Birth chart analysis, life-path guidance, compatibility insights, muhurta, and remedies rooted in Vedic wisdom.',
      accent: 'from-fuchsia-500 to-purple-500'
    },
    {
      title: 'Vaastu Consultation',
      desc: 'Spatial diagnostics and energy balancing for homes, offices, and commercial spaces for prosperity and well-being.',
      accent: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Remedies & Rituals',
      desc: 'Gem recommendations, mantras, yantras, and personalized rituals to align planetary influences in your favor.',
      accent: 'from-violet-400 to-fuchsia-500'
    }
  ]

  return (
    <section id="services" className="relative py-24 bg-[#0b0b12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Services</h2>
          <p className="mt-3 text-white/70">Ancient wisdom delivered through a modern, minimalist experience.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-20 transition-opacity`} />
              <div className="relative">
                <h3 className="text-lg font-medium text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-fuchsia-300">
                  <span className="text-sm">Learn more</span>
                  <span className="h-1 w-1 rounded-full bg-fuchsia-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  )
}
