const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");
const { contactsSchema } = require("../../schemas");
const { contacts: ctrl } = require("../../controllers");

const validateMiddleware = validation(contactsSchema);

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validateMiddleware, ctrlWrapper(ctrl.addContact));

router.delete("/:id", ctrlWrapper(ctrl.removeContact));

router.put("/:id", validation(contactsSchema), ctrlWrapper(ctrl.updateContact));

module.exports = router;
