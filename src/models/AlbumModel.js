const Sequelize = require('sequelize');
const ArtistModel = require('./ArtistModel');
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
	},
	artistId: {
		type: Sequelize.STRING,
		references: {
			model: ArtistModel,
			foreignKey: 'artistId',
		}
	}
});

Sequelize.associate = () => {
	AlbumModel.belongsTo(ArtistModel, {
		foreignKey: 'artistId',
	})
}


module.exports = AlbumModel;