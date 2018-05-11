const Sequelize = require('sequelize');
const connection = new Sequelize('postgres://localhost:5432/reactproject')

const models = {
    users: connection.import('./users'),
    accounts: connection.import('./accounts'),
    orders: connection.import('./orders'),
    todo: connection.import('./todo')
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.connection = connection;
models.Sequelize = Sequelize;

module.exports =  models;
