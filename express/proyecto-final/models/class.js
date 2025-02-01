/* eslint-disable func-names */
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});

  Class.associate = function (models) {
    Class.belongsTo(models.Teacher, { foreignKey: 'teacher_id' });
    Class.belongsToMany(models.Student, { through: 'StudentClass', foreignKey: 'class_id' });
  };

  return Class;
};
