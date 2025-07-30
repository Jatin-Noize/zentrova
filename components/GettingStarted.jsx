'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPenNib, FaWandMagicSparkles, FaHandHolding } from "react-icons/fa6";
import { useRef } from 'react';
import { Bebas_Neue,Syne, Antonio } from 'next/font/google';

const font1 = Bebas_Neue({
  weight: "400",
  subsets: ['latin']
});

const font2 = Syne({
  weight: "400",
  subsets: ['latin']
});

const GettingStarted = ({ id }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Scroll-based animation values
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  const steps = [
    {
     
      description: "Pick a logo plan and share your brand brief at checkout — no calls, no delays.",
      icon:  <FaWandMagicSparkles />,
      head: "Choose Your Package"
    },
    {
     
      description: "A pro designer is assigned instantly and begins crafting your custom concepts.",
      icon: <FaPenNib />,
      head:"We Get to Work"
    },
    {
      
      description: "Get 3 unique logo concepts in 24 hours. Review, give feedback, and finalize with ease.",
      icon: <FaHandHolding />,
      head:"Review & Refine"
    }
  ];

  return (
    <section id={id} className="relative flex  justify-center">
      <motion.section
        ref={ref}
        style={{ opacity, y, scale }}
        className="py-20 m-4 rounded-2xl w-5xl shadow-lg transition-shadow duration-500 hover:shadow-orange-400 bg-orange-900/20 backdrop-blur-sm relative overflow-hidden"
      >
        {/* Background animation circle */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            y,
            scale,
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(248, 183, 104, 0.1) 0%, transparent 70%)"
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
            className={`text-6xl md:text-6xl uppercase font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-white ${font1.className}`}
          >
           LAUNCHING YOUR LOGO IS<br /> <span className='text-orange-400'>EASY!</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.15 } }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="flex flex-col  items-center text-center p-6"
              >
                <motion.div
                  className="flex items-center justify-center w-20 h-20 rounded-full bg-orange-900/30 text-orange-400 mb-6 text-4xl"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {step.icon}
                </motion.div>
                <h1 className=' className={`text-xl font-semibold text-white mb-3 ${font1.className}`}'>{step.head}</h1>
                <h3 className={`text-xl font-semibold text-white mb-3 ${font1.className}`}>
                  {step.title}
                </h3>
                <p className={`text-orange-200 leading-5 text-md ${font2.className}`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default GettingStarted;