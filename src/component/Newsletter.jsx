import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import Swal from "sweetalert2";

const Newsletter = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Subscribed!',
            text: 'Thank you for joining our newsletter.',
            showConfirmButton: false,
            timer: 2000,
            customClass: {
                popup: 'rounded-[2rem] bg-base-100 text-base-content',
            }
        });
        e.target.reset();
    };

    return (
        <section className="py-24 px-6 bg-base-100">
            <div className="max-w-6xl mx-auto">
                {/* Main Container with matching About Page Rounded Style */}
                <div className="bg-primary/5 border border-primary/10 p-10 md:p-20 rounded-[4rem] text-center relative overflow-hidden">
                    
                    {/* Background Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary opacity-10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        {/* Header - No Italics, Bold Typography */}
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
                        >
                            Stay Updated
                        </motion.h2>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-base-content tracking-tighter mb-8"
                        >
                            Join Our Newsletter
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="max-w-xl mx-auto text-base-content/60 font-medium leading-relaxed mb-12"
                        >
                            Get the latest micro-tasks, earning tips, and platform updates delivered straight to your inbox every week.
                        </motion.p>

                        {/* Subscription Form */}
                        <motion.form 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            onSubmit={handleSubscribe}
                            className="flex flex-col md:flex-row gap-4 max-w-2xl items-center mx-auto bg-base-100 p-3 rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-base-200"
                        >
                            <input 
                                type="email" 
                                required
                                placeholder="Enter your email address" 
                                className="input w-full bg-transparent border-none focus:outline-none px-6 font-bold text-base-content placeholder:opacity-30"
                            />
                            <button className="btn btn-primary h-14 px-10 rounded-[2rem] text-white font-black uppercase tracking-widest flex items-center gap-3 shadow-lg shadow-primary/30 transition-all active:scale-95">
                                Subscribe <FaPaperPlane />
                            </button>
                        </motion.form>
                        
                        <p className="mt-6 text-[10px] font-bold uppercase opacity-30 tracking-widest">
                            No spam, only valuable updates for workers and buyers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;