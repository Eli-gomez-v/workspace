/* eslint-disable consistent-return */
/* eslint-disable camelcase */
const express = require('express');
const { Teacher, User, Student } = require('../models');
const { requireAdmin } = require('../middlewares/auth');

const router = express.Router();

// Endpoint GET /api/teachers
router.get('/api/teachers', requireAdmin, async (req, res) => {
  const teachers = await Teacher.findAll();
  res.json(teachers);
});

// Endpoint GET /teachers
router.get('/teachers', requireAdmin, async (req, res) => {
  const teachers = await Teacher.findAll();
  res.render('teachers', { teachers });
});

// Endpoint GET /api/teachers/:id
router.get('/api/teachers/:id', requireAdmin, async (req, res) => {
  const teacher = await Teacher.findByPk(req.params.id);
  if (teacher) {
    res.json(teacher);
  } else {
    res.status(404).send('Teacher not found');
  }
});

// Endpoint GET /api/teachers/:teacher_id/students
router.get('/api/teachers/:teacher_id/students', requireAdmin, async (req, res) => {
  const teacher = await Teacher.findByPk(req.params.teacher_id);
  if (!teacher) {
    return res.status(404).send('Teacher not found');
  }
  const user = await User.findByPk(teacher.user_id);
  if (!user || !user.active) {
    return res.status(401).send('Unauthorized');
  }
  const students = await Student.findAll({
    where: { teacher_id: req.params.teacher_id },
    order: [['date_of_birth', 'ASC']],
  });
  res.json(students);
});

// Endpoint POST /api/teachers
router.post('/api/teachers', requireAdmin, async (req, res) => {
  const {
    dni, name, last_name, date_of_birth, user_id,
  } = req.body;
  const teacher = await Teacher.create({
    dni, name, last_name, date_of_birth, user_id,
  });
  res.status(201).json(teacher);
});

// Endpoint PUT /api/teachers/:id
router.put('/api/teachers/:id', requireAdmin, async (req, res) => {
  const {
    dni, name, last_name, date_of_birth, user_id,
  } = req.body;
  const teacher = await Teacher.findByPk(req.params.id);
  if (teacher) {
    await teacher.update({
      dni, name, last_name, date_of_birth, user_id,
    });
    res.json(teacher);
  } else {
    res.status(404).send('Teacher not found');
  }
});

// Endpoint DELETE /api/teachers/:id
router.delete('/api/teachers/:id', requireAdmin, async (req, res) => {
  const teacher = await Teacher.findByPk(req.params.id);
  if (teacher) {
    const students = await Student.findAll({ where: { teacher_id: teacher.id } });
    if (students.length > 0) {
      return res.status(400).send('Cannot delete teacher with associated students');
    }
    await teacher.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('Teacher not found');
  }
});

module.exports = router;
