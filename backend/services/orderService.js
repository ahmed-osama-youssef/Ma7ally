const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
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
    shippingAddress: {
        type: String,
        required: true,
    },
    billingAddress: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['PENDING', 'PAID', 'SHIPPED', 'DELIVERED'],
        default: 'PENDING',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const OrderModel = mongoose.model('Order', orderSchema);

class OrderService {
    async createOrder(order) {
        const newOrder = new OrderModel(order);
        await newOrder.save();
        return newOrder;
    }

    async getMyOrders(userId) {
        return await OrderModel.find({ customer: userId });
    }

    async getAllOrders() {
        return await OrderModel.find();
    }

    async getOrderById(orderId) {
        return await OrderModel.findById(orderId);
    }

    async payOrder(orderId, paymentResult) {
        const order = await OrderModel.findById(orderId);
        order.paymentResult = paymentResult;
        order.status = 'PAID';
        await order.save();
    }

    async deleteOrder(orderId) {
        await OrderModel.findByIdAndDelete(orderId);
    }
}

module.exports = new OrderService();
