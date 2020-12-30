const express = require('express');
const router = express.Router();

const productsController = require('../controllers/company-portal/products.controller');

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

router.get('/getAllProducts',ensureToken, productsController.getAllProducts);
router.get('/getProductDetails', ensureToken,productsController.getProductDetails);




module.exports = router
