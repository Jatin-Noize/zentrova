'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import logo1 from "../public/images/logo1.webp";
import logo2 from "../public/images/logo2.webp";
import logo3 from "../public/images/logo3.webp";
import logo4 from "../public/images/logo4.webp";
import logo5 from "../public/images/logo5.webp";
import logo6 from "../public/images/logo6.webp";
import logo7 from "../public/images/logo7.webp";

const logosRow1 = [logo1, logo2, logo3, logo4, logo5, logo6,logo7];


const scrollX = {
  left: {
    x: ['0%', '-50%'],
    transition: {
      x: { repeat: Infinity, repeatType: 'loop', duration: 80, ease: 'linear' },
    },
  },
  right: {
    x: ['-50%', '0%'],
    transition: {
      x: { repeat: Infinity, repeatType: 'loop', duration: 80, ease: 'linear' },
    },
  },
};

const fadeInUpWithBlur = {
  hidden: { 
    opacity: 0, 
    y: 50,
    filter: 'blur(10px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.8, 
      ease: 'easeOut',
      filter: { duration: 1, ease: 'easeOut' }
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    filter: 'blur(10px)',
    transition: { 
      duration: 0.6,
      ease: 'easeIn',
      filter: { duration: 0.5, ease: 'easeIn' }
    }
  }
};

export default function LogoMarquee({ id }) {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: false, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: false, margin: "-100px" });

  return (
    <section id={id} className="relative overflow-hidden py-16">
      {/* Row 1 */}
      <motion.div
        ref={ref1}
        variants={fadeInUpWithBlur}
        initial="hidden"
        animate={isInView1 ? "visible" : "exit"}
        className="relative w-full overflow-hidden mb-6"
      >
        <motion.div className="flex w-max gap-6" variants={scrollX} animate="left">
          {[...logosRow1, ...logosRow1].map((logo, i) => (
         <motion.div
  key={`row1-${i}`}
  className="relative w-64 h-32 sm:w-72 sm:h-40"
>
<div className="relative w-full h-full">
  <Image
    src={logo}
    alt={`logo-${i}`}
    fill
    className="object-contain border bg-gradient-to-b from-orange-100 via-orange-200 to-orange-100 rounded-3xl border-orange-300 shadow-lg shadow-orange-300/40"
    sizes="(max-width: 1000px) 160px, 288px"
  />
</div>
</motion.div>

          ))}
        </motion.div>
      </motion.div>

      {/* Row 2
      <motion.div
        ref={ref2}
        variants={fadeInUpWithBlur}
        initial="hidden"
        animate={isInView2 ? "visible" : "exit"}
        className="relative w-full overflow-hidden"
      >
        <motion.div className="flex w-max gap-6" variants={scrollX} animate="right">
          {[...logosRow2, ...logosRow2].map((logo, i) => (
            <motion.div
              key={`row2-${i}`}
              className="relative w-96 h-52"
             
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo}
                  alt={`logo-${i}`}
                  fill
              className="object-scale-down border bg-gradient-to-b from-[#120700] via-[#331400] to-[#120700] rounded-3xl border-orange-700/40 shadow-lg shadow-orange-700/40"
                  sizes="(max-width: 1000px) 420px, 612px"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div> */}
    </section>
  );
}