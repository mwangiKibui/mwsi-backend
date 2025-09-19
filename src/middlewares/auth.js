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

    if (!token) return res.status(401).json({
        success:false,
        message: 'Invalid or missing token'
    });
    jwt.verify(token, process.env.JWT_TOKEN, async (err, user) => {
        if (err) return res.status(403).json({
            success:false,
            message: 'Invalid or expired token'
        });
        // send request to get the roles from db.
        req.userRoles = await getUserRoles(user.id);
        req.user = user;
        next();
    });
};

exports.generateToken = (user) => {
    return jwt.sign(user, process.env.JWT_TOKEN, { expiresIn: process.env.JWT_TOKEN_LIFESPAN });
}

// Middleware to check if the user has the required role
exports.IsManager = (req,res,next) => {
    if(req.userRoles.includes('Manager') || req.userRoles.includes('Admin')) {
        return next();
    }
    return res.status(403).json({ message: 'Access denied. Manager role required.' });
    
}

exports.IsEmployee = (req,res,next) => {
    if(req.userRoles.includes('Employee') || req.userRoles.includes('Manager') || req.userRoles.includes('Admin')) {
        return next();
    }
    return res.status(403).json({ message: 'Access denied. Employee role required.' });
}