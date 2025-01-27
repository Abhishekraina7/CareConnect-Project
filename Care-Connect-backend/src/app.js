import express from 'express';
import pkg from 'body-parser';
const { json } = pkg;
import { connectDB } from './config/database.js';
import authRoutes from './routes/auth.js';
import User from './models/Users.js';

const app = express();
const port = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(json());

// Use routes
app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Function to create a new user
async function createUser(username, email, password) {
    const user = new User({
        username,
        email,
        passwordHash: password // Store the plain password temporarily for hashing
    });

    try {
        await user.save();
        console.log('User  created:', user);
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

// Example usage
createUser('Abhishek Raina', 'Abhishek@example.com', 'CareConnect@123');