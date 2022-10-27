const path = require('path');

const express = require('express');

const profilecontroller = require('../controllers/profile');
const authenticate = require('../middleware/auth')

const router = express.Router();

router.get('/profile',authenticate.authenticate,profilecontroller.profile)




module.exports = router

//