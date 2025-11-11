import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // In a later iteration we can wire this to the backend
    await new Promise(r => setTimeout(r, 800))
    setStatus('Thank you! We will reach out shortly.')
  }

  return (
    <section id="contact" className="relative py-24 bg-[#0b0b12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Book a Consultation</h2>
            <p className="mt-3 text-white/70">Tell us a little about yourself and what you’re seeking. We’ll guide you from there.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/80">Office Hours</p>
              <p className="text-white/60 text-sm">Mon–Sat, 10:00 AM – 7:00 PM IST</p>
              <div className="mt-4 text-sm text-white/60">Email: contact@trinetraastro.com</div>
              <div className="text-sm text-white/60">Phone: +91-90000-00000</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Full Name</label>
                <input required className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" required className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/70">What do you seek guidance on?</label>
                <textarea rows={5} required className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Career, relationships, relocation, business, health, etc." />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 text-white px-4 py-3 font-medium">Submit</button>
            {status && <p className="mt-3 text-sm text-white/70">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
