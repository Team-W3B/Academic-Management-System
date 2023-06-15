/* GET에 대한 응답으로 받을 JSON 데이터 예시 */
let score_data = [
    {
        score_semester : "1-1",
        score_contents : [
            {
                    score_isMajor : false,
                    score_lec : "소프트웨어공학",
                    score_department : "컴퓨터정보공학부",
                    score_duration : 3,
                    score_grade : 4.5,
                    score_retake : true,
            },
            {
                    score_isMajor : true,
                    score_lec : "머신러닝",
                    score_department : "컴퓨터정보공학부",
                    score_duration : 3,
                    score_grade : 2.5,
                    score_retake : false,
            },
            {
                    score_isMajor : false,
                    score_lec : "컴퓨터네트워크",
                    score_department : "컴퓨터정보공학부",
                    score_duration : 3,
                    score_grade : 4.5,
                    score_retake : true,
            },
            {
                    score_isMajor : true,
                    score_lec : "캡스톤",
                    score_department : "컴퓨터정보공학부",
                    score_duration : 3,
                    score_grade : 4.5,
                    score_retake : false,
            },
        ]
    },
    {
        score_semester : "1-2",
        score_contents : [
                {
                        score_isMajor : false,
                        score_lec : "소프트웨어공학",
                        score_department : "컴퓨터정보공학부",
                        score_duration : 3,
                        score_grade : 4.5,
                        score_retake : true,
                },
                {
                        score_isMajor : true,
                        score_lec : "소프트웨어공학",
                        score_department : "컴퓨터정보공학부",
                        score_duration : 3,
                        score_grade : 3.5,
                        score_retake : false,
                },
                {
                        score_isMajor : true,
                        score_lec : "소프트웨어공학",
                        score_department : "컴퓨터정보공학부",
                        score_duration : 3,
                        score_grade : 4.5,
                        score_retake : false,
                },
        ]
    },
    {
        score_semester : "2-1",
        score_contents : [
                {
                        score_isMajor : false,
                        score_lec : "소프트웨어공학",
                        score_department : "컴퓨터정보공학부",
                        score_duration : 3,
                        score_grade : 4.5,
                        score_retake : true,
                },
                {
                        score_isMajor : false,
                        score_lec : "소프트웨어공학",
                        score_department : "컴퓨터정보공학부",
                        score_duration : 3,
                        score_grade : 4.5,
                        score_retake : true,
                },
                {
                        score_isMajor : true,
                        score_lec : "소프트웨어공학",
                        score_department : "컴퓨터정보공학부",
                        score_duration : 3,
                        score_grade : 4.0,
                        score_retake : true,
                },
        ]
    },
    {
        score_semester : "2-2",
        score_contents : [
                {
                        score_isMajor : true,
                        score_lec : "소프트웨어공학",
                        score_department : "컴퓨터정보공학부",
                        score_duration : 3,
                        score_grade : 3.0,
                        score_retake : true,
                },
                {
                        score_isMajor : true,
                        score_lec : "소프트웨어공학",
                        score_department : "컴퓨터정보공학부",
                        score_duration : 3,
                        score_grade : 2.5,
                        score_retake : true,
                },
                {
                        score_isMajor : false,
                        score_lec : "소프트웨어공학",
                        score_department : "컴퓨터정보공학부",
                        score_duration : 3,
                        score_grade : 4.0,
                        score_retake : true,
                },
        ]
    },
    {
        score_semester : "3-1",
        score_contents : [
                {
                        score_isMajor : false,
                        score_lec : "소프트웨어공학",
                        score_department : "컴퓨터정보공학부",
                        score_duration : 3,
                        score_grade : 4.5,
                        score_retake : true,
                },
                {
                        score_isMajor : false,
                        score_lec : "소프트웨어공학",
                        score_department : "컴퓨터정보공학부",
                        score_duration : 3,
                        score_grade : 4.5,
                        score_retake : true,
                },
                {
                        score_isMajor : true,
                        score_lec : "소프트웨어공학",
                        score_department : "컴퓨터정보공학부",
                        score_duration : 3,
                        score_grade : 4.5,
                        score_retake : true,
                },
        ]
    },
    {
        score_semester : "3-2",
        score_contents : [
                {
                        score_isMajor : false,
                        score_lec : "소프트웨어공학",
                        score_department : "컴퓨터정보공학부",
                        score_duration : 3,
                        score_grade : 2.5,
                        score_retake : true,
                },
                {
                        score_isMajor : true,
                        score_lec : "소프트웨어공학",
                        score_department : "컴퓨터정보공학부",
                        score_duration : 3,
                        score_grade : 3.5,
                        score_retake : true,
                },
                {
                        score_isMajor : false,
                        score_lec : "소프트웨어공학",
                        score_department : "컴퓨터정보공학부",
                        score_duration : 3,
                        score_grade : 4.5,
                        score_retake : true,
                },
        ]
    },
    {
        score_semester : "4-1",
        score_contents : [
            {
                    score_isMajor : true,
                    score_lec : "소프트웨어공학",
                    score_department : "컴퓨터정보공학부",
                    score_duration : 3,
                    score_grade : 4.5,
                    score_retake : false,
            },
            {
                    score_isMajor : true,
                    score_lec : "머신러닝",
                    score_department : "컴퓨터정보공학부",
                    score_duration : 3,
                    score_grade : 4.5,
                    score_retake : false,
            },
            {
                    score_isMajor : true,
                    score_lec : "컴퓨터네트워크",
                    score_department : "컴퓨터정보공학부",
                    score_duration : 3,
                    score_grade : 4.5,
                    score_retake : true,
            },
            {
                    score_isMajor : true,
                    score_lec : "산학협력캡스톤설계1",
                    score_department : "컴퓨터정보공학부",
                    score_duration : 3,
                    score_grade : 4.5,
                    score_retake : false,
            },
            {
                    score_isMajor : false,
                    score_lec : "자본주의역사",
                    score_department : "교양",
                    score_duration : 3,
                    score_grade : 4.5,
                    score_retake : false,
            },
        ]
    },
    {
        score_semester : "4-2",
        score_contents : [
                {
                        score_isMajor : true,
                        score_lec : "소프트웨어공학",
                        score_department : "컴퓨터정보공학부",
                        score_duration : 3,
                        score_grade : 4.5,
                        score_retake : true,
                },
                {
                        score_isMajor : true,
                        score_lec : "소프트웨어공학",
                        score_department : "컴퓨터정보공학부",
                        score_duration : 3,
                        score_grade : 4.5,
                        score_retake : true,
                },
                {
                        score_isMajor : false,
                        score_lec : "소프트웨어공학",
                        score_department : "컴퓨터정보공학부",
                        score_duration : 3,
                        score_grade : 3.5,
                        score_retake : true,
                },                
        ]
    },
]

export default score_data;