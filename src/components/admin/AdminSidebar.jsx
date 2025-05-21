  <div className="w-64 bg-black/40 backdrop-blur-lg h-screen shadow-2xl border-r border-white/10">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white/90">Admin Panel</h2>
    </div>

    <nav className="mt-6">
      <ul className="space-y-2">
        <li>
          <Link
            to="/admin/dashboard"
            className="flex items-center px-6 py-3 text-white/70 hover:bg-white/5 transition-all"
          >
            <span className="mr-3">📊</span>
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/admin/users"
            className="flex items-center px-6 py-3 text-white/70 hover:bg-white/5 transition-all"
          >
            <span className="mr-3">👥</span>
            Users
          </Link>
        </li>
        <li>
          <Link
            to="/admin/tasks"
            className="flex items-center px-6 py-3 text-white/70 hover:bg-white/5 transition-all"
          >
            <span className="mr-3">✅</span>
            Tasks
          </Link>
        </li>
        <li>
          <Link
            to="/admin/reports"
            className="flex items-center px-6 py-3 text-white/70 hover:bg-white/5 transition-all"
          >
            <span className="mr-3">📈</span>
            Reports
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="flex items-center px-6 py-3 text-white/70 hover:bg-white/5 transition-all w-full text-left"
          >
            <span className="mr-3">🚪</span>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  </div> 