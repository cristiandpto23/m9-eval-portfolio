const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

// registro de usuario
async function registerUser(req, res) {
    const { username, password } = req.body;
    try {
        const newUser = await userModel.registerUser(username, password);
        // generar jwt y hacer login automático
        const token = jwt.sign({ id: newUser.id, username: newUser.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/libros');
    } catch (error) {
        res.status(400).render('register', { error: 'Error al registrar usuario' });
    }
}

// login de usuario
async function loginUser(req, res) {
    const { username, password } = req.body;
    try {
        const user = await userModel.findUserByUsername(username);
        if (!user) {
            return res.status(401).render('login', { error: 'Usuario no encontrado' });
        }
        const bcrypt = require('bcryptjs');
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).render('login', { error: 'Contraseña incorrecta' });
        }
        // generar jwt
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // guardar token en cookie
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/libros');
    } catch (error) {
        res.status(500).render('login', { error: 'Error al iniciar sesión' });
    }
}

module.exports = {
    registerUser,
    loginUser,
};
