/* GET에 대한 응답으로 받을 JSON 데이터 예시 */
let planDetail =
{
    basic_info : {
        planDetail_lec : "소프트웨어공학",
        planDetail_lec_time : "월5, 수6",
        planDetail_semester : "202301",
        planDetail_reg_num : "H020-4-0846-01",
        planDetail_classifier : "전선",
        planDetail_num_of_student : 36,
        planDetail_prof : "이기훈",
        planDetail_mail : "kihoonlee@kw.ac.kr",
        planDetail_tel : "02-940-8674",
        planDetail_assist : "김상호",
    },
    detail_info : {
        planDetail_outline : "본 과정은 소프트웨어 공학에 관한 일반적인 입문 과정으로, 소프트웨어 공학의 기본 개념, methods, 실무활용 예 및 최근 기술동향 등을 소개한다.",
        planDetail_eval_rate : {
            attendance : 10,
            midterm : 30,
            finterm : 30,
            ass : 30,
            attitude : 0,
            quiz : 0,
            etc : 0,
        },
        planDetail_15weeks : [
            {week : 1, content : "Intronduction", operation : ""},
            {week : 2, content : "Software processes", operation : ""},
            {week : 3, content : "Software processes", operation : "과제"},
            {week : 15, content : "Final Exam", operation : "보강/기말고사"}, // 15개 주에 대한 데이터가 모두 들어와야 함.
        ]
    }
}

export default planDetail;