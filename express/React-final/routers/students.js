// React-final/routers/students.js
const express = require('express');
const { Student, Teacher } = require('../models');
const { requireAdmin } = require('../middlewares/auth');

const router = express.Router();

// Endpoint GET /api/students
router.get('/api/students', requireAdmin, async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching students' });
  }
});

// Endpoint GET /api/students/:id
router.get('/api/students/:id', requireAdmin, async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).send('Student not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching student' });
  }
});

// Endpoint POST /api/students
router.post('/api/students', requireAdmin, async (req, res) => {
  try {
    const {
      name, dni, date_of_birth, teacher_id,
    } = req.body;
    const student = await Student.create({
      name, dni, date_of_birth, teacher_id,
    });
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Error creating student' });
  }
});

// Endpoint PUT /api/students/:id
router.put('/api/students/:id', requireAdmin, async (req, res) => {
  try {
    const {
      name, dni, date_of_birth, teacher_id,
    } = req.body;
    const student = await Student.findByPk(req.params.id);
    if (student) {
      await student.update({
        name, dni, date_of_birth, teacher_id,
      });
      res.json(student);
    } else {
      res.status(404).send('Student not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating student' });
  }
});

// Endpoint DELETE /api/students/:id
router.delete('/api/students/:id', requireAdmin, async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).send('Student not found');
    }
    await student.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting student' });
  }
});

module.exports = router;
