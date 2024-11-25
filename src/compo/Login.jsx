
import React, { useState } from "react";

function Login() {
    
    const [isLogin, setIsLogin] = useState(true);

    return (
      <div className="min-h-screen bg-emerald-50 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg max-w-lg w-full p-8">
          {/* Toggle between Login and Signup */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`text-lg font-semibold px-6 py-2 rounded-l-lg ${
                isLogin
                  ? "bg-emerald-700 text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`text-lg font-semibold px-6 py-2 rounded-r-lg ${
                !isLogin
                  ? "bg-emerald-700 text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              Sign Up
            </button>
          </div>
  
          {/* Form */}
          <form>
            {/* Header */}
            <h2 className="text-2xl font-semibold text-emerald-700 mb-6 text-center">
              {isLogin ? "Welcome Back!" : "Create Your Account"}
            </h2>
  
            {/* Input Fields */}
            <div className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              )}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              {!isLogin && (
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Re-enter your password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              )}
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-emerald-700 text-white py-3 rounded-lg font-semibold hover:bg-emerald-800 transition"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
  
          {/* Footer */}
          <p className="text-center text-gray-600 mt-6">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-emerald-700 font-semibold hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    );
  };
  

export default Login