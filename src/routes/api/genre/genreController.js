const uuidv4 = require("uuid/v4");
const GenresModel = require("../../../models/GenresModel");

class GenreController {
  getGenres = async (req, res, next) => {

    try {
      const results = await GenresModel.findAll();

      return res.status(200).json({ status: 200, message: 'Successfully fetched genres', data: results });
    } catch (error) {
      return next(error);
    }
  };

  createGenre = async (req, res) => {
    const { title } = req.body;

    try {
      const results = await GenresModel.create({
        id: uuidv4(),
        title,
      })

      return res.status(201).json({ status: 201, message: `Successfully added genre: ${title}`});
    } catch (error) {
      return next(error);
    }

  };

  updateGenre = async (req, res, next) => {
    const { id } = req.params;
    const updates = Object.assign({}, req.body);

    try {
      const results = await GenresModel.update(updates, {
        where: {
          id
        },
        returning: true
      });

      const affectedRows = results[0];

      if (affectedRows !== 1) {
        res.status(404).json({
          status: 404,
          error: "Did not find this genre in the list of available genres"
        });
      }

      res.status(201).json({
        status: 201,
        messsage: "successfully updated Genre",
        data: results[1][0]
      });

    } catch (error) {
      return next(error);
    }
  };

  deleteGenre = async (req, res, next) => {
    const { id } = req.params;

    try {
      const genre = await GenresModel.findByPk(id);
      if (!genre) {
        return res
          .status(404)
          .json({
            status: 404,
            error: "Genre you are looking for cannot be found"
          });
      }

      await GenresModel.destroy({
        where: { id }
      });

      return res
        .status(200)
        .json({ status: 200, message: "Successfully deleted genre" });

    } catch (error) {
      return next(error);
    }
  };
}

module.exports = GenreController;
