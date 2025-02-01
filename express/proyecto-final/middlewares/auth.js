/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your-secret-key';

const requireAuth = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
};

const requireAdmin = (req, res, next) => {
  if (!req.session.user || req.session.user.type !== 'admin') {
    return res.status(401).send('Unauthorized');
  }
  next();
};

const verifyToken = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    return res.status(403).send('A token is required for authentication');
  }
  const token = authorizationHeader.split(' ')[1];
  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
  return next();
};

module.exports = { requireAuth, requireAdmin, verifyToken };
