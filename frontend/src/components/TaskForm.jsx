import React, { useState } from 'react'
import axios from '../api/axios';

const TaskForm = ({refresh}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!title) return

        await axios.post('/tasks', { title, description });
        setTitle("");
        setDescription("");
        refresh()

    }
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        className="border p-2 rounded w-full outline-none bg-gray-600 text-gray-300"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="border p-2 rounded w-full  bg-gray-600 text-gray-300"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700">
        Add
      </button>
    </form>
  );
}

export default TaskForm