const sequelize = require('./connection');
const { Usuario, Evento, Inscripcion } = require('./models'); // Importa los modelos que necesitas

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // --- Insertar usuarios ---

    const usuarios = await Usuario.bulkCreate([
      { nombre: 'Ana', email: 'ana@example.com', password: 'contraseña1' },
      { nombre: 'Juan', email: 'juan@example.com', password: 'contraseña2' },
      { nombre: 'Pedro', email: 'pedro@example.com', password: 'contraseña3' },
      { nombre: 'Laura', email: 'laura@example.com', password: 'contraseña4' },
      { nombre: 'María', email: 'maria@example.com', password: 'contraseña5' },
      { nombre: 'Luis', email: 'luis@example.com', password: 'contraseña6' },
      { nombre: 'Sofía', email: 'sofia@example.com', password: 'contraseña7' },
      { nombre: 'Carlos', email: 'carlos@example.com', password: 'contraseña8' }
    ]);

    console.log('Usuarios creados:', usuarios.map(u => u.id));


    // --- Insertar evento ---

    const evento = await Evento.create({
      titulo: 'Taller de dibujo en el urban sketching',
      descripcion: 'Aprende las bases del dibujo en el urban sketching.',
      fecha: '2025-03-15',
      hora: '10:00',
      lugar: 'Palacio del Condestable, calle Mayor 2, Pamplona',
      tipo: 'masterclass', // Puede ser 'masterclass', 'taller', 'curso', etc.
      organizador_id: usuarios[0].id, // Ana es la organizadora
      precio: 25.00,
      plazas_minimas: 5,
      plazas_maximas: 20,
      tematica: 'Arte',
      tecnicas: 'Lápiz, carboncillo'
    });

    console.log('Evento creado:', evento.id);


    // --- Insertar inscripciones ---

    const inscripciones = await Inscripcion.bulkCreate([
      { usuario_id: usuarios[1].id, evento_id: evento.id }, // Juan se inscribe
      { usuario_id: usuarios[2].id, evento_id: evento.id }, // Pedro se inscribe
      { usuario_id: usuarios[3].id, evento_id: evento.id }, // Laura se inscribe
      { usuario_id: usuarios[4].id, evento_id: evento.id }, // María se inscribe
      { usuario_id: usuarios[5].id, evento_id: evento.id }, // Luis se inscribe
      { usuario_id: usuarios[6].id, evento_id: evento.id }, // Sofía se inscribe
      { usuario_id: usuarios[7].id, evento_id: evento.id }
      // ... (más inscripciones)
    ]);

    console.log('Inscripciones creadas:', inscripciones.map(i => i.id));

  } catch (error) {
    console.error('Error:', error);
  }
})();