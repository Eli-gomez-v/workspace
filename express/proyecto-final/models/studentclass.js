module.exports = (sequelize, DataTypes) => {
  const StudentClass = sequelize.define('StudentClass', {
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});

  return StudentClass;
};
