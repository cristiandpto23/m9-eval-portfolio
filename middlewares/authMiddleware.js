const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/usuarios/login');
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.redirect('/usuarios/login');
    }
}

module.exports = authenticateJWT;
