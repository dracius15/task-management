import React, { useState, useEffect } from "react";
import UserSidebar from "./UserSidebar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(""); // ✅ Store logged-in user
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    deadline: "",
    progress: 0,
  });

  useEffect(() => {
    // ✅ Fetch logged-in user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggedInUser(storedUser?.name || "Unknown User");

    // ✅ Fetch stored tasks
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Handle Task Creation
  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!newTask.title.trim() || !newTask.description.trim()) return;

    const taskId = Date.now().toString();
    
    // ✅ Assign task to logged-in user
    const newTaskItem = { 
      id: taskId, 
      ...newTask, 
      assignedTo: loggedInUser // ✅ Store assigned user
    };

    const updatedTasks = [...tasks, newTaskItem];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    toast.success("Task added successfully!", { icon: "✅" });

    setNewTask({ title: "", description: "", priority: "Medium", deadline: "", progress: 0 });
  };

  // Handle Task Deletion
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    toast.error("Task removed successfully!", { icon: "🗑️" });
  };

  // Handle Progress Update
  const updateProgress = (taskId, progress) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, progress: parseInt(progress) } : task
    );

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // Function to get priority color
  const getPriorityColor = (priority) => {
    if (priority === "High") return "text-red-600 font-bold";
    if (priority === "Medium") return "text-yellow-600 font-bold";
    return "text-green-600 font-bold"; // Low priority
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900">
      <UserSidebar />

      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-6 text-center w-full text-white">
          <span>🎯</span> 
          <span className="bg-gradient-to-r from-pink-400 to-yellow-300 text-transparent bg-clip-text drop-shadow-lg">
            User Task Management
          </span>
        </h1>

        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

        {/* Task Creation Box */}
        <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-lg mb-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6">Create a New Task</h2>
          <form onSubmit={handleCreateTask} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/80">Task Title</label>
              <input
                type="text"
                placeholder="Enter task title"
                className="w-full p-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none text-white placeholder-white/50"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80">Description</label>
              <textarea
                placeholder="Enter task description"
                className="w-full p-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none text-white placeholder-white/50"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                required
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-white/80">Priority</label>
                <select
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none text-white"
                  value={newTask.priority}
                  onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                >
                  <option value="High">🔥 High Priority</option>
                  <option value="Medium">⚡ Medium Priority</option>
                  <option value="Low">✅ Low Priority</option>
                </select>
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-medium text-white/80">Deadline</label>
                <input
                  type="date"
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none text-white"
                  value={newTask.deadline}
                  onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white p-3 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-yellow-600 transition-all shadow-lg hover:shadow-xl"
            >
              ➕ Add Task
            </button>
          </form>
        </div>

        {/* Task List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.length === 0 ? (
            <p className="text-white/80">No tasks created yet. Start by adding a task!</p>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="bg-white/10 backdrop-blur-lg shadow-xl p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                <h3 className="text-lg font-semibold text-white">{task.title}</h3>
                <p className="text-white/80">{task.description}</p>

                <span className={`text-sm ${getPriorityColor(task.priority)}`}>
                  Priority: {task.priority}
                </span>

                <p className="text-sm text-white/80 mt-1">
                  <span className="font-semibold">Assigned To:</span> {task.assignedTo}
                </p>

                <p className="text-sm text-white/80 mt-1">
                  <span className="font-semibold">Deadline:</span> {task.deadline}
                </p>

                {/* Task Progress */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-white/80">Progress:</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={task.progress}
                    onChange={(e) => updateProgress(task.id, e.target.value)}
                    className="w-full mt-2 accent-pink-500"
                  />
                  <span className="text-sm font-medium text-white/80">{task.progress}% Completed</span>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="mt-4 w-full bg-gradient-to-r from-red-500 to-pink-500 text-white p-2 rounded-xl font-semibold hover:from-red-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
                >
                  🗑️ Delete Task
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
