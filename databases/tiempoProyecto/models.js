const { DataTypes } = require('sequelize');
const { sequelize } = require('./connection');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { tableName: 'User' });

const Proyecto = sequelize.define('Proyecto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { tableName: 'Proyecto' });

const Proyectos = sequelize.define('Proyectos', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  proyectoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Proyecto,
      key: 'id',
    },
  },
}, { tableName: 'Proyectos' });

const CodeHours = sequelize.define('CodeHours', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hours: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  proyectoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Proyecto,
      key: 'id',
    },
  },
}, { tableName: 'CodeHours' });

const NodeHours = sequelize.define('NodeHours', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hours: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  proyectoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Proyecto,
      key: 'id',
    },
  },
}, { tableName: 'NodeHours' });

const DatabaseHours = sequelize.define('DatabaseHours', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hours: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  proyectoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Proyecto,
      key: 'id',
    },
  },
}, { tableName: 'DatabaseHours' });

const HtmlHours = sequelize.define('HtmlHours', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hours: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  proyectoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Proyecto,
      key: 'id',
    },
  },
}, { tableName: 'HtmlHours' });

// Establecer relaciones
User.hasMany(Proyectos, { foreignKey: 'userId', as: 'userProjects' });
Proyecto.belongsToMany(User, { through: Proyectos, foreignKey: 'proyectoId', as: 'projectUsers' });

Proyecto.hasMany(CodeHours, { foreignKey: 'proyectoId', as: 'codeHours' });
Proyecto.hasMany(NodeHours, { foreignKey: 'proyectoId', as: 'nodeHours' });
Proyecto.hasMany(DatabaseHours, { foreignKey: 'proyectoId', as: 'databaseHours' });
Proyecto.hasMany(HtmlHours, { foreignKey: 'proyectoId', as: 'htmlHours' });

CodeHours.belongsTo(Proyecto, { foreignKey: 'proyectoId', as: 'project' });
NodeHours.belongsTo(Proyecto, { foreignKey: 'proyectoId', as: 'project' });
DatabaseHours.belongsTo(Proyecto, { foreignKey: 'proyectoId', as: 'project' });
HtmlHours.belongsTo(Proyecto, { foreignKey: 'proyectoId', as: 'project' });

module.exports = {
  User,
  Proyecto,
  Proyectos,
  CodeHours,
  NodeHours,
  DatabaseHours,
  HtmlHours,
};
