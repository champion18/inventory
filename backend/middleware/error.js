const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong monogdb ID error (cast ID error)
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid ${err.path}.`; // invalid _id
    err = new ErrorHandler(message, 400);
  }

  // Mongoose Duplicate Key Error - registering again with the same email
  if (err.code === 11000) {
    const message = `User with ${Object.keys(err.keyValue)} already exists.`;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JWT Error
  if (err.name === "JsonwebTokenError") {
    const message = `JSON Web Token is invalid, try again.`;
    err = new ErrorHandler(message, 400);
  }

  // JWT Expire error
  if (err.name === "TokenExpiredError") {
    const message = `JSON Web Token is expired, try again.`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
