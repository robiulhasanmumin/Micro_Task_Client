import React from "react";
import { motion } from "framer-motion";
import { FaShareAlt, FaPenNib, FaDatabase, FaMobileAlt, FaSearch, FaVideo } from "react-icons/fa";

const FeaturedCategories = () => {
    const categories = [
        { id: 1, icon: <FaShareAlt />, title: "Social Media", count: "1,200+ Tasks" },
        { id: 2, icon: <FaPenNib />, title: "Content Writing", count: "850+ Tasks" },
        { id: 3, icon: <FaDatabase />, title: "Data Entry", count: "2,100+ Tasks" },
        { id: 4, icon: <FaMobileAlt />, title: "App Testing", count: "450+ Tasks" },
        { id: 5, icon: <FaSearch />, title: "SEO & Research", count: "600+ Tasks" },
        { id: 6, icon: <FaVideo />, title: "Video Surveys", count: "300+ Tasks" }
    ];

    return (
        <section className="py-24 bg-base-100">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header - Matching About Page Typography */}
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
                    >
                        Explore Opportunities
                    </motion.h2>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-base-content tracking-tighter"
                    >
                        Popular Categories
                    </motion.h1>
                    <div className="w-24 h-2 bg-primary mx-auto mt-6 rounded-full opacity-20"></div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div 
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-base-200/40 p-10 rounded-[3rem] border border-base-300 flex items-center gap-6 group hover:border-primary/40 transition-all duration-500 shadow-sm"
                        >
                            {/* Icon Box */}
                            <div className="w-16 h-16 bg-base-100 rounded-2xl flex items-center justify-center text-primary text-2xl shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                {category.icon}
                            </div>

                            {/* Info */}
                            <div>
                                <h3 className="text-xl font-black text-base-content tracking-tight uppercase">
                                    {category.title}
                                </h3>
                                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1">
                                    {category.count}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;