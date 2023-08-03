const User = require("../models/users-sequelize");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
const bcrypt = require("bcrypt");
const saltRounds = 10;

// SIGNUP
const signUpUser = async (req, res) => {
  try {
    const { user, name, surname, email, password, nationality, birth_date } =
      req.body;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const newUser = {
      user,
      name,
      surname,
      email,
      password: hashPassword,
      nationality,
      birth_date,
    };
    const createdUser = await User.create(newUser);
    res.status(200).json({ userId: createdUser });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ msj: "Error en el registro" });
  }
};

//LOGIN
const checkEmailLogIn = async (req, res) => {
  let { email, password } = req.body;
  try {
    // Buscar el usuario por correo electrónico en la base de datos
    let user = await User.findOne({ where: { email } });
    if (!user) {
      console.log("This email does not have an account");
      return res
        .status(401)
        .json({ msj: "This email does not have an account" });
    }
    // Verificar si la contraseña coincide
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      console.log("Incorrect password");
      return res.status(401).json({ msj: "Incorrect password" });
    }
    const payload = {
      user_id: user.dataValues.userId,
    };
    const token = jwt.sign(payload, "secret_password", {
      expiresIn: "7d",
    });
    res
      .status(200)
      .cookie("access-token", token, {
        sameSite: "lax",
      })
      .json({ status: 200, message: "OK" });
  } catch (err) {
    console.log(err);
    res.status(500).cookie({ msj: " Error" });
  }
};

//LOG OUT
const logOut = (req, res) => {
  res.clearCookie("access-token").json({ status: 200, message: "You're out!" });
};

const googleLogin = (req, res) => {
  const payload = {
    //save here data
    check: true,
  };
  const token = jwt.sign(payload, `secret_key`, {
    expiresIn: "7d",
  });
  // console.log(req.user);
  res
    .status(200)
    .cookie("access-token", token, {
      httpOnly: true,
      sameSite: "lax",
    })
    .redirect("http://localhost:5173/home");
};

module.exports = {
  checkEmailLogIn,
  signUpUser,
  logOut,
  googleLogin,
};
