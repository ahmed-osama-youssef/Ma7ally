const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    images: [{
        type: String,
        required: true,
    }],
    imageUrl: {
        type: String,
        required: true,
    },
    categories: [{
        type: String,
        required: true,
    }],
    brand: {
        type: String,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
        default: true,
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

const ProductModel = mongoose.model('Product', productSchema);

class ProductService {
    async getAllProducts() {
        return await ProductModel.find();
    }

    async createProduct(product) {
        const newProduct = new ProductModel(product);
        await newProduct.save();
        return newProduct;
    }

    async updateProduct(productId, product) {
        await ProductModel.findByIdAndUpdate(productId, product);
    }

    async getProductById(productId) {
        return await ProductModel.findById(productId);
    }

    async deleteProduct(productId) {
        await ProductModel.findByIdAndDelete(productId);
    }

    async createReview(productId, review) {
        const product = await ProductModel.findById(productId);
        product.reviews.push(review);
        await product.save();
    }
}

module.exports = new ProductService();
