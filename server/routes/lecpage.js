var express = require("express");
var router = express.Router();
var lecpageController = require("../controllers/lecpageController");

/* 홈 화면에 대한 라우팅 */
router.get("/", lecpageController.lecHeader);

router.get("/lec_notice", lecpageController.notice);

router.get("/lec_file", lecpageController.file);

router.get("/lec_lecture", lecpageController.lecture);

router.get("/lec_ass", lecpageController.assignment);

router.get("/lec_check", lecpageController.attendence);

module.exports = router;
