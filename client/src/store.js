import { configureStore, createSlice } from "@reduxjs/toolkit";

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

export let lecNameSlice = createSlice({
    name:"lecture",
    initialState:{lecture:""},
    reducers:{
        setlecure:(state, action)=>{
            state.lecture = action.payload
        }
    }
});
export const {setlecure} = lecNameSlice.actions

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
        lecture : lecNameSlice.reducer,
        index : lecIndexSlice.reducer
    }

});
export default store;