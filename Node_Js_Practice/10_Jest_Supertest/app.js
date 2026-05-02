// app.js
const express = require('express');
const { registerNewUser } = require('./database_User'); 
const app = express();

app.use(express.json()); // Allow API to read JSON bodies

app.post('/api/users', async (req, res) => {
    try {
        // Grab the username from the incoming request body
        const { username } = req.body; 
        
        // Pass it to my service logic
        const newUser = await registerNewUser(username);
        
        // Return 201 Created and the data
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        // If my service throws an error (like "Username is required")
        // I catch it and return a 400 Bad Request
        res.status(400).json({ success: false, error: error.message });
    }
});



module.exports = app;