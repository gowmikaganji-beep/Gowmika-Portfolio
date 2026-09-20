import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const PROJECTS = [
  {
    id: 'portal',
    tag: 'Featured',
    title: 'Project Submission and Evaluation Portal',
    summary: 'Centralized project management and evaluation platform',
    tech: ['React', 'Node.js', 'MongoDB'],
    focus: 'Real-time collaboration',
    problem:
      'Teams and evaluators had no single system to submit, track, and review project work, leading to scattered feedback and unclear status across a project\u2019s lifecycle.',
    architecture:
      'A React frontend talks to a Node.js/Express API, backed by MongoDB for flexible project and submission schemas. Role-based access separates student, team-lead, and evaluator permissions across every route.',
    stackDetail: 'React \u00b7 JavaScript \u00b7 Node.js \u00b7 MongoDB \u00b7 REST APIs',
    optimizations:
      'Secure authentication and role-based access control were layered on top of collaboration features, with responsive interfaces and backend APIs built for real-time project updates and task tracking.',
    impact:
      'Gave teams and evaluators a shared source of truth for project status, cutting down on the back-and-forth that usually happens over email and chat.',
    github: 'https://github.com/ganjigowmika96',
    demo: null,
  },
  {
    id: 'finance-agent',
    tag: 'Featured',
    title: 'Personal-Finance-Agent',
    summary: 'AI-powered agent that analyzes finances and surfaces proactive insights',
    tech: ['Python', 'FastAPI', 'Streamlit', 'OpenAI'],
    focus: 'Modular, SOLID architecture',
    problem:
      'People\u2019s financial data is scattered across statements and accounts, and most tools only report numbers back rather than proactively surfacing what actually needs attention.',
    architecture:
      'A modular FastAPI backend exposes financial analysis services to a Streamlit frontend, with OpenAI powering the insight generation and Pydantic enforcing data validation across the pipeline.',
    stackDetail: 'Python \u00b7 FastAPI \u00b7 Streamlit \u00b7 OpenAI \u00b7 Pydantic \u00b7 CSV/Plaid',
    optimizations:
      'Built as a modular service architecture following SOLID principles, including dependency inversion and single-responsibility design, with a memory architecture wired into financial data workflows using CSV/Plaid.',
    impact:
      'Turns raw financial data into proactive, structured insights instead of static reports, on an architecture that\u2019s straightforward to extend with new data sources.',
    github: 'https://github.com/ganjigowmika96',
    demo: null,
  },
  {
    id: 'lumina',
    tag: 'Featured',
    title: 'Lumina: AI Text-to-Image Generator',
    summary: 'Full-stack platform turning natural-language prompts into images',
    tech: ['React', 'TypeScript', 'Express.js', 'PostgreSQL'],
    focus: 'Secure, scalable image pipeline',
    problem:
      'Generating AI images is easy in isolation, but most tools give users no durable place to manage, revisit, or organize what they\u2019ve created.',
    architecture:
      'A React and TypeScript frontend talks to an Express.js backend secured with Clerk Authentication, with PostgreSQL (NeonDB) storing image history, collections, favorites, and variations behind full CRUD operations.',
    stackDetail: 'OpenAI GPT-Image-1 \u00b7 React.js \u00b7 TypeScript \u00b7 Express.js \u00b7 PostgreSQL \u00b7 Clerk Authentication',
    optimizations:
      'Crafted a responsive, animation-rich UI with Tailwind CSS and Framer Motion on top of a secure, scalable backend built for image history, collections, favorites, and variations.',
    impact:
      'Gives users a persistent, organized space around AI-generated images rather than a one-off generation tool.',
    github: 'https://github.com/ganjigowmika96',
    demo: null,
  },
]

function ProjectCard({ project, onOpen, index }) {
  return (
    <motion.button
      layoutId={`card-${project.id}`}
      onClick={() => onOpen(project.id)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      data-cursor-label
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/8 bg-charcoal-800/60 p-7 text-left transition-colors hover:border-gold-500/30"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/0 blur-3xl transition-colors duration-500 group-hover:bg-emerald-500/15" />
      <div>
        <span className="inline-block rounded-full border border-gold-500/25 px-3 py-1 font-body text-[11px] uppercase tracking-wide text-gold-400">
          {project.tag}
        </span>
        <motion.h3
          layoutId={`title-${project.id}`}
          className="mt-5 font-display text-xl font-semibold leading-snug text-warmwhite"
        >
          {project.title}
        </motion.h3>
        <p className="mt-3 font-body text-sm text-warmwhite/55">{project.summary}</p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/5 px-2.5 py-1 font-body text-[11px] text-warmwhite/50"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="font-display text-xs text-emerald-400">View {'\u2192'}</span>
      </div>
    </motion.button>
  )
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-charcoal-950/85 backdrop-blur-md"
      />
      <motion.div
        layoutId={`card-${project.id}`}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="glass relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-8 sm:p-10"
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 font-display text-warmwhite/60 transition-colors hover:border-white/30 hover:text-warmwhite"
          aria-label="Close project detail"
        >
          {'\u2715'}
        </button>

        <span className="inline-block rounded-full border border-gold-500/25 px-3 py-1 font-body text-[11px] uppercase tracking-wide text-gold-400">
          {project.tag}
        </span>
        <motion.h3
          layoutId={`title-${project.id}`}
          className="mt-5 font-display text-2xl font-semibold text-warmwhite sm:text-3xl"
        >
          {project.title}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 space-y-7"
        >
          <Detail label="Problem Statement" text={project.problem} />
          <Detail label="Architecture Overview" text={project.architecture} />
          <Detail label="Tech Stack" text={project.stackDetail} />
          <Detail label="Key Optimizations" text={project.optimizations} />
          <Detail label="Impact" text={project.impact} />

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-5 py-2.5 font-display text-sm font-medium text-warmwhite transition-colors hover:border-white/35"
            >
              View on GitHub
            </a>
            <span
              className="cursor-not-allowed rounded-full bg-white/5 px-5 py-2.5 font-display text-sm font-medium text-warmwhite/35"
              title="Live demo coming soon"
            >
              Live Demo &mdash; coming soon
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

function Detail({ label, text }) {
  return (
    <div>
      <p className="font-body text-[11px] uppercase tracking-[0.2em] text-emerald-500">
        {label}
      </p>
      <p className="mt-2 font-body text-sm leading-relaxed text-warmwhite/70">{text}</p>
    </div>
  )
}

export default function Projects() {
  const [openId, setOpenId] = useState(null)
  const project = PROJECTS.find((p) => p.id === openId)

  return (
    <section id="projects" className="relative bg-charcoal-950 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-gold-500">Projects</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-medium text-warmwhite md:text-4xl">
          A few things I've built end to end
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} onOpen={setOpenId} index={i} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {project && <ProjectModal project={project} onClose={() => setOpenId(null)} />}
      </AnimatePresence>
    </section>
  )
}
