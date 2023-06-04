var express = require("express");
var router = express.Router();
var planController = require("../controllers/planController");

/* 홈 화면에 대한 라우팅 */
router.get("/search", planController.planSearch);

router.get("/detail", planController.planDetail);

module.exports = router;
