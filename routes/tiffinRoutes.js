const express = require('express');
const { createTiffinRecord } = require('../controllers/tiffinController');
const router = express.Router();

router.post('/', createTiffinRecord);

module.exports = router;
