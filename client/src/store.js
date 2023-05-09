import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : '임태헌',
    reducers : {
        changUser(state, action) {
            return action.payload
        }
    }
})
export let { changUser } = user.actions


export default configureStore({
    reducer: {
        user : user.reducer
    }

})