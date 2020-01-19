const express  = require('express');
const router = express.Router();

const { getGenres, createGenre, updateGenre, deleteGenre } = require('./genreController');

router.get('/', getGenres);
router.post('/', createGenre);
router.put('/:id', updateGenre);
router.delete('/:id', deleteGenre);

module.exports = router;