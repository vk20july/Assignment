// Import JSON Web Token library
const jwt = require('jsonwebtoken');

// Export a function that receives the Express app instance
const mypath = app => {

    // Dummy stored user details (only for demo purpose)
    const email = "abc";
    const firstName = "Vivek Kumar";
    const lastName = "Tiwari";

    // Middleware function to check if token is valid
    const checktoken = (req, res, next) => {

        // Read token from request headers: either x-access-token or authorization
        let token = req.headers['x-acess-token'] || req.headers['authorization'];

        // If no token is provided
        if (token === undefined) {
            return res.status(401).send({ error: "Token is not present" });
        }

        // If token begins with "Bearer ", remove it to get the actual token
        if (token.startsWith('Bearer')) {
            token = token.slice(7, token.length);
        }

        // If token exists, verify it
        if (token) {
            jwt.verify(token, "thisismysecret", (err, decoded) => {

                // If token is invalid or expired
                if (err) {
                    return res.json({
                        success: false,
                        message: "Token is not right"
                    });
                } 
                else {
                    // Store decoded data in request for later use
                    req.decoded = decoded;

                    // Move to the next middleware or route
                    next();
                }
            });
        } 
        else {
            return res.json({
                success: false,
                message: "Token is not valid"
            });
        }
    };

    // Login route — verifies hardcoded user details and creates a JWT token
    app.post('/login', async (req, res) => {

        const loginData = req.body.loginData;

        // Check login credentials (only for demo)
        if (email === loginData.email && firstName === loginData.firstName && lastName === loginData.lastName) {

            // Create JWT token (valid for 24 hours)
            const token = jwt.sign(
                { email: email, role: 'admin' }, 
                'thisismysecret',
                { expiresIn: '24h' }
            );

            return res.status(200).send({ token: token });
        }

        // If login details incorrect
        res.status(401).send({ error: "Invalid email and password" });
    });

    // Protected route — only accessible with a valid token
    app.get('/api/user', async (req, res) => {

        // Apply token-checking middleware
        checktoken(req, res, () => {

            // If token is valid, return user info
            return res.status(200).send({
                email: "abc",
                firstName: "Vivek Kumar",
                lastName: "Tiwari"
            });
        });
    });
};

// Export the middleware so it can be used in other files
module.exports = mypath;

