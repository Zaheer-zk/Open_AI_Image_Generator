const express = require('express');
const { generateImage } = require('../controllers/openaiController');
const router = express.Router();

router.get('/generateimage', generateImage);

module.exports = router;
