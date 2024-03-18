const mongoose = require("mongoose");

const productSchima = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "price is required"]        
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "OnePlus"],
            message: `{VALUE} is not supported`
        }
    }
});

module.exports = mongoose.model('Product', productSchima);