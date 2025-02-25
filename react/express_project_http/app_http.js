// Se carga el módulo de Express
const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const cors = require('cors');
const { isAuth, isAdmin } = require('./middlewares/auth');
const userFrontRoutes = require('./routes/usersFront');
const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/users');
const teacherRoutes = require('./routes/teachers');
const studentRoutes = require('./routes/students');
const authRoutes = require('./routes/auth');

// Creo la aplicación Express
const app = express();
// Declaro el puerto de escucha
const port = 1443;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: 'ClaveUltraSecretadeSesion',
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(cors());
// Mustache
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', `${__dirname}/views`);

app.use('/api/*', isAuth);

// Routes API
app.use('/api/user', userRoutes);
app.use('/api/teacher', teacherRoutes);
app.use('/api/student', studentRoutes);

// Routes
// Auth
app.use(authRoutes);
// User Front
app.use(userFrontRoutes);
// Home
app.get('/home', homeRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Sincronizar la base de datos y arrancar el servidor
db.sequelize.sync().then(() => {
  const options = {
    key: fs.readFileSync('./certs/expressproject.key'),
    cert: fs.readFileSync('./certs/expressproject.crt'),
  };

  https.createServer(options, app).listen(port, () => {
    console.log(`Server listening on https://localhost:${port}`);
  });
});
