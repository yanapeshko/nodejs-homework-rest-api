const { NotFound } = require("http-errors");

const contactsOperations = require("../../models/contacts");

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsOperations.removeContact(id);
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
