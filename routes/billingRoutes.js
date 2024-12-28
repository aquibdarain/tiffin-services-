const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

router.post('/bill', billingController.generateBill);

module.exports = router;