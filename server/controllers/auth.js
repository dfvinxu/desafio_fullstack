const User = require('../models/users-sequelize');


const checkEmailLogIn = async (req, res, next) => {
    let { email, password } = req.body;
    try {
        // Buscar el usuario por correo electrónico en la base de datos
        let user = await User.findOne({ where: { email } });

        if (!user) {
            console.log("This email does not have an account");
            return res.status(401).json({ "msj": "This email does not have an account" });
        }

        // Verificar si la contraseña coincide
        if (user.password !== password) {
            console.log("Incorrect password");
            return res.status(401).json({ "msj": "Incorrect password" });
        }else {
            res.status(200).json({"user": user });
        }    

    } catch (err) {
        console.log(err);
        res.status(500).json({ "msj": " Error" });
    }
};


module.exports = {
    checkEmailLogIn
} ;