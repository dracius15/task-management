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
    <div className="w-64 bg-white/10 backdrop-blur-lg h-screen shadow-2xl border-r border-white/20">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white">User Panel</h2>
      </div>

      <nav className="mt-6">
        <ul className="space-y-2">
          {menuItems.map(({ path, label, icon }) => (
            <li key={path}>
              <Link
                to={path}
                className={`flex items-center px-6 py-3 text-white/80 hover:bg-white/10 transition-all ${
                  location.pathname === path
                    ? "bg-blue-600 shadow-lg transform scale-105"
                    : ""
                }`}
              >
                <span className="mr-3">{icon}</span>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center px-6 py-3 text-white/80 hover:bg-white/10 transition-all w-full text-left"
            >
              <span className="mr-3">🚪</span>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserSidebar;
