const express = require('express');
const orderService = require('../services/orderService');

class OrderController {
    async createOrder(req, res, next) {
        try {
            const order = req.body;
            const newOrder = await orderService.createOrder(order);
            res.json(newOrder);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    async getMyOrders(req, res, next) {
        try {
            const userId = req.user.id;
            const orders = await orderService.getMyOrders(userId);
            res.json(orders);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    async getAllOrders(req, res, next) {
        try {
            const orders = await orderService.getAllOrders();
            res.json(orders);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    async getOrderById(req, res, next) {
        try {
            const orderId = req.params.order_id;
            const order = await orderService.getOrderById(orderId);
            res.json(order);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    async payOrder(req, res, next) {
        try {
            const orderId = req.params.order_id;
            const paymentResult = req.params.payment_result;
            await orderService.payOrder(orderId, paymentResult);
            res.sendStatus(200);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    async deleteOrder(req, res, next) {
        try {
            const orderId = req.params.order_id;
            await orderService.deleteOrder(orderId);
            res.sendStatus(200);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}

module.exports = new OrderController();
