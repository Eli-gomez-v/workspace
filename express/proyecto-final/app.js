/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const express = require('express');
const session = require('express-session');
const mustacheExpress = require('mustache-express');
const path = require('path');
const jwt = require('jsonwebtoken');
const {
  User, Teacher, Student, Class, StudentClass,
} = require('./models');
const userRoutes = require('./routers/users');
const teacherRoutes = require('./routers/teachers');
const studentRoutes = require('./routers/students');
const { verifyToken } = require('./middlewares/auth');

const app = express();
const port = process.env.PORT || 3000;
const JWT_SECRET = 'ClaveMegaSecreta';

// Middleware para obtener el data de JWT
const isAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: 'Authorization Header missing',
    });
  }
  const { authorization } = req.headers.authorization;
  const token = authorization.split(' ')[1];
  let jwtData;
  try {
    jwtData = jwt.verify(token, JWT_SECRET);
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: 'Invalid Token.',
    });
  }
  req.data = jwtData;
  next();
};

// Configuración
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
}));

// Configuración de Mustache
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// Usar las rutas de usuarios, profesores y estudiantes
app.use('/', userRoutes);
app.use('/', teacherRoutes);
app.use('/', studentRoutes);

// Endpoint GET /jwt para obtener los datos del token si es válido
app.get('/jwt', isAuth, (req, res) => {
  res.json({ data: req.data });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
