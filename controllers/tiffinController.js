const { TiffinRecord } = require('../models');

// Create a new tiffin record
const createTiffinRecord = async (req, res) => {
    try {
        const { userId, date, vegCount, nonVegCount } = req.body;
        const tiffinRecord = await TiffinRecord.create({ userId, date, vegCount, nonVegCount });
        res.status(201).json(tiffinRecord);
    } catch (error) {
        console.error('Error creating tiffin record:', error);
        res.status(500).json({ error: 'An error occurred while creating the tiffin record.' });
    }
};

// Get all tiffin records
const getAllTiffinRecords = async (req, res) => {
    try {
        const records = await TiffinRecord.findAll();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching tiffin records.' });
    }
};

module.exports = {
    createTiffinRecord,
    getAllTiffinRecords,
};
