import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        Swal.fire({
            icon: 'success',
            title: 'Message Received!',
            text: `Thanks ${data.name}, we'll get back to you soon.`,
            showConfirmButton: false,
            timer: 2000,
            customClass: {
                popup: 'rounded-[2rem] bg-base-100 text-base-content',
            }
        });
        reset();
    };

    return (
        <div className="bg-base-100 transition-colors duration-300 min-h-screen pb-20">
            {/* Minimalist Header - Like your About Page */}
            <section className="py-20 bg-primary/5 text-center px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Get Support</h2>
                    <h1 className="text-4xl md:text-6xl font-black text-base-content mb-6 tracking-tight">
                        Let's Talk About <br /> <span className="text-primary">Your Success</span>
                    </h1>
                    <p className="max-w-2xl mx-auto opacity-70 text-lg">
                        Have questions about our micro-task marketplace? Our team is here to provide 24/7 assistance for buyers and workers alike.
                    </p>
                </motion.div>
            </section>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 mt-12">
                
                {/* Info Section - Matches your Card Style */}
                <div className="lg:col-span-4 space-y-6">
                    {[
                        { icon: <FaPhoneAlt />, title: "Quick Call", val: "+880 123 456 789" },
                        { icon: <FaEnvelope />, title: "Official Email", val: "support@microtask.com" },
                        { icon: <FaMapMarkerAlt />, title: "Our Location", val: "Dhaka, Bangladesh" }
                    ].map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="p-8 rounded-[2rem] bg-base-200/50 border border-base-300 flex items-center gap-6 group hover:border-primary transition-all shadow-sm"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center text-xl shadow-lg shadow-primary/20">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase opacity-40 tracking-widest">{item.title}</h4>
                                <p className="font-bold text-base-content">{item.val}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Form - Dark Mode Friendly */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="lg:col-span-8 bg-base-100 p-8 md:p-12 rounded-[3rem] border border-base-300 shadow-2xl shadow-base-300/10"
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label-text font-bold text-[10px] uppercase opacity-50 ml-2 mb-2">Full Name</label>
                                <input 
                                    {...register("name", { required: "Name is required" })}
                                    className={`input input-bordered w-full rounded-2xl h-14 bg-base-200 border-none focus:ring-2 focus:ring-primary/40 ${errors.name ? 'ring-2 ring-error' : ''}`} 
                                    placeholder="John Doe"
                                />
                                {errors.name && <span className="text-error text-[10px] mt-1 ml-2 font-bold uppercase tracking-tighter">{errors.name.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label-text font-bold text-[10px] uppercase opacity-50 ml-2 mb-2">Email Address</label>
                                <input 
                                    {...register("email", { required: "Email is required" })}
                                    className={`input input-bordered w-full rounded-2xl h-14 bg-base-200 border-none focus:ring-2 focus:ring-primary/40 ${errors.email ? 'ring-2 ring-error' : ''}`} 
                                    placeholder="john@example.com"
                                />
                                {errors.email && <span className="text-error text-[10px] mt-1 ml-2 font-bold uppercase tracking-tighter">{errors.email.message}</span>}
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label-text font-bold text-[10px] uppercase opacity-50 ml-2 mb-2">How can we help?</label>
                            <textarea 
                                {...register("message", { required: "Message is required" })}
                                className={`textarea textarea-bordered w-full rounded-[2rem] h-40 bg-base-200 border-none focus:ring-2 focus:ring-primary/40 p-6 ${errors.message ? 'ring-2 ring-error' : ''}`} 
                                placeholder="Describe your issue or feedback..."
                            ></textarea>
                            {errors.message && <span className="text-error text-[10px] mt-1 ml-2 font-bold uppercase tracking-tighter">{errors.message.message}</span>}
                        </div>

                        <button className="btn btn-primary w-full md:w-auto px-12 h-14 rounded-2xl text-white font-black uppercase tracking-widest shadow-xl shadow-primary/30 flex items-center gap-3 transition-transform active:scale-95">
                            Send Message <FaPaperPlane />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;