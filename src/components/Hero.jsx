import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import TextReveal from './TextReveal'
import MagneticButton from './MagneticButton'
import profilePhoto from '../assets/profile.jpeg'

export default function Hero() {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 120,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 20,
  })
  const layerX = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), {
    stiffness: 100,
    damping: 18,
  })
  const layerY = useSpring(useTransform(my, [-0.5, 0.5], [-14, 14]), {
    stiffness: 100,
    damping: 18,
  })
  const glowX = useSpring(useTransform(mx, [-0.5, 0.5], [-30, 30]), {
    stiffness: 80,
    damping: 20,
  })
  const glowY = useSpring(useTransform(my, [-0.5, 0.5], [-30, 30]), {
    stiffness: 80,
    damping: 20,
  })

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-charcoal-950 pt-28 pb-16"
    >
      {/* ambient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-emerald-800/30 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-gold-600/10 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #F6F3EC 1px, transparent 1px), linear-gradient(to bottom, #F6F3EC 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-12">
        {/* Text column — spans 7 of 12 for asymmetry */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-body text-xs tracking-wide text-warmwhite/80">
              Open to Product Engineering &amp; AI internships
            </span>
          </motion.div>

          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-warmwhite sm:text-6xl lg:text-[4rem]">
            <TextReveal text="Building AI-Powered" el="span" className="block" delay={0.15} />
            <TextReveal
              text="Products & Scalable"
              el="span"
              className="block text-emerald-500"
              delay={0.45}
            />
            <TextReveal text="Web Experiences" el="span" className="block" delay={0.75} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-lg font-body text-base text-warmwhite/60 sm:text-lg"
          >
            Computer Science Engineering Student{' '}
            <span className="text-gold-400">·</span> Web Developer Intern{' '}
            <span className="text-gold-400">·</span> Full Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-sm text-warmwhite/45"
          >
            <span>Mangalagiri, Andhra Pradesh</span>
            <span className="h-1 w-1 rounded-full bg-warmwhite/25" />
            <span>CGPA 9.55</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href="#projects"
              className="rounded-full bg-gold-500 px-7 py-3.5 font-display text-sm font-semibold text-charcoal-950 shadow-[0_10px_40px_-8px_rgba(198,161,92,0.5)] transition-shadow hover:shadow-[0_14px_50px_-6px_rgba(198,161,92,0.65)]"
              data-cursor-label
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              as="a"
              href="/Gowmika_Ganji_Resume.pdf"
              download
              className="rounded-full border border-white/15 px-7 py-3.5 font-display text-sm font-semibold text-warmwhite transition-colors hover:border-white/35"
              data-cursor-label
            >
              Download Resume
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.6 }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href="https://www.linkedin.com/in/gowmikaganji"
              target="_blank"
              rel="noreferrer"
              className="underline-grow font-body text-sm text-warmwhite/55 hover:text-warmwhite"
            >
              LinkedIn
            </a>
            <span className="h-1 w-1 rounded-full bg-warmwhite/20" />
            <a
              href="https://github.com/ganjigowmika96"
              target="_blank"
              rel="noreferrer"
              className="underline-grow font-body text-sm text-warmwhite/55 hover:text-warmwhite"
            >
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Image column */}
        <div className="md:col-span-5">
          <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1000 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm"
          >
            {/* ambient glow behind image */}
            <motion.div
              style={{ x: glowX, y: glowY }}
              className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-emerald-500/30 via-gold-500/10 to-transparent blur-2xl"
            />

            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative h-full w-full"
            >
              <div className="absolute inset-0 rounded-[1.75rem] border border-gold-500/15 bg-charcoal-800" />
              <img
                src={profilePhoto}
                alt="Gowmika Ganji, Computer Science Engineering student and Product Engineering Intern"
                className="relative h-full w-full rounded-[1.75rem] object-cover object-top shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
                style={{ transform: 'translateZ(30px)' }}
              />
              <motion.div
                style={{ x: layerX, y: layerY, transform: 'translateZ(60px)' }}
                className="glass absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl px-4 py-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 font-display text-sm text-emerald-400">
                  9.55
                </div>
                <div className="leading-tight">
                  <p className="font-display text-xs font-semibold text-warmwhite">CGPA</p>
                  <p className="font-body text-[11px] text-warmwhite/50">SRM University AP</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-warmwhite/40 md:flex"
      >
        <span className="font-body text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-warmwhite/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
