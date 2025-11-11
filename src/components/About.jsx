export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0b0b12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">A third eye on your path</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Trinetra means the third eye — the vision that sees beyond the visible. We blend classical Vedic frameworks with intuitive clarity and modern professionalism to offer grounded, actionable guidance.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> Experienced astrologers with a holistic approach</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" /> Confidential, compassionate, and precise consultations</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400" /> Solutions rooted in time-tested remedies and Vaastu principles</li>
            </ul>
          </div>
          <div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-cyan-500/10 p-1">
              <div className="aspect-[4/3] rounded-[1.3rem] bg-gradient-to-br from-[#131322] to-[#0b0b12] flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-5xl">🔱</p>
                  <p className="mt-4 text-white/80">Sacred. Scientific. Supportive.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
