/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Teachers',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  }, {});
  Student.associate = function (models) {
    // associations can be defined here
    Student.belongsTo(models.Teacher, { foreignKey: 'teacher_id' });
    Student.belongsTo(models.User, { foreignKey: 'user_id' });
  };
  return Student;
};
