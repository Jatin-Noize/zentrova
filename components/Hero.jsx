'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactUsForm from "./ContactUsForm";

import {Mina,Oswald, Bebas_Neue,Syne} from "next/font/google"
const button = Syne({
  weight:"400",
  subsets:['latin']
}); 

const hero = Syne({
  weight:"500",
  subsets:['latin']
})

import { useState, useEffect } from "react";
import { ArrowUp, ArrowRight, CalendarCheck } from 'lucide-react';
const herofont = Bebas_Neue({
  weight:"400",
  subsets:['latin']
}); 

export default function HeroSection() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
   const [isHovered2, setIsHovered2] = useState(false);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
<main className="min-h-screen xs:min-h-auto text-white flex items-center justify-center px-4 sm:px-6 ">
  {/* Orange animated elements in background */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-orange-500/20 rounded-full"
        initial={{
          scale: 0,
          opacity: 0,
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50
        }}
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 0.3, 0],
          x: [0, Math.random() * 200 - 100],
          y: [0, Math.random() * 200 - 100]
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          width: `${Math.random() * 300 + 100}px`,
          height: `${Math.random() * 300 + 100}px`,
          filter: 'blur(40px)'
        }}
      />
    ))}
  </div>

  <div className="max-w-3xl mt-24 sm:mt-36 text-center sm:text-left space-y-8 relative z-10">
    {/* Tagline */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className={`mx-auto max-w-fit flex justify-center items-center gap-3 text-md font-semibold bg-orange-500/20 px-4 py-2 rounded-full ${button.className}`}
    >
      <div className="h-2 w-2 bg-orange-400 rounded-full animate-pulse filter blur-xs"></div> 
      Three concepts in one day
    </motion.div>

  <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className={`${herofont.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight font-extrabold text-center`}
    >
      <div className="flex flex-col items-center">
        <span className="block">The First Choice in</span>
        
        <div className="relative h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 flex items-center justify-center w-full">
          <AnimatedWords 
            words={["WHITE LABEL", "BRANDING", "DESIGN", "CREATIVE"]} 
            textColor="text-orange-500"
          />
        </div>
        
        <span className="block">Logo Design for Agencies</span>
      </div>
    </motion.h1>
    {/* Description */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className={`${hero.className} mb-12 text-zinc-300 text-lg sm:text-xl text-left sm:text-center`}
    >
      <span className="sm:block">
        We deliver professionally hand-designed white{' '}
      </span>
      <span className="sm:block">
        label logos within 1 day all at a fixed price
      </span>
    </motion.p>

    {/* CTA Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="flex justify-start sm:justify-center gap-4"
    >
      {/* Pricing Button */}
      <button
        onClick={() => scrollToSection('pricing')}
        className={`relative w-42 h-12 bg-orange-600 hover:bg-orange-700 transition-colors duration-200 text-white rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/20 whitespace-nowrap overflow-hidden ${button.className}`}
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <span className={`flex items-center text-lg gap-2 transition-all duration-200 ${
          isHovered1 ? "opacity-0 translate-x-[-20px]" : "opacity-100"
        }`}>
          Check Plans
          <ArrowRight size={24} className="stroke-[2.5]" />
        </span>

        <ArrowUp
          size={36}
          className={`absolute transition-all duration-200 stroke-[2.5] ${
            isHovered1
              ? "opacity-100 translate-y-0 rotate-45"
              : "opacity-0 translate-y-2"
          }`}
        />
      </button>

      {/* Contact Button */}
      <button
        onClick={() => setIsContactFormOpen(true)}
        className={`relative w-44 h-12 bg-white/10 hover:bg-gradient-to-b from-zinc-700 to-orange-400 transition-colors duration-200 text-white rounded-2xl text-sm font-medium flex items-center justify-center gap-2 overflow-hidden ${button.className}`}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <span className={`flex items-center text-lg gap-2 transition-all duration-200 ${
          isHovered2 ? 'opacity-0 -translate-x-5' : 'opacity-100 translate-x-0'
        }`}>
          Book a call
          <CalendarCheck size={20} />
        </span>

        <CalendarCheck
          size={28}
          className={`absolute transition-all duration-200 stroke-[2.5] ${
            isHovered2
              ? 'opacity-100 rotate-45 translate-y-0'
              : 'opacity-0 translate-y-2'
          }`}
        />
      </button>
    </motion.div>

    <ContactUsForm
      isOpen={isContactFormOpen}
      onClose={() => setIsContactFormOpen(false)}
    />
  </div>
</main>
  );
}
const AnimatedWords = ({ words, textColor }) => {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={`relative inline-block ${textColor}`}>
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="absolute left-0 top-0 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: i === index ? 1 : 0,
            y: i === index ? 0 : 20
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          {word}
        </motion.span>
      ))}
      {/* Invisible spacer to maintain layout */}
      <span className="invisible">{words[0]}</span>
    </span>
  );
};