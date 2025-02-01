/* eslint-disable camelcase */
const express = require('express');
const { Student, Teacher } = require('../models');
const { requireAdmin } = require('../middlewares/auth');

const router = express.Router();

// Endpoint GET /students
router.get('/students', requireAdmin, async (req, res) => {
  const students = await Student.findAll();
  res.render('students', { students });
});

// Endpoint GET /api/students
router.get('/students', requireAdmin, async (req, res) => {
  const students = await Student.findAll();
  res.json(students);
});

// Endpoint GET /api/students/:id
router.get('/students/:id', requireAdmin, async (req, res) => {
  const student = await Student.findByPk(req.params.id);
  if (student) {
    res.json(student);
  } else {
    res.status(404).send('Student not found');
  }
});

// Endpoint POST /api/students
router.post('/students', requireAdmin, async (req, res) => {
  const {
    name, dni, date_of_birth, teacher_id,
  } = req.body;
  const student = await Student.create({
    name, dni, date_of_birth, teacher_id,
  });
  res.status(201).json(student);
});

// Endpoint PUT /api/students/:id
router.put('/students/:id', requireAdmin, async (req, res) => {
  const {
    name, dni, date_of_birth, teacher_id, user_id,
  } = req.body;
  const student = await Student.findByPk(req.params.id);
  if (student) {
    await student.update({
      name, dni, date_of_birth, teacher_id, user_id,
    });
    res.json(student);
  } else {
    res.status(404).send('Student not found');
  }
});

// Endpoint DELETE /api/students/:id
router.delete('/students/:id', requireAdmin, async (req, res) => {
  const student = await Student.findByPk(req.params.id);
  if (!student) {
    return res.status(404).send('Student not found');
  }

  const teacher = await Teacher.findOne({ where: { id: student.teacher_id } });
  if (teacher) {
    return res.status(400).json({ message: 'Cannot delete student linked to a teacher' });
  }

  await student.destroy();
  res.status(204).send();
});

module.exports = router;
