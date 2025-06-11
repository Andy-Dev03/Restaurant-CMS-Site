const { User, Cuisine } = require("../models");
const { convertTokenToPayload } = require("../helpers/jwt");

const authentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new Error("UNAUTHENTICATED");
    // console.log("Authorization Header:", req.headers.authorization);

    const token = authorization.split(" ")[1];
    const payload = convertTokenToPayload(token);
    // console.log("Decoded Payload:", payload);

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

const authorization = async (req, res, next) => {
  try {
    const userId = req.plusData.id;
    const userRole = req.plusData.role;
    const cuisineId = req.params.id;

    const cuisine = await Cuisine.findByPk(+cuisineId);

    if (!cuisine) throw new Error("CUISINE_NOT_FOUND");

    if (userRole === "Admin") {
      return next(); // Admin bebas
    }

    if (userRole === "Staff") {
      // Hanya bisa akses jika dia adalah pembuat (authorId)
      if (cuisine.authorId === userId) {
        return next();
      } else {
        throw new Error("FORBIDDEN");
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { authentication, authorization };
