const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.post('/api/orders', orderController.createOrder);
router.get('/api/orders/mine', orderController.getMyOrders);
router.get('/api/orders', orderController.getAllOrders);
router.get('/api/orders/:order_id', orderController.getOrderById);
router.put('/api/orders/:order_id/pay/:payment_result', orderController.payOrder);
router.delete('/api/orders/:order_id', orderController.deleteOrder);

module.exports = router;