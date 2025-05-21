  <div className="w-64 bg-black/80 backdrop-blur-xl h-screen shadow-[0_0_50px_rgba(0,0,255,0.3)] border-r border-blue-500/20 relative z-20">
    {/* Glowing border effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-blue-500/5"></div>
    
    <div className="p-6">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
        Admin Panel
      </h2>
    </div>

    <nav className="mt-6">
      <ul className="space-y-2">
        <li>
          <Link
            to="/admin/dashboard"
            className="flex items-center px-6 py-3 text-blue-400/80 hover:bg-blue-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] group"
          >
            <span className="mr-3 group-hover:scale-110 transition-transform duration-300">📊</span>
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/admin/users"
            className="flex items-center px-6 py-3 text-blue-400/80 hover:bg-blue-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] group"
          >
            <span className="mr-3 group-hover:scale-110 transition-transform duration-300">👥</span>
            Users
          </Link>
        </li>
        <li>
          <Link
            to="/admin/tasks"
            className="flex items-center px-6 py-3 text-blue-400/80 hover:bg-blue-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] group"
          >
            <span className="mr-3 group-hover:scale-110 transition-transform duration-300">✅</span>
            Tasks
          </Link>
        </li>
        <li>
          <Link
            to="/admin/reports"
            className="flex items-center px-6 py-3 text-blue-400/80 hover:bg-blue-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] group"
          >
            <span className="mr-3 group-hover:scale-110 transition-transform duration-300">📈</span>
            Reports
          </Link>
        </li>
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