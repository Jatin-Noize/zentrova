import React from 'react';
import { Mina, Syne } from "next/font/google";

const founder = Syne({
  weight: "400",
  subsets: ['latin']
});

const Founder = ({id}) => {
  return (
   <section id={id}>
     <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
       
      <div className="w-full max-w-4xl">
        <div className="relative bg-gradient-to-br from-black to-gray-900 rounded-xl overflow-hidden p-8 md:p-10 lg:p-12 mx-auto">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#F56F0F]"></div>
          <div className="absolute bottom-4 right-4 text-[#F56F0F] opacity-20 text-8xl font-bold">”</div>
          
          {/* Testimonial content */}
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-start">
              <svg 
                className="w-8 h-8 mt-1 mr-0 md:mr-4 mb-4 md:mb-0 text-[#F56F0F] flex-shrink-0" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <div className="w-full">
                <p className={`text-white text-md md:text-xl lg:text-2xl font-medium leading-relaxed mb-6 text-center md:text-left ${founder.className} `}>
                  "Zentrova designed an incredible brand in record time. No bloated process and endless meetings, just sharp, smart design with fast delivery and zero fluff."
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="bg-[#F56F0F] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                    PD
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-white font-bold text-lg">Paul Darmas</h4>
                    <p className="text-[#F56F0F] text-sm">Founder of 💡️💡️💡️</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

   </section>
  );
};

export default Founder;