const bookModel = require('../models/bookModel');

// mostrar todos los libros
async function listBooks(req, res) {
    try {
        const books = await bookModel.getAllBooks();
        res.render('books', { books });
    } catch (error) {
        res.status(500).render('books', { error: 'Error al obtener los libros' });
    }
}

// mostrar detalle de un libro
async function showBook(req, res) {
    const { id } = req.params;
    try {
        const book = await bookModel.getBookById(id);
        if (!book) {
            return res.status(404).render('bookDetail', { error: 'Libro no encontrado' });
        }
        res.render('bookDetail', { book });
    } catch (error) {
        res.status(500).render('bookDetail', { error: 'Error al obtener el libro' });
    }
}

// comprar libro
async function purchaseBook(req, res) {
    const { id } = req.params;
    const { cantidad } = req.body;
    try {
        const updateBook = await bookModel.updateBookStock(id, cantidad);
        if (!updateBook) {
            return res.status(400).render('bookDetail', { error: 'No hay stock disponible' });
        }
        res.redirect('/libros');
    } catch (error) {
        res.status(500).render('bookDetail', { error: 'Error al comprar el libro' });
    }
}

module.exports = {
    listBooks,
    showBook,
    purchaseBook,
};
