import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  return (
    <section id="about" className="relative bg-charcoal-950 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="font-body text-xs uppercase tracking-[0.25em] text-gold-500"
        >
          About
        </motion.p>

        <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-12">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="font-display text-3xl font-medium leading-tight text-warmwhite md:col-span-4 md:text-4xl"
          >
            I build the systems that sit quietly behind good learning experiences.
          </motion.h2>

          <div className="space-y-6 font-body text-lg leading-relaxed text-warmwhite/65 md:col-span-7 md:col-start-6">
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
            >
              I'm a Computer Science Engineering student at SRM University AP, currently
              holding a <span className="text-warmwhite">9.55 CGPA</span>, and I spend most of
              my time at the intersection of{' '}
              <span className="text-emerald-500">AI-powered products</span> and full-stack
              engineering. Right now, as a Product Engineering with AI Intern, I'm building a
              question bank generator that scrapes, structures, and recommends coding practice
              across platforms like LeetCode and Codeforces &mdash; the kind of infrastructure
              that makes learning to code feel less chaotic.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
            >
              What pulls me toward this work is the same thing every time: a real, specific
              problem that a well-designed system can solve. Whether that's compressing
              attendance records with bit manipulation, normalizing a payroll schema to 3NF, or
              wiring role-based access into a learning platform, I care about the version of
              the solution that's fast, correct, and actually holds up in production.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
            >
              Outside of coursework, I've competed as a finalist at Code4Her and built under
              pressure at the Amaravati Quantum Valley hackathon &mdash; both reminders that I
              like working at the edge of what I already know, in intelligent systems, product
              engineering, and everything in between.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
