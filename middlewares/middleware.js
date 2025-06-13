const { User, Cuisine } = require("../models");
const { convertTokenToPayload } = require("../helpers/jwt");

//Middleware authentication when loggin (get Access Token)
const authentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new Error("UNAUTHENTICATED");
    // console.log("Authorization Header:", req.headers.authorization);

    const token = authorization.split(" ")[1];

    const payload = convertTokenToPayload(token);
    // console.log("This is Payload:", payload);

    const user = await User.findByPk(+payload.id);

    if (!user) throw new Error("UNAUTHENTICATED");

    req.plusData = {
      id: user.id,
      username: user.username,
      role: user.role,
      email: user.email,
    };

    next();
  } catch (err) {
    next(err);
  }
};

//Middleware for authorization admin or staff
const authorization = async (req, res, next) => {
  try {
    const userId = req.plusData.id;
    const userRole = req.plusData.role;
    const cuisineId = req.params.id;

    const cuisine = await Cuisine.findByPk(+cuisineId);

    if (!cuisine) throw new Error("CUISINE_NOT_FOUND");

    if (userRole !== "Admin") {
      if (cuisine.authorId !== userId) {
        throw new Error("FORBIDDEN");
      }
    }

    next();
  } catch (err) {
    next(err);
  }
};

//Middleware just for admin
const onlyAdmin = async (req, res, next) => {
  try {
    const userRole = req.plusData.role;

    if (userRole !== "Admin") {
      throw new Error("FORBIDDEN");
    }

    next();
  } catch (err) {
    next(err);
  }
};

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const middlewareMulter = upload.single("imgUrl");

module.exports = { authentication, authorization, onlyAdmin, middlewareMulter };
