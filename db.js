// Import mongoose to connect and interact with MongoDB
const mongoose = require("mongoose");

// MongoDB Atlas connection string (URI)
const uri = "mongodb+srv://vk20july:rKXydmEJ3Su6qrz9@cluster0.0ex82uk.mongodb.net/?appName=Cluster0";

// Function to connect to MongoDB Atlas
async function connectDB() {
    try {
        // Connect to MongoDB using mongoose
        await mongoose.connect(uri);

        console.log("MongoDB Atlas connected");
    } catch (err) {
        // If there is any connection error, show error message
        console.log("Error connecting to MongoDB:", err.message);
    }
}

// Export the function so other files can call connectDB()
module.exports = connectDB;
