const express = require("express");
const router = express.Router();

const SongsController = require("../../../controllers/songsController");

const { createSong, getSongs, updateSong, deleteSong } = new SongsController();

router.get("/", getSongs);
router.post("/", createSong);
router.put("/:id", updateSong);
router.delete("/:id", deleteSong);

module.exports = router;
