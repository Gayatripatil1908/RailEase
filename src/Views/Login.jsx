import React, { useState } from "react";
import { FaTrain, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("⚠️ Please fill in all fields.");
    } else {
      setError("");
      alert(`Welcome back to RailEase, ${email.split("@")[0]}! 🚆`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-400 to-indigo-500 flex items-center justify-center px-4">
      {/* Card */}
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-3xl shadow-xl w-full max-w-md border border-white/30">
        {/* Logo and title */}
        <div className="flex flex-col items-center mb-6">
          <FaTrain className="text-white text-5xl mb-2" />
          <h1 className="text-3xl font-bold text-white tracking-wide">RailEase</h1>
          <p className="text-white/80 mt-1 text-sm">
            Login to continue your journey 🚆
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-white font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-xl bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="absolute right-3 top-3 text-white/70" />
            </div>
          </div>

          {error && <p className="text-red-200 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 transition font-semibold rounded-xl shadow-lg text-gray-800"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="text-center mt-5 text-white/80 text-sm">
          <p>
            Don’t have an account?{" "}
            <a href="/signup" className="text-yellow-300 hover:underline">
              Sign up
            </a>
          </p>
          <p className="mt-2">
            Forgot Password?{" "}
            <a href="#" className="text-yellow-300 hover:underline">
              Reset here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
