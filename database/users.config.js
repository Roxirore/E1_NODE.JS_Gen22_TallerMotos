const { Sequelize } = require('sequelize');

const dbUsers = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'MiPostgreSQL!',
  database: 'dbTallerMotosUsers',
  port: '5432',
  logging: false,
});

module.exports = { dbUsers };
