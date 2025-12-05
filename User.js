// Import mongoose for creating schema and interacting with MongoDB
const mongoose = require("mongoose");

// Import bcryptjs to hash (encrypt) passwords before saving
const bcrypt = require("bcryptjs");

// Create a User schema (structure of user document)
const UserSchema = new mongoose.Schema({
    email: String,        // User's email
    password: String,     // User's password (will be hashed before saving)
    firstName: String,    // User's first name
    lastName: String      // User's last name
});

// "pre-save" middleware: runs automatically BEFORE saving user data
UserSchema.pre('save', async function () {

    // Check if password field was created or changed
    if (this.isModified('password')) {
        
        // Hash the plain-text password using bcrypt before saving
        this.password = await bcrypt.hash(this.password, 10);
    }
});

// Create User model based on the schema
const User = mongoose.model('User', UserSchema);

// Export the model so it can be used in other files (register, login, etc.)
module.exports = User;
