import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-charcoal-950 pt-28 pb-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-800/20 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-gold-500">
            Get in touch
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-medium leading-tight text-warmwhite sm:text-4xl">
            Building something worth showing recruiters?
            <br />
            Let's talk.
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              as="a"
              href="mailto:ganjigowmika@gmail.com"
              data-cursor-label
              className="rounded-full bg-gold-500 px-7 py-3.5 font-display text-sm font-semibold text-charcoal-950 shadow-[0_10px_40px_-8px_rgba(198,161,92,0.5)]"
            >
              ganjigowmika@gmail.com
            </MagneticButton>
            <MagneticButton
              as="a"
              href="tel:+919014995108"
              data-cursor-label
              className="rounded-full border border-white/15 px-7 py-3.5 font-display text-sm font-semibold text-warmwhite transition-colors hover:border-white/35"
            >
              +91 90149 95108
            </MagneticButton>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/gowmikaganji"
              target="_blank"
              rel="noreferrer"
              className="underline-grow font-body text-sm text-warmwhite/55 hover:text-warmwhite"
            >
              LinkedIn
            </a>
            <span className="h-1 w-1 rounded-full bg-warmwhite/20" />
            <a
              href="https://github.com/ganjigowmika96"
              target="_blank"
              rel="noreferrer"
              className="underline-grow font-body text-sm text-warmwhite/55 hover:text-warmwhite"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center gap-6 border-t border-white/8 pt-10 sm:flex-row sm:justify-between">
          <p className="font-body text-xs text-warmwhite/35">
            &copy; {new Date().getFullYear()} Gowmika Ganji. Mangalagiri, Andhra Pradesh.
          </p>

          <motion.svg
            viewBox="0 0 220 60"
            width="150"
            height="42"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.path
              d="M10 40 C 25 10, 35 50, 50 25 C 60 10, 65 45, 78 30 C 90 18, 95 42, 110 28 C 122 18, 128 40, 142 26 C 155 14, 165 38, 180 24 C 190 16, 198 32, 210 22"
              fill="none"
              stroke="#C6A15C"
              strokeWidth="2.2"
              strokeLinecap="round"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            />
          </motion.svg>
        </div>
      </div>
    </footer>
  )
}
