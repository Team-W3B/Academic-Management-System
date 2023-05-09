var express = require("express");
var router = express.Router();
var loginController = require("../controllers/loginController");

/* 로그인에 대한 routing */
router.post("/", loginController.loginProcess);

module.exports = router;
