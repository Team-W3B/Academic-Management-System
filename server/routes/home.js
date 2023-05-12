var express = require("express");
var router = express.Router();
var homeController = require("../controllers/homeController");

/* 홈 화면에 대한 라우팅 */
router.get("/", homeController.homeForm);

module.exports = router;
