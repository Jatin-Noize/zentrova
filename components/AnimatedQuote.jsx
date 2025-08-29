'use client'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'
import { Syne,Ubuntu } from 'next/font/google'

const herofont = Ubuntu({
  weight: '400',
  subsets: ['latin'],
})

const AnimatedQuote = () => {
  const ref = useRef(null)
  const [scrollDirection, setScrollDirection] = useState('down')
  const [lastScrollY, setLastScrollY] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Track scroll direction
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > lastScrollY) {
      setScrollDirection('down')
    } else {
      setScrollDirection('up')
    }
    setLastScrollY(latest)
  })

  // Animation based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9])

  const text = "In a fast-moving digital world, a strong brand identity isn’t optional —it’s essential. At Zentrova, our seasoned designers (each with 5+ years of experience) deliver bold, custom logos that combine creativity with brand strategy. We specialize in fast, white-label delivery for agencies — with three unique concepts delivered in just 24 hours. Fixed pricing starts at $245 — no hidden fees, just powerful design"

  return (
    <div ref={ref} className="w-full py-12 px-4 flex justify-center">
      <motion.div
        className={`max-w-3xl border border-orange-300/30 rounded-2xl p-6 md:p-8 text-center backdrop-blur-sm bg-orange-900/20 shadow-lg shadow-orange-900/20 ${herofont.className}`}
        style={{ opacity, scale }}
      >
       <motion.div className="text-xl md:text-2xl font-medium text-white flex flex-wrap justify-center gap-x-0.5 leading-tight">
  {text.split(' ').map((word, index) => (
    <motion.span
      key={`word-${index}`}
      className="inline-block"
      initial={{ 
        opacity: 0, 
        y: scrollDirection === 'down' ? 20 : -20 
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { 
          delay: index * 0.02, 
          duration: 0.3,
          ease: "easeOut"
        },
      }}
      exit={{
        opacity: 0,
        y: scrollDirection === 'down' ? -20 : 20,
        transition: {
          duration: 0.2
        }
      }}
      viewport={{ once: false, margin: "0px 0px -50px 0px" }}
      whileHover={{
        scale: 1.05,
        color: '#fff',
        textShadow: '0 0 6px rgba(192, 132, 252, 0.8)',
        transition: { duration: 0.15 },
      }}
    >
      {word + (index < text.split(' ').length - 1 ? '\u00A0' : '')}
    </motion.span>
  ))}
</motion.div>
      </motion.div>
    </div>
  )
}

export default AnimatedQuote