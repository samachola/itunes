const express = require('express');
const router = express.Router();

const SongsController = require('./songsController');

const { createSong } = new SongsController();

router.get('/', createSong);

module.exports = router;
