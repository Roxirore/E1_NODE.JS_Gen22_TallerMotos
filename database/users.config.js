const { Sequelize } = require('sequelize');

const dbUsers = new Sequelize({
  dialect: process.env.DBUSERS_DIALECT,
  host: process.env.DBUSERS_HOST,
  username: process.env.DBUSERS_USERNAME,
  password: process.env.DBUSERS_PASSWORD,
  database: process.env.DBUSERS_DATABASE,
  port: process.env.DBUSERS_PORT,
  logging: false,
});

module.exports = { dbUsers };
