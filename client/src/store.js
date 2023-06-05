import { configureStore, createSlice } from "@reduxjs/toolkit";
import plan_info from "./data/planInfo_data";
import planDetail from "./data/planDetail_data";
import MPLD_data from './data/MainPageLecDetail_data';

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

/* user ID */
let userID = createSlice({
    name : "userID",
    initialState : "",
    reducers : {
        changeUserID(state, action) {
            return action.payload
        }
    }
});
export let { changeUserID } = userID.actions

/* main page lec detail */
let mpld = createSlice({
    name : "mpld",
    initialState : MPLD_data,
    reducers : {
        setMPLD(state, action) {
            return action.payload
        }
    }
});
export let { setMPLD } = mpld.actions

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


export let lecNameSlice = createSlice({
    name:"lecture",
    initialState:{lecture:""},
    reducers:{
        setLecture:(state, action)=>{
            state.lecture = action.payload
        }
    }
});
export const {setLecture} = lecNameSlice.actions

export let lecIndexSlice = createSlice({
    name:"index",
    initialState:{index:""},
    reducers:{
        setIndex:(state, action)=>{
            state.index = action.payload
        }
    }
});
export const {setIndex} = lecIndexSlice.actions

const store = configureStore({
    reducer: {
        user : user.reducer,
        signUp : signUpSlice.reducer,
        plan_output : plan_output.reducer,
        plan_detail : plan_detail.reducer,
        lecture : lecNameSlice.reducer,
        index : lecIndexSlice.reducer,
        mpld : mpld.reducer,
        userID : userID.reducer,
    }

});
export default store;
