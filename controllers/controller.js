const { Op, col } = require("sequelize");
const { hashCompare } = require("../helpers/bcrypt");
const { uploadToCloudinary } = require("../helpers/cloudinary");
const { convertPayloadToToken } = require("../helpers/jwt");
const { User, Category, Cuisine } = require("../models");

class Controller {
  //Main
  static async main(req, res, next) {
    try {
      res.send(
        "Welcome, if you wanna see more detail can go to. /pub/cuisines"
      );
    } catch (err) {
      next(err);
    }
  }
  //Register
  static async createRegister(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;

      const staff = await User.create({
        username,
        email,
        password,
        phoneNumber,
        address,
      });

      res.status(201).json({
        statusCode: 201,
        data: {
          username: staff.username,
          email: staff.email,
          role: staff.role,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  //Log in
  static async postLogin(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) throw new Error("INVALID_EMPTY");

      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user || !hashCompare(password, user.password)) {
        throw new Error("INVALID_LOGIN");
      }

      const payload = {
        id: user.id,
        username: user.username,
      };

      const token = convertPayloadToToken(payload);

      res.status(200).json({
        statusCode: 200,
        accessToken: token,
      });
    } catch (err) {
      next(err);
    }
  }

  //Utama
  static async createCuisine(req, res, next) {
    try {
      const { name, description, price, imgUrl, categoryId } = req.body;

      const newCuisine = await Cuisine.create({
        name,
        description,
        price,
        imgUrl,
        categoryId,
        authorId: req.plusData.id,
      });

      res.status(201).json({
        statusCode: 201,
        message: "Cuisine created successfully",
        data: newCuisine,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getCuisines(req, res, next) {
    try {
      const cuisines = await Cuisine.findAll({
        include: {
          model: User,
          attributes: {
            exclude: ["password"],
          },
        },
      });

      res.status(200).json({
        statusCode: 200,
        data: cuisines,
      });
    } catch (err) {
      next(err);
    }
  }

  static async findCuisines(req, res, next) {
    try {
      const { id } = req.params;
      const cuisine = await Cuisine.findByPk(+id);

      if (!cuisine) throw new Error("CUISINE_NOT_FOUND");

      res.status(200).json({
        statusCode: 200,
        data: cuisine,
      });
    } catch (err) {
      next(err);
    }
  }

  static async putCuisines(req, res, next) {
    try {
      const { id } = req.params;
      const { name, description, price, imgUrl, categoryId } = req.body;
      const cuisine = await Cuisine.findByPk(+id);

      if (!cuisine) throw new Error("CUISINE_NOT_FOUND");

      await Cuisine.update(
        {
          name,
          description,
          price,
          imgUrl,
          categoryId,
        },
        {
          where: {
            id: +id,
          },
        }
      );

      const updatedCuisine = await Cuisine.findByPk(+id);

      res.status(200).json({
        statusCode: 200,
        data: updatedCuisine,
      });
    } catch (err) {
      next(err);
    }
  }

  static async patchCuisines(req, res, next) {
    try {
      const { id } = req.params;
      const cuisine = await Cuisine.findByPk(+id);

      if (!cuisine) throw new Error("CUISINE_NOT_FOUND");

      if (!req.file) throw new Error("FILE_NOT_FOUND");

      const result = await uploadToCloudinary(req.file);

      await Cuisine.update(
        { imgUrl: result.secure_url },
        {
          where: {
            id: +id,
          },
        }
      );

      res.status(200).json({
        statusCode: 200,
        data: {
          message: `Image ${cuisine.name} success to update`,
          imgUrl: result.secure_url,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  static async deleteCuisines(req, res, next) {
    try {
      const { id } = req.params;
      const cuisine = await Cuisine.findByPk(+id);

      if (!cuisine) throw new Error("CUISINE_NOT_FOUND");

      await Cuisine.destroy({
        where: {
          id: +id,
        },
      });

      res.status(200).json({
        statusCode: 200,
        data: {
          cuisine,
          message: `${cuisine.name} success to delete`,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  //Support
  static async createCategory(req, res, next) {
    try {
      const { name } = req.body;

      const newCategory = await Category.create({ name });

      res.status(201).json({
        statusCode: 201,
        message: "Category created successfully",
        data: newCategory,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getCategories(req, res, next) {
    try {
      const categories = await Category.findAll();

      res.status(200).json({
        statusCode: 200,
        data: categories,
      });
    } catch (err) {
      next(err);
    }
  }

  static async putCategories(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const category = await Category.findByPk(+id);

      if (!category) throw new Error("CATEGORY_NOT_FOUND");

      await Category.update(
        { name },
        {
          where: {
            id: +id,
          },
        }
      );

      const updateCategory = await Category.findByPk(+id);

      res.status(200).json({
        statusCode: 200,
        data: updateCategory,
      });
    } catch (err) {
      next(err);
    }
  }

  //Public
  static async getPubCuisines(req, res, next) {
    try {
      const { search, sort, filter } = req.query;
      let { page } = req.query;

      const option = {
        where: {},
      };

      //search
      if (search) {
        option.where.name = {
          [Op.iLike]: `%${search}%`,
        };
      }

      //sort
      if (sort) {
        const ordering = sort[0] === "-" ? "DESC" : "ASC";
        const columnName = ordering === "DESC" ? sort.slice(1) : sort;
        option.order = [[columnName, ordering]];
      }

      //filter
      if (filter) {
        const categoryIds = filter.split(",").map(Number);
        option.where.categoryId = {
          [Op.in]: categoryIds,
        };
      }

      let limit = 10;
      if (!+page) page = 1;

      if (page) {
        (option.limit = limit), (option.offset = limit * (page - 1));
      }

      const { count, rows } = await Cuisine.findAndCountAll(option);

      res.status(200).json({
        statusCode: 200,
        total: count,
        size: limit,
        totalPage: Math.ceil(count / limit),
        currentPage: +page,
        data: rows,
      });
    } catch (err) {
      next(err);
    }
  }

  static async findPubCuisines(req, res, next) {
    try {
      const { id } = req.params;
      const cuisine = await Cuisine.findByPk(+id);

      if (!cuisine) throw new Error("CUISINE_NOT_FOUND");

      res.status(200).json({
        statusCode: 200,
        data: cuisine,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getPubCategories(req, res, next) {
    try {
      const { filterId, filterName } = req.query;

      const option = {
        where: {},
      };

      if (filterId) {
        const categoryIds = filterId.split(",").map(Number);
        option.where.id = {
          [Op.in]: categoryIds,
        };
      }

      if (filterName) {
        option.where.name = {
          [Op.iLike]: `%${filterName}%`,
        };
      }

      const getCategories = await Category.findAll(option);

      res.status(200).json({
        statusCode: 200,
        data: getCategories,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
