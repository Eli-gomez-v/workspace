const { DataTypes } = require('sequelize');
const sequelize = require('../plataforma_arte_local/connection');

// Modelo Usuario
const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.ENUM('usuario', 'profesional'),
    defaultValue: 'usuario'
  },
  portfolio_publico: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  biografia: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  foto_perfil: {
    type: DataTypes.STRING,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
}, { tableName: 'usuario' });

// Modelo Portfolio
const Portfolio = sequelize.define('Portfolio', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id'
    }
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  foto_portada: {
    type: DataTypes.STRING,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
}, { tableName: 'portfolio' });

// Modelo Sketch
const Sketch = sequelize.define('Sketch', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  imagen_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tecnica: {
    type: DataTypes.STRING,
    allowNull: true
  },
  materiales: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  localizacion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    allowNull: true
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    allowNull: true
  },
  likes_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  portfolio_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Portfolio,
      key: 'id'
    },
    onDelete: 'SET NULL'
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }, 
}, { tableName: 'sketch' });

// Modelo Evento
const Evento = sequelize.define('Evento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false
  },
  lugar: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.ENUM('quedada', 'masterclass'),
    allowNull: false
  },
  organizador_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id'
    }
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  plazas_minimas: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  plazas_maximas: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  tematica: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tecnicas: {
    type: DataTypes.STRING,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
}, { tableName: 'evento' });

// Modelo Inscripcion

const Inscripcion = sequelize.define('Inscripcion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id'
    }
  },
  evento_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Evento,
      key: 'id'
    }
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
}, { tableName: 'inscripcion' });

// Modelo Archivo
const Archivo = sequelize.define('Archivo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_original: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombre_sistema: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ruta: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo_mime: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tamaño: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  sketch_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Sketch,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  portfolio_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Portfolio,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
}, { tableName: 'archivo' });

// Modelo Comentario
const Comentario = sequelize.define('Comentario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  sketch_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Sketch,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
}, { tableName: 'comentario' });

// Modelo Like
const Like = sequelize.define('Like', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  sketch_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Sketch,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
}, { tableName: 'like' });

// Relaciones
Usuario.belongsTo(Portfolio, { foreignKey: 'usuario_id' });
Portfolio.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Usuario.hasMany(Sketch, { foreignKey: 'usuario_id' });
Sketch.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Portfolio.hasMany(Sketch, { foreignKey: 'portfolio_id' });
Sketch.belongsTo(Portfolio, { foreignKey: 'portfolio_id' });

Usuario.hasMany(Evento, { foreignKey: 'organizador_id' });
Evento.belongsTo(Usuario, { foreignKey: 'organizador_id' });

Usuario.hasMany(Inscripcion, { foreignKey: 'usuario_id' });
Inscripcion.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Evento.hasMany(Inscripcion, { foreignKey: 'evento_id' });
Inscripcion.belongsTo(Evento, { foreignKey: 'evento_id' });

Usuario.hasMany(Archivo, { foreignKey: 'usuario_id' });
Archivo.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Sketch.hasMany(Archivo, { foreignKey: 'sketch_id' });
Archivo.belongsTo(Sketch, { foreignKey: 'sketch_id' });

Portfolio.hasMany(Archivo, { foreignKey: 'portfolio_id' });
Archivo.belongsTo(Portfolio, { foreignKey: 'portfolio_id' });

Usuario.hasMany(Comentario, { foreignKey: 'usuario_id' });
Comentario.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Sketch.hasMany(Comentario, { foreignKey: 'sketch_id' });
Comentario.belongsTo(Sketch, { foreignKey: 'sketch_id' });

Usuario.hasMany(Like, { foreignKey: 'usuario_id' });
Like.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Sketch.hasMany(Like, { foreignKey: 'sketch_id' });
Like.belongsTo(Sketch, { foreignKey: 'sketch_id' });


// Define otros modelos aquí (Portfolios, Sketches, Meetups, Inscripciones, Archivos, Comentarios, Likes)

module.exports = {
  Usuario,
  Portfolio,
  Sketch,
  Evento,
  Inscripcion,
  Archivo,
  Comentario,
  Like
};