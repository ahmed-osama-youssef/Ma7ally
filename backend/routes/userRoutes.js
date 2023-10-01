const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.put('/api/users/:user_id', userController.updateUser);
router.post('/api/users/signin', userController.signin);
router.post('/api/users/register', userController.register);

module.exports = router;