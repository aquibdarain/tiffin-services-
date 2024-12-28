const { User } = require('../models');

// Create a new user
const createUser = async (req, res) => {
    try {
        const { name } = req.body;
        const user = await User.create({ name });
        res.status(201).json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
};

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
};

module.exports = {
    createUser,
    getAllUsers,
};
