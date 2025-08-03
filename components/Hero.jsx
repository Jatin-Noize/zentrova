'use client'
import { motion } from 'framer-motion';
import { IoMdCheckmarkCircle } from "react-icons/io";
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

import { useState } from "react";
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
<main className="min-h-screen text-white flex items-center justify-center px-4 sm:px-6">
  <div className="max-w-3xl mt-24 sm:mt-36 w-full">
    {/* Tagline */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="flex justify-start md:justify-center w-full"
    >
      <div
        className={`max-w-fit flex items-center gap-3 text-md font-semibold bg-white/10 px-4 py-2 rounded-full ${button.className}`}
      >
        <div className="h-2 w-2 bg-orange-400 rounded-full animate-pulse filter blur-xs" />
        Concepts x3-Delivered in 1 day
      </div>
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className={`${herofont.className} text-5xl mt-8 mb-4 sm:text-8xl md:text-5xl lg:text-7xl tracking-tight font-extrabold text-left sm:text-center`}
    >
      THE GO-TO <br className="sm:hidden" />
      <span className={`text-[#F56F10] ${herofont.className}`}>WHITE LABEL</span>
      <br className="sm:hidden" />
      <span className="block sm:inline">
        Logo Partner for <br className="sm:hidden" />
        CREATIVE Agencies
      </span>
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className={`${hero.className} mb-8 text-zinc-400 text-lg sm:text-xl text-left sm:text-center`}
    >
      <span className="sm:block">
        We craft premium, white-label logos in just 1 day{" "}
      </span>
      <span className="sm:block">
        three custom concepts, unlimited potential, all for a flat rate
      </span>
    </motion.p>

    {/* <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className={`${hero.className} mb-10 text-zinc-400 text-lg sm:text-xl text-left sm:text-center max-w-md sm:max-w-xl mx-auto`}
    >
      <ul className="space-y-3 text-left sm:space-y-2 flex flex-col items-start sm:items-center">
        <li className="flex items-center gap-3">
          <IoMdCheckmarkCircle className="text-[#F56F10] h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
          <span>Made by real people, not AI</span>
        </li>
        <li className="flex items-center gap-3">
          <IoMdCheckmarkCircle className="text-[#F56F10] h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
          <span>Delivered in 48 hours</span>
        </li>
        <li className="flex items-center gap-3">
          <IoMdCheckmarkCircle className="text-[#F56F10] h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
          <span>Fully custom branding</span>
        </li>
        <li className="flex items-center gap-3">
          <IoMdCheckmarkCircle className="text-[#F56F10] h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
          <span>
            100% <span className="font-bold">MONEY-BACK</span> Guarantee
          </span>
        </li>
      </ul>
    </motion.div> */}

    {/* CTAs */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="flex flex-col sm:flex-row justify-start sm:justify-center gap-4"
    >
      {/* Pricing Button */}
      <button
        onClick={() => scrollToSection("pricing")}
        className={`relative min-w-[160px] px-4 h-12 bg-[#F56F10] hover:bg-orange-700 transition-colors duration-200 text-white rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/20 whitespace-nowrap overflow-hidden ${button.className}`}
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <span
          className={`flex items-center text-lg gap-2 transition-all duration-200 ${
            isHovered1 ? "opacity-0 translate-x-[-20px]" : "opacity-100"
          }`}
        >
          View Packages <ArrowRight size={24} className="stroke-[2.5]" />
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
        className={`relative min-w-[160px] h-12 px-4 bg-white/10 hover:bg-gradient-to-b from-zinc-700 to-orange-400 transition-colors duration-200 text-white rounded-2xl text-sm font-medium flex items-center justify-center gap-2 overflow-hidden ${button.className}`}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <span
          className={`flex items-center text-lg gap-2 transition-all duration-200 ${
            isHovered2 ? "opacity-0 -translate-x-5" : "opacity-100 translate-x-0"
          }`}
        >
          Schedule a call <CalendarCheck size={20} />
        </span>

        <CalendarCheck
          size={28}
          className={`absolute transition-all duration-200 stroke-[2.5] ${
            isHovered2
              ? "opacity-100 rotate-45 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
        />
      </button>

      <ContactUsForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </motion.div>
  </div>
</main>

  );
}