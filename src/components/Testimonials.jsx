export default function Testimonials() {
  const items = [
    {
      quote:
        "I found clarity in a career decision I’d been struggling with for years. The remedies were simple yet powerful.",
      name: "Ananya",
    },
    {
      quote:
        "Our home feels lighter and more abundant after the Vaastu corrections. Deeply grateful.",
      name: "Rohit",
    },
    {
      quote:
        "Felt seen, guided, and empowered. The session was a turning point.",
      name: "Meera",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-[#0b0b12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Client Stories</h2>
          <p className="mt-3 text-white/70">Real experiences of alignment and transformation.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <blockquote className="text-white/90">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-white/60">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
