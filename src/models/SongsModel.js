const Sequelize = require('sequelize');
const AlbumModel = require('./AlbumModel');
const ArtistModel = require('./ArtistModel');
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
	albumId: {
		type: Sequelize.STRING,
		references: {
			model: AlbumModel,
			key: 'id'
		}
	},
	artistId: {
		type: Sequelize.STRING,
		references: {
			model: ArtistModel,
			key: 'id'
		}
	},
	duration: {
		type: Sequelize.DOUBLE
	}
});

Sequelize.associate = () => {
	SongsModel.belongsTo(ArtistModel, {
		foreignKey: 'artistId'
	});

	SongsModel.belongsTo(AlbumModel, {
		foreignKey: 'albumId',
	});
}

module.exports = SongsModel;