import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaTasks, FaCheckCircle, FaCoins } from "react-icons/fa";

const Statistics = () => {
    const stats = [
        {
            id: 1,
            icon: <FaUsers />,
            value: "25K+",
            label: "Registered Users",
            color: "text-blue-500"
        },
        {
            id: 2,
            icon: <FaTasks />,
            value: "100K+",
            label: "Tasks Completed",
            color: "text-primary"
        },
        {
            id: 3,
            icon: <FaCheckCircle />,
            value: "95%",
            label: "Success Rate",
            color: "text-green-500"
        },
        {
            id: 4,
            icon: <FaCoins />,
            value: "$50K+",
            label: "Total Paid Out",
            color: "text-orange-500"
        }
    ];

    return (
        <section className="py-24 bg-base-100">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section Header - Matching About Page Typography */}
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
                    >
                        Platform Impact
                    </motion.h2>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-base-content tracking-tighter"
                    >
                        MicroTask in Numbers
                    </motion.h1>
                    <div className="w-24 h-2 bg-primary mx-auto mt-6 rounded-full opacity-20"></div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={stat.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-base-200/40 p-8 rounded-[3.5rem] border border-base-300 flex flex-col items-center text-center group hover:border-primary/40 transition-all duration-500"
                        >
                            {/* Icon Box */}
                            <div className={`${stat.color} bg-base-100 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500`}>
                                {stat.icon}
                            </div>

                            {/* Bold Value */}
                            <h3 className="text-3xl md:text-5xl font-black text-base-content tracking-tighter mb-2">
                                {stat.value}
                            </h3>
                            
                            {/* Label */}
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;