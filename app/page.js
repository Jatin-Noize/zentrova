'use client'

import Head from 'next/head';
import Footer from '@/components/Footer';
import HeroSection from '@/components/Hero';
import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react';
import LogoMarquee from '@/components/LogoMarquee';
import CounterSection from '@/components/CounrterSection';
import AnimatedQuote from '@/components/AnimatedQuote';
import ThreeScene from '@/components/ThreeScene';

import GettingStarted from '@/components/GettingStarted';
import MarqueeStrip from '@/components/MarqueeStrip';
import PricingComponent from '@/components/PricingComponent';
import FAQSection from '@/components/FAQSection';
import Quote from '@/components/Quote';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactUsForm from '@/components/ContactUsForm';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
};

// Animated Section Wrapper Component
const AnimatedSection = ({ children, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      id={id}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const Page = () => {
  useEffect(() => {
    // Create random animated divs
   const createAnimatedDivs = () => {
  const container = document.querySelector('.animation-container');
  if (!container) return;

  const divCount = 40; // Increased from 15 to 40
  const orangeShades = [
    'rgba(255, 106, 0, 0.6)', // Bright orange
    'rgba(255, 140, 0, 0.5)', // Medium orange
    'rgba(255, 69, 0, 0.4)',  // Darker orange
  ];

  for (let i = 0; i < divCount; i++) {
    const div = document.createElement('div');
    div.className = 'animated-div';

    // Increased size range: 100 to 300px
    const size = Math.random() * 200 + 100;
    const color = orangeShades[Math.floor(Math.random() * orangeShades.length)];
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    const borderRadius = `${Math.random() * 50}%`;
    const rotation = Math.random() * 360;
    const zIndex = Math.floor(Math.random() * 5);

    const shapeType = Math.floor(Math.random() * 3);
    let shapeStyle = '';

    switch (shapeType) {
      case 0: // Rectangle
        shapeStyle = `
          width: ${size}px;
          height: ${size * 0.6}px;
          border-radius: ${borderRadius};
        `;
        break;
      case 1: // Circle
        shapeStyle = `
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
        `;
        break;
      case 2: // Triangle
        shapeStyle = `
          width: 0;
          height: 0;
          border-left: ${size / 2}px solid transparent;
          border-right: ${size / 2}px solid transparent;
          border-bottom: ${size}px solid ${color};
          background: transparent;
        `;
        break;
    }

    div.style.cssText = `
      position: absolute;
      ${shapeStyle}
      background: ${shapeType !== 2 ? color : 'transparent'};
      left: ${posX}%;
      top: ${posY}%;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      transform: rotate(${rotation}deg);
      z-index: ${zIndex};
      opacity: 0.7;
      mix-blend-mode: screen;
      filter: blur(${Math.random() * 3 + 2}px); /* Slightly increased blur */
      will-change: transform, opacity;
    `;

    container.appendChild(div);
  }
};

    
    createAnimatedDivs();
  }, []);

  return (
    <>
      <Head>
        <title>Zentrova | Powerful Solution for logo design</title>
        <meta name="description" content="Discover our innovative solutions that help businesses grow faster. Explore our services, pricing, and portfolio. Get started today with our easy-to-use platform." />
        <meta name="keywords" content="your, keywords, here, business, solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="Logo Design Platform Website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:title" content="Zentrova | Powerful Solution for Your Needs" />
        <meta property="og:description" content="Discover our innovative solutions that help businesses grow faster. Explore our services, pricing, and portfolio." />
        <meta property="og:image" content="https://yourwebsite.com/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/" />
        <meta property="twitter:title" content="Your Brand Name | Powerful Solution for Your Needs" />
        <meta property="twitter:description" content="Discover our innovative solutions that help businesses grow faster. Explore our services, pricing, and portfolio." />
        <meta property="twitter:image" content="https://yourwebsite.com/images/twitter-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Head>

      <div className='min-h-screen bg-zinc-700 relative overflow-hidden'>
        
        {/* Animation container */}
        <div className="animation-container absolute inset-0 overflow-hidden pointer-events-none"></div>
        
        {/* Main content container */}
        <div className="flex flex-col jus items-center w-full scroll-smooth relative z-10">
          <div className="w-full z-50 fixed max-w-7xl px-4 sm:px-6 lg:px-8">
            <Navbar />
          </div>
          
          {/* Hero Section */}
          <div className="w-full">
            <HeroSection />
          </div>

          {/* Animated Sections */}
          <AnimatedSection>
            <LogoMarquee id="portfolio" />
          </AnimatedSection>
          
          <AnimatedSection>
            <CounterSection />
          </AnimatedSection>
          
          <AnimatedSection>
            <AnimatedQuote />
          </AnimatedSection>
          
          <AnimatedSection className="flex justify-center">
            <GettingStarted id="how-it-works" />
          </AnimatedSection>
          
          <AnimatedSection>
            <Quote />
          </AnimatedSection>
          
          <AnimatedSection>
            <PricingComponent id="pricing" />
          </AnimatedSection>
          
          <AnimatedSection>
            <div className='rotate-3 h-36'>
              <MarqueeStrip />
            </div>
          </AnimatedSection>
          
          <AnimatedSection>
            <FAQSection id="faq" />
          </AnimatedSection>
          
          <Footer />
        </div>

        <style jsx global>{`
          /* Animated div keyframes */
          @keyframes float-and-fade {
            0% {
              transform: translate(0, 0) rotate(0deg) scale(1);
              opacity: 0.7;
            }
            25% {
              transform: translate(10vw, -5vh) rotate(90deg) scale(0.9);
            }
            50% {
              transform: translate(-5vw, 10vh) rotate(180deg) scale(1.1);
              opacity: 0.4;
            }
            75% {
              transform: translate(15vw, 5vh) rotate(270deg) scale(0.8);
            }
            100% {
              transform: translate(0, 0) rotate(360deg) scale(1);
              opacity: 0.7;
            }
          }
          
          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 10px rgba(255, 106, 0, 0.3);
            }
            50% {
              box-shadow: 0 0 30px rgba(255, 106, 0, 0.7);
            }
          }
          
          .animated-div {
            animation: 
              float-and-fade infinite ease-in-out,
              pulse-glow 4s infinite ease-in-out;
          }
          
          /* Highlight effect for interactive elements */
          .highlight-orange {
            transition: all 0.3s ease;
          }
          
          .highlight-orange:hover {
            text-shadow: 0 0 10px rgba(255, 106, 0, 0.7);
          }
        `}</style>
      </div>
    </>
  );
};

export default Page;

// 'use client'

// import Head from 'next/head';
// import Footer from '@/components/Footer';
// import HeroSection from '@/components/Hero';
// import Navbar from '@/components/Navbar';
// import React, { useEffect } from 'react';
// import LogoMarquee from '@/components/LogoMarquee';
// import CounterSection from '@/components/CounrterSection';
// import AnimatedQuote from '@/components/AnimatedQuote';
// import GettingStarted from '@/components/GettingStarted';
// import MarqueeStrip from '@/components/MarqueeStrip';
// import PricingComponent from '@/components/PricingComponent';
// import FAQSection from '@/components/FAQSection';
// import Quote from '@/components/Quote';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ContactUsForm from '@/components/ContactUsForm';

// // Animation variants
// const sectionVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   },
//   exit: {
//     opacity: 0,
//     y: -50,
//     transition: {
//       duration: 0.4,
//       ease: "easeIn"
//     }
//   }
// };

// // Animated Section Wrapper Component
// const AnimatedSection = ({ children, id }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: false,
//     threshold: 0.1
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("exit");
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={sectionVariants}
//       id={id}
//       className="w-full"
//     >
//       {children}
//     </motion.div>
//   );
// };

// const Page = () => {
//   useEffect(() => {
//     // Create random animated divs
//     const createAnimatedDivs = () => {
//       const container = document.querySelector('.animation-container');
//       if (!container) return;

//       const divCount = 25; // Reduced count for cleaner look
//       const orangeShades = [
//         'rgba(255, 106, 0, 0.4)', // More subtle opacity
//         'rgba(255, 140, 0, 0.3)',
//         'rgba(255, 69, 0, 0.2)',
//       ];

//       const shapeStyles = [
//         // Pill shape (horizontal)
//         (size) => `
//           width: ${size * 2}px;
//           height: ${size}px;
//           border-radius: ${size}px;
//           box-shadow: 0 10px 20px rgba(255, 106, 0, 0.2);
//         `,
//         // Pill shape (vertical)
//         (size) => `
//           width: ${size}px;
//           height: ${size * 2}px;
//           border-radius: ${size}px;
//           box-shadow: 0 10px 20px rgba(255, 106, 0, 0.2);
//         `,
//         // Squircle shape
//         (size) => `
//           width: ${size * 1.5}px;
//           height: ${size * 1.5}px;
//           border-radius: ${size * 0.3}px;
//           box-shadow: 0 15px 30px rgba(255, 106, 0, 0.3);
//         `,
//         // Rounded rectangle
//         (size) => `
//           width: ${size * 1.8}px;
//           height: ${size}px;
//           border-radius: ${size * 0.2}px;
//           box-shadow: 0 8px 16px rgba(255, 106, 0, 0.15);
//         `,
//       ];

//       for (let i = 0; i < divCount; i++) {
//         const div = document.createElement('div');
//         div.className = 'animated-div';

//         // Size range: 80 to 200px for better proportions
//         const size = Math.random() * 120 + 80;
//         const color = orangeShades[Math.floor(Math.random() * orangeShades.length)];
//         const posX = Math.random() * 100;
//         const posY = Math.random() * 100;
//         const duration = Math.random() * 25 + 15; // Slower movement
//         const delay = Math.random() * 5;
//         const rotation = Math.random() * 15 - 7.5; // Limited rotation (-7.5 to 7.5 deg)
//         const zIndex = Math.floor(Math.random() * 3);
//         const shapeStyle = shapeStyles[Math.floor(Math.random() * shapeStyles.length)](size);

//         div.style.cssText = `
//           position: absolute;
//           ${shapeStyle}
//           background: ${color};
//           left: ${posX}%;
//           top: ${posY}%;
//           animation-duration: ${duration}s;
//           animation-delay: ${delay}s;
//           transform: rotate(${rotation}deg);
//           z-index: ${zIndex};
//           opacity: 0.8;
//           mix-blend-mode: overlay;
//           filter: blur(${Math.random() * 2 + 1}px);
//           will-change: transform, opacity;
//         `;

//         container.appendChild(div);
//       }
//     };
    
//     createAnimatedDivs();
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Zentrova | Powerful Solution for logo design</title>
//         <meta name="description" content="Discover our innovative solutions that help businesses grow faster. Explore our services, pricing, and portfolio. Get started today with our easy-to-use platform." />
//         <meta name="keywords" content="your, keywords, here, business, solution" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="robots" content="index, follow" />
        
//         {/* Open Graph / Facebook */}
//         <meta property="og:type" content="Logo Design Platform Website" />
//         <meta property="og:url" content="https://yourwebsite.com/" />
//         <meta property="og:title" content="Zentrova | Powerful Solution for Your Needs" />
//         <meta property="og:description" content="Discover our innovative solutions that help businesses grow faster. Explore our services, pricing, and portfolio." />
//         <meta property="og:image" content="https://yourwebsite.com/images/og-image.jpg" />

//         {/* Twitter */}
//         <meta property="twitter:card" content="summary_large_image" />
//         <meta property="twitter:url" content="https://yourwebsite.com/" />
//         <meta property="twitter:title" content="Your Brand Name | Powerful Solution for Your Needs" />
//         <meta property="twitter:description" content="Discover our innovative solutions that help businesses grow faster. Explore our services, pricing, and portfolio." />
//         <meta property="twitter:image" content="https://yourwebsite.com/images/twitter-image.jpg" />

//         {/* Canonical URL */}
//         <link rel="canonical" href="https://yourwebsite.com/" />
//       </Head>

//       <div className='min-h-screen bg-black relative overflow-hidden'>
//         {/* Animation container */}
//         <div className="animation-container absolute inset-0 overflow-hidden pointer-events-none"></div>
        
//         {/* Left Wave */}
//         <div className="fixed left-0 top-0 h-full w-32 z-0 pointer-events-none">
//           <motion.div 
//             className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-orange-500/10 to-transparent"
//             initial={{ x: -100 }}
//             animate={{ 
//               x: 0,
//               transition: {
//                 duration: 10,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "easeInOut"
//               }
//             }}
//           >
//             <svg 
//               viewBox="0 0 200 1200" 
//               className="absolute left-0 top-0 h-full w-full"
//               preserveAspectRatio="none"
//             >
//               <path 
//                 d="M0,0 C50,100 50,300 0,400 C50,500 50,700 0,800 C50,900 50,1100 0,1200 L0,0 Z" 
//                 fill="url(#leftWaveGradient)" 
//               />
//               <defs>
//                 <linearGradient id="leftWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="rgba(255,106,0,0.15)" />
//                   <stop offset="100%" stopColor="rgba(255,106,0,0)" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </motion.div>
//         </div>

//         {/* Right Wave */}
//         <div className="fixed right-0 top-0 h-full w-32 z-0 pointer-events-none">
//           <motion.div 
//             className="absolute right-0 top-0 h-full w-full bg-gradient-to-l from-orange-500/10 to-transparent"
//             initial={{ x: 100 }}
//             animate={{ 
//               x: 0,
//               transition: {
//                 duration: 12,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "easeInOut"
//               }
//             }}
//           >
//             <svg 
//               viewBox="0 0 200 1200" 
//               className="absolute right-0 top-0 h-full w-full"
//               preserveAspectRatio="none"
//             >
//               <path 
//                 d="M200,0 C150,100 150,300 200,400 C150,500 150,700 200,800 C150,900 150,1100 200,1200 L200,0 Z" 
//                 fill="url(#rightWaveGradient)" 
//               />
//               <defs>
//                 <linearGradient id="rightWaveGradient" x1="100%" y1="0%" x2="0%" y2="0%">
//                   <stop offset="0%" stopColor="rgba(255,106,0,0.15)" />
//                   <stop offset="100%" stopColor="rgba(255,106,0,0)" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </motion.div>
//         </div>
        
//         {/* Main content container */}
//         <div className="flex flex-col jus items-center w-full scroll-smooth relative z-10">
//           <div className="w-full z-50 fixed max-w-7xl px-4 sm:px-6 lg:px-8">
//             <Navbar />
//           </div>
          
//           {/* Hero Section */}
//           <div className="w-full">
//             <HeroSection />
//           </div>

//           {/* Animated Sections */}
//           <AnimatedSection>
//             <LogoMarquee id="portfolio" />
//           </AnimatedSection>
          
//           <AnimatedSection>
//             <CounterSection />
//           </AnimatedSection>
          
//           <AnimatedSection>
//             <AnimatedQuote />
//           </AnimatedSection>
          
//           <AnimatedSection className="flex justify-center">
//             <GettingStarted id="how-it-works" />
//           </AnimatedSection>
          
//           <AnimatedSection>
//             <Quote />
//           </AnimatedSection>
          
//           <AnimatedSection>
//             <PricingComponent id="pricing" />
//           </AnimatedSection>
          
//           <AnimatedSection>
//             <div className='rotate-3 h-36'>
//               <MarqueeStrip />
//             </div>
//           </AnimatedSection>
          
//           <AnimatedSection>
//             <FAQSection id="faq" />
//           </AnimatedSection>
          
//           <Footer />
//         </div>

//         <style jsx global>{`
//           /* Animated div keyframes */
//           @keyframes float-and-fade {
//             0% {
//               transform: translate(0, 0) rotate(0deg) scale(1);
//               opacity: 0.8;
//             }
//             25% {
//               transform: translate(5vw, -3vh) rotate(2deg) scale(1.05);
//             }
//             50% {
//               transform: translate(-3vw, 5vh) rotate(-2deg) scale(0.95);
//               opacity: 0.6;
//             }
//             75% {
//               transform: translate(4vw, 3vh) rotate(1deg) scale(1.03);
//             }
//             100% {
//               transform: translate(0, 0) rotate(0deg) scale(1);
//               opacity: 0.8;
//             }
//           }

//           @keyframes wave-move {
//             0%, 100% {
//               transform: translateX(-10px);
//             }
//             50% {
//               transform: translateX(10px);
//             }
//           }

//           .animated-div {
//             animation: 
//               float-and-fade infinite ease-in-out;
//             transition: all 0.5s ease-out;
//           }

//           .animated-div:hover {
//             opacity: 0.9 !important;
//             filter: blur(1px) brightness(1.1) !important;
//           }

//           /* Wave animations */
//           .wave-left {
//             animation: wave-move 15s infinite ease-in-out;
//           }

//           .wave-right {
//             animation: wave-move 18s infinite ease-in-out reverse;
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };

// export default Page;