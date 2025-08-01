import React from 'react';
import { Inter } from 'next/font/google';

const head = Inter({
  weight: "400",
  subsets: ['latin']
});
function Portfolio({id}) {
  return (
   <section id={id}><div className=" m-12">
  <h1 className={`text-6xl m-12 font-semibold text-center text-[#F56F10] ${head.className} `}>OUR PROJECTS</h1>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto max-w-6xl">
    {/* Portfolio Item 1 */}
    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg overflow-hidden h-[500px] w-full transition-all hover:scale-[1.02]">
      <div className="h-full flex items-center justify-center text-white font-bold text-3xl">
        Paywatch
      </div>
    </div>

    {/* Portfolio Item 2 */}
    <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-lg overflow-hidden h-[500px] w-full transition-all hover:scale-[1.02]">
      <div className="h-full flex items-center justify-center text-white font-bold text-3xl">
        Flexible Payroll
      </div>
    </div>

    {/* Portfolio Item 3 */}
    <div className="bg-gradient-to-br from-purple-500 to-indigo-700 rounded-xl shadow-lg overflow-hidden h-[500px] w-full transition-all hover:scale-[1.02]">
      <div className="h-full flex items-center justify-center text-white font-bold text-3xl">
        A G I L E
      </div>
    </div>

    {/* Portfolio Item 4 */}
    <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl shadow-lg overflow-hidden h-[500px] w-full transition-all hover:scale-[1.02]">
      <div className="h-full flex items-center justify-center text-white font-bold text-3xl">
        Always Adapt
      </div>
    </div>

    {/* Portfolio Item 5 */}
    <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl shadow-lg overflow-hidden h-[500px] w-full transition-all hover:scale-[1.02]">
      <div className="h-full flex items-center justify-center text-white font-bold text-3xl">
        FusionHealth.4
      </div>
    </div>

    {/* Portfolio Item 6 */}
    <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-lg overflow-hidden h-[500px] w-full transition-all hover:scale-[1.02]">
      <div className="h-full flex items-center justify-center text-white font-bold text-3xl">
        clearmatrix
      </div>
    </div>

    {/* Portfolio Item 7 */}
    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg overflow-hidden h-[500px] w-full transition-all hover:scale-[1.02]">
      <div className="h-full flex items-center justify-center text-white font-bold text-3xl">
        Productivity Tools
      </div>
    </div>

    {/* Portfolio Item 8 */}
    <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl shadow-lg overflow-hidden h-[500px] w-full transition-all hover:scale-[1.02]">
      <div className="h-full flex items-center justify-center text-white font-bold text-3xl">
        Sort Now
      </div>
    </div>
  </div>
</div></section>
  );
}

export default Portfolio;