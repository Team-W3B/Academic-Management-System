var express = require("express");
var router = express.Router();
var scoreController = require("../controllers/scoreController");

/* 홈 화면에 대한 라우팅 */
router.get("/", scoreController.scoreData);

module.exports = router;
