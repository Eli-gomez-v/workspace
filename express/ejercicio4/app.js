const express = require('express');
const { body, validationResult, param } = require('express-validator');

const app = express();
const knex = require('./knexfile'); // Asegúrate de tener tu configuración de Knex

// Middleware para parsear JSON
app.use(express.json());

// Endpoint POST /students para añadir un nuevo estudiante
app.post('/students', [
  body('email').isEmail().withMessage('Invalid email address'),
  body('dateOfBirth').isDate().withMessage('Invalid date of birth'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    name, lastName, dateOfBirth, email,
  } = req.body;
  try {
    await knex('students').insert({
      name, last_name: lastName, date_of_birth: dateOfBirth, email,
    });
    return res.status(201).send('Student added successfully');
  } catch (error) {
    return res.status(500).send('Error adding student');
  }
});

// Endpoint GET /students para obtener todos los estudiantes
app.get('/students', async (req, res) => {
  try {
    const students = await knex('students').select('*');
    res.json(students);
  } catch (error) {
    res.status(500).send('Error retrieving students');
  }
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
