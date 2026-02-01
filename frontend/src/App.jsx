import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import EditTask from "./components/EditTask";


const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        {/* <Route path="/register" element={<Register setToken={setToken} />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<EditTask />} />

        <Route
          path="/"
          element={
            token ? <Dashboard setToken={setToken} /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
