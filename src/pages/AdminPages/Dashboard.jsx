import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import AdminStats from "../../components/admin/AdminStats"; 
import RecentUsers from "../../components/admin/RecentUsers";
import PendingTasks from "../../components/admin/PendingTasks";
import TaskChart from "../../components/admin/TaskAnalytics"; 

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-6 text-white">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text drop-shadow-lg">
            Admin Dashboard
          </span>
        </h1>

        {/* Admin Statistics */}
        <AdminStats />

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <RecentUsers className="col-span-2" />
          <PendingTasks />
          <TaskChart />
        </div>

        
      </div>
    </div>
  );
};

export default Dashboard;
