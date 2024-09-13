const express = require('express');
const connectDB = require('./utils/database');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON request body
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/user'));

// Root Route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
