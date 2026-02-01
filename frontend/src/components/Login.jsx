import {useState} from 'react'
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async ()=>{
        const res = await axios.post('/users/login', {email,password})
         localStorage.setItem("token", res.data.token);
         setToken(res.data.token);
         navigate("/");
    }
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-gray-700 p-8 rounded-xl shadow-md w-80 text-gray-300 ">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

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
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login