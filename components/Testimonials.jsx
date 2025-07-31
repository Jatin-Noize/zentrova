import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';
import { Star, StarHalf, Star as StarEmpty } from "lucide-react"; 

const head = Inter({
  weight: "400",
  subsets: ['latin']
});


const Testimonials = ({id}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const testimonials = [
    {
      initial: 'F',
      name: 'Fodecilop',
      rating: '★★★★★ 5/5',
      content:"This is my Nth logo design project with Louis. His work is so exceptional that I keep coming back. Highly recommended designer to craft your next vision."
    },
    {
      initial: 'S',
      name: 'Sporren8',
      rating: '★★★★★ 5/5',
       content:"This is my Nth logo design project with Louis. His work is so exceptional that I keep coming back. Highly recommended designer to craft your next vision."
    },
    {
      initial: 'R',
      name: 'Riseglobalindia',
      rating: '★★★★★ 5/5',
       content:"This is my Nth logo design project with Louis. His work is so exceptional that I keep coming back. Highly recommended designer to craft your next vision."
    },
    {
      initial: 'M',
      name: 'MarketingPro',
      rating: '★★★★★ 5/5',
       content:"This is my Nth logo design project with Louis. His work is so exceptional that I keep coming back. Highly recommended designer to craft your next vision."
    },
    {
      initial: 'T',
      name: 'TechStart',
      rating: '★★★★★ 5/5',
       content:"This is my Nth logo design project with Louis. His work is so exceptional that I keep coming back. Highly recommended designer to craft your next vision."
    },
    {
      initial: 'D',
      name: 'DesignHub',
      rating: '★★★★★ 5/5',
       content:"This is my Nth logo design project with Louis. His work is so exceptional that I keep coming back. Highly recommended designer to craft your next vision."
    }
  ];

  const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} className="h-4 w-4 text-amber-400" />);
  }
  if (halfStar) {
    stars.push(<StarHalf key="half" className="h-4 w-4 text-amber-400" />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <StarEmpty
        key={`empty-${i}`}
        className="h-4 w-4 text-amber-600 opacity-50"
      />
    );
  }
  return stars;
};

  return (
   <section id={id} >
    <section className={`mb-20 text-center ${head.className} `}>
            <h1 className="text-5xl text-orange-400 md:text-6xl font-bold mb-6">
              TESTIMONIALS
            </h1>
            <div className="w-32 h-1.5 bg-[#89400c] mx-auto mb-8" />
          </section>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
      {/* Main Testimonial Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-amber-700 to-amber-900 rounded-2xl p-8 md:p-12 mb-12 text-white shadow-xl"
      >
        <svg
          className="w-10 h-10 mb-6 text-amber-200"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
        </svg>
        <blockquote className="text-lg md:text-xl lg:text-2xl font-medium mb-6">
          "Let me start by saying Louis Key and the crew at Softriver aren't just designers—they're logo superheroes! When I needed a logo for my SaaS baby, NurtureMachine, I didn't just want something nice; I wanted something that would knock people's socks off. And boy, did they deliver! ... I couldn't be prouder to slap that logo on everything from our website to our coffee mugs. So, if you're looking for designers who will take your vision and turn it into something beyond your wildest dreams, look no further than Louis Key and Softriver."
        </blockquote>
        <div className="flex items-center">
          <div className="bg-amber-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mr-4">
            J
          </div>
          <div>
            <p className="font-bold">John Danes</p>
            <p className="text-amber-200">★★★★★ 5/5</p>
            <p className="text-sm text-amber-100">Marketing Agency Founder – USA</p>
          </div>
        </div>
      </motion.div>

      {/* Small Review Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial, index) => (
         <motion.div
  key={index}
  variants={itemVariants}
  className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-xl ring-1 ring-gray-700 overflow-hidden"
>
  {/* Quote mark accent */}
  <div className="absolute top-4 right-4 text-3xl text-gray-600/40 leading-none select-none">
    “
  </div>

  <div className="flex gap-4">
    <div className="flex-shrink-0">
      <div className="bg-amber-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg shadow-md">
        {testimonial.initial}
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <p className="font-semibold text-white text-base">{testimonial.name}</p>
        <div className="flex items-center gap-1 mt-1 sm:mt-0">
          {renderStars(parseFloat(testimonial.rating))}
          <span className="text-sm text-amber-300 ml-1">
            {testimonial.rating}/5
          </span>
        </div>
      </div>
      <p className="mt-3 text-gray-300 text-sm leading-relaxed">{testimonial.content}</p>
    </div>
  </div>
</motion.div>
        ))}
      </motion.div>
    </div>
   </section>
  );
};

export default Testimonials;