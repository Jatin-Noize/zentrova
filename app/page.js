'use client'

import Head from 'next/head';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

// Lazy load components with dynamic imports
const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="h-16" />,
  ssr: false
});

const HeroSection = dynamic(() => import('@/components/Hero'), {
  loading: () => <div className="h-screen" />,
  ssr: false
});

const LogoMarquee = dynamic(() => import('@/components/LogoMarquee'));
const CounterSection = dynamic(() => import('@/components/CounrterSection'));
const AnimatedQuote = dynamic(() => import('@/components/AnimatedQuote'));
const GettingStarted = dynamic(() => import('@/components/GettingStarted'));
const MarqueeStrip = dynamic(() => import('@/components/MarqueeStrip'));
const PricingComponent = dynamic(() => import('@/components/PricingComponent'));
const FAQSection = dynamic(() => import('@/components/FAQSection'));

const ContactUsForm = dynamic(() => import('@/components/ContactUsForm'));
const Founder = dynamic(() => import('@/components/Founder'));
const Portfolio = dynamic(() => import('@/components/Portfolio'));
const HowItWorks = dynamic(() => import('@/components/HowItWorks'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const Footer = dynamic(() => import('@/components/Footer'));

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
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
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
    // Create stars with requestAnimationFrame for better performance
    const createStars = () => {
      const count = 100; // Reduced number of stars
      const container = document.querySelector('.star-container');
      
      if (!container) return;
      
      // Clear existing stars
      container.innerHTML = '';
      
      const fragment = document.createDocumentFragment();
      
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        const duration = Math.random() * 10;
        const size = Math.random() * 2;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${5 + duration}s`;
        star.style.animationDelay = `${duration}s`;
        
        fragment.appendChild(star);
      }
      
      container.appendChild(fragment);
    };
    
    requestAnimationFrame(createStars);
    
    // Cleanup function
    return () => {
      const container = document.querySelector('.star-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Zentrova | Powerful Solution for logo design</title>
        <meta name="description" content="Discover our innovative solutions that help businesses grow faster. Explore our services, pricing, and portfolio. Get started today with our easy-to-use platform." />
        <meta name="keywords" content="logo design, branding, creative design, business identity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zentrova.com/" />
        <meta property="og:title" content="Zentrova | Professional Logo Design Services" />
        <meta property="og:description" content="Premium logo design services that help businesses establish a strong brand identity." />
        <meta property="og:image" content="https://zentrova.com/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://zentrova.com/" />
        <meta property="twitter:title" content="Zentrova | Professional Logo Design Services" />
        <meta property="twitter:description" content="Premium logo design services that help businesses establish a strong brand identity." />
        <meta property="twitter:image" content="https://zentrova.com/images/twitter-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://zentrova.com/" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-[#7d3a0b] via-black to-[#89400c] relative overflow-hidden">
        {/* Star container */}
        <div className="star-container absolute inset-0 overflow-hidden pointer-events-none"></div>
        
        {/* Main content container */}
        <div className="flex flex-col items-center w-full scroll-smooth">
          <div className="w-full z-50 fixed max-w-7xl px-4 sm:px-6 lg:px-8">
            <Navbar />
          </div>
          
          {/* Hero Section */}
          <div className="w-full">
            <HeroSection />
          </div>

          {/* Animated Sections */}
          <AnimatedSection>
            <LogoMarquee id="#" />
          </AnimatedSection>
          
          <AnimatedSection>
            <CounterSection />
          </AnimatedSection>
          
          <AnimatedSection>
            <Founder id="about" />
          </AnimatedSection>
          
          <AnimatedSection>
            <AnimatedQuote />
          </AnimatedSection>
          
          <AnimatedSection>
            <GettingStarted />
          </AnimatedSection>
          
         
          <AnimatedSection>
            <Portfolio id="portfolio" />
          </AnimatedSection>
          
          <AnimatedSection>
            <HowItWorks id="how-it-works" />
          </AnimatedSection>
          
          <AnimatedSection>
            <Testimonials id="testimonials" />
          </AnimatedSection>
          
          <AnimatedSection>
            <PricingComponent id="pricing" />
          </AnimatedSection>
          
          <AnimatedSection>
    <MarqueeStrip />
          
          
          </AnimatedSection>
          
          <AnimatedSection>
            <FAQSection id="faq" />
          </AnimatedSection>
          
          <Footer />
        </div>

        <style jsx global>{`
          @keyframes twinkle {
            0%, 100% { transform: scale(1); opacity: 0.2; }
            50% { transform: scale(1.2); opacity: 1; }
          }
          .star {
            position: absolute;
            background-color: white;
            border-radius: 50%;
            animation: twinkle infinite ease-in-out;
            will-change: transform, opacity;
            backface-visibility: hidden;
          }
          .star:nth-child(3n) {
            background-color: #d8b4fe;
          }
          .star:nth-child(5n) {
            background-color: #c084fc;
          }
        `}</style>
      </div>
    </>
  );
};

export default Page;