// Import Express framework
const express = require("express");

// Import JSON Web Token library to create JWT tokens
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;

// Secret key used to sign JWT tokens (keep it private in real projects)
const SECRET_KEY = "your_secret_key";

// Middleware to allow server to read JSON data from request body
app.use(express.json());

// Login API endpoint
app.post('/api/login', (req, res) => {
    // Extract email and password sent from client
    const { email, password } = req.body;

    // In real applications:
    // 1. Check if user exists in database
    // 2. Compare hashed password
    // 3. Authenticate user properly
    //
    // For this simple example, we assume user is valid

    // Data to include inside the token (payload)
    const payload = {
        email,
        password
    };

    // Create a JWT token that expires in 1 hour
    const token = jwt.sign(
        payload,
        SECRET_KEY,
        { expiresIn: "1h" }
    );

    // Send the token back to the client
    res.json({ token: token });
});

// Start the server
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
