var express = require("express");
var router = express.Router();
var signupController = require("../controllers/signupController");

/* 회원가입에 대한 라우팅 */
router.post("/", signupController.signupData);


module.exports = router;
