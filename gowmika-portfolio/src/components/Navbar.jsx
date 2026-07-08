import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMac, setIsMac] = useState(true)

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPod|iPad/.test(navigator.platform || navigator.userAgent))
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-40 w-full transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="font-display text-lg font-semibold tracking-tight text-warmwhite">
          GG<span className="text-gold-500">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="underline-grow font-body text-sm text-warmwhite/70 transition-colors hover:text-warmwhite"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() =>
            window.dispatchEvent(
              new KeyboardEvent('keydown', { key: 'k', metaKey: true, ctrlKey: true })
            )
          }
          className="hidden items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-warmwhite/60 transition-colors hover:border-gold-500/40 hover:text-warmwhite sm:flex"
        >
          Search
          <kbd className="rounded bg-white/5 px-1.5 py-0.5 font-display text-[10px]">
            {isMac ? '\u2318' : 'Ctrl'} K
          </kbd>
        </button>
      </div>
    </motion.header>
  )
}
