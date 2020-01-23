const uuidv4 = require("uuid/v4");
const ArtistModel = require("../../models/ArtistModel");
const SongsModel = require("../../models/SongsModel");

class ArtistController {
  createArtist = async (req, res) => {
    const { name, bio } = req.body;

    try {
      const results = await ArtistModel.create({ id: uuidv4(), name, bio });
      
      return res.status(201).json({ status: 201, message: 'Successfully added new artist', data: results });
      
    } catch (error) {
      return res
        .status(500)
        .json({ status: 500, error: `Error creating artist: ${error}` });
    }
  };

  updateArtist = async (req, res) => {
    const { id } = req.params;
    const updates = Object.assign({}, req.body);

    try {
      const results = await ArtistModel.update(updates, {
        where: {
          id
        },
        returning: true
      });

      const affectedRows = results[0];

      if (affectedRows !== 1) {
        res.status(404).json({
          status: 404,
          error: "Sorry, the artist you wish to update does not exist"
        });
      }

      res.status(201).json({
        status: 201,
        message: "Successfully updated artist",
        data: results[1][0]
      });
    } catch (error) {
      return next(error);
    }
  };

  getArtists = async (req, res, next) => {
    try {
      const artists = await ArtistModel.findAll();

      res.status(200).json({ status: 200, message: 'Successfully fetched artists', data: artists });
      
    } catch (error) {
      return next(error);
    }
  };

  getArtist = async (req, res, next) => {
    const { id } = req.params;

    try {
      const artist = await ArtistModel.findByPk(id);
      res.status(200).json({ status: 200, message: 'Successfully found artist', data: artist });
      
    } catch (error) {
      return next(error);
    }
  };

  getArtistSongs = async (req, res, next) => {
    const { id } = req.params;

    try {
      const songs = SongsModel.findAll({
        where: {
          artistId: id
        }
      });

      return res.status(200).json({ status: 200, message: 'Successfully fetched songs', data: songs });

    } catch (error) {
      return next(error);
    }
  };

  deleteArtist = async (req, res, next) => {
    const { id } = req.params;

    try {
      const artist = await ArtistModel.findByPk(id);

      if (!artist) {
        res.status(404).json({ status: 404, error: "The artist you wish to delete does not exist" });
      }

      await ArtistModel.destroy({
        where: { id }
      });

      res
        .status(201)
        .json({ status: 201, message: "Successfully deleted artist" });
    } catch (error) {
      return next(error);
    }
  };
}

module.exports = ArtistController;
