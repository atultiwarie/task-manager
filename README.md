# 🚀 Task Manager – Full Stack MERN App

A full-stack Task Management application built with the MERN stack featuring authentication, protected routes, and a modern Tailwind UI.

🌐 Live Demo: https://task-manager.atultiwari.me/

---

## ✨ Features

✅ User Authentication (JWT)
- Register
- Login
- Protected routes

✅ Task Management
- Create tasks
- View tasks
- Edit tasks
- Delete tasks
- Status tracking (pending / in-progress / completed)

✅ UI
- Tailwind CSS
- Responsive design
- Clean dashboard layout

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication
- CORS

### Deployment
- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

## 📂 Project Structure

task-manager/
│
├── frontend/ # React + Tailwind client
├── backend/ # Express API server
└── README.md


---

## ⚙️ Run Locally

### 1️⃣ Clone repo

git clone https://github.com/atultiwarie/task-manager

cd task-manager


---

### 2️⃣ Backend Setup

cd backend
npm install


Create `.env`:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
PORT=3000


Run :npm run dev


---

### 3️⃣ Frontend Setup

cd frontend
npm install
npm run dev


App runs at: http://localhost:5173


---

## 🔐 Environment Variables

### Backend
MONGO_URI
JWT_SECRET
PORT

### Frontend
VITE_API_URL=http://localhost:3000/api




