const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Teacher } = require('../models');
const { requireAuth, requireAdmin, verifyToken } = require('../middlewares/auth');

const router = express.Router();
const JWT_SECRET = 'your-secret-key';

// Endpoint GET /login
router.get('/login', (req, res) => {
  const { error } = req.query;
  res.render('login', { error });
});

// Endpoint POST /login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { email: username } });
  if (user && await bcrypt.compare(password, user.password)) {
    req.session.user = { id: user.id, email: user.email, type: user.type };
    const token = jwt.sign({ id: user.id, email: user.email, type: user.type }, JWT_SECRET, { expiresIn: '50m' });
    if (user.type === 'admin') {
      res.redirect('/admin/home');
    } else {
      res.redirect('/user/home');
    }
  } else {
    res.render('error-login', { error: 'Invalid username or password' });
  }
});

// Endpoint GET /home
router.get('/home', requireAuth, async (req, res) => {
  const { user } = req.session;
  if (user.type === 'admin') {
    const users = await User.findAll();
    return res.render('home', { user, users });
  }
  const teacher = await Teacher.findOne({ where: { user_id: user.id } });
  const students = await Student.findAll({ where: { teacher_id: teacher.id } });
  res.render('home', { user, teacher, students });
});

// Endpoint POST /logout
router.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

// Endpoint POST /api/token
router.post('/api/token', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { email: username } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ username: user.email, role: user.type }, JWT_SECRET, { expiresIn: '50m' }); // Use user.type for role
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
