import { configureStore, createSlice } from "@reduxjs/toolkit";
import plan_info from "./data/planInfo_data";
import planDetail from "./data/planDetail_data";
import MPLD_data from './data/MainPageLecDetail_data';
import score_data from "./data/score_data";

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

/* 성적석차 */
let Score_data = createSlice({
    name : 'Score_data',
    initialState : score_data,
    reducers : {
        setScoreData(state, action) {
            return action.payload
        }
    }
});
export let { setScoreData } = Score_data.actions


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

export let filenameSlice = createSlice({
    name:"lecDetail_fileName",
    initialState:{lecDetail_fileName:""},
    reducers:{
        setFile:(state, action)=>{
            state.lecDetail_fileName = action.payload
        }
    }
});
export const {setFile} = filenameSlice.actions

export let filesizeSlice = createSlice({
    name:"lecDetail_fileSize",
    initialState:{lecDetail_fileSize:""},
    reducers:{
        setFilesize:(state, action)=>{
            state.lecDetail_fileSize = action.payload
        }
    }
});
export const {setFilesize} = filesizeSlice.actions

export let filecontentSlice = createSlice({
    name:"lecDetail_content",
    initialState:{lecDetail_content:""},
    reducers:{
        setFilecontent:(state, action)=>{
            state.lecDetail_content = action.payload
        }
    }
});
export const {setFilecontent} = filecontentSlice.actions

export let asscheck1Slice = createSlice({
    name:"asscheck1",
    initialState:{asscheck1:""},
    reducers:{
        setAss1check:(state, action)=>{
            state.asscheck1 = action.payload
        }
    }
});
export const {setAss1check} = asscheck1Slice.actions

export let searchmajorSlice = createSlice({
    name:"major",
    initialState:{major:""},
    reducers:{
        setMajorcheck:(state, action)=>{
            state.major = action.payload
        }
    }
});
export const {setMajorcheck} = searchmajorSlice.actions

export let searchlecSlice = createSlice({
    name:"lec",
    initialState:{lec:""},
    reducers:{
        setLeccheck:(state, action)=>{
            state.lec = action.payload
        }
    }
});
export const {setLeccheck} = searchlecSlice.actions

export let searchvalueSlice = createSlice({
    name:"value",
    initialState:{value:""},
    reducers:{
        setValuecheck:(state, action)=>{
            state.value = action.payload
        }
    }
});
export const {setValuecheck} = searchvalueSlice.actions

export let responselecSlice = createSlice({
    name:"res_lec",
    initialState:{res_lec:""},
    reducers:{
        setRes_leccheck:(state, action)=>{
            state.res_lec = action.payload
        }
    }
});
export const {setRes_leccheck} = responselecSlice.actions

export let responseprofSlice = createSlice({
    name:"res_prof",
    initialState:{res_prof:""},
    reducers:{
        setRes_profcheck:(state, action)=>{
            state.res_prof = action.payload
        }
    }
});
export const {setRes_profcheck} = responseprofSlice.actions

export let responsetimeSlice = createSlice({
    name:"res_time",
    initialState:{res_time:""},
    reducers:{
        setRes_timecheck:(state, action)=>{
            state.res_time = action.payload
        }
    }
});
export const {setRes_timecheck} = responsetimeSlice.actions

export let responseclassSlice = createSlice({
    name:"res_class",
    initialState:{res_class:""},
    reducers:{
        setRes_classcheck:(state, action)=>{
            state.res_class = action.payload
        }
    }
});
export const {setRes_classcheck} = responseclassSlice.actions

export let responsevalueSlice = createSlice({
    name:"res_value",
    initialState:{res_value:""},
    reducers:{
        setRes_valuecheck:(state, action)=>{
            state.res_value = action.payload
        }
    }
});
export const {setRes_valuecheck} = responsevalueSlice.actions

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
        lecDetail_fileName : filenameSlice.reducer,
        lecDetail_fileSize :filesizeSlice.reducer,
        lecDetail_content : filecontentSlice.reducer,
        asscheck1 : asscheck1Slice.reducer,
        major : searchmajorSlice.reducer,
        lec : searchlecSlice.reducer,
        value : searchvalueSlice.reducer,
        res_lec : responselecSlice.reducer,
        res_prof : responseprofSlice.reducer,
        res_time : responsetimeSlice.reducer,
        Score_data : Score_data.reducer,
        res_class : responseclassSlice.reducer,
        res_value : responsevalueSlice.reducer
    }
});
export default store;
