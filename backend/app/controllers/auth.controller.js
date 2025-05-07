import db from "../models/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const User = db.user;
const Role = db.role;

export const signup = async (req, res) => {
  const user = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  const role = await Role.findOne({ where: { name: req.body.role || "user" } });
  await user.setRole(role);

  res.send({ message: "User registered successfully!" });
};

export const signin = async (req, res) => {
  const user = await User.findOne({ where: { username: req.body.username } });

  if (!user) {
    return res.status(404).send({ message: "User Not found." });
  }

  const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "Invalid Password!",
    });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: 86400, // 24 hours
  });

  const role = await user.getRole();

  res.status(200).send({
    id: user.id,
    username: user.username,
    email: user.email,
    role: role.name, 
    accessToken: token,
  });
  
};
