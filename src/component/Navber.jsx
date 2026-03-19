import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";  

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const user = null; 
  const coins = 0; 

  const navLinkClass = ({ isActive }) =>
    `relative py-1 transition-all duration-300 hover:text-primary ${
      isActive ? "text-primary font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" : "text-base-content"
    }`;

   const joinDevBtn = (
    <a
      href="https://github.com/robiulhasanmumin/Micro_Task_Client.git"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline btn-primary btn-sm rounded-full px-4 hover:scale-105 transition-all text-[10px] lg:text-xs"
    >
      Join as Developer
    </a>
  );

  return (
    <nav className="bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* ১. লোগো */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-1.5 rounded-lg rotate-3 group-hover:rotate-0 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <span className="text-lg lg:text-xl font-black tracking-tighter">
                MICRO<span className="text-primary">TASK</span>
              </span>
            </Link>
          </div>

          {/* ২. ডেস্কটপ কন্টেন্ট */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center space-x-6">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
              {user && <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>}
            </div>

            {/* থিম টগলার */}
            <label className="swap swap-rotate text-primary mx-2 border-l border-base-300 pl-4">
              <input type="checkbox" onChange={handleToggle} checked={theme === "dark"} />
              <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
              <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.69Z"/></svg>
            </label>

            <div className="flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold border border-primary/20">🪙 {coins}</div>
                  <img className="w-9 h-9 rounded-full ring-2 ring-primary ring-offset-2" src={user?.photoURL} alt="user" />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link to="/login" className="btn btn-outline btn-primary btn-sm">Login</Link>
                  <Link to="/register" className="btn btn-sm bg-gradient-to-r from-[#FA812F] to-[#FFB22C] text-white border-none shadow-md shadow-primary/20">Register</Link>
                </div>
              )}
              {joinDevBtn}
            </div>
          </div>

          {/* ৩. মোবাইল বাটন গ্রুপ */}
          <div className="md:hidden flex items-center gap-2">
            {joinDevBtn}
            <label className="swap swap-rotate text-primary p-1">
              <input type="checkbox" onChange={handleToggle} checked={theme === "dark"} />
              <svg className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
              <svg className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.69Z"/></svg>
            </label>
            <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost btn-sm btn-square">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-base-100 border-t border-base-200 px-4 py-4 space-y-3 shadow-lg">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="block font-medium py-2 border-b border-base-200">Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className="block font-medium py-2 border-b border-base-200">About</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block font-medium py-2 border-b border-base-200">Contact Us</NavLink>
          {user && <NavLink to="/dashboard" onClick={() => setIsOpen(false)} className="block font-medium py-2 border-b border-base-200">Dashboard</NavLink>}
          {!user && (
            <div className="flex gap-2 pt-2">
              <Link to="/login" onClick={() => setIsOpen(false)} className="btn btn-sm btn-outline btn-primary flex-1">Login</Link>
              <Link to="/register" onClick={() => setIsOpen(false)} className="btn btn-sm btn-primary flex-1">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navber;