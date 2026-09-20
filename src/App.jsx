import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Learning from './components/Learning'
import Achievements from './components/Achievements'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'
import CursorCompanion from './components/CursorCompanion'

function Preloader() {
  return (
    <motion.div
      key="preloader"
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-charcoal-950"
    >
      <motion.div
        exit={{ scale: 1.1 }}
        className="font-display text-2xl font-semibold tracking-tight text-warmwhite"
      >
        <motion.span
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          Gowmika Ganji
        </motion.span>
        <span className="text-gold-500">.</span>
      </motion.div>
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative bg-charcoal-950">
      <div className="grain-overlay animate-grain" aria-hidden="true" />
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>

      <CursorCompanion />
      <CommandPalette />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Learning />
        <Achievements />
      </main>

      <Footer />
    </div>
  )
}
