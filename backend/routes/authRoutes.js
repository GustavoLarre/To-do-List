const express = require('express');
const router = express.Router();
const { cadastro, login } = require('../controllers/authController');

// Rota de cadastro
router.post('/cadastro', cadastro);

// Rota de login
router.post('/login', login);

module.exports = router;
