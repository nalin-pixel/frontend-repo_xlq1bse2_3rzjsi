import { Menu, Phone, Star } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItem = (href, label) => (
    <a
      href={href}
      className="text-sm md:text-base text-white/80 hover:text-white transition-colors"
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-400 via-purple-400 to-cyan-400" />
              <div className="leading-tight">
                <p className="text-white font-semibold text-lg">Trinetra Astrology</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Ancient wisdom. Modern clarity.</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItem("#services", "Services")}
              {navItem("#about", "About")}
              {navItem("#testimonials", "Testimonials")}
              {navItem("#contact", "Contact")}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow"
              >
                <Phone size={16} /> Book Consultation
              </a>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 text-white"
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>

          {open && (
            <div className="px-4 pb-4 md:hidden">
              <div className="flex flex-col gap-3 bg-white/5 rounded-xl p-4">
                {navItem("#services", "Services")}
                {navItem("#about", "About")}
                {navItem("#testimonials", "Testimonials")}
                {navItem("#contact", "Contact")}
                <a
                  href="#contact"
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 text-white px-4 py-2 rounded-xl text-sm font-medium"
                >
                  <Star size={16} /> Book Consultation
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
