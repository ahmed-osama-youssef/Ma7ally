const express = require('express');
const productService = require('../services/productService');

class ProductController {
    async getAllProducts(req, res, next) {
        try {
            const products = await productService.getAllProducts();
            res.json(products);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    async createProduct(req, res, next) {
        try {
            const product = req.body;
            const newProduct = await productService.createProduct(product);
            res.json(newProduct);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    async updateProduct(req, res, next) {
        try {
            const productId = req.params.product_id;
            const product = req.body;
            await productService.updateProduct(productId, product);
            res.sendStatus(200);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    async getProductById(req, res, next) {
        try {
            const productId = req.params.product_id;
            const product = await productService.getProductById(productId);
            res.json(product);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    async deleteProduct(req, res, next) {
        try {
            const productId = req.params.product_id;
            await productService.deleteProduct(productId);
            res.sendStatus(200);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    async createReview(req, res, next) {
        try {
            const productId = req.params.product_id;
            const review = req.body;
            await productService.createReview(productId, review);
            res.sendStatus(200);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}

module.exports = new ProductController();
