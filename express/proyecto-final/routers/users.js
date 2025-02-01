/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
// eslint-disable-next-line no-unused-vars
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Teacher, Student } = require('../models');
const { requireAuth, requireAdmin, verifyToken } = require('../middlewares/auth');

const router = express.Router();

// Endpoint GET /
router.get('/', (req, res) => {
  res.redirect('/login');
});

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
    const token = jwt.sign({ id: user.id, email: user.email, type: user.type }, 'your-secret-key', { expiresIn: '15m' });
    res.redirect('/home');
  } else {
    res.render('error-login', { error: 'Invalid username or password' });
  }
});

// Endpoint POST /change-password
router.post('/change-password', async (req, res) => {
  const { currentPassword, newPassword, username } = req.body;
  const user = await User.findOne({ where: { email: username } });
  if (user && await bcrypt.compare(currentPassword, user.password)) {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await user.update({ password: hashedPassword });
    res.redirect('/login?success=Password changed successfully');
  } else {
    res.redirect('/login?error=Current password is incorrect&showChangePassword=true');
  }
});

// Endpoint GET /users
router.get('/users', requireAdmin, async (req, res) => {
  const users = await User.findAll();
  res.render('users', { users });
});

// Endpoint GET /home
router.get('/home', requireAuth, async (req, res) => {
  const { user } = req.session;
  if (user.type === 'admin') {
    const users = await User.findAll();
    return res.render('home', { user, users });
  }
  const teacher = await Teacher.findOne({ where: { user_id: user.id } });
  res.render('home', { user, teacher });
});
// Endpoint POST /logout
router.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

// Endpoint POST /api/token
router.post('/api/token', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { email: username } });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user.id, email: user.email, type: user.type }, 'your-secret-key', { expiresIn: '15m' });
    return res.json({ token });
  }
  res.status(401).json({ error: 'Invalid username or password' });
});

// Endpoint GET /api/users
router.get('/users', requireAdmin, async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// Endpoint GET /api/users/:id
router.get('/users/:id', requireAdmin, async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// Endpoint POST /api/users
router.post('/users', requireAdmin, async (req, res) => {
  const {
    email, password, type, active,
  } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    email, password: hashedPassword, type, active,
  });
  res.status(201).json(user);
});

// Endpoint PUT /api/users/:id
router.put('/users/:id', requireAdmin, async (req, res) => {
  const { id } = req.params;
  const {
    email, password, type, active,
  } = req.body;
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).send('User not found');
  }

  const hashedPassword = password ? await bcrypt.hash(password, 10) : user.password;

  await user.update({
    email,
    password: hashedPassword,
    type,
    active,
  });

  res.json(user);
});

// Endpoint POST /api/users/:id/change-password
router.post('/users/:id/change-password', requireAdmin, async (req, res) => {
  const { password } = req.body;
  const user = await User.findByPk(req.params.id);
  if (user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    await user.update({ password: hashedPassword });
    res.status(200).send('Password updated successfully');
  } else {
    res.status(404).send('User not found');
  }
});

// Endpoint DELETE /users/:id
router.delete('/users/:id', requireAdmin, async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    if (user.type === 'admin') {
      return res.status(400).send('Cannot delete admin user');
    }
    const teacher = await Teacher.findOne({ where: { user_id: user.id } });
    if (teacher) {
      return res.status(400).send('Cannot delete user with associated teacher');
    }
    await user.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
});

module.exports = router;
