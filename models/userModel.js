const pool = require('./db');
const bcrypt = require('bcryptjs');

// registrar usuario
async function registerUser(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO usuarios (username, password) VALUES ($1, $2) RETURNING *';
    const values = [username, hashedPassword];
    const res = await pool.query(query, values);
    return res.rows[0];
}

// buscar usuario por username
async function findUserByUsername(username) {
    const query = 'SELECT * FROM usuarios WHERE username = $1';
    const values = [username];
    const res = await pool.query(query, [username]);
    return res.rows[0];
}

module.exports = {
    registerUser,
    findUserByUsername,
};
