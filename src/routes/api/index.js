const express = require('express');
const genreRoute = require('./genre/genreRoute')

const router = express.Router();

router.use('/genres', genreRoute);

module.exports = router;