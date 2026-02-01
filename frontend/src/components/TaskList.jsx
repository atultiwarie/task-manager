import React, { useState } from 'react'
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
const TaskList = ({ tasks, refresh }) => {
    const[editingId, setEditingId] = useState(null)
    const [form,setForm] = useState({
        title: '',
        description: '',
        status: 'pending'
    })
    const navigate = useNavigate();
    const deleteTask = async (id) => {
      await axios.delete(`/tasks/${id}`);
      refresh();
    };

    const startEdit = (task) => {
      setEditingId(task._id);
      setForm({
        title: task.title,
        description: task.description,
        status: task.status,
      });
    };

    const saveEdit = async (id) => {
      await axios.put(`/tasks/${id}`, form);
      setEditingId(null);
      refresh();
    };

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="border rounded-lg p-4 flex justify-between items-center hover:shadow"
        >
          <div>
            <h2 className="font-semibold text-2xl underline">{task.title}</h2>
            <p className="text-2xl text-gray-200">{task.description}</p>
            <span className="text-m text-blue-600">{task.status}</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => navigate(`/edit/${task._id}`)}
              className="bg-yellow-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList