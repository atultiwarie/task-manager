import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const fetchTask = async () => {
      const res = await axios.get("/tasks");
      const task = res.data.find((t) => t._id === id);

      if (task) {
        setTitle(task.title);
        setDescription(task.description);
        setStatus(task.status);
      }
    };

    fetchTask();
  }, [id]);

  const handleSave = async () => {
    await axios.put(`/tasks/${id}`, { title, description, status });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-gray-700 text-gray-300 p-6 rounded shadow w-96 space-y-3">
        <h2 className="text-xl font-bold">Edit Task</h2>

        <input
          className="border w-full p-2 rounded outline-none bg-gray-600 text-gray-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border w-full p-2 rounded outline-none bg-gray-600 text-gray-300"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="border w-full p-2 rounded outline-none bg-gray-600 text-gray-300"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button
          onClick={handleSave}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}
