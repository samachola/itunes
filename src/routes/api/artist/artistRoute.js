const express = require("express");
const router = express.Router();
const ArtistController = require("../../../controllers/artistController");
const {
  createArtist,
  updateArtist,
  getArtists,
  getArtist,
  deleteArtist,
  getArtistSongs
} = new ArtistController();

router.get("/", getArtists);
router.post("/", createArtist);
router.put("/:id", updateArtist);
router.get("/:id", getArtist);
router.get("/:id/songs", getArtistSongs);
router.delete("/:id", deleteArtist);

module.exports = router;
