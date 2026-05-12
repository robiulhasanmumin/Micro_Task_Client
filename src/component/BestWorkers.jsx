import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaCoins, FaCrown } from "react-icons/fa";
 import useAxiosPublic from "../hooks/useAxiosPublic";

const BestWorkers = () => {
    const [workers, setWorkers] = useState([]);
        const axiosPublic = useAxiosPublic();


    useEffect(() => {
         axiosPublic.get("/best-workers")
            .then(res => setWorkers(res.data))
            .catch(err => console.error(err));
    }, []);

 if (workers.length === 0) {
    return (
        <div className="text-center py-20">
            <p className="text-base-content/30 font-black uppercase tracking-widest">
                No workers found yet. Start earning to be the first!
            </p>
        </div>
    );
}

    return (
        <section className="py-24 bg-base-100">
            <div className="max-w-7xl mx-auto px-6">
                
                 <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
                    >
                        Top Performers
                    </motion.h2>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-base-content tracking-tighter"
                    >
                        Best Workers
                    </motion.h1>
                    <div className="w-24 h-2 bg-primary mx-auto mt-6 rounded-full opacity-20"></div>
                </div>

                {/* Workers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {workers.map((worker, index) => (
                        <motion.div 
                            key={worker._id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-base-200/40 p-8 rounded-[3.5rem] border border-base-300 flex flex-col items-center text-center relative group hover:border-primary/40 transition-all duration-500 shadow-sm"
                        >
                             {index < 3 && (
                                <div className="absolute top-6 right-8 text-yellow-500 animate-bounce">
                                    <FaCrown size={24} />
                                </div>
                            )}

                             <div className="w-24 h-24 rounded-full p-1 border-4 border-primary/10 mb-6 overflow-hidden">
                                <img 
                                    src={worker.photoURL || worker.image} 
                                    alt={worker.name} 
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>

                             <h3 className="text-2xl font-black text-base-content tracking-tight uppercase mb-5">
                                {worker.name}
                            </h3>

                            {/* Coins Badge */}
                            <div className="flex items-center gap-2 bg-primary/10 px-6 py-2 rounded-full border border-primary/20 group-hover:bg-primary transition-all duration-500">
                                <FaCoins className="text-yellow-500 group-hover:text-white" />
                                <span className="font-black text-primary group-hover:text-white">
                                    {worker.coins} Coins
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestWorkers;