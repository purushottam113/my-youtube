import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import credentialSlice from "./credentialSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        chat : chatSlice,
        login : credentialSlice,
    },
})

export default store;