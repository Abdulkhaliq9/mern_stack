import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";

import { verifyToken, isAdmin } from "../middlewares/authMiddleware.js";
// router object
const router = express.Router();
// routing
// Register || Method post
router.post("/register", registerController);

// login || method post
router.post("/login", loginController);


// forgot password || method post
router.post("/forgot-password",  forgotPasswordController)


// test || method get
router.get("/test", verifyToken, isAdmin, testController);

// protected route
router.get("/user-auth", (req, res) => {
  res.status(200).send({ ok:true });
});
// Export the router
export default router;
