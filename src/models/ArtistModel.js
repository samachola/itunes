const Sequelize = require('sequelize');
const db = require('../config/database');

const ArtistModel = db.define('artist', {
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

module.exports = ArtistModel;