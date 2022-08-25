const express = require('express');
const router = express.Router();
const signupController = require('../Controllers/auth.controller');


router.post('/register', signupController);







module.exports = router;