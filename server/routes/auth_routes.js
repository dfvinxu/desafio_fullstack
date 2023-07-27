const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth");

//LOG IN
authRouter.post("/login", authController.checkEmailLogIn);

// //SIGN UP
authRouter.post("/signup", authController.signUpUser);

// // Log out
// authRouter.get('/logout', authMiddleware.authCheck, authController.destroySessionAndClearCookies);

module.exports = authRouter;
