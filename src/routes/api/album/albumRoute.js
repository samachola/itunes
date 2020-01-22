const express = require('express');
const router = express.Router();
const AlbumController = require('./albumController');

const { 
	getAlbums, 
	createAlbum, 
	updateAlbum, 
	getAlbum,
	deleteAlbum,
	getAlbumSongs,
} = new AlbumController();

router.get('/', getAlbums);
router.post('/', createAlbum);
router.put('/:id', updateAlbum);
router.get('/:id', getAlbum);
router.get('/:id/songs', getAlbumSongs)
router.delete('/:id', deleteAlbum);


module.exports = router;