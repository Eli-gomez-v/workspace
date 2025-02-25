/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const express = require('express');
const session = require('express-session');
const mustacheExpress = require('mustache-express');
const path = require('path');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const methodOverride = require('method-override');
const { verifyToken } = require('./middlewares/auth');
const userRoutes = require('./routers/users');
const teacherRoutes = require('./routers/teachers');
const studentRoutes = require('./routers/students');
const authRoutes = require('./routers/auth');

const app = express();
const port = process.env.PORT || 3000;
const JWT_SECRET = 'your-secret-key';

// Middleware para obtener el data de JWT
const isAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid Token' });
    }
    req.data = decoded;
    next();
  });
};

// Configuración
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
}));
app.use(methodOverride('_method')); // Para usar PUT y DELETE
// Configuración de Mustache
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// Usar las rutas de autenticación, usuarios, profesores y estudiantes
app.use(authRoutes);
app.use(userRoutes);
app.use(teacherRoutes);
app.use(studentRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.redirect('/login');
});

// Endpoint GET /jwt para obtener los datos del token si es válido
app.get('/jwt', isAuth, (req, res) => {
  res.json({ data: req.data });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
