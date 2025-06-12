import { useState } from 'react';

export default function GoalTrackerForm() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(sessionStorage.getItem('tasks')) || [];
    }
    return [];
  });

  const addTask = () => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    sessionStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTask('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add new routine..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full p-2 rounded text-black mb-2"
      />
      <button
        onClick={addTask}
        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
      >
        Add
      </button>
      <ul className="mt-4 text-white">
        {tasks.map((t, i) => (
          <li key={i}>✅ {t}</li>
        ))}
      </ul>
    </div>
  );
}
