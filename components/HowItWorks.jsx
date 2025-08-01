// components/HowItWorks.jsx
"use client";

import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const card = Inter({
  weight: "400",
  subsets: ["latin"],
});

const steps = [
  {
    id: 1,
    title: "Place the order here or book a call",
    description:
      "Choose one of our packages or schedule a free call if you'd like more information.",
    imgSrc: "/step1.jpg", // replace with real image in /public
    alt: "Order or book a call",
  },
  {
    id: 2,
    title: "Fill in our quick form",
    description:
      "After placing your order, you’ll receive a short form with questions about your company and your vision for the logo.",
    imgSrc: "/step2.jpg",
    alt: "Fill form",
  },
  {
    id: 3,
    title:
      "Our expert designer crafts three unique logo concepts tailored to your brand.",
    description:
      "Once the form is submitted, our designers will begin working immediately to craft a unique logo tailored to your brand, delivered within 48 hours.",
    imgSrc: "/step3.jpg",
    alt: "Design concepts",
  },
  {
    id: 4,
    title: "Approve or ask for changes, without limits",
    description:
      "You can review and approve the logo, or request revisions if needed. Revisions apply to one of the existing concepts.",
    imgSrc: "/step4.jpg",
    alt: "Revision approval",
  },
];

const StepCard = ({ step }) => {
  return (
  <div className="bg-gray-900 rounded-xl border-l-8 border-[#89400c] overflow-hidden flex flex-col h-full min-h-[500px]">
  {/* Image banner */}
  <div className="relative w-full h-44 sm:h-56">
  
  </div>

  {/* Content */}
  <div className="p-10 flex-1 flex flex-col items-center justify-center">
    <div className="text-center max-w-md">
      <div className="h-12 w-12 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
        {step.id}
      </div>
      <h2 className="text-2xl font-bold mb-3 text-white">{step.title}</h2>
      <p className="text-gray-300">{step.description}</p>
    </div>
  </div>
</div>
  );
};

const HowItWorks = ({ id }) => {
  return (
    <section id={id}>
      <div className="text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className={`max-w-6xl mx-auto ${card.className}`}>
          {/* Header */}
          <section className="mb-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              A Uniquely Simple <span className="text-[#89400c]">Process.</span>
            </h1>
            <div className="w-32 h-1.5 bg-[#89400c] mx-auto mb-8" />
          </section>

          {/* Steps grid */}
          <section className="grid md:grid-cols-2 gap-10">
            {steps.map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </section>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
