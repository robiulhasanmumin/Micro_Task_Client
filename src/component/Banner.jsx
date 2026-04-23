import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1920",
      title: "Empower Your Business",
      heading: "Hire Expert Workers for Your Small Tasks",
      description: "Join thousands of businesses getting things done faster with our dedicated micro-task force.",
    },
    {
      id: 2,
      image: "https://img.freepik.com/premium-photo/two-business-people-sitting-desks-office-using-computers_274679-12980.jpg",
      title: "Earn from Anywhere",
      heading: "Turn Your Free Time into Extra Income",
      description: "Complete simple tasks, earn coins, and withdraw real money easily from our secure platform.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1920",
      title: "Trusted Platform",
      heading: "The Most Reliable Micro-Task Marketplace",
      description: "Experience a transparent workflow with secure payments and 24/7 dedicated support.",
    },
  ];

  return (
    <div className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/50" />

              <div className="relative h-full flex items-center justify-center text-center px-6">
                <div className="max-w-4xl">
                  {/* Title with Framer Motion Animation */}
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block text-primary font-bold uppercase tracking-widest mb-4 bg-primary/10 px-4 py-1 rounded-full border border-primary/20"
                  >
                    {slide.title}
                  </motion.span>

                  {/* Heading with Animation */}
                  <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight"
                  >
                    {slide.heading}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
                  >
                    {slide.description}
                  </motion.p>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-4"
                  >
                    <button className="btn btn-primary btn-lg rounded-full px-8 text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/30">
                      Explore Tasks
                    </button>
                    <button className="btn btn-outline btn-lg rounded-full px-8 text-white border-2 hover:bg-white hover:text-black transition-all">
                      Become a Worker
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Styles for Swiper Pagination */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev { color: #fff !important; }
        .swiper-pagination-bullet { background: #fff !important; opacity: 0.5; }
        .swiper-pagination-bullet-active { background: #your-primary-color !important; opacity: 1; width: 30px; border-radius: 5px; }
      `}</style>
    </div>
  );
};

export default Banner;