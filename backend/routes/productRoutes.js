const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/api/products', productController.getAllProducts);
router.post('/api/products', productController.createProduct);
router.post('/api/products/:product_id', productController.updateProduct);
router.get('/api/products/:product_id', productController.getProductById);
router.delete('/api/products/:product_id', productController.deleteProduct);
router.post('/api/products/:product_id/reviews', productController.createReview);

module.exports = router;