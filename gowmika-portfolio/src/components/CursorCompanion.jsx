import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorCompanion() {
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)
  const sx = useSpring(mx, { stiffness: 250, damping: 30, mass: 0.4 })
  const sy = useSpring(my, { stiffness: 250, damping: 30, mass: 0.4 })
  const [active, setActive] = useState(false)
  const [isCoarse, setIsCoarse] = useState(true)

  useEffect(() => {
    setIsCoarse(window.matchMedia('(pointer: coarse)').matches)

    const move = (e) => {
      mx.set(e.clientX)
      my.set(e.clientY)
    }
    const onEnter = (e) => {
      if (e.target.closest?.('[data-cursor-label]')) setActive(true)
    }
    const onLeave = (e) => {
      if (e.target.closest?.('[data-cursor-label]')) setActive(false)
    }
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [mx, my])

  if (isCoarse) return null

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{
          scale: active ? 1 : 0,
          opacity: active ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="whitespace-nowrap rounded-full bg-gold-500 px-4 py-2 text-xs font-display font-semibold uppercase tracking-wider text-charcoal-950 shadow-[0_8px_30px_rgba(198,161,92,0.35)]"
      >
        Build with me →
      </motion.div>
    </motion.div>
  )
}
