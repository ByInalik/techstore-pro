// Midleware: verifica que el usuario auntenticado tenga el rol admin
function verificarAdmin(req, res, next) {
    if (!req.usuario) {
        return res.status(401).json({ error: 'Sin autenticación' });
    }
    if (req.usuario.rol !== 'admin') {
        return res.status(403).json({ error: 'Acceso denegado - se requiere rol admin' });
    }
    next(); // Solo llega aqui si el token existe y el rol es admin
}

module.exports = verificarAdmin;  