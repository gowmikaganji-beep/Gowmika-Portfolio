import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CLUSTERS = [
  {
    id: 'core',
    label: 'Core',
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'C++', 'SQL'],
    note: 'The foundation everything else is written on top of.',
  },
  {
    id: 'dev',
    label: 'Software Development',
    title: 'Full-Stack',
    items: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'TypeScript'],
    note: 'Turning requirements into scalable, production-shaped applications.',
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    title: 'Infrastructure',
    items: ['Azure', 'AWS', 'Docker', 'GitHub Actions', 'CI/CD'],
    note: 'Getting code from a laptop to somewhere reliable, repeatably.',
  },
  {
    id: 'data',
    label: 'Databases',
    title: 'Data Layer',
    items: ['PostgreSQL', 'MongoDB', 'Prisma ORM'],
    note: 'Schemas and data access patterns underneath every product.',
  },
  {
    id: 'cs',
    label: 'Core CS',
    title: 'Fundamentals',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'System Design',
    ],
    note: 'The theory that keeps the practical work from being guesswork.',
  },
  {
    id: 'tools',
    label: 'Tools',
    title: 'Workflow',
    items: ['Git', 'GitHub', 'Postman', 'VS Code'],
    note: 'The everyday tools behind version control, testing, and shipping.',
  },
]

export default function Skills() {
  const [active, setActive] = useState('core')
  const cluster = CLUSTERS.find((c) => c.id === active)

  return (
    <section id="skills" className="relative bg-charcoal-900 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-gold-500">Skills</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-medium text-warmwhite md:text-4xl">
          What I reach for, and why
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Cluster selector */}
          <div className="flex flex-row gap-3 overflow-x-auto no-scrollbar md:col-span-4 md:flex-col md:overflow-visible">
            {CLUSTERS.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`shrink-0 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                  active === c.id
                    ? 'border-gold-500/40 bg-gold-500/5'
                    : 'border-white/8 bg-transparent hover:border-white/20'
                }`}
              >
                <p className="font-body text-[11px] uppercase tracking-widest text-emerald-500">
                  {c.label}
                </p>
                <p className="mt-1 font-display text-base font-medium text-warmwhite">
                  {c.title}
                </p>
              </button>
            ))}
          </div>

          {/* Active cluster detail */}
          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={cluster.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl border border-white/8 bg-charcoal-800/50 p-8"
              >
                <p className="max-w-md font-body text-sm text-warmwhite/55">{cluster.note}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {cluster.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.35 }}
                      className="rounded-full border border-gold-500/20 bg-charcoal-950/60 px-4 py-2 font-display text-sm text-warmwhite/85 transition-colors hover:border-gold-500/50 hover:text-warmwhite"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
