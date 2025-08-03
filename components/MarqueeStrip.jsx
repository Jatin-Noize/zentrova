'use client'
import { motion } from 'framer-motion'
import { FaHeart, FaCoffee, FaRegSmileWink } from 'react-icons/fa'
import { Bebas_Neue, Michroma } from "next/font/google"

const herofont = Bebas_Neue({
  weight: "400",
  subsets: ['latin']
});

const footer = Michroma({
  weight: "400",
  subsets: ['latin']
}); 

const defaultMessagesTop = [
  {
    text: " 3 Bespoke Logo Concepts — Delivered in 24H",
    icon: <FaRegSmileWink className="text-orange-300" />
  },
  {
    text: "White Label Logos for World-Class Agencies.",
    icon: <FaCoffee className="text-orange-300" />
  },
  {
    text: "3 Bespoke Logo Concepts — Delivered in 24H",
    icon: <FaHeart className="text-orange-300" />
  }
];

const defaultMessagesBottom = [
  {
    text: "Fast Turnaround. Premium Identity Systems.",
    icon: <FaHeart className="text-orange-300" />
  },
  {
    text: "Scale Your Agency with White Label Design.",
    icon: <FaCoffee className="text-orange-300" />
  },
  {
    text: "Trusted by Top Creatives Worldwide.",
    icon: <FaRegSmileWink className="text-orange-300" />
  }
];

const makeLooped = (messages) => [...messages, ...messages];

const Strip = ({ messages, direction = 'left', bg }) => {
  // direction: 'left' means x goes 0% -> -50%; 'right' is 0% -> 50%
  const xRange = direction === 'left' ? ['0%', '-50%'] : ['0%', '50%'];
  const duration = 12;

  return (
    <div className="relative overflow-hidden py-6" style={{ minHeight: 100, background: bg }}>
      <div className="relative w-full">
        <motion.div
          className={`flex ${herofont.className} whitespace-nowrap`}
          animate={{ x: xRange }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration,
              ease: 'linear',
            },
          }}
        >
          {makeLooped(messages).map((message, i) => (
            <div key={`${direction}-${i}`} className="flex items-center shrink-0 px-8">
              <span className="mr-3 text-5xl">{message.icon}</span>
              <span className="text-5xl text-orange-100 font-medium tracking-tight">
                {message.text}
              </span>
            </div>
          ))}
        </motion.div>
        {/* Invisible duplicate (for safety, though looped array usually suffices) */}
        <div className={`absolute top-0 left-full ${herofont.className} opacity-0`}>
          {messages.map((message, i) => (
            <div key={`dup-${direction}-${i}`} className="flex items-center shrink-0 px-8">
              <span className="mr-3 text-5xl">{message.icon}</span>
              <span className="text-5xl uppercase text-orange-100 font-medium tracking-tight">
                {message.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const MarqueeStrip = ({
  topMessages = defaultMessagesTop,
  bottomMessages = defaultMessagesBottom,
}) => {
  return (
    <div className="mt-28 space-y-6">
      <Strip messages={topMessages} direction="left" bg="#F56F10" />
      <Strip messages={bottomMessages} direction="right" bg="#d97706" />
      {/* Optional overlay if you still want a blend effect across both */}
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 mix-blend-overlay" />
        </div>
      </div>
    </div>
  )
}

export default MarqueeStrip
