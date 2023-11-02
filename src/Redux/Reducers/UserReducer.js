import { createReducer } from "@reduxjs/toolkit"


export const userReducer = createReducer({}, {
        loginRequest:(state)=>{
            state.loading=true;
        },
        loginSuccess:(state, action)=>{
            state.loading=false;
            // state.isAuthenticated=true;
            state.user=action.payload.userId;
            state.message=action.payload.message;
        },
        loginFail:(state, action)=>{
            state.loading = false;
            state.isAuthenticated=false;
            state.error = action.payload;
        },
        resendRequest:(state)=>{
          state.loading=true;
      },
      resendsuccess:(state, action)=>{
          state.loading=false;
          // state.isAuthenticated=true;
          state.user=action.payload.userId;
          state.message=action.payload.message;
      },
      resendFail:(state, action)=>{
          state.loading = false;
          state.isAuthenticated=false;
          state.error = action.payload;
      },
        verifyEmailRequest:(state)=>{
          state.loading=true;
      },
      verifyEmailSuccess:(state, action)=>{
          state.loading=false;
          state.isAuthenticated=true;
          state.user=action.payload.user;
          state.message=action.payload.message;
      },
      verifyEmailFail:(state, action)=>{
          state.loading = false;
          state.isAuthenticated=false;
          state.error = action.payload;
      },
      resetPasswordRequest: state => {
        state.loading = true;
      },
      resetPasswordSuccess: (state, action) => {       
        state.loading=false;
          // state.isAuthenticated=true;
          // state.user=action.payload.user;
          state.message=action.payload;
      },
      resetPasswordFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      forgetPasswordRequest:(state)=>{
        state.loading=true;
      },
      forgetPasswordSuccess:(state, action)=>{
        state.loading = false;
        state.message = action.payload;
      },
      forgetPasswordFail:(state, action)=>{
        state.loading = false;
        state.isAuthenticated=false;
        state.error = action.payload;
    },

        registerRequest: state => {
            state.loading = true;
          },
          registerSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.isRegister = true;
            state.isAuthenticated =false;
            state.message = action.payload.message;
          },
          registerFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.isRegister = false
            state.error = action.payload;
          },
      
          logoutRequest: state => {
            state.loading = true;
          },
          logoutSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.message = action.payload;
          },
          logoutFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action.payload;
          },
      
          loadUserRequest: state => {
            state.loading = true;
          },
          loadUserSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
          },
          loadUserFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
          },
          
            sendMailRequest: state => {
              state.loading = true;
            },
            sendMailSuccess: (state, action) => {
              state.loading = false;
              state.message = action.payload;
            },
            sendMailFail: (state, action) => {
              state.loading = false;
              state.error = action.payload;
            },
        clearError:(state)=>{
            state.error=null;
        },
        clearMessage:(state)=>{
            state.message=null;
        }


});


export const profileReducer = createReducer(
    {},
    {
      updateProfileRequest: state => {
        state.loading = true;
      },
      updateProfileSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      updateProfileFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  
  
      changePasswordRequest: state => {
        state.loading = true;
      },
      changePasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      changePasswordFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  
      // forgetPasswordRequest: state => {
      //   state.loading = true;
      // },
      // forgetPasswordSuccess: (state, action) => {
      //   state.loading = false;
      //   state.message = action.payload;
      // },
      // forgetPasswordFail: (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload;
      // },
  
     
      deleteUserRequest: state => {
        state.loading = true;
      },
      deleteUserSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      deleteUserFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
     

      clearError: state => {
        state.error = null;
      },
      clearMessage: state => {
        state.message = null;
      },
    }
  );