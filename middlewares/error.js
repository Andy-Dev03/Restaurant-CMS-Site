const isError = (err, req, res, next) => {
  console.log(err);
  // res.send(err);
  let statusError = 500;
  let msgError = "Internal Server Error";

  if (err.name === "SequelizeValidationError") {
    statusError = 400;
    if (err.errors.length === 1) {
      msgError = err.errors[0].message;
    } else {
      msgError = err.errors.map((e) => {
        return e.message;
      });
    }
  } else if (err.name === "SequelizeUniqueConstraintError") {
    statusError = 400;
    msgError = err.errors[0].message;
  } else if (
    err.message === "CUISINE_NOT_FOUND" ||
    err.message === "CATEGORY_NOT_FOUND"
  ) {
    statusError = 404;
    msgError = "Error not found";
  } else if (err.message === "INVALID_EMPTY") {
    statusError = 400;
    msgError = "Your email or password is empty";
  } else if (err.message === "INVALID_LOGIN") {
    statusError = 401;
    msgError = "Invalid email or password";
  } else if (err.message === "UNAUTHENTICATED") {
    statusError = 401;
    msgError = "You must login first";
  } else if (err.message === "FORBIDDEN") {
    statusError = 403;
    msgError = "You are not authorized to do this action";
  }

  res.status(statusError).json({
    statusCode: statusError,
    error: {
      message: msgError,
    },
  });
};

module.exports = { isError };
