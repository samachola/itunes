const Sequelize = require('sequelize');
const db = require('../config/database');

const GenresModel = db.define('genre', {
	id: {
		type: Sequelize.UUID,
		primaryKey: true,
		unique: true,
	},
	title: {
		type: Sequelize.STRING,
		unique: true,
	}
});

module.exports = GenresModel;