import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";
import { AuthContext } from "../AuthContext/AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Login = () => {
    const { userLogin, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const result = await userLogin(email, password);
            
            const res = await axiosSecure.post("/jwt", { email: result.user.email });
            if (res.data.token) {
                localStorage.setItem("access-token", res.data.token);
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome Back!',
                    text: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/");
            }
        } catch (err) {
            Swal.fire("Login Failed", "Invalid email or password", "error");
        } finally {
            setLoading(false);
        }
    };

    // Google Login 
const handleGoogleLogin = () => {
    googleLogin()
        .then(async (result) => {
            const user = result.user;

            const userInfo = {
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                role: "worker",
                coins: 10,
                createdAt: new Date().toISOString()
            };

             await axiosSecure.post('/users', userInfo);

             const res = await axiosSecure.post("/jwt", { email: user.email });
            if (res.data.token) {
                localStorage.setItem("access-token", res.data.token);
                
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome!',
                    text: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/");
            }
        })
        .catch((err) => {
            Swal.fire("Error", "Google Login Failed", "error");
        });
};


    return (
        <div className="w-full max-w-md mx-auto p-10 bg-base-100 rounded-[2rem] shadow-2xl border border-base-200">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-black text-primary tracking-tighter uppercase">Login</h2>
                <div className="w-12 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
                <div className="relative">
                    <FaEnvelope className="absolute top-4 left-4 opacity-30" />
                    <input type="email" name="email" placeholder="Email Address" className="input input-bordered w-full pl-12 rounded-xl focus:border-primary" required />
                </div>
                
                <div className="relative">
                    <FaLock className="absolute top-4 left-4 opacity-30" />
                    <input type="password" name="password" placeholder="Password" className="input input-bordered w-full pl-12 rounded-xl focus:border-primary" required />
                </div>

                <button disabled={loading} className="btn btn-primary w-full text-white font-bold rounded-xl h-14 uppercase tracking-widest shadow-lg shadow-primary/30">
                    {loading ? <span className="loading loading-spinner"></span> : "Sign In"}
                </button>
            </form>

            <div className="divider opacity-30 my-8 text-[10px] uppercase font-bold">Or Login With</div>
            
            <button onClick={handleGoogleLogin} className="btn btn-outline w-full gap-3 rounded-xl border-base-300 hover:bg-base-200">
                <FaGoogle className="text-error" /> Google Login
            </button>

            <p className="text-center mt-10 text-sm opacity-70">
                Don't have an account? <Link to="/auth/register" className="text-primary font-bold hover:underline">Register Now</Link>
            </p>
        </div>
    );
};

export default Login;