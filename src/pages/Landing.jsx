import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000,#000000)] opacity-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] opacity-5"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

      <div className="relative flex flex-col items-center justify-center text-center py-20 px-6">
        <motion.h1
          className="text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-gradient-x"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="block">TaskFlow</span>
        </motion.h1>
        <p className="mt-4 text-lg text-blue-400/80 max-w-2xl">
          Boost productivity, streamline workflow, and collaborate in real-time.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">🌟 What Our Users Say</h2>
          <div className="flex gap-8">
            {[
              { name: "John Doe", text: "TaskFlow has streamlined our team's workflow!" },
              { name: "Jane Smith", text: "The task management features are amazing, and it's easy to use!" },
              { name: "Bob Johnson", text: "A game-changer for project management!" },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-black/80 backdrop-blur-xl p-8 rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-300 border border-blue-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-lg text-blue-400/80 italic">"{testimonial.text}"</p>
                <h4 className="mt-4 text-xl text-blue-400 font-semibold">- {testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Role Selection Section */}
      <div className="py-16 max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Choose Your Role</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {["user", "admin"].map((role) => (
            <motion.div
              key={role}
              className="relative bg-black/80 backdrop-blur-xl p-8 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-300 border border-blue-500/20"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold capitalize text-blue-400">{role === "user" ? "Team Member" : "Administrator"}</h3>
              <p className="mt-3 text-blue-400/80">
                {role === "user"
                  ? "Create tasks, track progress, and collaborate with your team."
                  : "Manage users, verify tasks, and oversee team operations."}
              </p>
              <div className="mt-6 space-y-4">
                <button
                  onClick={() => navigate("/signup", { state: { role } })}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white font-semibold rounded-md shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
                </button>
                <button
                  onClick={() => navigate("/login", { state: { role } })}
                  className="w-full py-3 border border-blue-500/40 text-blue-400 font-semibold rounded-md shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 transition-all duration-300"
                >
                  Log In as {role.charAt(0).toUpperCase() + role.slice(1)}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">✨ Features That Power Your Productivity</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { title: "Task Management", description: "Create, organize, and prioritize tasks efficiently." },
              { title: "Time Tracking", description: "Monitor task time and boost productivity." },
              { title: "Team Collaboration", description: "Work together seamlessly on shared projects." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-black/80 backdrop-blur-xl p-6 rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-300 border border-blue-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-blue-400">{feature.title}</h3>
                <p className="mt-2 text-blue-400/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">📩 Contact Us</h2>
          <p className="mt-4 text-lg text-blue-400/80">Have questions? We'd love to hear from you.</p>
          <motion.form
            className="mt-8 space-y-4 max-w-3xl mx-auto bg-black/80 backdrop-blur-xl p-6 rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.2)] border border-blue-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-black/50 border border-blue-500/20 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-white placeholder-blue-400/30 transition-all duration-300 hover:border-blue-500/40 focus:border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-black/50 border border-blue-500/20 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-white placeholder-blue-400/30 transition-all duration-300 hover:border-blue-500/40 focus:border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 bg-black/50 border border-blue-500/20 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-white placeholder-blue-400/30 transition-all duration-300 hover:border-blue-500/40 focus:border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.1)] h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white font-semibold rounded-md shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.div
        className="fixed bottom-10 right-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full cursor-pointer shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
      >
        ↑
      </motion.div>
    </div>
  );
};

export default Landing;
