const { RequestError } = require("../helpers");

const validation = (schema) => {
  const func = async (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(RequestError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = validation;
