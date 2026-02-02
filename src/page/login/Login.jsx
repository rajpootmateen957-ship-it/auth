import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      navigate("/dashboard"); // ✅ Login ke baad navigate
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Login Successful!");
      navigate("/dashboard"); // ✅ Google login ke baad bhi navigate
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[340px] p-7 rounded-2xl shadow-xl"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-3">
          Login
        </h1>

        <p className="text-center text-gray-500 mb-6 text-sm">
          Enter your credentials to continue
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-5 relative">
          <label className="block text-gray-700 mb-1 font-medium">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-[46px] cursor-pointer text-sm text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-bold hover:bg-blue-700 transition mb-3"
        >
          Login
        </button>

        {/* Google Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full border border-gray-300 flex items-center justify-center gap-3 py-2.5 rounded-xl font-semibold hover:bg-gray-100 transition mb-3"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-3">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Signup Button */}
        <button
          type="button"
          onClick={() => navigate("/signup")}
          className="w-full border border-blue-600 text-blue-600 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition"
        >
          Create New Account
        </button>
      </form>
    </div>
  );
};

export default Login;
