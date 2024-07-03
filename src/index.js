const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const coffeeShopRoutes = require('./routes/coffeeShopRoutes');

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // This allows requests from all origins
app.use(bodyParser.json());

// Routes
app.use('/api/coffeeshops', coffeeShopRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
