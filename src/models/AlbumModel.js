const Sequelize = require('sequelize');
const db = require('../config/database');

const AlbumModel = db.define('albums', {
	id: {
		type: Sequelize.UUID,
		primaryKey: true,
		unique: true
	},
	name: {
		type: Sequelize.STRING,
	},
	review: {
		type: Sequelize.TEXT
	},
	price: {
		type: Sequelize.INTEGER
	}
});

module.exports = AlbumModel;