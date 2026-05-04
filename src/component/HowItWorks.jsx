import React from "react";
import { motion } from "framer-motion";
import { FaUserPlus, FaTasks, FaCoins } from "react-icons/fa";

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            icon: <FaUserPlus />,
            title: "Register Account",
            desc: "Join our community by creating a secure profile as a Worker or Buyer in just a few clicks."
        },
        {
            id: 2,
            icon: <FaTasks />,
            title: "Complete Tasks",
            desc: "Browse through available micro-tasks, follow simple instructions, and submit your proof."
        },
        {
            id: 3,
            icon: <FaCoins />,
            title: "Earn Rewards",
            desc: "Get your coins credited instantly once the buyer approves your submitted task successfully."
        }
    ];

    return (
        <section className="py-24 bg-base-100">
            <div className="max-w-7xl mx-auto px-6">
                
                 <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
                    >
                        Easy Process
                    </motion.h2>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-base-content tracking-tighter"
                    >
                        How MicroTask Works
                    </motion.h1>
                    <div className="w-24 h-2 bg-primary mx-auto mt-6 rounded-full opacity-20"></div>
                </div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-base-200/40 p-12 rounded-[3.5rem] border border-base-300 text-center group hover:border-primary/40 transition-all duration-500 shadow-sm"
                        >
                             <div className="w-20 h-20 bg-primary text-white rounded-[1.5rem] flex items-center justify-center text-3xl mx-auto mb-8 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                                {step.icon}
                            </div>

                             <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-base-content">
                                {step.title}
                            </h3>
                            
                             <p className="opacity-70 font-medium leading-relaxed">
                                {step.desc}
                            </p>

                            {/* Step Number Indicator */}
                            <div className="mt-8 inline-block px-4 py-1 bg-base-300 rounded-full text-[10px] font-black text-primary uppercase">
                                Step 0{step.id}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;