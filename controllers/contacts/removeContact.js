const { NotFound } = require("http-errors");

const { Contact } = require("../../models");

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw new NotFound(`Product with id =${id} not found `);
  }
  res.json({
    status: "success",
    code: 200,
    message: "contact has been deleted",
    data: {
      result,
    },
  });
};

module.exports = removeContact;
