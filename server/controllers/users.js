const User = require("../models/users-sequelize");

const createUser = async (req, res) => {
  try {
    let { user, name, surname, email, password, nationality, date } = req.body;
    date = date.split("/");
    let birth_date = new Date(date[2], date[1] - 1, date[0]).toLocaleString(
      "es-ES",
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }
    );
    const newUser = await User.create({
      user,
      name,
      surname,
      email,
      password,
      nationality,
      birth_date,
    });

    res.status(200).json({
      status: 200,
      message: `El usuario ${newUser.email} ha sido creado`,
    });
  } catch (error) {
    console.log(error.errors[0].message);
    res.status(403).json({
      status: 403,
      message: error.errors[0].message.includes("user")
        ? "Este usuario ya existe"
        : "Este email ya existe",
    });
  }
};

const getUser = async (req, res) => {
  let { id } = req.params;
  try {
    let user = await User.findByPk(id);
    if (!user) {
      res.status(200).json({ status: 200, message: "Usuario no encontrado" });
    } else {
      res.status(200).json({ status: 200, message: user });
    }
  } catch (error) {
    res.status(404).json({ status: 404, message: "Not found" });
  }
};

const deleteUser = async (req, res) => {
  let { id } = req.params;
  try {
    let user = await User.findByPk(id);
    if (!user) {
      res.status(200).json({ status: 200, message: "Usuario no encontrado" });
    } else {
      await user.destroy();
      res
        .status(200)
        .json({ status: 200, message: "El usuario ha sido eliminado" });
    }
  } catch (error) {
    res.status(404).json({ status: 404, message: "Not found" });
  }
};

module.exports = { createUser, getUser, deleteUser };
