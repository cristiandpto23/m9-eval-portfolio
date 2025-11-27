const pool = require('../models/db');

// crear libro
async function createBook(nombre, cantidad_disponible) {
    const query = 'INSERT INTO libros (nombre, cantidad_disponible) VALUES ($1, $2) RETURNING *';
    const values = [nombre, cantidad_disponible];
    const result = await pool.query(query, values);
    return result.rows[0];
}

// obtener todos los libros
async function getAllBooks() {
    const query = 'SELECT * FROM libros';
    const result = await pool.query(query);
    return result.rows;
}

// buscar libro por id
async function getBookById(id) {
    const query = 'SELECT * FROM libros WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0];
}

// actualizar cantidad disponible (compra)
async function updateBookStock(id, cantidad) {
    const query = 'UPDATE libros SET cantidad_disponible = cantidad_disponible - $1 WHERE id = $2 AND cantidad_disponible >= $1 RETURNING *';
    const values = [cantidad, id];
    const result = await pool.query(query, values);
    return result.rows[0];
}

module.exports = { createBook, getAllBooks, getBookById, updateBookStock };
