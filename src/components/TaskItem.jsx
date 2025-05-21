function TaskItem({ task, deleteTask, toggleComplete }) {
  return (
    <li className={`flex justify-between items-center p-3 border rounded ${task.completed ? 'bg-green-100' : 'bg-white'}`}>
      <div className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => toggleComplete(task.id)} 
          className="cursor-pointer"
        />
        <span className={`${task.completed ? 'line-through text-gray-500' : 'text-black'}`}>
          {task.title}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        {task.documents && task.documents.length > 0 && (
          <div className="mr-2">
            <span className="text-sm text-gray-500">Documents:</span>
            {task.documents.map((doc, index) => (
              <a key={index} href={URL.createObjectURL(doc)} target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-500 hover:underline">
                Doc {index + 1}
              </a>
            ))}
          </div>
        )}
        <button 
          onClick={() => deleteTask(task.id)} 
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;