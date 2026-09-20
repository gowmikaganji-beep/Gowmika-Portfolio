import { motion } from 'framer-motion'

// Splits text into words and reveals each with a clip-path mask animation.
export default function TextReveal({ text, className = '', delay = 0, el = 'span' }) {
  const words = text.split(' ')
  const Component = motion[el]

  return (
    <Component className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ clipPath: 'inset(0 0 100% 0)', y: '100%' }}
            animate={{ clipPath: 'inset(0 0 0% 0)', y: '0%' }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </Component>
  )
}
