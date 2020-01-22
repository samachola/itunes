const uuidv4 = require('uuid/v4')
const GenresModel = require('../../../models/GenresModel');

class GenreController {
	getGenres = async (req, res) => {
		const results = await GenresModel.findAll();
		if (results) {
			res.status(200).json({ status: 200, genres: results});
		} else {
			res.status(403)
		}
		
	}
	
	createGenre = (req, res) => {
		const {title} = req.body;
	
		GenresModel.create({id: uuidv4(), title, createdAt: Date.now(), updatedAt: Date.now() })
			.then(() => {
				res.status(201).json({
					msg: `${title} added successfully`,
				})
			})
			.catch(err => {
				res.status(403).json({
					msg: `Error: ${err}`,
				})
			})
	}
	
	
	updateGenre = async (req, res,  next) => {
		const { id } = req.params;
		const updates = Object.assign({}, req.body);
	
		try {
			const results = await GenresModel.update(updates, {
				where: {
					id,
				},
				returning: true
			});
		
			const affectedRows = results[0];
		
			if (affectedRows !== 1) {
				res.status(404).json({
					status: 404,
					error: 'Did not find this genre in the list of available genres'
				})
			}
	
			res.status(201).json({
				msg: 'successfully updated Genre',
				genre: results[1][0],
			});
			
		} catch (error) {
			return next(error)
		}
	}
	
	deleteGenre = async (req, res, next) => {
		const { id } = req.params;
	
		try {
			const genre = await GenresModel.findByPk(id);
			if (!genre) return res.status(404).json({ status: 404, error: 'genre you are looking for cannot be found'})
			await GenresModel.destroy({
				where: {id}
			});
	
			return res.status(200).json({ status: 200, message: 'article deleted successfully' });
		} catch (error) {
			return next(error);
		}
	}
}

module.exports = GenreController;