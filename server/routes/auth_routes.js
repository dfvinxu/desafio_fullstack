const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth");
const passport = require("passport");
const jwt = require("jsonwebtoken");
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
  (req, res) => {
    const payload = {
      //save here data
      check: true,
    };
    const token = jwt.sign(payload, `secret_key`, {
      expiresIn: "20m",
    });
    console.log(req.user);
    res
      .status(200)
      .cookie("access-token", token, {
        httpOnly: true,
        sameSite: "lax",
      })
      .redirect("http://localhost:5173/home");
  }
);

// //SIGN UP
authRouter.post("/signup", authController.signUpUser);

// // Log out
// authRouter.get('/logout', authMiddleware.authCheck, authController.destroySessionAndClearCookies);

module.exports = authRouter;
