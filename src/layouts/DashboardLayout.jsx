import { useEffect, useState } from "react";
import { Outlet, NavLink, Link } from "react-router";
import { FaHome, FaTasks, FaWallet, FaUsers, FaPlusCircle, FaHistory, FaListUl, FaCloudUploadAlt, FaMoon, FaSun, FaArrowLeft, FaBars } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
    const [role, coins, isRoleLoading, refetch, userData] = useRole();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    if (isRoleLoading) {
        return (
            <div className="h-screen flex items-center justify-center bg-base-100">
                <span className="loading loading-ring loading-lg text-primary"></span>
            </div>
        );
    }

    if (!userData) {
        return (
            <div className="h-screen flex items-center justify-center font-bold text-red-500">
                User data not found. Please refresh or login again.
            </div>
        );
    }

     const SidebarContent = () => (
        <div className="h-full flex flex-col p-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 mb-10 hover:opacity-80 transition-opacity">
                <div className="p-2 bg-primary rounded-xl text-white shadow-lg shadow-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                </div>
                <h2 className="text-2xl font-black tracking-tighter text-base-content uppercase">
                    MICRO<span className="text-primary">TASK</span>
                </h2>
            </Link>

            <nav className="flex-grow space-y-2">
                 <NavLink to="/" className="flex items-center gap-4 p-4 rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-primary/10 hover:text-primary transition-all">
                    <FaArrowLeft size={16} /> Back to Home
                </NavLink>

                <div className="divider opacity-10"></div>

                {/* --- ROLE BASED MENUS --- */}
                {role === 'worker' && (
                    <>
                        <NavLink to="/dashboard/worker-home" className="flex items-center gap-4 p-4 rounded-2xl font-bold hover:bg-primary/10"><FaHome /> Worker Home</NavLink>
                        <NavLink to="/dashboard/taskList" className="flex items-center gap-4 p-4 rounded-2xl font-bold hover:bg-primary/10"><FaListUl /> Task List</NavLink>
                        <NavLink to="/dashboard/mySubmissions" className="flex items-center gap-4 p-4 rounded-2xl font-bold hover:bg-primary/10"><FaCloudUploadAlt /> My Submissions</NavLink>
                        <NavLink to="/dashboard/withdrawals" className="flex items-center gap-4 p-4 rounded-2xl font-bold hover:bg-primary/10"><FaWallet /> Withdrawals</NavLink>
                    </>
                )}

                {role === 'buyer' && (
                    <>
                        <NavLink to="/dashboard/buyer-home" className="flex items-center gap-4 p-4 rounded-2xl font-bold hover:bg-primary/10"><FaHome /> Buyer Home</NavLink>
                        <NavLink to="/dashboard/add-task" className="flex items-center gap-4 p-4 rounded-2xl font-bold hover:bg-primary/10"><FaPlusCircle /> Add New Task</NavLink>
                        <NavLink to="/dashboard/my-tasks" className="flex items-center gap-4 p-4 rounded-2xl font-bold hover:bg-primary/10"><FaTasks /> My Tasks</NavLink>
                        <NavLink to="/dashboard/purchase-coin" className="flex items-center gap-4 p-4 rounded-2xl font-bold hover:bg-primary/10"><FaWallet /> Purchase Coin</NavLink>
                        <NavLink to="/dashboard/payment-history" className="flex items-center gap-4 p-4 rounded-2xl font-bold hover:bg-primary/10"><FaHistory /> Payment History</NavLink>
                    </>
                )}

                {role === 'admin' && (
                    <>
                        <NavLink to="/dashboard/admin-home" className="flex items-center gap-4 p-4 rounded-2xl font-bold hover:bg-primary/10"><FaHome /> Admin Home</NavLink>
                        <NavLink to="/dashboard/manage-users" className="flex items-center gap-4 p-4 rounded-2xl font-bold hover:bg-primary/10"><FaUsers /> Manage Users</NavLink>
                        <NavLink to="/dashboard/manage-tasks" className="flex items-center gap-4 p-4 rounded-2xl font-bold hover:bg-primary/10"><FaTasks /> Manage Tasks</NavLink>
                    </>
                )}
            </nav>
        </div>
    );

    return (
        <div className="drawer lg:drawer-open font-sans">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            
            <div className="drawer-content flex flex-col bg-base-100 min-h-screen transition-colors duration-300">
                {/* --- Header --- */}
                <header className="h-20 lg:h-24 px-4 lg:px-10 flex items-center justify-between bg-base-100 border-b border-base-300 z-10 sticky top-0">
                    <div className="flex items-center gap-2">
                        {/* Mobile Drawer Toggle */}
                        <label htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
                            <FaBars size={20} />
                        </label>
                        <h1 className="text-xs lg:text-sm font-black uppercase tracking-[0.2em] opacity-40">
                            {role} Portal
                        </h1>
                    </div>
                    
                    <div className="flex items-center gap-3 lg:gap-6">
                        {/* Theme Toggle */}
                        <button onClick={toggleTheme} className="p-2 lg:p-3 bg-base-200 rounded-full hover:bg-primary/10 transition-all text-base-content">
                            {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} className="text-yellow-400" />}
                        </button>

                        {/* Notifications */}
                        <div className="relative p-2 lg:p-3 bg-base-200 rounded-full cursor-pointer hover:bg-primary/10 transition-colors group hidden sm:block">
                            <IoMdNotifications size={22} className="text-base-content group-hover:text-primary transition-colors" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-base-100"></span>
                        </div>
                        
                        {/* User Profile */}
                        <div className="flex items-center gap-3 bg-base-200 p-1 lg:p-2 pr-4 lg:pr-6 rounded-full border border-base-300 shadow-sm">
                            <img 
                                src={userData?.photoURL || "https://i.ibb.co/L8N7pP7/profile.png"} 
                                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover border-2 border-primary" 
                                alt="user" 
                            />
                            <div className="hidden xs:block">
                                <div className="flex items-center gap-1">
                                    <p className="text-[9px] lg:text-[10px] font-black text-primary uppercase leading-tight">{coins || 0}</p>
                                    <span className="text-[7px] lg:text-[8px] font-bold opacity-50 uppercase">Coins</span>
                                </div>
                                <p className="text-xs lg:text-sm font-black text-base-content uppercase tracking-tighter line-clamp-1 max-w-[80px] lg:max-w-[120px]">
                                    {userData?.name || "User Name"}
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* --- Main Dashboard Content --- */}
                <main className="p-4 lg:p-10 bg-base-200/30 flex-grow">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>

            {/* --- Sidebar Drawer --- */}
            <div className="drawer-side z-20 shadow-xl">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <aside className="bg-base-200 w-72 h-full border-r border-base-300">
                    <SidebarContent />
                </aside>
            </div>

            <style>{`
                .active {
                    background: rgba(79, 70, 229, 0.2) !important;
                    color: #4F46E5 !important;
                    border-right: 4px solid #4F46E5;
                }
                [data-theme='dark'] .active {
                    background: rgba(129, 140, 248, 0.15) !important;
                    color: #818CF8 !important;
                }
            `}</style>
        </div>
    );
};

export default DashboardLayout;