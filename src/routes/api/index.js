const express = require('express');
const genreRoute = require('./genre/genreRoute');
const artistRoute = require('./artist/artistRoute');
const albumRoute = require('./album/albumRoute');
const songsRoute = require('./songs/songsRoute');

const router = express.Router();

router.use('/genres', genreRoute);
router.use('/artists', artistRoute);
router.use('/albums', albumRoute);
router.use('/songs', songsRoute);

module.exports = router;