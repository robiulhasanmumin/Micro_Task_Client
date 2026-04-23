import React from "react";
import { motion } from "framer-motion";
import { FaLock, FaUserShield, FaCookieBite, FaEyeSlash } from "react-icons/fa";

const Privacy = () => {
  const sections = [
    {
      icon: <FaUserShield className="text-primary text-2xl" />,
      title: "Information We Collect",
      desc: "We collect information you provide directly to us, such as your name, email address, profile picture, and role selection during registration. This helps us personalize your experience and manage your coin balance.",
    },
    {
      icon: <FaLock className="text-primary text-2xl" />,
      title: "How We Use Your Data",
      desc: "Your data is used to maintain your account, process coin transactions between Buyers and Workers, and provide customer support. We do not sell your personal information to third parties.",
    },
    {
      icon: <FaCookieBite className="text-primary text-2xl" />,
      title: "Cookies & Tracking",
      desc: "We use cookies to keep you logged in and remember your preferences. These are small files stored on your device that help us improve platform security and performance.",
    },
    {
      icon: <FaEyeSlash className="text-primary text-2xl" />,
      title: "Data Security",
      desc: "We implement industry-standard security measures including JWT (JSON Web Tokens) for authentication and secure database encryption to protect your sensitive information.",
    },
  ];

  return (
    <div className="bg-base-100 min-h-screen pb-20">
      {/* Title Header */}
      <section className="py-16 bg-primary/5 border-b border-base-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
          >
            Privacy <span className="text-primary">Policy</span>
          </motion.h1>
          <p className="text-sm opacity-50 uppercase tracking-[0.2em] font-bold">
            Last Updated: April 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 items-start p-8 bg-base-200/30 rounded-[2rem] border border-base-200 hover:border-primary/30 transition-colors"
            >
              <div className="mt-1">{section.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">
                  {section.title}
                </h3>
                <p className="opacity-70 leading-relaxed">
                  {section.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Info Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-10 bg-primary rounded-[2.5rem] text-white text-center shadow-2xl shadow-primary/20"
        >
          <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
          <p className="opacity-80 mb-6">If you have any concerns about your privacy or data usage, please reach out to our support team.</p>
          <button className="btn btn-white rounded-full px-8 font-bold border-none bg-white text-primary hover:bg-gray-100">
            Contact Support
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Privacy;