const express = require('express');
const authRouter = express.Router();
// const authMiddleware = require('../middlewares/authMiddleware')
const authController = require('../controllers/auth')

//LOG IN 
authRouter.post('/auth/login', authController.checkEmailLogIn)

// //SIGN UP
authRouter.post('/auth/signup', authController.signUpUser)

// // Log out
// authRouter.get('/logout', authMiddleware.authCheck, authController.destroySessionAndClearCookies);

module.exports = authRouter