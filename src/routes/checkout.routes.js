const express = require('express');
const router = express.Router();

const checkoutController = require('../controllers/company-portal/checkout.controller');

const ensureToken = (req, res, next) => {
    const bearerToken = req.headers['authorization'];
    if(bearerToken !== undefined){
        const tokenArray = bearerToken.split(" ");
        const token = tokenArray[1];
        req.token = token;
        next();
    }else{
        res.send({
            status : "TOKEN_NOT_AVAILABLE"
        })
    }
}

router.get('/getCheckOutDetails',ensureToken, checkoutController.getCheckOutDetails);
module.exports = router;