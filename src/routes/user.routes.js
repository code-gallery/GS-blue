const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const upload = require("../middleware/upload");



router.get('/users', userController.getUsers);
router.post('/save', upload.single('profileimage'), userController.save);


module.exports = router;