const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');
const pokeneaAPIController = require('../controllers/api/pokeneaAPIController');

router.get('/api/pokenea', pokeneaAPIController.getPokeneaJson);

router.get('/pokenea/view', pokeneaController.getPokeneaView);

module.exports = router;
