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

  const RepeatingContent = ({ message }) => (
    <div className="flex">
      {[...Array(2)].map((_, index) => (
        <div
          key={index}
          className="flex shrink-0 gap-12 px-8"
        >
          {Array(4).fill(message).map((text, i) => (
            <span
              key={i}
              className="text-4xl text-white font-medium tracking-tight whitespace-nowrap"
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
      {/* Diagonal 1 */}
      <div className="absolute  inset-0 w-full h-full overflow-hidden rotate-15 origin-center">
        <motion.div
          className={`flex bg-orange-400 min-w-max ${herofont.className}`}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear'
          }}
        >
          <RepeatingContent message={crossingMessages[0]} />
        </motion.div>
      </div>

      {/* Diagonal 2 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -rotate-15 origin-center">
        <motion.div
          className={`flex min-w-max ${herofont.className}`}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 18,
            ease: 'linear'
          }}
        >
          <div className="flex">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="flex bg-orange-400 shrink-0 gap-12 px-8"
              >
                {Array(4).fill(crossingMessages[1]).map((text, i) => (
                  <span
                    key={i}
                    className="text-4xl text-purple-100 bg-orange-400 font-medium tracking-tight whitespace-nowrap"
                  >
                    {text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MarqueeStrip;
