const express = require('express');
const genreRoute = require('./genre/genreRoute');
const artistRoute = require('./artist/artistRoute');
const albumRoute = require('./album/albumRoute');

const router = express.Router();

router.use('/genres', genreRoute);
router.use('/artists', artistRoute);
router.use('/albums', albumRoute);

module.exports = router;