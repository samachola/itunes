const Sequelize = require('sequelize');
const db = require('../config/database');

const GenresModel = db.define('artist', {
	id: {
		type: Sequelize.UUID,
		primaryKey: true,
		unique: true,
	},
	name: {
		type: Sequelize.STRING,
		unique: true,
	},
	bio: {
		type: Sequelize.STRING,
	}
});

module.exports = GenresModel;