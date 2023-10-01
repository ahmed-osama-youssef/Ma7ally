const express = require('express');
const mongoose = require('mongoose');

const app = express();
const cors = require('cors');

const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');


// Enable CORS for all routes
app.use(cors());

// Add the JSON body parser middleware
app.use(express.json());

// Custom middleware to log each request
app.use((req, res, next) => {
    // Log the request method, URL, and timestamp
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    // Continue processing the request
    next();
});



// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/mahally', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define your routes and middleware here

const PORT = process.env.PORT || 3000;


app.use('/', cartRoutes);
app.use('/', orderRoutes);
app.use('/', productRoutes);
app.use('/', userRoutes);


app.use((err, req, res, next) => {
    res.status(500).send({
        "msg": "Internal Server Error",
        err
    });
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
