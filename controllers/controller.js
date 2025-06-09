const { User, Category, Cuisine } = require("../models");

class Controller {
  static async createCuisine(req, res) {
    try {
      const { name, description, price, imgUrl, categoryId, authorId } =
        req.body;

      const newCuisine = await Cuisine.create({
        name,
        description,
        price,
        imgUrl,
        categoryId,
        authorId,
      });

      res.status(201).json({
        statusCode: 201,
        message: "Cuisine created successfully",
        data: newCuisine,
      });
    } catch (error) {
      console.log(error);

      const statusError = 500;
      const msgError = "Internal Server Error";

      if (error.name === "SequelizeValidationError") {
        statusError = 400;
        msgError = "Bad Request";
      }

      res.status(statusError).json({
        statusCode: statusError,
        error: {
          message: msgError,
        },
      });
    }
  }

  static async X(req, res) {
    try {
      res.send("x");
    } catch (error) {
      const statusError = 500;
      const msgError = "Internal Server Error";

      res.status(statusError).json({
        error: msgError,
      });
    }
  }
}

module.exports = Controller;
