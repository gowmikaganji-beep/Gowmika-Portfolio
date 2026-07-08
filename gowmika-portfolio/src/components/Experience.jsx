import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const JOBS = [
  {
    company: 'CCC Digital Private Limited',
    role: 'Product Engineering with AI Intern',
    period: 'May 2026 \u2014 Present',
    location: 'Remote',
    current: true,
    points: [
      'Building an AI-powered question bank generator with React, Node.js, Express.js, PostgreSQL, and Prisma.',
      'Implementing authentication, role-based access control, and REST APIs for a personalized learning platform.',
      'Shipping AI-powered recommendations for learning paths and career roadmaps.',
      'Integrating LeetCode, CodeChef, Codeforces, and HackerRank into a centralized, searchable question repository.',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma'],
  },
  {
    company: 'InAmigos',
    role: 'Web Developer Intern',
    period: 'July 2026',
    location: 'Remote',
    current: false,
    points: [
      'Built responsive React applications end to end.',
      'Integrated frontend interfaces with backend APIs for dynamic, data-driven features.',
      'Collaborated with the team using a Git/GitHub-based development workflow.',
    ],
    stack: ['React', 'JavaScript', 'Node.js', 'Git'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'end 0.4'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" ref={ref} className="relative bg-charcoal-900 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.25em] text-gold-500">
              Experience
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium text-warmwhite md:text-4xl">
              Where I've been building
            </h2>
          </div>
        </div>

        <div className="relative pl-10 md:pl-14">
          {/* track */}
          <div className="absolute left-2 top-2 bottom-2 w-px bg-white/10 md:left-4" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-2 top-2 w-px bg-gradient-to-b from-emerald-500 to-gold-500 md:left-4"
          />

          <div className="flex flex-col gap-16">
            {JOBS.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="relative"
              >
                <span
                  className={`absolute -left-[2.55rem] top-1.5 h-4 w-4 rounded-full border-2 md:-left-[3.55rem] ${
                    job.current
                      ? 'border-gold-500 bg-emerald-500 shadow-[0_0_0_5px_rgba(27,138,90,0.15)]'
                      : 'border-white/30 bg-charcoal-900'
                  }`}
                />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-semibold text-warmwhite">
                    {job.role}
                  </h3>
                  {job.current && (
                    <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 font-body text-[11px] font-medium text-emerald-400">
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-1 font-body text-sm text-gold-400">{job.company}</p>
                <p className="mt-0.5 font-body text-xs text-warmwhite/40">
                  {job.period} &middot; {job.location}
                </p>

                <ul className="mt-4 max-w-2xl space-y-2.5">
                  {job.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-3 font-body text-sm leading-relaxed text-warmwhite/60"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-warmwhite/30" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 px-3 py-1 font-body text-xs text-warmwhite/50"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
