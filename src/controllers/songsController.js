"use strict";
const uuidv4 = require("uuid/v4");
const SongsModel = require("../models/SongsModel");

class SongsController {
  createSong = async (req, res, next) => {
    const { title, duration, artistId, albumId } = req.body;
    try {
      const newSong = await SongsModel.create({
        id: uuidv4(),
        title,
        duration,
        artistId,
        albumId
      });

      if (newSong) {
        res.status(201).json({
          status: 201,
          message: "Successfully added new song",
          song: newSong
        });
      }
    } catch (error) {
      return next(error);
    }
  };

  updateSong = async (req, res, next) => {
    const update = Object.assign({}, req.body);
    const { id } = req.params;

    try {
      const results = SongsModel.update(update, {
        where: {
          id
        },
        returning: true
      });

      const affectedRows = results[0];

      if (affectedRows !== 1) {
        res.status(404).json({
          status: 404,
          error: "Sorry, the song you wish to update does not exist"
        });
      }

      res.status(201).json({
        status: 201,
        message: "successfully updated song",
        song: results[1][0]
      });
    } catch (error) {
      return next(error);
    }
  };

  getSongs = async (req, res, next) => {
    try {
      const songs = await SongsModel.findAll();
      if (songs) {
        res.status(200).json({ status: 200, songs });
      } else {
        res.status(404).json({ status: 404, error: "No songs availble" });
      }
    } catch (error) {
      return next(error);
    }
  };

  deleteSong = async (req, res, next) => {
    const { id } = req.params;

    try {
      const song = await SongsModel.findByPk(id);

      if (!song)
        return res
          .status(404)
          .json({ status: 404, error: "Sorry, song not found" });
      await SongsModel.destroy({
        where: { id }
      });

      return res
        .status(201)
        .json({ status: 201, message: "Song successfully deleted" });
    } catch (error) {
      return next(error);
    }
  };
}

module.exports = SongsController;
