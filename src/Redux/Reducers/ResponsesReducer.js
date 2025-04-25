import { createReducer } from "@reduxjs/toolkit";


export const responsesReducer = createReducer({}, {
      createResponseRequest: state => {
        state.loading = true;
      },
      createResponseSuccess: (state, action) => {
        state.loading = false;
        state.response = action.payload.response;
        state.response.message = action.payload.message;
      },
      createResponseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      updateResponseRequest: state => {
        state.loading = true;
      },
      updateResponseSuccess: (state, action) => {
        state.loading = false;
        state.response = action.payload;
      },
      updateResponseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      deleteResponseRequest: state => {
        state.loading = true;
      },
      deleteResponseSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      deleteResponseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      allResponseRequest: state => {
        state.loading = true;
      },
      allResponseSuccess: (state, action) => {
        state.loading = false;
        state.responses = action.payload;
      },
      allResponseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      GetAllPendingResponseRequest: state => {
        state.loading = true;
      },
      GetAllPendingResponseSuccess: (state, action) => {
        state.loading = false;
        state.responses = action.payload.responses;
        state.count = action.payload.count;
      },
      GetAllPendingResponseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      myResponseRequest: state => {
        state.loading = true;
      },
      myResponseSuccess: (state, action) => {
        state.loading = false;
        state.responses = action.payload;
      },
      myResponseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      submitResponseRequest: state => {
        state.loading = true;
      },
      submitResponseSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      submitResponseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      approvedResponseRequest: state => {
        state.loading = true;
      },
      approvedResponseSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      approvedResponseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      ResponseDetailsRequest: state => {
        state.loading = true;
      },
      ResponseDetailsSuccess: (state, action) => {
        state.loading = false;
        state.response = action.payload;
      },
      ResponseDetailsFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      ResponseByFormRequest: state => {
        state.loading = true;
      },
      ResponseByFormSuccess: (state, action) => {
        state.loading = false;
        state.responses = action.payload;
      },
      ResponseByFormFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      documentUpdateRequest: state => {
        state.loading = true;
      },
      documentUpdateSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload
      },
      documentUpdateFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      getStatusResponseRequest: state => {
        state.rloading = true;
      },
      getStatusResponseSuccess: (state, action) => {
        state.rloading = false;
        state.responses = action.payload;
      },
      getStatusResponseFail: (state, action) => {
        state.rloading = false;
        state.error = action.payload;
      },
      FileUploadedRequest: state => {
        state.loading = true;
      },
      FileUploadedSuccess: (state, action) => {
        state.loading = false;
        state.response = action.payload.response;
        state.message = action.payload.message;
      },
      FileUploadedFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      clearError:(state)=>{
        state.error=null;
    },
    clearMessage:(state)=>{
        state.message=null;
    },

    formReSubmitRequest: state => {
      state.loading = true;
    },
    formReSubmitSuccess: (state, action) => {
      state.loading = false;
      state.response = action.payload.response;
      state.message = action.payload.message;
    },
    formReSubmitFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },





})