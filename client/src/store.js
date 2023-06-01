import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : "user",
    initialState : "임태헌",
    reducers : {
        changUser(state, action) {
            return action.payload
        }
    }
});
export let { changUser } = user.actions

export let signUpSlice =createSlice({
    name:"signUp",
    initialState:{name:""},
    reducers:{
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

const store = configureStore({
    reducer: {
        user : user.reducer,
        signUp : signUpSlice.reducer,
        lecture : lecNameSlice.reducer
    }

});
export default store;