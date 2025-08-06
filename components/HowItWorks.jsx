// components/HowItWorks.jsx
"use client";

import React from "react";
import { Inter,Bebas_Neue, Ubuntu } from "next/font/google";

const card = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

const head = Bebas_Neue({  
  weight: "400",
  subsets: ['latin']
});

const head2 = Ubuntu({  
  weight: "400",
  subsets: ['latin']
});

const steps = [
  {
    id: 1,
    title: "Place the order here or book a call",
    description:
      "Choose one of our packages or schedule a free call if you'd like more information.",
  },
  {
    id: 2,
    title: "Fill in our quick form",
    description:
      "After placing your order, you'll receive a short form with questions about your company and your vision for the logo.",
  },
  {
    id: 3,
    title:
      "Our expert designer crafts three unique logo concepts tailored to your brand.",
    description:
      "Once the form is submitted, our designers will begin working immediately to craft a unique logo tailored to your brand, delivered within 48 hours.",
  },
  {
    id: 4,
    title: "Approve or ask for changes, without limits",
    description:
      "You can review and approve the logo, or request revisions if needed. Revisions apply to one of the existing concepts.",
  },
];

const StepCard = ({ step }) => {
  return (
<div className="bg-gray-900 rounded-xl border-l-8 border-amber-700 overflow-hidden flex flex-col h-full p-8 hover:bg-gray-800 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl">
  <div className="flex-1 flex flex-col items-center justify-center">
    <div className="text-center max-w-md">
      <div className="h-14 w-14 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-md">
        {step.id}
      </div>
      <h2 className="text-2xl font-bold mb-4 text-white leading-tight">
        {step.title}
      </h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        {step.description}
      </p>
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
          <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-6 ${head.className}`}>
  A Uniquely Simple <span className="text-[#c65c11]">Process.</span>
</h1>
            <div className="w-32 h-1.5 bg-[#89400c] mx-auto mb-8" />
          </section>

          {/* Steps grid */}
          <section className="grid md:grid-cols-2 gap-8">
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