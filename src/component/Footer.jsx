import React from "react";
import { Link } from "react-router";  
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200/50 backdrop-blur-sm px-2.5 md:px-0 pt-16 pb-8 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/*ব্র্যান্ড এবং ভিশন */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight">
                MICRO<span className="text-primary">TASK</span>
              </span>
            </Link>
            <p className="text-base-content/70 text-sm leading-relaxed">
              Empowering workers and buyers worldwide through a seamless micro-tasking ecosystem. Complete tasks, earn coins, and grow your digital presence.
            </p>
          </div>

          {/* (Quick Access) */}
          <div className="flex flex-col items-start lg:items-center">
            <div className="w-full lg:w-fit">
              <h4 className="text-lg font-bold mb-6 text-base-content relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-1 after:bg-primary after:rounded-full">
                Explore
              </h4>
              <ul className="space-y-4">
                <li><Link to="/" className="text-sm hover:text-primary transition-all hover:pl-2">Home</Link></li>
                <li><Link to="/all-tasks" className="text-sm hover:text-primary transition-all hover:pl-2">Browse Tasks</Link></li>
                <li><Link to="/dashboard" className="text-sm hover:text-primary transition-all hover:pl-2">My Dashboard</Link></li>
                <li><Link to="/leaderboard" className="text-sm hover:text-primary transition-all hover:pl-2">Leaderboard</Link></li>
              </ul>
            </div>
          </div>

          {/* ৩. সাপোর্ট এবং লিগ্যাল */}
          <div className="flex flex-col items-start lg:items-center">
            <div className="w-full lg:w-fit">
              <h4 className="text-lg font-bold mb-6 text-base-content relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-1 after:bg-primary after:rounded-full">
                Support
              </h4>
              <ul className="space-y-4">
                <li><Link to="/help" className="text-sm hover:text-primary transition-all hover:pl-2">Help Center</Link></li>
                <li><Link to="/terms" className="text-sm hover:text-primary transition-all hover:pl-2">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-sm hover:text-primary transition-all hover:pl-2">Privacy Policy</Link></li>
                <li><Link to="/contact" className="text-sm hover:text-primary transition-all hover:pl-2">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* ৪. সোশ্যাল কানেক্ট */}
          <div className="flex flex-col items-start lg:items-end">
            <h4 className="text-lg font-bold mb-6 text-base-content">Stay Connected</h4>
            <div className="flex gap-3 mb-6">
              {[
                { icon: <FaFacebookF />, url: "https://facebook.com/yourprofile" },
                { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/yourprofile" },
                { icon: <FaGithub />, url: "https://github.com/robiulhasanmumin" },
                { icon: <FaTwitter />, url: "https://twitter.com/yourprofile" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-base-300 text-base-content hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-xs text-base-content/50 text-left lg:text-right italic">
              Built with Passion by <br />
              <span className="text-primary font-semibold">Robiul Hasan Mumin</span>
            </p>
          </div>
        </div>

        {/* কপিরাইট এবং স্ট্যাটাস বার */}
        <div className="pt-8 border-t border-base-300 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-base-content/60">
          <p>© {new Date().getFullYear()} <span className="font-bold text-primary">MicroTask</span>. All rights reserved.</p>
          <div className="flex items-center gap-6">
             <span className="flex items-center gap-2">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span> 
               Server Online
             </span>
             <span className="opacity-50 tracking-widest uppercase">Version 1.0.4</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;