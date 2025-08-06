import { motion } from 'framer-motion';
import { Inter, Syne,Bebas_Neue } from 'next/font/google';
import { Star, StarHalf, Star as StarEmpty } from "lucide-react"; 

const head = Syne({
  weight: "400",
  subsets: ['latin']
});
const head2 = Bebas_Neue({
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
      initial: 'AG',
      name: 'Ayle Gunner., Founder, Botanica Skincare',
      rating: '★★★★★ 5/5',
      content:"Working with Zentrova was an absolute game-changer for our brand. The logo they created was not only visually stunning, but it perfectly captured our brand’s essence. Their team’s creativity is unmatched — they pushed boundaries while staying true to our core values. We've had so many compliments on the new look!",
      heading:"Creative Excellence"
    },
    {
      initial: 'TW',
      name: ' Tate wyle. CEO, CoreLogix Technologies',
      rating: '★★★★★ 5/5',
       content:"Zentrova is the real deal. From our very first meeting, they treated our brand with care and professionalism. Their design process was structured yet flexible — we felt included every step of the way. What we got in the end was a world-class brand identity that we’re proud to display.",
       heading:"Professional & Polished Process"
    },
    {
      initial: 'SB',
      name: 'Sarah B., Marketing Head, NextPhase Learning',
      rating: '★★★★★ 5/5',
       content:"Zentrova’s team made it incredibly easy to collaborate remotely. Their communication was timely, clear, and thoughtful — every revision was handled with patience and skill. They really listened to what we wanted and somehow delivered even more than we imagined.",
       heading:"Smooth Communication & Collaboration"
    },
    {
      initial: 'JZ',
      name: 'Jenny Z., Co-Founder, Foodora Express',
      rating: '★★★★★ 5/5',
       content:"We were on a tight deadline to rebrand before launch, and Zentrova delivered with unbelievable speed and precision. Despite the quick timeline, nothing felt rushed — the logo and supporting brand assets were elegant, detailed, and fully aligned with our vision.",
       heading:"Fast Turnaround Without Sacrificing Quality"
    },
    {
      initial: 'LA',
      name: 'Laila Aubrey., Creative Director, ModaHaus Interiors',
      rating: '★★★★★ 5/5',
       content:"Zentrova isn’t just about good-looking logos — they understand brand strategy on a deep level. Their team asked the right questions, analyzed our market, and built a visual identity that positions us uniquely. It’s not just a logo — it’s a long-term investment.",
       heading:"Strategic Brand Thinking"
    },
    {
      initial: 'JM',
      name: 'Jessica miller, Founder, VibeWell Studios',
      rating: '★★★★★ 5/5',
       content:"I can’t recommend Zentrova enough. Their passion, skill, and attention to detail are rare to find. The entire process was smooth from start to finish, and we walked away with a brand identity that truly reflects who we are. We’ll definitely be working with them again!",
       head:"An Exceptional Experience Overall"
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
 <section id={id} className="py-12">
  {/* Heading Section */}
  <section className={`mb-12 text-center `}>
   <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold  text-center text-orange-400 ${head2.className}`}>
  TESTIMONIALS
</h1>
    <div className="w-24 h-1 bg-amber-600 mx-auto mb-8" />
  </section>

  {/* Testimonials Container */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Main Testimonial Card */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-amber-700 to-amber-900 rounded-xl p-6 md:p-8 mb-8 text-white shadow-lg"
    >
      <svg
        className="w-8 h-8 mb-4 text-amber-200"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
      </svg>
      <blockquote className={`text-base md:text-2xl font-medium mb-4 leading-relaxed ${head.className}`}>
       "Ammara Shafiq and the team at Zentrova aren’t just designers—they’re logo legends! When I needed branding for my SaaS baby, NurtureMachine, I wanted something unforgettable—and they absolutely delivered.
The logo captures our vision perfectly. It’s bold, beautiful, and proudly lives on everything from our website to our coffee mugs. If you’re looking for design that truly stands out, Zentrova is the team to call."

      </blockquote>
      <div className="flex items-center">
        <div className="bg-amber-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-3">
          J
        </div>
        <div>
          <p className="font-bold text-sm">John Danes</p>
          <p className="text-amber-200 text-xs">★★★★★ 5/5</p>
          <p className="text-xs text-amber-100 opacity-80">Founder, NurtureMachine </p>
        </div>
      </div>
    </motion.div>

    {/* Small Review Cards */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-md ring-1 ring-gray-700/50"
        >
          {/* Quote mark accent */}
          <div className="absolute top-3 right-3 text-2xl text-gray-600/40 leading-none select-none">
            “
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0">
              <div className={`bg-amber-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-sm shadow${head2.className}`}>
                {testimonial.initial}
              </div>
            </div>
            <div className={`flex-1 min-w-0 ${head.className}`}>
              <div className="flex flex-col">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-semibold text-white text-sm truncate">
                    {testimonial.heading}
                  </h3>
                  <div className="flex items-center gap-1">
                    {renderStars(parseFloat(testimonial.rating))}
                    <span className="text-xs text-amber-300">
                      {testimonial.rating}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {testimonial.name}
                </p>
              </div>
              <p className="mt-2 text-gray-300 text-md leading-relaxed line-clamp-4">
                {testimonial.content}
              </p>
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