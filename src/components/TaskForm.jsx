import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [documents, setDocuments] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 3);
    setDocuments(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ id: Date.now(), title, completed: false, documents });
    setTitle("");
    setDocuments([]);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mb-4">
      <input
        type="text"
        placeholder="Add new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border border-gray-300 rounded p-2 mb-2"
      />
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="mb-2"
        accept=".pdf,.doc,.docx,.txt"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;