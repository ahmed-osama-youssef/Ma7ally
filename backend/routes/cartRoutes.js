const express = require('express');
const cartController = require('../controllers/cartController');

const router = express.Router();

router.get('/api/products/:product_id', cartController.addToCart);

module.exports = router;