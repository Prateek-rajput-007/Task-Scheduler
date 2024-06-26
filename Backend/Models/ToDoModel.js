import mongoose from 'mongoose';

// Define the schema for a task
const taskSchema = new mongoose.Schema({
  Task: {
    type: String,
    required: [true, "Please enter a task description!"],
    trim: true,
    maxLength: [100, "Task description cannot exceed 100 characters!"],
  },
  Status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  dueDate: {
    type: Date,
    required: [true, "Please provide a due date!"]
  }
});

// Create the Task model using the schema
const Task = mongoose.model('Task', taskSchema);

export default Task;
