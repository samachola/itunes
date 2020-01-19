const Sequelize = require('sequelize');

module.exports = new Sequelize('itunes', 'achola', '', {
	host: 'localhost',
	dialect: 'postgres'
});
