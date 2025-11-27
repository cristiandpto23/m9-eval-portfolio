require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');
const app = express();

// middlewares para parseo
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware para cookies
app.use(cookieParser());

// carpeta archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// configuración de vistas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Ejemplo de registro de rutas
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
app.use('/usuarios', userRoutes);
app.use('/libros', bookRoutes);

// ruta principal
app.get('/', (req, res) => {
    res.render('index', { titulo: 'Bienvenido a la Librería' });
});

// puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
