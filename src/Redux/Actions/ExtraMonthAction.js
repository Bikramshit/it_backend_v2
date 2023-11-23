import axios from "axios";
import { server } from "../Store/Store";


 
export const CreateExtraMonths = (id, month, value, formId, responseId) => async dispatch => {
    try {
      dispatch({ type: 'createExtraMonthRequest' });
  
      const { data } = await axios.post(`${server}/extra-months/new`, {id, month, value, formId, responseId }, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'createExtraMonthSuccess', payload: data.message });
      console.log(data);
     
    } catch (error) {
      dispatch({ type: 'createExtraMonthFail', payload: error.response.data.message });
    }
}; 

export const getExtraMonthsByMonth = (id, month) => async dispatch => {
    try {
      dispatch({ type: 'singleExtraMonthRequest' });
  
      const { data } = await axios.get(`${server}/extramonth/${id}/${month}`, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'singleExtraMonthSuccess', payload: data.extraMonths });
     console.log(data);
    } catch (error) {
      dispatch({ type: 'singleExtraMonthFail', payload: error.response.data.message });
    }
}; 

export const UpdateExtraMonthsByMonth = (id, month, value, formId, responseId) => async dispatch => {
    try {
      dispatch({ type: 'updateExtraMonthRequest' });
  
      const { data } = await axios.put(`${server}/extra-month/${id}`, { month}, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'updateExtraMonthSuccess', payload: data.message });
     
    } catch (error) {
      dispatch({ type: 'updateExtraMonthFail', payload: error.response.data.message });
    }
}; 

export const deleteExtraMonths = (id) => async dispatch => {
    try {
      dispatch({ type: 'deleteExtraMonthRequest' });
  
      const { data } = await axios.delete(`${server}/extramonth/${id}`, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'deleteExtraMonthSuccess', payload: data.message });
      console.log(data);
     
    } catch (error) {
      dispatch({ type: 'deleteExtraMonthFail', payload: error.response.data.message });
    }
}; 

export const GetAllExtraByForm = (id) => async dispatch => {
    try {
      dispatch({ type: 'allExtraMonthRequest' });
  
      const { data } = await axios.get(`${server}/all-extra-months/${id}`, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'allExtraMonthSuccess', payload: data.extraMonths });
      console.log(data.extraMonths);
     
    } catch (error) {
      dispatch({ type: 'allExtraMonthFail', payload: error.response.data.message });
    }
}; 