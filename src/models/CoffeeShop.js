const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
});

const CoffeeShopSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: Number, required: true },
    image: { type: String, required: true },
    coordinates: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    products: [ProductSchema],
});

// Index definition
CoffeeShopSchema.index({
    name: 'text',
    location: 'text',
    'products.name': 'text',
    rating: 1, // 1 for ascending, -1 for descending
});

const CoffeeShop = mongoose.model('CoffeeShop', CoffeeShopSchema);

module.exports = CoffeeShop;
