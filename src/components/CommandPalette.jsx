import { useEffect, useState, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const SECTIONS = [
  { id: 'hero', label: 'Home', hint: 'Start' },
  { id: 'about', label: 'About', hint: 'Who I am' },
  { id: 'experience', label: 'Experience', hint: 'Where I\u2019ve worked' },
  { id: 'projects', label: 'Projects', hint: 'What I\u2019ve built' },
  { id: 'skills', label: 'Skills', hint: 'What I work with' },
  { id: 'learning', label: 'Currently Learning', hint: 'In progress' },
  { id: 'achievements', label: 'Achievements', hint: 'Recognitions' },
  { id: 'contact', label: 'Contact', hint: 'Get in touch' },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const results = useMemo(
    () =>
      SECTIONS.filter((s) =>
        (s.label + s.hint).toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  )

  const go = (id) => {
    setOpen(false)
    setQuery('')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[14vh] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass relative w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Navigate site"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <span className="text-gold-400 font-display text-sm">/</span>
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section..."
                className="w-full bg-transparent font-body text-sm text-warmwhite placeholder:text-warmwhite/40 outline-none"
              />
              <kbd className="rounded border border-white/15 px-1.5 py-0.5 text-[10px] text-warmwhite/50">esc</kbd>
            </div>
            <ul className="max-h-72 overflow-y-auto py-2">
              {results.length === 0 && (
                <li className="px-5 py-3 text-sm text-warmwhite/40">No matches</li>
              )}
              {results.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => go(s.id)}
                    className="flex w-full items-center justify-between px-5 py-3 text-left text-sm text-warmwhite/90 transition-colors hover:bg-gold-500/10"
                  >
                    <span className="font-display">{s.label}</span>
                    <span className="text-xs text-warmwhite/40">{s.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
