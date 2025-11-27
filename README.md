# Módulo 9 - Evaluación de Portafolio

## Librería - Sistema de Compra de Libros

Aplicación web para gestionar una librería con registro de usuarios, autenticación JWT y compra de libros.

## Características

-   Registro e inicio de sesión de usuarios con autenticación JWT
-   Listado de libros disponibles
-   Compra de libros (solo usuarios autenticados)
-   Validación de stock disponible
-   Interfaz con Bootstrap

## Tecnologías

-   Node.js
-   Express
-   PostgreSQL
-   Handlebars (motor de vistas)
-   Bootstrap 5
-   JWT (jsonwebtoken)
-   bcryptjs

## Requisitos

-   Node.js (v14 o superior)
-   PostgreSQL
-   npm

## Instalación

1. Clona el repositorio:

2. Instala las dependencias:

```bash
npm install
```

3. Configura las variables de entorno:

    - Copia el archivo `.env.example` a `.env`
    - Completa las variables con tus datos de PostgreSQL y clave JWT

4. Crea la base de datos y las tablas:

```sql
CREATE DATABASE libreria_db;

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE libros (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  cantidad_disponible INTEGER NOT NULL
);
```

5. Agrega libros de ejemplo (opcional):

```sql
INSERT INTO libros (nombre, cantidad_disponible) VALUES
('Cien años de soledad', 10),
('El principito', 5),
('1984', 8);
```

## Uso

1. Inicia el servidor:

```bash
npm run dev
```

2. Abre tu navegador en `http://localhost:3000`

3. Flujo de uso:
    - Regístrate en `/usuarios/register`
    - Inicia sesión en `/usuarios/login`
    - Explora los libros en `/libros`
    - Compra libros (requiere autenticación)

## Estructura del Proyecto

```
├── controllers/        # Lógica de negocio
├── models/            # Modelos de datos y queries
├── routes/            # Definición de rutas
├── views/             # Vistas Handlebars
├── middlewares/       # Middleware de autenticación
├── public/            # Archivos estáticos
├── app.js             # Configuración principal
├── .env               # Variables de entorno (no incluir en git)
└── package.json       # Dependencias del proyecto
```

## Rutas Principales

-   `GET /` - Página de inicio
-   `GET /usuarios/register` - Formulario de registro
-   `POST /usuarios/register` - Procesar registro
-   `GET /usuarios/login` - Formulario de login
-   `POST /usuarios/login` - Procesar login
-   `GET /libros` - Listado de libros
-   `GET /libros/:id` - Detalle de un libro
-   `POST /libros/:id/comprar` - Comprar libro (requiere autenticación)

## Autor

Cristian Ahumada
