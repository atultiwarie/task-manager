const Task = require("../models/taskModel")

// Create a new task
exports.createTask = async (req,res) => {
    try {
        const { title, description } = req.body;
        const newTask = await Task.create({ title, description });
        res.status(201).json(newTask);
        
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
    
}

// Get all tasks
exports.getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
        
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
    
}

// Update a task
exports.updateTask = async (req,res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id,req.body,{new:true});
        if(!task){
            return res.status(404).json({message: "Task not found"})
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
    
}

// Delete a task
exports.deleteTask = async (req,res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            return res.status(404).json({message: "Task not found"})
        }
        res.status(200).json({message: "Task deleted successfully"});
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
    
}