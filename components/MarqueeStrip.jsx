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
    text: "3 Bespoke Logo Concepts — Delivered in 24H",
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
  },
   {
    text: "Fast Turnaround. Premium Identity Systems.",
    icon: <FaRegSmileWink className="text-orange-300" />
  }
];

const makeLooped = (messages) => [...messages, ...messages];

const Strip = ({ messages, direction = 'left', bg, rotate }) => {
  const xRange = direction === 'left' ? ['0%', '-50%'] : ['0%', '50%'];
  const duration = 12;

  return (
    <motion.div 
      className="relative overflow-hidden py-3" // Reduced further to py-3
      style={{ 
        minHeight: 60, // Reduced from 80 to 60
        background: bg,
        rotate: rotate || 0
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
            <div key={`${direction}-${i}`} className="flex items-center shrink-0 px-6"> {/* Reduced px-8 to px-6 */}
              <span className="mr-2 text-3xl">{message.icon}</span> {/* Reduced from text-4xl to text-3xl */}
              <span className="text-3xl text-orange-100 font-medium tracking-tight"> {/* Reduced from text-4xl to text-3xl */}
                {message.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

const MarqueeStrip = ({
  topMessages = defaultMessagesTop,
  bottomMessages = defaultMessagesBottom,
}) => {
  return (
    <div className="mt-36 relative h-[120px]"> {/* Reduced from h-[160px] to h-[120px] */}
      {/* Top strip - tilted slightly clockwise */}
      <div className="absolute top-0 left-0 w-full origin-center transform rotate-3 z-10">
        <Strip messages={topMessages} direction="left" bg="#F56F10" rotate="5deg" />
      </div>
      
      {/* Bottom strip - tilted slightly counter-clockwise */}
      <div className="absolute bottom-0 left-0 w-full origin-center transform -rotate-3 z-10">
        <Strip messages={bottomMessages} direction="right" bg="#d97706" rotate="-5deg" />
      </div>
      
      {/* Overlay for blend effect */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-50 z-20" />
    </div>
  )
}

export default MarqueeStrip