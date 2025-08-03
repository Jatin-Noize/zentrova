import React from 'react';
import { Inter } from 'next/font/google';

const head = Inter({  
  weight: "400",
  subsets: ['latin']
});
function Portfolio({id}) {
  return (
<section id={id} className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto">
    <h1 className={`text-4xl md:text-5xl lg:text-6xl mb-12 font-semibold text-center text-[#F56F10] ${head.className}`}>
      OUR PROJECTS
    </h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Portfolio Item 1 */}
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg overflow-hidden aspect-[4/3] transition-all duration-300 hover:scale-[1.03]">
        <div className="h-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl p-4">
          Paywatch
        </div>
      </div>

      {/* Portfolio Item 2 */}
      <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-lg overflow-hidden aspect-[4/3] transition-all duration-300 hover:scale-[1.03]">
        <div className="h-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl p-4">
          Flexible Payroll
        </div>
      </div>

      {/* Portfolio Item 3 */}
      <div className="bg-gradient-to-br from-purple-500 to-indigo-700 rounded-xl shadow-lg overflow-hidden aspect-[4/3] transition-all duration-300 hover:scale-[1.03]">
        <div className="h-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl p-4">
          A G I L E
        </div>
      </div>

      {/* Portfolio Item 4 */}
      <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl shadow-lg overflow-hidden aspect-[4/3] transition-all duration-300 hover:scale-[1.03]">
        <div className="h-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl p-4">
          Always Adapt
        </div>
      </div>

      {/* Portfolio Item 5 */}
      <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl shadow-lg overflow-hidden aspect-[4/3] transition-all duration-300 hover:scale-[1.03]">
        <div className="h-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl p-4">
          FusionHealth.4
        </div>
      </div>

      {/* Portfolio Item 6 */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-lg overflow-hidden aspect-[4/3] transition-all duration-300 hover:scale-[1.03]">
        <div className="h-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl p-4">
          clearmatrix
        </div>
      </div>

      {/* Portfolio Item 7 */}
      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg overflow-hidden aspect-[4/3] transition-all duration-300 hover:scale-[1.03]">
        <div className="h-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl p-4">
          Productivity Tools
        </div>
      </div>

      {/* Portfolio Item 8 */}
      <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl shadow-lg overflow-hidden aspect-[4/3] transition-all duration-300 hover:scale-[1.03]">
        <div className="h-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl p-4">
          Sort Now
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Portfolio;