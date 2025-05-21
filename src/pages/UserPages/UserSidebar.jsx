import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChartBar, FaTasks, FaCalendarAlt, FaBell, FaUser } from "react-icons/fa";

const UserSidebar = () => {
  const location = useLocation();

  // Sidebar links with icons
  const menuItems = [
    { path: "/user/dashboard", label: "Dashboard", icon: <FaChartBar /> },
    { path: "/user/userpage", label: "Create Tasks", icon: <FaTasks /> },
    { path: "/user/calendar", label: "Calendar", icon: <FaCalendarAlt /> },
    { path: "/user/notifications", label: "Notifications", icon: <FaBell /> },
    { path: "/user/profile", label: "Profile", icon: <FaUser /> },
  ];

  return (
    <div className="w-64 bg-black/80 backdrop-blur-xl h-screen shadow-[0_0_50px_rgba(0,0,255,0.3)] border-r border-blue-500/20 relative z-20">
      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-blue-500/5"></div>
      
      <div className="p-6">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
          User Panel
        </h2>
      </div>

      <nav className="mt-6">
        <ul className="space-y-2">
          {menuItems.map(({ path, label, icon }) => (
            <li key={path}>
              <Link
                to={path}
                className={`flex items-center px-6 py-3 text-blue-400/80 hover:bg-blue-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] group ${
                  location.pathname === path
                    ? "bg-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] transform scale-105"
                    : ""
                }`}
              >
                <span className="mr-3 group-hover:scale-110 transition-transform duration-300">{icon}</span>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center px-6 py-3 text-blue-400/80 hover:bg-blue-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] w-full text-left group"
            >
              <span className="mr-3 group-hover:scale-110 transition-transform duration-300">🚪</span>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserSidebar;
