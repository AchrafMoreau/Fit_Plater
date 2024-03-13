import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authAction";

const initialState = {
    loading: false,
    userInfo : {},
    userToken : {},
    error : null,
    success : false
}


const authSlice = createSlice({
    name: "auth", 
    initialState,
    reducers: {},
    extraReducers:(builder)=> {
        builder
        // register User ------------
            .addCase(registerUser.pending, (state)=>{
                state.loading = true
                state.error = null
            })
            .addCase(registerUser.fulfilled, (state, { payload })=>{
                state.loading = false
                state.success = true
            })
            .addCase(registerUser.rejected, (state, { payload })=>{
                state.loading = false;
                state.error = payload
            })
    }
})

export default authSlice.reducer;