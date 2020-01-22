const express = require("express");
const router = express.Router();
const GenreController = require("./genreController");
const {
  getGenres,
  createGenre,
  updateGenre,
  deleteGenre
} = new GenreController();

router.get("/", getGenres);
router.post("/", createGenre);
router.put("/:id", updateGenre);
router.delete("/:id", deleteGenre);

module.exports = router;
