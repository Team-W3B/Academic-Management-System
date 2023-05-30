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

const store = configureStore({
    reducer: {
        user : user.reducer,
        signUp : signUpSlice.reducer
    }

});
export default store;