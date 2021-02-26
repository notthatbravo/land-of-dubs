// Get the required packages 
const express = require('express');
const router = express.Router();

// Import controller
const PagesController = require('../controllers/PagesController');
const AuthController = require('../controllers/AuthController');
const NewsController = require('../controllers/NewsController');

// Respond to /
router.get('/', PagesController.Home);

// Respond to /forgot-password
router.get('/forgot-password', AuthController.ForgotPassword);

// Respond to /login
router.get('/login', AuthController.Login);

// Respond to /news
router.get('/news', NewsController.index);

// Respond to /signup
router.get('/signup', AuthController.Signup);

// Make code global
module.exports = router;
