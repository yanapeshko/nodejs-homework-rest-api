const handleServerErrors = (error, data, next) => {
  const { name, code } = error;
  error.status = name === "MongoServerError" && code === 1100000 ? 409 : 400;
  next();
};

module.exports = handleServerErrors;
