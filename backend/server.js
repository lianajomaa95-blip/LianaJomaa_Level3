// Load environment variables FIRST (before anything else uses them)
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Initialize the app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware — runs on every request
app.use(cors());                          // allow frontend to talk to backend
app.use(express.json());                  // parse JSON request bodies

// Test route — just to confirm the server works
app.get('/', (req, res) => {
  res.json({ message: 'Pizza Delivery API is running 🍕' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});