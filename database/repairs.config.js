const { Sequelize } = require('sequelize');

const dbRepairs = new Sequelize({
  dialect: process.env.DBREPAIRS_DIALECT,
  host: process.env.DBREPAIRS_HOST,
  username: process.env.DBREPAIRS_USERNAME,
  password: process.env.DBREPAIRS_PASSWORD,
  database: process.env.DBREPAIRS_DATABASE,
  port: process.env.DBREPAIRS_PORT,
  logging: false,
});

module.exports = { dbRepairs };
