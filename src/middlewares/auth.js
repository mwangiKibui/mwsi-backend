const jwt = require('jsonwebtoken');
const db = require('../db/models');
const dotenv = require('dotenv');

dotenv.config();

const getUserRoles = async (userId) => {
    const roles = await db.UserRole.findAll({
        where: { userId },
        include: [{
            model: db.Role,
            as: 'role'
        }]
    });

    return roles.map(r => r.role.name);
}

exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_TOKEN, async (err, user) => {
        if (err) return res.sendStatus(403);
        // send request to get the roles from db.
        req.user.roles = await getUserRoles(user.id);
        req.user = user;
        next();
    });
};

exports.generateToken = (user) => {
    return jwt.sign(user, process.env.JWT_TOKEN, { expiresIn: process.env.JWT_TOKEN_LIFESPAN });
}

// Middleware to check if the user has the required role
exports.IsManager = () => {
    return (req, res, next) => {
        if(req.user.roles.includes('Manager')) {
            return next();
        }
        return res.status(403).json({ message: 'Access denied. Manager role required.' });
    };
}

exports.IsEmployee = () => {
    return (req, res, next) => {
        if(req.user.roles.includes('Employee')) {
            return next();
        }
        return res.status(403).json({ message: 'Access denied. Employee role required.' });
    };
}