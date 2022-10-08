const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const removeContact = async (id) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  const newContact = contacts.filter((_, index) => index !== idx);
  await updateContacts(newContact);
  return contacts[idx];
};

module.exports = removeContact;
