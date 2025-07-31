'use client'
import { motion } from 'framer-motion'
import { Bebas_Neue } from "next/font/google"

const herofont = Bebas_Neue({
  weight: "400",
  subsets: ['latin']
});

const MarqueeStrip = () => {
  const crossingMessages = [
    "White Label Logos for World-Class Agencies.",
    "3 Bespoke Logo Concepts — Delivered in 24H"
  ];

  const RepeatingContent = ({ message, textColor = "text-white", bgColor = "bg-orange-400" }) => (
    <div className="flex">
      {[...Array(2)].map((_, index) => (
        <div
          key={index}
          className={`flex shrink-0 gap-12 px-8 ${bgColor}`}
        >
          {Array(4).fill(message).map((text, i) => (
            <span
              key={i}
              className={`text-4xl ${textColor} font-medium tracking-tight whitespace-nowrap ${herofont.className}`}
            >
              {text}
            </span>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative mt-36 overflow-hidden h-64">
      {/* Diagonal Top-left to Bottom-right */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          className="flex min-w-max"
          style={{
            transform: 'rotate(15deg) translateX(-25%)',
            transformOrigin: 'left center'
          }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear'
          }}
        >
          <RepeatingContent 
            message={crossingMessages[0]} 
            bgColor="bg-orange-400"
            textColor="text-white"
          />
        </motion.div>
      </div>

      {/* Diagonal Top-right to Bottom-left */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          className="flex min-w-max"
          style={{
            transform: 'rotate(-15deg) translateX(-25%)',
            transformOrigin: 'right center'
          }}
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 18,
            ease: 'linear'
          }}
        >
          <RepeatingContent 
            message={crossingMessages[1]} 
            bgColor="bg-orange-500"
            textColor="text-purple-100"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default MarqueeStrip;