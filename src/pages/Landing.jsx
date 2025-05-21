import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900">
      {/* Navigation */}
      <nav className="bg-black/40 backdrop-blur-lg p-4 border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white/90">Task Management</h1>
          <div className="space-x-4">
            <Link
              to="/login"
              className="text-white/80 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-white/90 mb-6">
          Streamline Your Workflow
        </h1>
        <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          Organize tasks, track progress, and collaborate seamlessly with our powerful task management platform.
        </p>
        <Link
          to="/register"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block shadow-lg hover:shadow-xl"
        >
          Get Started
        </Link>
      </div>

      {/* Features Section */}
      <div className="bg-black/40 backdrop-blur-lg py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white/90 text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-black/30 p-6 rounded-lg border border-white/10 hover:bg-black/40 transition-all">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white/90 mb-2">Task Tracking</h3>
              <p className="text-white/70">
                Monitor progress and deadlines with our intuitive task tracking system.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-black/30 p-6 rounded-lg border border-white/10 hover:bg-black/40 transition-all">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-white/90 mb-2">Team Collaboration</h3>
              <p className="text-white/70">
                Work together seamlessly with real-time updates and shared workspaces.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-black/30 p-6 rounded-lg border border-white/10 hover:bg-black/40 transition-all">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white/90 mb-2">Mobile Access</h3>
              <p className="text-white/70">
                Stay connected and manage tasks on the go with our mobile-friendly interface.
              </p>
            </div>
          </div>
        </div>
      </div>

      

      {/* Testimonials Section */}
      <div className="py-16 bg-black/40 backdrop-blur-lg border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white/90">🌟 What Our Users Say</h2>
          <div className="flex gap-8">
            {[
              { name: "John Doe", text: "TaskFlow has streamlined our team's workflow!" },
              { name: "Jane Smith", text: "The task management features are amazing, and it's easy to use!" },
              { name: "Bob Johnson", text: "A game-changer for project management!" },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-black/30 p-8 rounded-lg border border-white/10 hover:bg-black/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-lg text-white/70 italic">"{testimonial.text}"</p>
                <h4 className="mt-4 text-xl text-white/90 font-semibold">- {testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Role Selection Section */}
      <div className="py-16 max-w-7xl mx-auto px-6 bg-black/40 backdrop-blur-lg border-t border-white/10">
        <h2 className="text-4xl font-bold text-center mb-6 text-white/90">Choose Your Role</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {["user", "admin"].map((role) => (
            <motion.div
              key={role}
              className="relative bg-black/30 p-8 rounded-xl border border-white/10 hover:bg-black/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold capitalize text-white/90">{role === "user" ? "Team Member" : "Administrator"}</h3>
              <p className="mt-3 text-white/70">
                {role === "user"
                  ? "Create tasks, track progress, and collaborate with your team."
                  : "Manage users, verify tasks, and oversee team operations."}
              </p>
              <div className="mt-6 space-y-4">
                <button
                  onClick={() => navigate("/signup", { state: { role } })}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-md shadow-md hover:from-blue-700 hover:to-blue-900 transition-colors"
                >
                  Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
                </button>
                <button
                  onClick={() => navigate("/login", { state: { role } })}
                  className="w-full py-3 border border-white/20 text-white/80 font-semibold rounded-md shadow-md hover:bg-white/10 transition-colors"
                >
                  Log In as {role.charAt(0).toUpperCase() + role.slice(1)}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-black/40 backdrop-blur-lg border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white/90">✨ Features That Power Your Productivity</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { title: "Task Management", description: "Create, organize, and prioritize tasks efficiently." },
              { title: "Time Tracking", description: "Monitor task time and boost productivity." },
              { title: "Team Collaboration", description: "Work together seamlessly on shared projects." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-black/30 p-6 rounded-lg border border-white/10 hover:bg-black/40 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-white/90">{feature.title}</h3>
                <p className="mt-2 text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      

      {/* Scroll to Top Button */}
      <motion.div
        className="fixed bottom-10 right-10 bg-blue-600 text-white p-3 rounded-full cursor-pointer hover:bg-blue-700 transition-colors"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
      >
        ↑
      </motion.div>
    </div>
  );
};

export default Landing;
