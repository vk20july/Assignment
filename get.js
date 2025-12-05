// Import the Express framework
const express = require('express');

const app = express();
const PORT = 8000;

// Middleware that allows the server to read JSON request bodies
app.use(express.json());

// Function that contains all route definitions
const route = function (app) {

    // Simple GET API endpoint for testing
    app.get('/testendpoint', async (req, res) => {

        // Sending a JSON response back to the client
        res.send({ data: 'test' });
    });
};

// Register all routes by calling the route() function
route(app);

// Import and apply custom middleware from middleware.js
// This will run on every request
require('./middleware')(app);

// Start the server and listen on PORT 8000
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
