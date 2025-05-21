import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import AdminStats from "../../components/admin/AdminStats"; 
import RecentUsers from "../../components/admin/RecentUsers";
import PendingTasks from "../../components/admin/PendingTasks";
import TaskChart from "../../components/admin/TaskAnalytics"; 

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000,#000000)] opacity-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] opacity-5"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-white">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-gradient-x">
            Admin Dashboard
          </span>
        </h1>

        {/* Admin Statistics */}
        <AdminStats />

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <RecentUsers className="col-span-2" />
          <PendingTasks />
          <TaskChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
