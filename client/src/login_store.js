
import { configureStore, createSlice } from '@reduxjs/toolkit';

let User = createSlice({
    name: "User",
    initialState:{
        id: "",
        pw:""
    },
    reducers:{
        loginUser: (state, action) => {
            state.id = action.payload.id;
            state.pw = action.payload.pw;
            state.isLogin = true;
          },
      
          clearUser: (state) => {
           
            state.id = "";
            state.pw = "";
            state.isLogin = false;
          }

    }
})
export default configureStore({
    reducer:{
        User:User.reducer
    }
});


 export const{loginUser, clearUser}=User.actions;
// export default User.reducer;