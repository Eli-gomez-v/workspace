/* eslint-disable func-names */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: DataTypes.STRING,
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {});
  User.associate = function (models) {
    User.hasOne(models.Teacher, { foreignKey: 'user_id' });
    User.hasOne(models.Student, { foreignKey: 'user_id' });
  };
  return User;
};
