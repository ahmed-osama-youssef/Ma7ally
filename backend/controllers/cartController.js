const cartService = require('../services/cartService');

class CartController {
    async addToCart(req, res, next) {
        try {
            const productId = req.params.product_id;
            const userId = req.user.id;
            await cartService.addToCart(productId, userId);
            res.sendStatus(200);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}

module.exports = new CartController();
