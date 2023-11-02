import axios from "axios";
import {server} from "../Store/Store";



export const CreateNewForm = (name, assessment_year, financial_year, expiryDate, startingDate) => async dispatch => {
    try {
      dispatch({ type: 'createFormRequest' });
  
      const { data } = await axios.post(`${server}/form/new/`, {name, assessment_year, financial_year, expiryDate, startingDate}, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'createFormSuccess', payload: data.message });
     
    } catch (error) {
      dispatch({ type: 'createFormFail', payload: error.response.data.message });
    }
  }; 


  export const UpdateFormHandler = (id,name, assessment_year, financial_year,  expiryDate, startingDate) => async dispatch => {
    try {
      dispatch({ type: 'updateFormRequest' });
  
      const { data } = await axios.put(`${server}/form/${id}`, {name, assessment_year, financial_year, expiryDate, startingDate}, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'updateFormSuccess', payload: data.form });
     
    } catch (error) {
      dispatch({ type: 'updateFormFail', payload: error.response.data.message });
    }
  }; 

  export const GetSingleForm = (id) => async dispatch => {
    try {
      dispatch({ type: 'formDetailsRequest' });
  
      const { data } = await axios.get(`${server}/form/${id}`,  {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'formDetailsSuccess', payload: data.form });
      console.log(data);
    } catch (error) {
      console.log(error);
      return "Error";
      dispatch({ type: 'formDetailsFail', payload: error.response.data.message });
    }
  }; 

  export const getAllForm = () => async dispatch => {
    try {
      dispatch({ type: 'allFormRequest' });
  
      const { data } = await axios.get(`${server}/forms`,  {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'allFormSuccess', payload: data.forms });
     
    } catch (error) {
      dispatch({ type: 'allFormFail', payload: error.response.data.message });
    }
  }; 
  export const getAllActiveForm = () => async dispatch => {
    try {
      dispatch({ type: 'allActiveFormRequest' });
  
      const { data } = await axios.get(`${server}/admin/forms`,  {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'allActiveFormSuccess', payload: data.forms });
     
    } catch (error) {
      dispatch({ type: 'allActiveFormFail', payload: error.response.data.message });
    }
  }; 
  export const DeleteForm = (id) => async dispatch => {
    try {
      dispatch({ type: 'deleteFormRequest' });
  
      const { data } = await axios.delete(`${server}/form/${id}`,  {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'deleteFormSuccess', payload: data.message });
     
    } catch (error) {
      dispatch({ type: 'deleteFormFail', payload: error.response.data.message });
    }
  }; 


  export const getAllUserForm = () => async dispatch => {
    try {
      dispatch({ type: 'userAllFormRequest' });
  
      const { data } = await axios.get(`${server}/user/forms`,  {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'userAllFormSuccess', payload: data.forms });
     
    } catch (error) {
      dispatch({ type: 'userAllFormFail', payload: error.response.data.message });
    }
  }; 

  export const ActiveFormHandler = (id) => async dispatch => {
    try {
      dispatch({ type: 'activeFormRequest' });
  
      const { data } = await axios.put(`${server}/form/active/${id}`,{},  {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'activeFormSuccess', payload: data.form});
      console.log(data);
     return data.success;
    } catch (error) {
      dispatch({ type: 'activeFormFail', payload: error.response.data.message });
    }
  }; 


  export const getStatusResponse = () => async dispatch => {
    try {
      dispatch({ type: 'getStatusResponseRequest' });
  
      const { data } = await axios.get(`${server}/active/responses`,  {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'getStatusResponseSuccess', payload: data.responses});
      console.log(data);
      // console.log(data);
     return data.success;
    } catch (error) {
      dispatch({ type: 'getStatusResponseFail', payload: error.response.data.message });
    }
  }; 