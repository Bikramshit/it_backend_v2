import { createReducer } from "@reduxjs/toolkit";

export const ExtraMonthReducer = createReducer({}, {
    createExtraMonthRequest: state => {
        state.eloading = true;
      },
      createExtraMonthSuccess: (state, action) => {
        state.eloading = false;
        state.emessage = action.payload;
      },
      createExtraMonthFail: (state, action) => {
        state.eloading = false;
        state.eerror = action.payload;
      },
      allExtraMonthRequest: state => {
        state.loading = true;
      },
      allExtraMonthSuccess: (state, action) => {
        state.loading = false;
        state.ExtraMonths = action.payload;
      },
      allExtraMonthFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      singleExtraMonthRequest: state => {
        state.loading = true;
      },
      singleExtraMonthSuccess: (state, action) => {
        state.loading = false;
        state.ExtraMonths = action.payload;
      },
      singleExtraMonthFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      deleteExtraMonthRequest: state => {
        state.loading = true;
      },
      deleteExtraMonthSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      deleteExtraMonthFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      updateExtraMonthRequest: state => {
        state.loading = true;
      },
      updateExtraMonthSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      updateExtraMonthFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },

})