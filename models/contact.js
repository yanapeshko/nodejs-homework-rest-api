const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },

    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().valid(true, false),
});

const statusJoiSchema = Joi.object({
  favorite: Joi.boolean().valid(true, false).required(),
});
const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  joiSchema,
  statusJoiSchema,
};
