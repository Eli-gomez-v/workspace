/* eslint-disable func-names */
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    dni: {
      type: DataTypes.STRING,
      unique: true,
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {});

  Teacher.associate = function (models) {
    Teacher.belongsTo(models.User, { foreignKey: 'user_id' });
    Teacher.hasMany(models.Student, { foreignKey: 'teacher_id' });
  };

  return Teacher;
};
