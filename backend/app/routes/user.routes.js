import { allAccess, userBoard, adminBoard, modBoard } from "../controllers/user.controller.js";
import authJwt from "../middlewares/authJwt.js";
import { Router } from "express";

const router = Router();

router.get("/all", allAccess);
router.get("/user", [authJwt.verifyToken], userBoard);
router.get("/admin", [authJwt.verifyToken, authJwt.isAdmin], adminBoard);
router.get("/mod", [authJwt.verifyToken, authJwt.isMod], modBoard);

export default router;
