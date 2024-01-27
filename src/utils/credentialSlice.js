import { createSlice } from "@reduxjs/toolkit";


const credentialSlice = createSlice({
    name : "login",
    initialState :{
        loginDetails: []
    },

    reducers:{
        addLoginDetails: (state, action) =>{
            state.loginDetails[0] = action.payload;
        },
        clearLoginDetails: (state, action) =>{
            state.loginDetails = [];
        },
    },
});

export const { addLoginDetails, clearLoginDetails } = credentialSlice.actions;
export default credentialSlice.reducer;