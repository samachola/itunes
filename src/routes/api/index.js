const express = require('express');
const genreRoute = require('./genre/genreRoute');
const artistRoute = require('./artist/artistRoute');

const router = express.Router();

router.use('/genres', genreRoute);
router.use('/artists', artistRoute);

module.exports = router;