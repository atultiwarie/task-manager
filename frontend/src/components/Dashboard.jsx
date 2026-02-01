import { useEffect, useState } from "react";
import axios from "../api/axios";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard({ setToken }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div className="min-h-screen bg-gray-800 p-6">
      <div className="max-w-2xl mx-auto bg-gray-700 text-gray-300 rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Task Manager</h2>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <TaskForm refresh={fetchTasks} />
        <TaskList tasks={tasks} refresh={fetchTasks} />
      </div>
    </div>
  );
}
