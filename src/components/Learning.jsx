import { motion } from 'framer-motion'

const LEARNING = [
  { label: 'Retrieval-Augmented Generation for learning tools', progress: 70 },
  { label: 'System design for high-traffic APIs', progress: 55 },
  { label: 'Advanced PostgreSQL performance tuning', progress: 40 },
]

export default function Learning() {
  return (
    <section id="learning" className="relative bg-charcoal-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-gold-500">
              Currently
            </p>
            <h2 className="mt-4 font-display text-2xl font-medium text-warmwhite md:text-3xl">
              What I'm learning now
            </h2>
            <p className="mt-4 max-w-xs font-body text-sm text-warmwhite/50">
              A running log of what's actively in progress, not a finished skill list.
            </p>
          </div>

          <div className="space-y-8 md:col-span-7 md:col-start-6">
            {LEARNING.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <p className="font-body text-sm text-warmwhite/80">{item.label}</p>
                  <p className="font-display text-xs text-gold-400">{item.progress}%</p>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 1.1, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-gold-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
