const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a new user
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    const user = new User({
      name,
      email,
      password,
    });

    await user.save();
    res.status(201).send('User registered');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
