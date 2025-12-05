// Import database connection function from db.js
const connectDB = require("./db.js");

// Import Express framework to create server and routes
const express = require("express");

// Import User model (schema) to interact with MongoDB collection
const User = require("./User.js");

// Create an Express application
const app = express();

// Middleware: allows the server to read JSON data coming from client requests
app.use(express.json());

// Connect to MongoDB database
connectDB();

// Route: POST /api/register
// Purpose: Insert (register) user data into the database
app.post('/api/register', async (req, res) => {
    try {
        // Create a new user document in MongoDB using the data sent in request body
        const user = await User.create(req.body);

        // Send success response to client
        res.status(201).json({ "message": "User registered successfully" });

    } catch (err) {
        // If any error occurs (ex: validation error, DB error), send error response
        res.status(500).json({
            error: err.message
        });
    }
});


// Define server port
const PORT = 5001;
// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log("Server is running on the port", PORT);
});

