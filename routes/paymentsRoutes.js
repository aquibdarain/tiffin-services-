const express = require('express');
const router = express.Router();
const { addAdvancePayment, deductPayment } = require('../controllers/advancedController');

// Route for adding advance payment
router.post('/add', addAdvancePayment);

// Route for deducting payment
router.put('/deduct', deductPayment);

module.exports = router;
