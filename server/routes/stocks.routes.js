const express = require('express')

const {
handleGetStock
} =  require('../controllers/finnhub.controllers')

const router = express.Router();

router.get('/get/:stockSymbol', handleGetStock)

module.exports = {stockRouter: router};