const express = require('express');
const app = express();
const cors = require('cors');
const taskRoutes = require('./routes/task.routes');
const userRoutes = require('./routes/user.routes');

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://task-manager-xi-puce.vercel.app",
      "https://task-manager.atultiwari.me",
    ],
  }),
);

// Routes

app.get('/', (req, res) => {
    res.send('Welcome to the Task Management API');
});

app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
