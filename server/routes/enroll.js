var express = require("express");
var router = express.Router();
var enrollController = require("../controllers/enrollController");

/* 홈 화면에 대한 라우팅 */
router.get("/search", enrollController.enrollSearch);

router.get("/response", enrollController.enrollResponse);

router.get("/request", enrollController.enrollRequest);

router.get("/delete", enrollController.enrollDelete);

router.post("/apply", enrollController.enrollApply);

module.exports = router;
