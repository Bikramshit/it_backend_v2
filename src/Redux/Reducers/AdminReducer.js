import { createReducer } from "@reduxjs/toolkit";



export const AdminReducer = createReducer({}, {
    createUserRequest: state => {
        state.loading = true;
      },
      createUserSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      createUserFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      allUserRequest: state => {
        state.loading = true;
      },
      allUserSuccess: (state, action) => {
        state.loading = false;
        state.users = action.payload;
      },
      allUserFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
     
      updateResponseAdminRequest: state => {
        state.loading = true;
      },
      updateResponseAdminSuccess: (state, action) => {
        state.loading = false;
        state.response = action.payload;
      },
      updateResponseAdminFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      userDetailsRequest:(state)=> {
        state.loading = true;
      },
      userDetailsSuccess:(state, action)=> {
        state.loading = false;
        state.user = action.payload;
      },
      userDetailsFail:(state, action)=> {
        state.loading = false;
        state.error = action.payload;

      },
      clearError: state => {
        state.error = null;
      },
      clearMessage: state => {
        state.message = null;
      },
      

})