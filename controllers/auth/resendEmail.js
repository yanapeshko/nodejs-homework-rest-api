const { User } = require("../../models/user");
const { sendEmail, createVerifyEmail, RequestError } = require("../../helpers");

const resendEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(404);
  }

  if (user.verify) {
    throw RequestError(400, "Verification has already been passed");
  }

  const mail = createVerifyEmail(email, user.verificationToken);

  await sendEmail(mail);

  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendEmail;
