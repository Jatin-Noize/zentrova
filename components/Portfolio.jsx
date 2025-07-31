import React from 'react';

function Portfolio({id}) {
  return (
   <section id={id}> <div className="p-6 m-12">
         <h1 className='text-4xl m-12 font-medium text-center text-[#F56F10]'>OUR PROJECTS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Portfolio Item 1 */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg overflow-hidden h-64 transition-all hover:scale-[1.02]">
          <div className="h-full flex items-center justify-center text-white font-bold text-xl">
            Paywatch
          </div>
        </div>

        {/* Portfolio Item 2 */}
        <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-lg overflow-hidden h-64 transition-all hover:scale-[1.02]">
          <div className="h-full flex items-center justify-center text-white font-bold text-xl">
            Flexible Payroll
          </div>
        </div>

        {/* Portfolio Item 3 */}
        <div className="bg-gradient-to-br from-purple-500 to-indigo-700 rounded-xl shadow-lg overflow-hidden h-64 transition-all hover:scale-[1.02]">
          <div className="h-full flex items-center justify-center text-white font-bold text-xl">
            A G I L E
          </div>
        </div>

        {/* Portfolio Item 4 */}
        <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl shadow-lg overflow-hidden h-64 transition-all hover:scale-[1.02]">
          <div className="h-full flex items-center justify-center text-white font-bold text-xl">
            Always Adapt
          </div>
        </div>

        {/* Portfolio Item 5 */}
        <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl shadow-lg overflow-hidden h-64 transition-all hover:scale-[1.02]">
          <div className="h-full flex items-center justify-center text-white font-bold text-xl">
            FusionHealth.4
          </div>
        </div>

        {/* Portfolio Item 6 */}
        <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-lg overflow-hidden h-64 transition-all hover:scale-[1.02]">
          <div className="h-full flex items-center justify-center text-white font-bold text-xl">
            clearmatrix
          </div>
        </div>

        {/* Portfolio Item 7 */}
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg overflow-hidden h-64 transition-all hover:scale-[1.02]">
          <div className="h-full flex items-center justify-center text-white font-bold text-xl">
            Productivity Tools
          </div>
        </div>

        {/* Portfolio Item 8 */}
        <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl shadow-lg overflow-hidden h-64 transition-all hover:scale-[1.02]">
          <div className="h-full flex items-center justify-center text-white font-bold text-xl">
            Sort Now
          </div>
        </div>
      </div>
    </div></section>
  );
}

export default Portfolio;