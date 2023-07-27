const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth");
const passport = require("passport");
require("../utils/auth");

//LOG IN
authRouter.post("/login", authController.checkEmailLogIn);

//LOG IN w/ Google
authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
    prompt: "select_account",
  })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  authController.googleLogin
);

// //SIGN UP
authRouter.post("/signup", authController.signUpUser);

// // Log out
// authRouter.get('/logout', authMiddleware.authCheck, authController.destroySessionAndClearCookies);

module.exports = authRouter;
