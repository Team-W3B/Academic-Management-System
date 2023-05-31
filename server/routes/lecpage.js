var express = require("express");
var router = express.Router();
var lecpageController = require("../controllers/lecpageController");

/* 강의페이지 화면에 대한 라우팅 */
router.get("/", lecpageController.lecHeader);

router.get("/lec_notice", lecpageController.lecNotice);

router.get("/lec_file", lecpageController.lecFile);

router.get("/lec_lecture", lecpageController.lecLecture);

router.get("/lec_ass", lecpageController.lecAssignment);

router.get("/lec_check", lecpageController.attendence);

router.get("/notice", lecpageController.notice);

router.get("/file", lecpageController.file);

router.get("/lecture", lecpageController.lecture);

router.get("/ass", lecpageController.assignment);

module.exports = router;
