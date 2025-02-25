// React-final/routers/users.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Teacher, Student } = require('../models');
const { requireAuth, requireAdmin } = require('../middlewares/auth');

const router = express.Router();
const JWT_SECRET = 'your-secret-key';

// Endpoint GET /admin/home
router.get('/admin/home', requireAdmin, async (req, res) => {
  const { user } = req.session;
  const users = await User.findAll();
  res.render('admin/home', { user, users });
});

// Endpoint GET /user/home
router.get('/user/home', requireAuth, async (req, res) => {
  const { user } = req.session;
  const teacher = await Teacher.findOne({ where: { user_id: user.id } });
  const students = await Student.findAll({ where: { teacher_id: teacher.id } });
  res.render('user/home', { user, teacher, students });
});

// Endpoint GET /teachers
router.get('/teachers', requireAdmin, async (req, res) => {
  const teachers = await Teacher.findAll();
  res.render('teachers', { teachers });
});

// Endpoint GET /students
router.get('/students', async (req, res) => {
  try {
    const teacher = await Teacher.findOne({ where: { user_id: req.user.id } });
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    const students = await Student.findAll({ where: { teacher_id: teacher.id } });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint POST /logout
router.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

// Endpoint GET /api/users
router.get('/api/users', requireAdmin, async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// Endpoint GET /api/users/:id
router.get('/api/users/:id', requireAdmin, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user' });
  }
});

// Endpoint POST /api/users
router.post('/api/users', requireAdmin, async (req, res) => {
  try {
    const {
      email, password, type, active,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email, password: hashedPassword, type, active,
    });

    // Generar el token JWT
    const token = jwt.sign({ id: user.id, email: user.email, type: user.type }, JWT_SECRET, { expiresIn: '15m' });

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

// Endpoint PUT /api/users/:id
router.put('/api/users/:id', requireAdmin, async (req, res) => {
  try {
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
      email, password: hashedPassword, type, active,
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
});

// Endpoint DELETE /api/users/:id
router.delete('/api/users/:id', requireAdmin, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      const teacher = await Teacher.findOne({ where: { user_id: user.id } });
      if (teacher) {
        return res.status(400).send('Cannot delete user with associated teacher');
      }
      await user.destroy();
      res.status(204).send();
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});

// Endpoint POST /api/users/:id/active
router.post('/api/users/:id/active', requireAdmin, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update({ active: true });
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
});

// Endpoint GET /api/users/:id/active
router.get('/api/users/:id/active', requireAdmin, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json({ active: user.active });
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user' });
  }
});

module.exports = router;
