import {useState} from 'react'
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 const handleRegister = async () => {
   try {
     await axios.post("/users/register", { name, email, password });

     alert("Registration successful");
     navigate("/login");
   } catch (err) {
     alert(err.response?.data?.message || "Registration failed");
   }
 };
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-gray-700 p-8 rounded-xl shadow-md w-80 text-gray-300 ">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <input
          className="border w-full p-2 rounded mb-3 outline-none bg-gray-600 text-gray-300"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border w-full p-2 rounded mb-3 outline-none bg-gray-600 text-gray-300"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border w-full p-2 rounded mb-3 outline-none bg-gray-600 text-gray-300"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="bg-[#9BA0FB] text-white w-full py-2 rounded hover:bg-[#8F94F7] outline-none"
        >
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register