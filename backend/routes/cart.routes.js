const express = require('express');
const { getCartProducts } = require('../controllers/cart.controller');
const { protect } = require('../middlewares/auth.middleware')

const router = express.Router();

router
    .route("/")
    .get(protect,getCartProducts)

    module.exports = router
