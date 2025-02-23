import express from "express";
import {
  createAccount,
  loginUser,
  myProfile,
  register,
  verifyUser,
} from "../controller/user.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/user/register", register);
router.post("/user/createAccount", createAccount);
router.post("/user/verify", verifyUser);
router.post("/user/login", loginUser);
router.get("/user/me", isAuth, myProfile);

export default router;
