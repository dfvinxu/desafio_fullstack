const express = require("express");
const router = express.Router();
const User = require("../controllers/users");

router.get("/users/:id?", User.getUser);
router.post("/users", User.createUser);
router.delete("/users/:id?", User.deleteUser);

module.exports = router;
