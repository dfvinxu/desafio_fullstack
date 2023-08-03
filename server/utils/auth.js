const passport = require("passport");
require("dotenv").config();
let GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL:
        "https://dcwqpn8sih.eu-west-1.awsapprunner.com/auth/google/callback",
      proxy: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

//Esta función determina los datos que se van a guardar en la sesión de google: user
passport.serializeUser(function (user, done) {
  done(null, user);
});
//Determina que objeto borrar de la sesión: user
passport.deserializeUser(function (user, done) {
  done(null, user);
});
