import { configureStore, createSlice } from "@reduxjs/toolkit";


let plan_info = [
    {
        idx : 0,
        planOut_classifier : '전공',
        planOut_reg_num : 'H020-4-0846-01',
        planOut_lec : '소프트웨어공학',
        planOut_credit : 3,
        planOut_prof : '이기훈',
        planOut_lectime : '월5, 수6',
        planOut_type : '영어 50%',
        planOut_left : 16
    },
    {
        idx : 1,
        planOut_classifier : '전공',
        planOut_reg_num : 'H020-4-8483-01',
        planOut_lec : '머신러닝',
        planOut_credit : 3,
        planOut_prof : '박철수',
        planOut_lectime : '월3, 수4',
        planOut_type : '영어 50%',
        planOut_left : 12
    },
]



/* user 이름 */
let user = createSlice({
    name : "user",
    initialState : "임태헌",
    reducers : {
        changeUser(state, action) {
            return action.payload
        }
    }
});
export let { changeUser } = user.actions

/* 회원가입 */
export let signUpSlice =createSlice({
    name : "signUp",
    initialState : {name:""},
    reducers : {
        setsignUpName: (state, action)=>{
            state.name = action.payload
        }
    }
});
export const {setsignUpName} = signUpSlice.actions

/* 강의계획서 조회 결과 */
let plan_output = createSlice({
    name : 'plan_output',
    initialState : plan_info,
    reducers : {
        setPlanOutput(state, action) {
            return action.payload
        }
    }
});
export let { setPlanOutput } = plan_output.actions

const store = configureStore({
    reducer: {
        user : user.reducer,
        signUp : signUpSlice.reducer,
        plan_output : plan_output.reducer,
    }

});
export default store;
