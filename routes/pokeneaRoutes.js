const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');
const pokeneaAPIController = require('../controllers/api/pokeneaAPIController');

// Route for JSON response - random Pokenea info
router.get('/api/pokenea', pokeneaAPIController.getPokeneaJson);

// Route for view response - random Pokenea image and philosophical phrase
router.get('/pokenea/view', pokeneaController.getPokeneaView);

module.exports = router;
