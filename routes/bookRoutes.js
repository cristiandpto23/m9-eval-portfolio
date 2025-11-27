const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authenticateJWT = require('../middlewares/authMiddleware');

// listar todos los libros
router.get('/', bookController.listBooks);

// ver detalle de un libro
router.get('/:id', bookController.showBook);

// comprar libro
router.post('/:id/comprar', authenticateJWT, bookController.purchaseBook);

module.exports = router;
