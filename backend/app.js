const express = require('express');
const connectDB = require('./utils/database');
const dotenv = require('dotenv');
const fs = require('fs');

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5001;

// Load user data
const userData = JSON.parse(fs.readFileSync('users.json', 'utf-8'));

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

// Define API endpoint
app.get('/get_user', (req, res) => {
  const searchQuery = req.query.search;  // Get the search query from the request

  // Handle case: No search query provided
  if (!searchQuery) {
      return res.status(400).json({ error: 'Invalid input, search query is required' });
  }

  // Search for users that match the search query (case-insensitive)
  const result = userData.filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle case: No results found
  if (result.length === 0) {
      return res.status(404).json({ message: 'No users found' });
  }

  // Return the search result
  res.status(200).json(result);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
