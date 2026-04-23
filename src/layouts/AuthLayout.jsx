import React from "react";
import { Link, Outlet } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col font-sans">
       <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-xl rotate-3 group-hover:rotate-0 transition-all shadow-lg shadow-primary/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tight">
            MICRO<span className="text-primary">TASK</span>
          </span>
        </Link>

        <Link 
          to="/" 
          className="btn btn-ghost btn-sm gap-2 opacity-70 hover:opacity-100 transition-opacity"
        >
          <FaArrowLeft size={12} /> Back to Home
        </Link>
      </nav>

       <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-base-100 rounded-3xl shadow-2xl overflow-hidden border border-base-300">
          
           <div className="hidden lg:flex flex-col justify-center p-12 bg-primary text-white space-y-6 relative overflow-hidden">
             {/* ব্যাকগ্রাউন্ড */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

             <h1 className="text-4xl font-bold leading-tight relative z-10">
                Start Your Journey <br /> With MicroTask
             </h1>
             <p className="text-white/80 relative z-10 leading-relaxed">
                Join thousands of workers and buyers. Complete tasks, earn coins, and reach the top of our leaderboard!
             </p>
             <div className="flex gap-4 relative z-10">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
                    <span className="block text-2xl font-bold italic">10+</span>
                    <span className="text-xs uppercase tracking-widest opacity-70">Welcome Coins</span>
                </div>
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
                    <span className="block text-2xl font-bold italic">50+</span>
                    <span className="text-xs uppercase tracking-widest opacity-70">Active Tasks</span>
                </div>
             </div>
          </div>

           <div className="p-8 md:p-12 flex flex-col justify-center">
             <Outlet />
          </div>

        </div>
      </main>

       <footer className="p-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} MicroTask Platform. Secured by Robiul Hasan Mumin.
      </footer>
    </div>
  );
};

export default AuthLayout;