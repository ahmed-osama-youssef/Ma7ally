const express = require('express');
const userService = require('../services/userService');

class UserController {
    async updateUser(req, res, next) {
        try {
            const userId = req.params.user_id;
            const user = req.body;
            await userService.updateUser(userId, user);
            res.sendStatus(200);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    async signin(req, res, next) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const user = await userService.signin(email, password);
            res.json(user);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    async register(req, res, next) {
        try {
            const name = req.body.name;
            const email = req.body.email;
            const password = req.body.password;
            const user = await userService.register(name, email, password);
            res.json(user);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}

module.exports = new UserController();
