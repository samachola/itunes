const Sequelize = require('sequelize');
const db = require('../config/database');

const SongsModel = db.define('songs', {
	id: {
		type: Sequelize.UUID,
		primaryKey: true,
		unique: true,
		requred: true
	},
	title: {
		type: Sequelize.STRING,
		required: true
	},
	artist: {
		type: Sequelize.STRING
	},
	duration: {
		type: Sequelize.DOUBLE
	}
});

module.exports = SongsModel;