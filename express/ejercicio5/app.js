/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const express = require('express');
const { body, validationResult, param } = require('express-validator');
const students = require('./repositories/students');
const validate = require('./middlewares/validate');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/students', (req, res) => {
  students.getAll().then((results) => res.json(results));
});

app.get('/students/:id', [
  param('id').isInt().withMessage('ID must be an integer'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;
  try {
    const student = await students.getById(id);
    if (!student) {
      return res.status(404).send('Student doesn’t exist');
    }
    res.json(student);
  } catch (error) {
    res.status(500).send('Error retrieving student');
  }
});

app.post('/students', [
  body('email').isEmail().withMessage('Invalid email address'),
  body('date_of_birth').isDate().withMessage('Invalid date of birth'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    name,
    last_name,
    date_of_birth,
    email,
  } = req.body;
  try {
    const existingStudent = await students.getByEmail(email);
    if (existingStudent) {
      return res.status(422).send('A user already exists with this email');
    }

    await students.insert(req.body);
    res.json({ success: true, message: 'Student was saved successfully' });
  } catch (error) {
    res.status(500).send('Error adding student');
  }
});

app.listen(port, () => {
  console.log(`Example server listening on http://localhost:${port}`);
});
