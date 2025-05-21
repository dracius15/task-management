import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const role = location.state?.role;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // Abort request after 10 seconds

    try {
      const response = await fetch("https://zidio-task-management-backend.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
        signal: controller.signal, // Attach the abort controller
      });

      clearTimeout(timeout); // Clear timeout if response is received in time

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Invalid credentials");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      navigate(data.role === "admin" ? "/admin/dashboard" : "/user/dashboard");
    } catch (err) {
      if (err.name === "AbortError") {
        setError("Request timeout, please try again.");
      } else {
        setError("Server error, please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900">
      <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-md border border-white/20">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white/80">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none text-white placeholder-white/50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none text-white placeholder-white/50"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white p-3 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-yellow-600 transition-all shadow-lg hover:shadow-xl"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <span
            className="text-blue-600 text-sm hover:underline cursor-pointer"
            onClick={() => navigate("/forgot-password", { state: { role } })}
          >
            Forgot Password?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
