const CoffeeShop = require('../models/CoffeeShop');

// Get all coffee shops
const getCoffeeShops = async (req, res) => {
    try {
        const { query, sort } = req.query;
        let filter = {};

        // Handle text search query
        if (query) {
            filter = {
                $text: { $search: query }
            };
        }

        let sortOption = { rating: -1 }; // Default sorting by rating descending

        // Handle sorting option
        if (sort) {
            switch (sort) {
                case 'rating_asc':
                    sortOption = { rating: 1 };
                    break;
                // Add more cases for other sorting options as needed
                default:
                    sortOption = { rating: -1 };
                    break;
            }
        }

        const coffeeShops = await CoffeeShop.find(filter)
            .sort(sortOption)
            .exec();

        res.status(200).json(coffeeShops);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single coffee shop by ID
const getCoffeeShopById = async (req, res) => {
    try {
        const coffeeShop = await CoffeeShop.findById(req.params.id);
        if (!coffeeShop) {
            return res.status(404).json({ message: 'Coffee shop not found' });
        }
        res.status(200).json(coffeeShop);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new coffee shop
const createCoffeeShop = async (req, res) => {
    const { name, location, rating, image, coordinates, products } = req.body;

    const newCoffeeShop = new CoffeeShop({
        name,
        location,
        rating,
        image,
        coordinates,
        products,
    });

    try {
        const savedCoffeeShop = await newCoffeeShop.save();
        res.status(201).json(savedCoffeeShop);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a coffee shop by ID
const updateCoffeeShop = async (req, res) => {
    try {
        const updatedCoffeeShop = await CoffeeShop.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCoffeeShop) {
            return res.status(404).json({ message: 'Coffee shop not found' });
        }
        res.status(200).json(updatedCoffeeShop);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a coffee shop by ID
const deleteCoffeeShop = async (req, res) => {
    try {
        const deletedCoffeeShop = await CoffeeShop.findByIdAndDelete(req.params.id);
        if (!deletedCoffeeShop) {
            return res.status(404).json({ message: 'Coffee shop not found' });
        }
        res.status(200).json({ message: 'Coffee shop deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCoffeeShops,
    getCoffeeShopById,
    createCoffeeShop,
    updateCoffeeShop,
    deleteCoffeeShop,
};
