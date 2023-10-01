const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER',
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

const UserModel = mongoose.model('User', userSchema);

class UserService {
    async updateUser(userId, user) {
        await UserModel.findByIdAndUpdate(userId, user);
    }

    async signin(email, password) {
        const user = await UserModel.findOne({ email });
        if (user && user.comparePassword(password)) {
            return user;
        } else {
            return null;
        }
    }

    async register(name, email, password) {
        const newUser = new UserModel({ name, email, password });
        await newUser.save();
        return newUser;
    }
}

module.exports = new UserService();
