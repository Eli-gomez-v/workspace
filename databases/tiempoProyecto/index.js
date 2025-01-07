const { sequelize } = require('./connection');
const {
  User, Proyecto, Proyectos, CodeHours, NodeHours, DatabaseHours, HtmlHours,
} = require('./models');

const createUser = async () => {
  try {
    const name = 'Developer';
    const result = await User.create({ name });
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const createProyecto = async (newUserId) => {
  const name = 'Proyecto Inicial';
  try {
    const proyecto = await Proyecto.create({ name });
    await Proyectos.create({
      userId: newUserId,
      proyectoId: proyecto.id,
    });
    return proyecto;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const createHours = async (proyectoId) => {
  try {
    await CodeHours.create({
      date: new Date(),
      hours: 4.5,
      proyectoId,
    });

    await NodeHours.create({
      date: new Date(),
      hours: 3.0,
      proyectoId,
    });

    await DatabaseHours.create({
      date: new Date(),
      hours: 2.5,
      proyectoId,
    });

    await HtmlHours.create({
      date: new Date(),
      hours: 1.5,
      proyectoId,
    });
  } catch (error) {
    console.log(error);
  }
};

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection success');
    return sequelize.sync({ force: true });
  })
  .then(() => {
    console.log('Sync models');
    return createUser();
  })
  .then((newUser) => {
    if (newUser) {
      return createProyecto(newUser.id);
    }
    return false;
  })
  .then((newProyecto) => {
    if (newProyecto) {
      return createHours(newProyecto.id);
    }
    return false;
  })
  .catch((error) => {
    console.error('Connection fail', error);
  });
