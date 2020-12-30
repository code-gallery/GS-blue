const express = require('express');
const router = express.Router();
const userCreditController = require('../controllers/company-portal/credituser.controller');





router.post('/save', userCreditController.addEditUserCredit);

module.exports = router;