const uuidv4 = require("uuid/v4");
const AlbumModel = require("../models/AlbumModel");
const SongsModel = require("../models/SongsModel");

class AlbumController {
  getAlbums = async (req, res, next) => {
    try {
      const albums = await AlbumModel.findAll();
      if (albums) {
        res.status(200).json({ status: 200, albums });
      } else {
        res.status(404).json({ status: 404, error: "Albums not found" });
      }
    } catch (error) {
      return next(error);
    }
  };

  createAlbum = async (req, res, next) => {
    const { name, review, price, artistId } = req.body;

    try {
      const newAlbum = await AlbumModel.create({
        id: uuidv4(),
        name,
        review,
        price,
        artistId
      });
      if (newAlbum) {
        res.status(201).json({
          status: 201,
          message: "successfully added new album",
          album: newAlbum
        });
      } else {
        res.status(404).json({ status: 404, error: "Could not create album" });
      }
    } catch (error) {
      return next(error);
    }
  };

  updateAlbum = async (req, res, next) => {
    const { id } = req.params;
    const updates = Object.assign({}, req.body);
    try {
      const results = await AlbumModel.update(updates, {
        where: {
          id
        },
        returning: true
      });

      const affectedRows = results[0];

      if (affectedRows !== 1) {
        res.status(404).json({
          status: 404,
          error: "Sorry, the album you wish to update does not exist"
        });
      }

      res.status(201).json({
        status: 201,
        message: "successfully updated album",
        album: results[1][0]
      });
    } catch (error) {
      return next(error);
    }
  };

  getAlbum = async (req, res, next) => {
    const { id } = req.params;
    try {
      const album = await AlbumModel.findByPk(id);

      if (album) {
        res.status(200).json({ status: 200, album });
      } else {
        res.status(404).json({ status: 404, error: "Album not found" });
      }
    } catch (error) {
      return next(error);
    }
  };

  getAlbumSongs = async (req, res, next) => {
    const { id } = req.params;

    try {
      const songs = SongsModel.findAll({
        where: {
          albumId: id
        }
      });

      if (songs) {
        return res.status(200).json({ status: 200, songs });
      } else {
        return res
          .status(404)
          .json({ status: 404, error: "No songs available" });
      }
    } catch (error) {
      return next(error);
    }
  };

  deleteAlbum = async (req, res, next) => {
    const { id } = req.params;

    try {
      const album = await AlbumModel.findByPk();

      if (!album)
        res.status(404).json({ status: 404, error: "Album not existing" });

      await AlbumModel.destroy({
        where: { id }
      });

      res
        .status(201)
        .json({ status: 201, message: "successfully deleted album" });
    } catch (error) {
      return next(error);
    }
  };
}

module.exports = AlbumController;
