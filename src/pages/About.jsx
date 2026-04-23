import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaShieldAlt, FaCoins, FaCheckCircle } from "react-icons/fa";

const About = () => {
  const stats = [
    { id: 1, icon: <FaUsers />, label: "Active Workers", value: "10K+" },
    { id: 2, icon: <FaCheckCircle />, label: "Tasks Completed", value: "50K+" },
    { id: 3, icon: <FaCoins />, label: "Coins Distributed", value: "1M+" },
    { id: 4, icon: <FaShieldAlt />, label: "Secure Payments", value: "100%" },
  ];

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 bg-primary/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold uppercase tracking-widest mb-3"
          >
            About MicroTask
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black text-base-content mb-6"
          >
            Connecting Ambition with <br /> <span className="text-primary">Opportunity</span>
          </motion.h1>
          <p className="max-w-2xl mx-auto text-lg opacity-70">
            MicroTask is a next-generation marketplace where small tasks meet big results. 
            We empower workers to earn and help businesses grow through a secure coin-based ecosystem.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000" 
            alt="Team Working" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold tracking-tight">How it Works</h3>
          <p className="text-lg opacity-75">
            Our platform is built on the MERN stack to ensure speed and reliability. 
            Buyers post micro-tasks with a set coin value, and our global network of verified 
            workers complete them to earn rewards.
          </p>
          <ul className="space-y-4">
            {['Secure Coin-Based System', 'Real-time Task Tracking', 'Instant Role Management', 'Verified User Community'].map((item, index) => (
              <li key={index} className="flex items-center gap-3 font-medium">
                <FaCheckCircle className="text-primary" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {stats.map((stat) => (
            <motion.div 
              key={stat.id}
              whileHover={{ scale: 1.05 }}
              className="space-y-2"
            >
              <div className="text-3xl flex justify-center opacity-80">{stat.icon}</div>
              <div className="text-4xl font-black">{stat.value}</div>
              <div className="text-sm uppercase tracking-widest font-bold opacity-70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 text-center max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black mb-12 uppercase">Why MicroTask?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-base-200 rounded-3xl hover:shadow-xl transition-all border border-base-300">
            <h4 className="text-xl font-bold mb-4">For Buyers</h4>
            <p className="opacity-70 text-sm">Get your tasks done quickly by thousands of workers with guaranteed quality and fair pricing.</p>
          </div>
          <div className="p-8 bg-primary/10 rounded-3xl border-2 border-primary hover:shadow-xl transition-all">
            <h4 className="text-xl font-bold mb-4">Transparency</h4>
            <p className="opacity-70 text-sm">Every coin earned and task completed is recorded securely in our database for 100% trust.</p>
          </div>
          <div className="p-8 bg-base-200 rounded-3xl hover:shadow-xl transition-all border border-base-300">
            <h4 className="text-xl font-bold mb-4">For Workers</h4>
            <p className="opacity-70 text-sm">Access a steady stream of micro-tasks and earn coins that you can easily manage in your dashboard.</p>
          </div>
        </div>
      </section>
      {/* Meet Our Team Section */}
<section className="py-20 bg-base-200/50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-black uppercase tracking-tighter"
      >
        Behind the <span className="text-primary">Success</span>
      </motion.h2>
      <p className="opacity-60 mt-4 uppercase text-xs tracking-[0.3em] font-bold">The creative minds building MicroTask</p>
    </div>

    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
      {/* Example Team Member Card */}
      {[
        { name: "Robiul Hasan Mumin", role: "MERN Developer", img: "https://i.ibb.co.com/8nXw16f7/Mumin.jpg" },
        { name: "Alex Johnson", role: "UI/UX Designer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500" },
        { name: "Suraj Khan", role: "Project Manager", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMZzZcw0K_YiPYmtAARhLWMj1SJERN5M2hsQ&s" },
        { name: "David Miller", role: "Backend Architect", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500" }
      ].map((member, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="bg-base-100 p-6 rounded-[2rem] shadow-xl border border-base-300 text-center group"
        >
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 bg-primary rounded-full scale-110 opacity-10 group-hover:scale-125 transition-transform"></div>
            <img 
              src={member.img} 
              alt={member.name} 
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <h4 className="text-xl font-bold mb-1">{member.name}</h4>
          <p className="text-sm text-primary font-medium uppercase tracking-widest">{member.role}</p>
          
          {/* Social Icons Placeholder */}
          <div className="flex justify-center gap-4 mt-6 opacity-40 group-hover:opacity-100 transition-opacity">
            <span className="w-8 h-8 bg-base-300 rounded-full flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer transition-all">in</span>
            <span className="w-8 h-8 bg-base-300 rounded-full flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer transition-all">git</span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default About;