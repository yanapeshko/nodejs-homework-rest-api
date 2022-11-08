const express = require("express");

const { auth, validation } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");
const { auth: ctrl } = require("../../controllers");
const {
  joiRegisterSchema,
  joiLoginSchema,
  verifyEmailSchema,
} = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validation(joiRegisterSchema),
  ctrlWrapper(ctrl.register)
);

router.get("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.post("/logout", auth, ctrlWrapper(ctrl.logout));

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verify));

router.post(
  "/verify",
  validation(verifyEmailSchema),
  ctrlWrapper(ctrl.resendEmail)
);
module.exports = router;
