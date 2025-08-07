import React from 'react';
import { Inter, Bebas_Neue } from 'next/font/google';
import Image from 'next/image';
import img1 from "../public/images/test1.webp";
import img2 from "../public/images/test2.webp";
import img3 from "../public/images/test3.webp";
import img4 from "../public/images/test4.webp";

const head = Bebas_Neue({  
  weight: "400",
  subsets: ['latin']
});

function Portfolio({id}) {
  return (
    <section id={id} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto"> {/* Increased from max-w-4xl to max-w-6xl */}
        <h1 className={`text-6xl md:text-7xl lg:text-8xl mb-12 font-bold text-center text-[#F56F10] ${head.className}`}>
          OUR PROJECTS
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
          {/* Portfolio Item 1 */}
          <div className="relative rounded-xl hover:shadow-orange-400  shadow-lg overflow-hidden aspect-video transition-all duration-300 hover:scale-[1.03]">
            <Image 
              src={img1}
              alt="Paywatch Project"
              layout="fill"
              objectFit="cover"
              className="hover:opacity-90 transition-opacity"
              quality={100} 
            />
          </div>

          {/* Portfolio Item 2 */}
          <div className="relative rounded-xl hover:shadow-orange-400    shadow-lg overflow-hidden aspect-video transition-all duration-300 hover:scale-[1.03]">
            <Image 
              src={img2}
              alt="Flexible Payroll Project"
              layout="fill"
              objectFit="cover"
              className="hover:opacity-90 transition-opacity"
              quality={100}
            />
          </div>

          {/* Portfolio Item 3 */}
          <div className="relative rounded-xl shadow-lg hover:shadow-orange-400 overflow-hidden aspect-video transition-all duration-300 hover:scale-[1.03]">
            <Image 
              src={img3}
              alt="AGILE Project"
              layout="fill"
              objectFit="cover"
              className="hover:opacity-90 transition-opacity"
              quality={100}
            />
          </div>

          {/* Portfolio Item 4 */}
          <div className="relative rounded-xl shadow-lg hover:shadow-orange-400  overflow-hidden aspect-video transition-all duration-300 hover:scale-[1.03]">
            <Image 
              src={img4}
              alt="Always Adapt Project"
              layout="fill"
              objectFit="cover"
              className="hover:opacity-90 transition-opacity"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;