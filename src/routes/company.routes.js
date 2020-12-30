const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company-portal/company.controller');


router.get('/company', companyController.getCompany);

module.exports = router;