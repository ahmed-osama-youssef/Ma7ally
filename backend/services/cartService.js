const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            default: 1,
        },
    }],
});

const CartModel = mongoose.model('Cart', cartSchema);

class CartService {
    async addToCart(productId, userId) {
        const cart = await CartModel.findOne({ customer: userId });
        if (cart) {
            cart.items.push({ product: productId, quantity: 1 });
            await cart.save();
        } else {
            const newCart = new CartModel({ customer: userId, items: [{ product: productId, quantity: 1 }] });
            await newCart.save();
        }
    }
}

module.exports = new CartService();
