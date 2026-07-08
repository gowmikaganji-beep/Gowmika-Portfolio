import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({ children, className = '', as = 'button', ...props }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPos({ x: x * 0.35, y: y * 0.35 })
  }

  const handleMouseLeave = () => setPos({ x: 0, y: 0 })

  const Component = motion[as] || motion.button

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.3 }}
      className={className}
      {...props}
    >
      <motion.span
        animate={{ x: pos.x * 0.4, y: pos.y * 0.4 }}
        transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.3 }}
        className="inline-flex items-center gap-2"
      >
        {children}
      </motion.span>
    </Component>
  )
}
