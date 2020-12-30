const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/company-portal/category.controller');

router.get('/getAllCategories', categoryController.getAllCategories);
router.get('/getAllSubCategories',categoryController.getAllSubCategories);

// router.get('/getAllCategoriesBanner', categoryController.getAllCategoriesBanner);

module.exports = router;
