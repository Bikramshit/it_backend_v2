import { createReducer } from "@reduxjs/toolkit";


export const FormReducer = createReducer({}, {
    createFormRequest: state => {
        state.loading = true;
      },
      createFormSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      createFormFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      updateFormRequest: state => {
        state.loading = true;
      },
      updateFormSuccess: (state, action) => {
        state.loading = false;
        state.form = action.payload;
      },
      updateFormFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      deleteFormRequest: state => {
        state.loading = true;
      },
      deleteFormSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      deleteFormFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      allFormRequest: state => {
        state.loading = true;
      },
      allFormSuccess: (state, action) => {
        state.loading = false;
        state.forms = action.payload;
      },
      allFormFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      allActiveFormRequest: state => {
        state.loading = true;
      },
      allActiveFormSuccess: (state, action) => {
        state.loading = false;
        state.forms = action.payload;
      },
      allActiveFormFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      activeFormRequest: state => {
        state.loading = true;
      },
      activeFormSuccess: (state, action) => {
        state.loading = false;
        state.form = action.payload;
      },
      activeFormFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      userAllFormRequest: state => {
        state.loading = true;
      },
      userAllFormSuccess: (state, action) => {
        state.loading = false;
        state.forms = action.payload;
      },
      userAllFormFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      formDetailsRequest: state => {
        state.loading = true;
      },
      formDetailsSuccess: (state, action) => {
        state.loading = false;
        state.form = action.payload;
      },
      formDetailsFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },

      
})