const path = require('path');

const express = require('express');

const signupController = require('../controllers/register');

const router = express.Router();


router.post('/register', signupController.postSignUp);
router.post('/login',signupController.login)

module.exports = router //