const express = require('express');
const router = express.Router();

const { 
	createArtist, 
	updateArtist, 
	getArtists, 
	getArtist, 
	deleteArtist 
} = require('./artistController')


router.get('/', getArtists);
router.post('/', createArtist);
router.put('/:id', updateArtist);
router.get('/:id', getArtist);
router.delete('/:id', deleteArtist);


module.exports = router;