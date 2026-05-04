import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How do I earn coins on MicroTask?",
            answer: "You can earn coins by completing small tasks posted by buyers. Once your submission is reviewed and approved, the coins are added to your balance instantly."
        },
        {
            question: "Is there a limit on how many tasks I can do?",
            answer: "No, there is no limit! You can complete as many tasks as you want, provided you follow the instructions correctly and maintain a good success rate."
        },
        {
            question: "How can I post my own tasks as a buyer?",
            answer: "To post a task, you need to have enough coins in your account. You can purchase coins or earn them as a worker, then go to the 'Create Task' section."
        },
        {
            question: "What happens if a buyer rejects my task?",
            answer: "If a task is rejected, you can review the feedback provided. If you believe the rejection was unfair, you can raise a dispute for our support team to review."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-base-100">
            <div className="max-w-4xl mx-auto px-6">
                
                {/* Header - Matching About Page Typography */}
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
                    >
                        Questions & Answers
                    </motion.h2>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-base-content tracking-tighter"
                    >
                        Frequently Asked Questions
                    </motion.h1>
                    <div className="w-24 h-2 bg-primary mx-auto mt-6 rounded-full opacity-20"></div>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`border-2 rounded-[2rem] transition-all duration-300 ${
                                activeIndex === index ? "border-primary bg-primary/5" : "border-base-300 bg-base-200/30"
                            }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="text-lg font-black text-base-content tracking-tight uppercase">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    className="text-primary"
                                >
                                    <FaChevronDown />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-8 text-base-content/70 font-medium leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;