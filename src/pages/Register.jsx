import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaGoogle, FaUser, FaEnvelope, FaLock, FaImage, FaUserTag } from "react-icons/fa";
import axios from "axios";
import { AuthContext } from "../AuthContext/AuthContext";
import useAxiosPublic from "../hooks/useAxiosPublic";

const img_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const Register = () => {
    const { createUser, updateUserProfile, googleLogin } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [passwordError, setPasswordError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        const imageFile = form.image.files[0];

     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
    
    if (!passwordRegex.test(password)) {
        setPasswordError("Password must be 6+ chars, 1 uppercase, 1 lowercase & 1 special char.");
        return;  
    } else {
        setPasswordError("");  
    }

    setLoading(true);

        try {
            const formData = new FormData();
            formData.append('image', imageFile);
            const res = await axios.post(img_hosting_api, formData);

            if (res.data.success) {
                const photoURL = res.data.data.display_url;

                await createUser(email, password);
                await updateUserProfile(name, photoURL);

                const userInfo = {
                    name,
                    email,
                    photoURL,
                    role,
                    coins: role === "worker" ? 10 : 50,
                    createdAt: new Date().toISOString()
                };

                const userRes = await axiosPublic.post('/users', userInfo);
                
                if (userRes.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Registration Successful!',
                        text: `Welcome ${name}! You've earned ${userInfo.coins} bonus coins.`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                    navigate('/');
                }
            }
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
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

             await axiosPublic.post('/users', userInfo);

            Swal.fire({
                icon: 'success',
                title: 'Welcome!',
                text: 'Google Registration Successful as Worker',
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/');
        })
        .catch((err) => {
            Swal.fire('Error', 'Google registration failed', 'error');
        });
};

    return (
        <div className="w-full max-w-lg mx-auto p-10 bg-base-100 rounded-[2rem] shadow-2xl border border-base-200">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-black text-primary tracking-tighter uppercase">Register Now</h2>
                <p className="text-xs opacity-50 uppercase tracking-widest mt-1">Start your journey today</p>
            </div>
            
            <form onSubmit={handleRegister} className="space-y-4">
                <div className="relative">
                    <FaUser className="absolute top-4 left-4 opacity-30" />
                    <input type="text" name="name" placeholder="Full Name" className="input input-bordered w-full pl-12 rounded-xl focus:border-primary" required />
                </div>
                
                <div className="form-control">
                    <label className="label py-1"><span className="label-text font-bold text-[10px] opacity-50 uppercase ml-1">Profile Photo</span></label>
                    <div className="relative">
                        <FaImage className="absolute top-4 left-4 opacity-30 z-10" />
                        <input type="file" name="image" className="file-input file-input-bordered file-input-primary w-full pl-12 rounded-xl" required />
                    </div>
                </div>

                <div className="relative">
                    <FaUserTag className="absolute top-4 left-4 opacity-30 z-10" />
                    <select name="role" className="select select-bordered w-full pl-12 rounded-xl font-medium" required defaultValue="">
                        <option value="" disabled>Choose Your Role</option>
                        <option value="worker">Worker (Earn Money)</option>
                        <option value="buyer">Buyer (Hire Workers)</option>
                    </select>
                </div>

                <div className="relative">
                    <FaEnvelope className="absolute top-4 left-4 opacity-30" />
                    <input type="email" name="email" placeholder="Email Address" className="input input-bordered w-full pl-12 rounded-xl focus:border-primary" required />
                </div>

                <div className="relative">
                    <FaLock className="absolute top-4 left-4 opacity-30" />
                    <input type="password" name="password" placeholder="Password" className="input input-bordered w-full pl-12 rounded-xl focus:border-primary" required />
                    {passwordError && (
        <p className="text-error text-[10px] mt-1 ml-2 font-medium">
            {passwordError}
        </p>
    )}
                </div>

                <button disabled={loading} className="btn btn-primary w-full text-white font-bold rounded-xl mt-4 shadow-lg shadow-primary/30 h-14 uppercase tracking-wider">
                    {loading ? <span className="loading loading-spinner"></span> : "Create Account"}
                </button>
            </form>

            <div className="divider opacity-30 my-6 text-[10px] uppercase font-bold">Social Register</div>
            
            <button onClick={handleGoogleLogin} type="button" className="btn btn-outline w-full gap-3 rounded-xl border-base-300 hover:bg-base-200">
                <FaGoogle className="text-error" /> Continue with Google
            </button>

            <p className="text-center mt-8 text-sm opacity-70">
                Already have an account? <Link to="/auth/login" className="text-primary font-bold hover:underline">Login here</Link>
            </p>
        </div>
    );
};

export default Register;