import {configureStore} from "@reduxjs/toolkit"
import { profileReducer, userReducer } from "../Reducers/UserReducer";
import { AdminReducer } from "../Reducers/AdminReducer";
import { FormReducer } from "../Reducers/FromReducer";
import { responsesReducer } from "../Reducers/ResponsesReducer";
import { ExtraMonthReducer } from "../Reducers/ExtraMonthReducer";

export const server =  process.env.REACT_APP_SERVER;
export const Store = configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer,
        admin:AdminReducer,
        form:FormReducer,
        response:responsesReducer,
        extramonth:ExtraMonthReducer
    }
})