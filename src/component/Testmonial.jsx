import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectCoverflow } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
    const reviews = [
        { id: 1, name: "ROBIUL HASAN", role: "BUYER", quote: "MicroTask has completely changed how I hire workers. The system is incredibly secure and fast!", rating: 5, img: "https://i.ibb.co/L8N7pP7/profile.png" },
        { id: 2, name: "SARAH MILLER", role: "WORKER", quote: "I've found a reliable source of income. The dashboard is easy to use and the payments are always on time.", rating: 5, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500" },
        { id: 3, name: "ALEX JOHNSON", role: "BUYER", quote: "The quality of work is outstanding. Great platform that values transparency and security.", rating: 4, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500" },
        { id: 4, name: "EMILY DAVIS", role: "WORKER", quote: "The best place for micro-tasks. Highly recommended for everyone looking for part-time work.", rating: 5, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500" }
    ];

    return (
        <section className="py-24 bg-base-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section Title - Professional & Bold */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-base-content tracking-tighter">
                        User <span className="text-primary">Feedback</span>
                    </h2>
                    <p className="mt-4 opacity-60 font-bold uppercase text-[10px] tracking-[0.4em]">What our community says about us</p>
                </div>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                    className="testimonial-swiper !pb-20"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id} className="max-w-[400px]">
                            {/* Card with your specific rounded style */}
                            <div className="bg-base-200/50 border border-base-300 p-10 rounded-[3rem] h-full flex flex-col items-center text-center shadow-xl shadow-base-200/50 transition-all duration-500 group">
                                
                                <div className="text-primary/20 mb-6 group-hover:scale-125 transition-transform duration-500">
                                    <FaQuoteLeft size={45} />
                                </div>
                                
                                <p className="text-base-content/70 mb-8 font-medium leading-relaxed italic">
                                    "{review.quote}"
                                </p>

                                <div className="flex gap-1 mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={i < review.rating ? "text-yellow-500" : "text-base-300"} size={14} />
                                    ))}
                                </div>

                                <div className="mt-auto">
                                    <div className="w-20 h-20 mx-auto mb-4 relative">
                                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all"></div>
                                        <img src={review.img} alt={review.name} className="w-full h-full object-cover rounded-full relative z-10 border-2 border-white shadow-lg" />
                                    </div>
                                    <h4 className="font-black text-lg tracking-tight text-base-content uppercase">{review.name}</h4>
                                    <p className="text-[10px] font-black text-primary tracking-widest opacity-60 italic">{review.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Custom Styling for dots and active slide */}
            <style jsx>{`
                .swiper-slide {
                    transition: all 0.5s ease;
                    opacity: 0.4;
                    filter: blur(2px);
                }
                .swiper-slide-active {
                    opacity: 1;
                    filter: blur(0);
                }
                .swiper-pagination-bullet-active {
                    background: #4F46E5 !important;
                    width: 35px !important;
                    border-radius: 12px !important;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;