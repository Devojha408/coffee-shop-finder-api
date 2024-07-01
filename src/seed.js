const mongoose = require('mongoose');
const dotenv = require('dotenv');
const CoffeeShop = require('./models/CoffeeShop');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

const populateData = async () => {
    await connectDB();


    const seedData = [
        {
            name: 'Coffee Shop 1',
            location: 'Address 1',
            rating: 4.5,
            image: 'https://plus.unsplash.com/premium_photo-1663932464611-1ad261f65504',
            coordinates: { lat: 12.34, lng: 56.78 },
            products: [{ name: 'Coffee', price: 2.5, category: 'Beverage' }],
        },
        {
            name: 'Home Coffee Roasters',
            location: 'Los Angeles, CA',
            rating: 4.5,
            image: 'https://plus.unsplash.com/premium_photo-1663932464611-1ad261f65504',
            coordinates: { lat: 34.0522, lng: -118.2437 },
            products: [
                { name: 'Cappuccino', price: 3.00, category: 'Beverage' },
                { name: 'Mocha', price: 3.50, category: 'Beverage' },
            ],
        },
        {
            name: 'Haus Coffee',
            location: 'San Francisco, CA',
            rating: 4.4,
            image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
            coordinates: { lat: 37.7749, lng: -122.4194 },
            products: [
                { name: 'Espresso', price: 2.50, category: 'Beverage' },
                { name: 'Latte', price: 3.50, category: 'Beverage' },
            ],
        },
        {
            name: 'India Coffee House',
            location: 'Bangalore, India',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1518057111178-44a106bad636',
            coordinates: { lat: 12.9716, lng: 77.5946 },
            products: [
                { name: 'Espresso', price: 2.50, category: 'Beverage' },
                { name: 'Latte', price: 3.50, category: 'Beverage' },
            ],
        },
        {
            name: 'Coffee Central',
            location: 'New York, NY',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760',
            coordinates: { lat: 40.7128, lng: -74.0060 },
            products: [
                { name: 'Americano', price: 3.00, category: 'Beverage' },
                { name: 'Flat White', price: 3.75, category: 'Beverage' },
            ],
        },
        {
            name: 'Café Parisien',
            location: 'Paris, France',
            rating: 4.8,
            image: 'https://plus.unsplash.com/premium_photo-1676885447012-c17dc862434f',
            coordinates: { lat: 48.8566, lng: 2.3522 },
            products: [
                { name: 'Café au lait', price: 4.00, category: 'Beverage' },
                { name: 'Café Crème', price: 4.50, category: 'Beverage' },
            ],
        },
        {
            name: 'Tokyo Coffee House',
            location: 'Tokyo, Japan',
            rating: 4.6,
            image: 'https://plus.unsplash.com/premium_photo-1718285552243-85861ac9e179',
            coordinates: { lat: 35.6895, lng: 139.6917 },
            products: [
                { name: 'Matcha Latte', price: 5.00, category: 'Drinks' },
                { name: 'Iced Coffee', price: 3.00, category: 'Drinks' },
            ],
        },
        // Add more data as needed
    ];
    try {
        await CoffeeShop.insertMany(seedData);
        console.log('Data populated');
        process.exit();
    } catch (error) {
        console.error('Error populating data:', error.message);
        process.exit(1);
    }
};

populateData();
