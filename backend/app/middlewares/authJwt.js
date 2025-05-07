import jwt from "jsonwebtoken";
import db from "../models/index.js";

const User = db.user;
const Role = db.role;

const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  token = token.replace("Bearer ", "");

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

const isAdmin = async (req, res, next) => {
  const user = await User.findByPk(req.userId);
  const role = await user.getRole();
  if (role.name === "admin") {
    next();
    return;
  }
  res.status(403).send({ message: "Require Admin Role!" });
};

const isMod = async (req, res, next) => {
    const user = await User.findByPk(req.userId);
    const role = await user.getRole();
    if (role.name === "moderator") {
      next();
      return;
    }
    res.status(403).send({ message: "Require Moderator Role!" });
}

const authJwt = { verifyToken, isAdmin, isMod };
export default authJwt;
