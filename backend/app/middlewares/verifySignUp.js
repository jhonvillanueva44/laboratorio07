import db from "../models/index.js";

const User = db.user;
const Role = db.role;

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const user = await User.findOne({ where: { username: req.body.username } });
  if (user) {
    return res.status(400).send({ message: "Username already in use!" });
  }

  const email = await User.findOne({ where: { email: req.body.email } });
  if (email) {
    return res.status(400).send({ message: "Email already in use!" });
  }

  next();
};

export default { checkDuplicateUsernameOrEmail };
