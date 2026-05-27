const express = require("express");
const router = express.Router();

const { register, login, logout } = require("../controller/auth");

router.post("/login", login);
router.get("/logout", logout);
router.post("/register", register);

module.exports = router;
