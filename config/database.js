const Sequelize = require('sequelize');

const host = process.env.HOST || 'localhost';
const database = process.env.DATABASE_NAME;
const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;

module.exports = new Sequelize(database, user, password, {
	host,
	dialect: 'postgres'
});