const express = require('express');
const router = express.Router();

const authController = require('../controllers/company-portal/auth.controller');

router.post('/', authController);

module.exports = router
