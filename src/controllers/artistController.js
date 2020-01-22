const uuidv4 = require('uuid/v4');
const ArtistModel = require('../models/ArtistModel');
const SongsModel = require('../models/SongsModel');

class ArtistController {
	createArtist = async(req, res) => {
		const {name, bio} = req.body;
	
		try {
			const results = await ArtistModel.create({id: uuidv4(), name, bio});
			if (results) {
				res.status(201).json({ status: 201, success: results});
			} else {
				res.status(404).json({ status: 404, error: 'Could not create artist'});
			}
		} catch (error) {
			res.status(403).json({ status: 403, error: `Error creating artist: ${error }`})
		}
	}
	
	updateArtist = async(req, res) => {
		const { id } = req.params
		const updates = Object.assign({}, req.body);
	
		try {
			const results = await ArtistModel.update(updates, {
				where: {
					id,
				},
				returning: true
			});
	
			const affectedRows = results[0];
		
			if (affectedRows !== 1) {
				res.status(404).json({
					status: 404,
					error: 'Sorry, the artist you wish to update does not exist'
				})
			}
	
			res.status(201).json({
				status: 201,
				message: 'successfully updated artist',
				artist: results[1][0],
			});
		} catch (error) {
			return next(error)
		}
	}
	
	getArtists = async (req, res, next) => {
		try {
			const artists = await ArtistModel.findAll();
	
			if (artists) {
				res.status(200).json({ status: 200, artists });
			} else {
				res.status(403).json({ status: 404, message: 'Could not find artists'});
			}
		} catch (error) {
			return next(error);
		}
	}
	
	getArtist = async (req, res, next) => {
		const {id} = req.params;
		try {
			const artist = await ArtistModel.findByPk(id);
			if (artist) {
				res.status(200).json({ status: 200, artist});
			} else {
				res.status(404).json({ status: 404, error: 'cannot find artist'})
			} 
		} catch (error) {
			return next(error);
		}
	}

	getArtistSongs = async (req, res, next) => {
		const {id} = req.params;

		try {
			const songs = SongsModel.findAll({
				where: {
					artistId: id,
				}
			});

			if (songs) {
				return res.status(200).json({ status: 200, songs });
			} else {
				return res.status(404).json({ status: 404, error: 'No songs available'})
			}

		} catch (error) {
			return next(error);
		}
	}
	
	deleteArtist = async (req, res, next) => {
		const {id} = req.params;
	
		try {
			const artist = await ArtistModel.findByPk(id);
	
			if(!artist) res.status(404).json({ status: 404, error: 'artist does not exist'});
	
			await ArtistModel.destroy({
				where: {id}
			});
	
			res.status(201).json({ status: 201, message: 'successfully deleted artist'});
		} catch(error) {
			return next(error)
		}
	}
}

module.exports = ArtistController;
