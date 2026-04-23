import React, { useContext, useEffect, useState } from "react";
import { FaCoins, FaGithub, FaSignOutAlt, FaInfoCircle, FaEnvelope, FaShieldAlt, FaHome, FaThLarge } from "react-icons/fa";
import { Link, NavLink } from "react-router"; 
import Swal from "sweetalert2";
import { AuthContext } from "../AuthContext/AuthContext";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [dbUser, setDbUser] = useState(null);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (user?.email) {
      axiosPublic.get(`/users/${user.email}`)
        .then(res => setDbUser(res.data))
        .catch(err => console.log(err));
    }
  }, [user?.email, axiosPublic]);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FA812F",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          Swal.fire({
            title: "Logged Out!",
            text: "Successfully logged out.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
          });
        });
      }
    });
  };

  const handleToggle = (e) => setTheme(e.target.checked ? "dark" : "light");

  const navLinkClass = ({ isActive }) =>
    `relative py-1 transition-all duration-300 hover:text-primary flex items-center gap-1.5 ${
      isActive ? "text-primary font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" : "text-base-content"
    }`;

  const joinDevBtn = (
    <a
      href="https://github.com/robiulhasanmumin/Micro_Task_Client.git"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline btn-primary btn-xs lg:btn-sm rounded-full px-4 hover:scale-105 transition-all gap-2"
    >
      <FaGithub /> <span className="hidden sm:inline">Join as Developer</span>
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
              <span className="text-lg lg:text-xl font-black tracking-tighter uppercase">
                MICRO<span className="text-primary">TASK</span>
              </span>
            </Link>
          </div>

          {/* ২. ডেস্কটপ মেনু */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center space-x-6">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
              <NavLink to="/privacy" className={navLinkClass}>Privacy</NavLink>
              {user && <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>}
            </div>

            <div className="flex items-center gap-3 border-l border-base-300 pl-5">
              {user ? (
                <>
                  <div className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-xs font-bold border border-amber-200 flex items-center gap-1">
                    <FaCoins className="animate-pulse" /> {dbUser?.coins || 0}
                  </div>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-2 border-primary overflow-hidden">
                      <img src={user?.photoURL} alt="profile" />
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-base-200">
                      <li className="px-4 py-2 font-bold text-primary border-b border-base-100">{user?.displayName}</li>
                      <li><Link to="/dashboard">My Dashboard</Link></li>
                      <li><button onClick={handleLogOut} className="text-error font-semibold"><FaSignOutAlt /> Logout</button></li>
                    </ul>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <Link to="/auth/login" className="btn btn-outline btn-primary btn-sm rounded-lg">Login</Link>
                  <Link to="/auth/register" className="btn btn-sm bg-primary text-white border-none rounded-lg shadow-md shadow-primary/20">Register</Link>
                </div>
              )}
              {joinDevBtn}
              {/* Theme Toggler */}
              <label className="swap swap-rotate text-primary ml-1">
                <input type="checkbox" onChange={handleToggle} checked={theme === "dark"} />
                <svg className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                <svg className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.69Z"/></svg>
              </label>
            </div>
          </div>

          {/* ৩. মোবাইল বাটন গ্রুপ */}
          <div className="lg:hidden flex items-center gap-2">
             {joinDevBtn}
            <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost btn-sm btn-square">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-base-100 border-t border-base-200 px-4 py-6 space-y-3 shadow-2xl">
          {user && (
            <div className="flex items-center gap-4 p-3 bg-base-200 rounded-2xl mb-4">
              <img className="w-12 h-12 rounded-full border-2 border-primary" src={user?.photoURL} alt="" />
              <div>
                <p className="font-bold">{user?.displayName}</p>
                <p className="text-amber-500 font-bold text-sm flex items-center gap-1"><FaCoins /> {dbUser?.coins || 0}</p>
              </div>
            </div>
          )}
          
<div className="flex flex-col gap-1">
  <NavLink 
    to="/" 
    onClick={() => setIsOpen(false)} 
    className="px-4 py-2.5 rounded-xl hover:bg-base-200 flex items-center gap-3"
  >
    <FaHome className="text-primary/70" /> Home
  </NavLink>

  <NavLink 
    to="/about" 
    onClick={() => setIsOpen(false)} 
    className="px-4 py-2.5 rounded-xl hover:bg-base-200 flex items-center gap-3"
  >
    <FaInfoCircle className="text-primary/70" /> About Us
  </NavLink>

  <NavLink 
    to="/contact" 
    onClick={() => setIsOpen(false)} 
    className="px-4 py-2.5 rounded-xl hover:bg-base-200 flex items-center gap-3"
  >
    <FaEnvelope className="text-primary/70" /> Contact
  </NavLink>

  <NavLink 
    to="/privacy" 
    onClick={() => setIsOpen(false)} 
    className="px-4 py-2.5 rounded-xl hover:bg-base-200 flex items-center gap-3"
  >
    <FaShieldAlt className="text-primary/70" /> Privacy Policy
  </NavLink>

  {user && (
    <NavLink 
      to="/dashboard" 
      onClick={() => setIsOpen(false)} 
      className="px-4 py-2.5 rounded-xl hover:bg-base-200 flex items-center gap-3"
    >
      <FaThLarge className="text-primary/70" /> Dashboard
    </NavLink>
  )}
</div>


          <div className="pt-4 border-t border-base-200">
             <div className="flex items-center justify-between px-4 mb-4">
                <span className="font-medium">Dark Mode</span>
                <input type="checkbox" className="toggle toggle-primary toggle-sm" onChange={handleToggle} checked={theme === "dark"} />
             </div>

            {user ? (
               <button onClick={() => {handleLogOut(); setIsOpen(false)}} className="btn btn-error w-full rounded-xl gap-2 text-white">
                 <FaSignOutAlt /> Logout
               </button>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link to="/auth/login" onClick={() => setIsOpen(false)} className="btn btn-outline btn-primary rounded-xl">Login</Link>
                <Link to="/auth/register" onClick={() => setIsOpen(false)} className="btn btn-primary rounded-xl text-white">Register</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navber;