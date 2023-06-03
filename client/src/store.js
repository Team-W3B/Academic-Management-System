import { configureStore, createSlice } from "@reduxjs/toolkit";
import plan_info from "./data/planInfo_data";
import planDetail from "./data/planDetail_data";

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

/* 강의계획서 조회 세부 */
let plan_detail = createSlice({
    name : 'plan_detail',
    initialState : planDetail,
    reducers : {
        setPlanDetail(state, action) {
            return action.payload
        }
    }
});
export let { setPlanDetail } = plan_detail.actions



const store = configureStore({
    reducer: {
        user : user.reducer,
        signUp : signUpSlice.reducer,
        plan_output : plan_output.reducer,
    }

});
export default store;
