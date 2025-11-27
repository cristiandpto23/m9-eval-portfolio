const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// vista de registro
router.get('/register', (req, res) => {
    res.render('register');
});

// procesar registro
router.post('/register', userController.registerUser);

// vista de login
router.get('/login', (req, res) => {
    res.render('login');
});

// procesar login
router.post('/login', userController.loginUser);

module.exports = router;
