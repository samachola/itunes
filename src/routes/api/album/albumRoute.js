const express = require('express');
const router = express.Router();
const AlbumController = require('./albumController');

const { 
	getAlbums, 
	createAlbum, 
	updateAlbum, 
	getAlbum,
	deleteAlbum,
} = new AlbumController();

router.get('/', getAlbums);
router.post('/', createAlbum);
router.put('/:id', updateAlbum);
router.get('/:id', getAlbum);
router.delete('/:id', deleteAlbum);

module.exports = router;