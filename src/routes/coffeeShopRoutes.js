const express = require('express');
const { getCoffeeShops, getCoffeeShopById, createCoffeeShop, updateCoffeeShop, deleteCoffeeShop } = require('../controllers/coffeeShopController');

const router = express.Router();

router.get('/', getCoffeeShops);
router.get('/:id', getCoffeeShopById);
router.post('/', createCoffeeShop);
router.put('/:id', updateCoffeeShop);
router.delete('/:id', deleteCoffeeShop);

module.exports = router;
