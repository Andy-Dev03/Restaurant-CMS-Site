const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;
const convertPayloadToToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY);
};

const convertTokenToPayload = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error("INVALID_TOKEN");
  }
};

module.exports = {
  convertPayloadToToken,
  convertTokenToPayload,
};
