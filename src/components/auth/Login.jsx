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
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000,#000000)] opacity-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] opacity-5"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

      <div className="bg-black/80 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,255,0.3)] rounded-2xl p-8 w-full max-w-md border border-blue-500/20 relative z-10">
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient-x"></div>
        
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
          Login
        </h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-blue-400/80 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-black/50 border border-blue-500/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-white placeholder-blue-400/30 transition-all duration-300 hover:border-blue-500/40 focus:border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-400/80 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-black/50 border border-blue-500/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-white placeholder-blue-400/30 transition-all duration-300 hover:border-blue-500/40 focus:border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white p-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Login</span>
          </button>
        </form>

        <div className="text-center mt-6">
          <span
            className="text-blue-400/80 text-sm hover:text-blue-300 transition-all duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
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
