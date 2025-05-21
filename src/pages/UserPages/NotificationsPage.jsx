import React, { useEffect, useState } from "react";
import UserSidebar from "./UserSidebar"; 

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let newNotifications = [];

    storedTasks.forEach((task) => {
      const taskDate = new Date(task.deadline);
      taskDate.setHours(0, 0, 0, 0);

      // 🔴 Deadline is today
      if (taskDate.getTime() === today.getTime()) {
        newNotifications.push(`🚨 Task "${task.title}" is due today!`);
      }

      // ⏳ Deadline is tomorrow
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      if (taskDate.getTime() === tomorrow.getTime()) {
        newNotifications.push(`⏳ Task "${task.title}" is due tomorrow!`);
      }
    });

    setNotifications(newNotifications);
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900">
      {/* Sidebar */}
      <UserSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-3xl border border-white/20">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">📢 Notifications</h2>

          {notifications.length === 0 ? (
            <p className="text-white/80 text-center">No new notifications</p>
          ) : (
            <ul className="space-y-3">
              {notifications.map((message, index) => (
                <li
                  key={index}
                  className="p-4 bg-white/5 border-l-4 border-pink-500 rounded-xl shadow-lg text-white hover:bg-white/10 transition-all"
                >
                  {message}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
