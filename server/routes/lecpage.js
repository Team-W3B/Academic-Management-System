var express = require("express");
var router = express.Router();
var lecpageController = require("../controllers/lecpageController");

/* 강의페이지 화면에 대한 라우팅 */
router.get("/lec_notice", lecpageController.lecNotice);

router.get("/lec_file", lecpageController.lecFile);

router.get("/lec_lecture", lecpageController.lecLecture);

router.get("/lec_ass", lecpageController.lecAssignment);

router.get("/lec_check", lecpageController.attendence);

router.get("/notice", lecpageController.notice);

router.get("/file", lecpageController.file);

router.get("/lecture", lecpageController.lecture);

router.get("/ass", lecpageController.assignment);

router.get("/notice/detail_not", lecpageController.noticeDetail);

router.get("/file/detail_file", lecpageController.fileDetail);

router.get("/lecture/detail_lec", lecpageController.lectureDetail);

router.get("/ass/detail_ass", lecpageController.assignmentDetail);

router.get("/notice/detail_blobNot", lecpageController.noticeBlobFile);

router.get("/file/detail_blobNot", lecpageController.fileBlobFile);

router.get("/ass/detail_blobNot", lecpageController.assignmentBlobFile);

router.post("/ass/detail_ass_snt", lecpageController.assignmentSent);

module.exports = router;

