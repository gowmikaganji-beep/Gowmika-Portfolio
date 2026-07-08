import { motion } from 'framer-motion'

const ACHIEVEMENTS = [
  {
    title: 'Finalist \u2014 Code4Her Hackathon',
    org: 'Organized by GDG SRM AP',
    detail: 'Advanced to the final round among multiple competing teams.',
  },
  {
    title: 'Participant \u2014 Amaravati Quantum Valley Internal Hackathon 2025',
    org: 'SRM University AP, Amaravati',
    detail: 'Collaborated on real-world problem statements in a competitive setting.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative bg-charcoal-900 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-gold-500">
          Achievements
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-medium text-warmwhite md:text-4xl">
          Recognitions along the way
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-white/8 bg-charcoal-800/50 p-8"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 15.9 6.4 19.1l1.4-6.3L3 8.5l6.4-.6L12 2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug text-warmwhite">
                {a.title}
              </h3>
              <p className="mt-2 font-body text-sm text-emerald-500">{a.org}</p>
              <p className="mt-3 font-body text-sm leading-relaxed text-warmwhite/55">
                {a.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
