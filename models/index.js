const { sequelize } = require('./connection');

const db = {};

db.sequelize = sequelize;

module.exports = db;
