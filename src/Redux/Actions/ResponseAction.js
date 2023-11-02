import axios from "axios";
import {server} from "../Store/Store";

export const StartResponse = (id,name, pan, aadhaar, email, phone, department, designation, category, dob) => async dispatch => {
    try {
      dispatch({ type: 'createResponseRequest' });
  
      const { data } = await axios.post(`${server}/new/response/${id}`, {name, pan, aadhaar, email, phone, department, designation, category, dob}, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'createResponseSuccess', payload: data });
      return data;
     
    } catch (error) {
      dispatch({ type: 'createResponseFail', payload: error.response.data.message });
    }
  }; 
  export const GetAllPendingResponse = () => async dispatch => {
    try {
      dispatch({ type: 'GetAllPendingResponseRequest' });
  
      const { data } = await axios.get(`${server}/responses/pending`, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'GetAllPendingResponseSuccess', payload: data });
     
      
      // return data.success;
    } catch (error) {
      
      dispatch({ type: 'GetAllPendingResponseFail', payload: error.response.data.message });
    }
  }; 

  export const GetAllResponseByForm = (id) => async dispatch => {
    try {
      dispatch({ type: 'ResponseByFormRequest' });
  
      const { data } = await axios.get(`${server}/form/response/${id}`, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'ResponseByFormSuccess', payload: data.responses });
     
      
      // return data.success;
    } catch (error) {
      dispatch({ type: 'ResponseByFormFail', payload: error.response.data.message });
    }
  }; 

  export const RegimeHandler = (id, currentState) => async dispatch => {
    try {
      dispatch({ type: 'updateResponseRequest' });
  
      const { data } = await axios.put(`${server}/response/${id}`,{currentState}, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'updateResponseSuccess', payload: data.response });
      return data.success;
    } catch (error) {
      dispatch({ type: 'updateResponseFail', payload: error.response.data.message });
    }
  }; 

  export const FeedbackHandler = (id, currentState, quality, design, tax_computation, time_consuming, better_previous, user_friendly, need_improvement,feedback ) => async dispatch => {
    try {
      dispatch({ type: 'updateResponseRequest' });
  
      const { data } = await axios.put(`${server}/response/${id}`,{currentState,  quality, design, tax_computation, time_consuming, better_previous, user_friendly, need_improvement,feedback}, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'updateResponseSuccess', payload: data.response });
      console.log(data);
      return data.success;
      
    } catch (error) {
      dispatch({ type: 'updateResponseFail', payload: error.response.data.message });
    }
  }; 

  export const SubmitResponse = (id) => async dispatch => {
    try {
      dispatch({ type: 'submitResponseRequest' });
  
      const { data } = await axios.put(`${server}/response/submit/${id}`,{}, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'submitResponseSuccess', payload: data.message });
     
      
      return data.success;
    } catch (error) {
      
      dispatch({ type: 'submitResponseFail', payload: error.response.data.message });
    }
  }; 

  export const FileUploadedHandler = (id, formData) => async dispatch => {
    try {
      dispatch({ type: 'FileUploadedRequest' });
  
      const { data } = await axios.put(`${server}/response/upload/${id}`, formData , {
        headers: {
          'Content-type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      dispatch({ type: 'FileUploadedSuccess', payload: data });
     console.log(data);
    } catch (error) {
      
      dispatch({ type: 'FileUploadedFail', payload: error.response.data.message });
    }
  }; 

  export const ApprovedResponse = (id, remark) => async dispatch => {
    try {
      dispatch({ type: 'approvedResponseRequest' });
  
      const { data } = await axios.put(`${server}/approved/response/${id}`,{remark}, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'approvedResponseSuccess', payload: data.message });
     
      
      return data.success;
    } catch (error) {
      
      dispatch({ type: 'approvedResponseFail', payload: error.response.data.message });
    }
  }; 

  export const DocumentStatusUpdate = (id, documentStatus) => async dispatch => {
    try {
      dispatch({ type: 'documentUpdateRequest' });
  
      const { data } = await axios.put(`${server}/document/status/${id}`,{documentStatus}, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'documentUpdateSuccess', payload: data.message });
     
      
      return data.success;
    } catch (error) {
      
      dispatch({ type: 'documentUpdateFail', payload: error.response.data.message });
    }
  }; 


  export const DeleteResponse = (id) => async dispatch => {
    try {
      dispatch({ type: 'deleteResponseRequest' });
  
      const { data } = await axios.delete(`${server}/response/${id}`, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'deleteResponseSuccess', payload: data.message });
     
    } catch (error) {
      dispatch({ type: 'deleteResponseFail', payload: error.response.data.message });
    }
  }; 

  export const GetSingleResponse = (id) => async dispatch => {
    try {
      dispatch({ type: 'ResponseDetailsRequest' });
  
      const { data } = await axios.get(`${server}/response/${id}`,  {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'ResponseDetailsSuccess', payload: data.response });
      
     
    } catch (error) {
      dispatch({ type: 'ResponseDetailsFail', payload: error.response.data.message });
    }
  }; 

  export const GetAllResponses = () => async dispatch => {
    try {
      dispatch({ type: 'allResponseRequest' });
  
      const { data } = await axios.get(`${server}/responses`,  {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'allResponseSuccess', payload: data.responses });
     
    } catch (error) {
      dispatch({ type: 'allResponseFail', payload: error.response.data.message });
    }
  };

  export const getMyResponses = () => async dispatch => {
    try {
      dispatch({ type: 'myResponseRequest' });
  
      const { data } = await axios.get(`${server}/myresponses`,  {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'myResponseSuccess', payload: data.responses });
     
    } catch (error) {
      dispatch({ type: 'myResponseFail', payload: error.response.data.message });
    }
  }; 

  export const GetAllResponsesByForm = (id) => async dispatch => {
    try {
      dispatch({ type: 'allFormRequest' });
  
      const { data } = await axios.get(`${server}/form/response/${id}`,  {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'allFormSuccess', payload: data.responses });
     
    } catch (error) {
      dispatch({ type: 'allFormFail', payload: error.response.data.message });
    }
  }; 



  export const SalaryHandler = (id, 
    currentState,
    contactual,
    basic_s1,
    basic_s2,
    basic_s3,
    basic_s4,
    basic_s5,
    basic_s6,
    basic_s7,
    basic_s8,
    basic_s9,
    basic_s10,
    basic_s11,
    basic_s12,
    basic_s13,
    rate_s1,
    rate_s2,
    rate_s3,
    rate_s4,
    rate_s5,
    rate_s6,
    rate_s7,
    rate_s8,
    rate_s9,
    rate_s10,
    rate_s11,
    rate_s12,
    rate_s13,
    da_s1,
    da_s2,
    da_s3,
    da_s4,
    da_s5,
    da_s6,
    da_s7,
    da_s8,
    da_s9,
    da_s10,
    da_s11,
    da_s12,
    da_s13,
    hra_s1,
    hra_s2,
    hra_s3,
    hra_s4,
    hra_s5,
    hra_s6,
    hra_s7,
    hra_s8,
    hra_s9,
    hra_s10,
    hra_s11,
    hra_s12,
    hra_s13,
    ma_s1,
    ma_s2,
    ma_s3,
    ma_s4,
    ma_s5,
    ma_s6,
    ma_s7,
    ma_s8,
    ma_s9,
    ma_s10,
    ma_s11,
    ma_s12,
    ma_s13  ,
    adjust_s1,
    adjust_s2,
    adjust_s3,
    adjust_s4,
    adjust_s5,
    adjust_s6,
    adjust_s7,
    adjust_s8,
    adjust_s9,
    adjust_s10,
    adjust_s11,
    adjust_s12,
    adjust_s13,
    gross_s1,
    gross_s2,
    gross_s3,
    gross_s4,
    gross_s5,
    gross_s6,
    gross_s7,
    gross_s8,
    gross_s9,
    gross_s10,
    gross_s11,
    gross_s12,
    gross_s13,
    ptax_s1,
    ptax_s2,
    ptax_s3,
    ptax_s4,
    ptax_s5,
    ptax_s6,
    ptax_s7,
    ptax_s8,
    ptax_s9,
    ptax_s10,
    ptax_s11,
    ptax_s12,
    ptax_s13,
    aupf_s1,
    aupf_s2,
    aupf_s3,
    aupf_s4,
    aupf_s5,
    aupf_s6,
    aupf_s7,
    aupf_s8,
    aupf_s9,
    aupf_s10,
    aupf_s11,
    aupf_s12,
    aupf_s13,
    sf_s1,
    sf_s2,
    sf_s3,
    sf_s4,
    sf_s5,
    sf_s6,
    sf_s7,
    sf_s8,
    sf_s9,
    sf_s10,
    sf_s11,
    sf_s12,
    sf_s13,
    income_s1,
    income_s2,
    income_s3,
    income_s4,
    income_s5,
    income_s6,
    income_s7,
    income_s8,
    income_s9,
    income_s10,
    income_s11,
    income_s12,
    income_s13    ,
    netsal_s1,
    netsal_s2,
    netsal_s3,
    netsal_s4,
    netsal_s5,
    netsal_s6,
    netsal_s7,
    netsal_s8,
    netsal_s9,
    netsal_s10,
    netsal_s11,
    netsal_s12,
    netsal_s13,
    having_arrear_s,
    gas_s,
    lpt_s,
    laupf_s,
    ltds_s,
    nas_s,

    
    ) => async dispatch => {
    try {
      dispatch({ type: 'updateResponseRequest' });
  
      const { data } = await axios.put(`${server}/response/${id}`, {
        currentState,
        contactual,
        basic_s1,
        basic_s2,
        basic_s3,
        basic_s4,
        basic_s5,
        basic_s6,
        basic_s7,
        basic_s8,
        basic_s9,
        basic_s10,
        basic_s11,
        basic_s12,
        basic_s13,
        rate_s1,
        rate_s2,
        rate_s3,
        rate_s4,
        rate_s5,
        rate_s6,
        rate_s7,
        rate_s8,
        rate_s9,
        rate_s10,
        rate_s11,
        rate_s12,
        rate_s13,
        da_s1,
        da_s2,
        da_s3,
        da_s4,
        da_s5,
        da_s6,
        da_s7,
        da_s8,
        da_s9,
        da_s10,
        da_s11,
        da_s12,
        da_s13,
        hra_s1,
        hra_s2,
        hra_s3,
        hra_s4,
        hra_s5,
        hra_s6,
        hra_s7,
        hra_s8,
        hra_s9,
        hra_s10,
        hra_s11,
        hra_s12,
        hra_s13,
        ma_s1,
        ma_s2,
        ma_s3,
        ma_s4,
        ma_s5,
        ma_s6,
        ma_s7,
        ma_s8,
        ma_s9,
        ma_s10,
        ma_s11,
        ma_s12,
        ma_s13  ,
        adjust_s1,
        adjust_s2,
        adjust_s3,
        adjust_s4,
        adjust_s5,
        adjust_s6,
        adjust_s7,
        adjust_s8,
        adjust_s9,
        adjust_s10,
        adjust_s11,
        adjust_s12,
        adjust_s13,
        gross_s1,
        gross_s2,
        gross_s3,
        gross_s4,
        gross_s5,
        gross_s6,
        gross_s7,
        gross_s8,
        gross_s9,
        gross_s10,
        gross_s11,
        gross_s12,
        gross_s13,
        ptax_s1,
        ptax_s2,
        ptax_s3,
        ptax_s4,
        ptax_s5,
        ptax_s6,
        ptax_s7,
        ptax_s8,
        ptax_s9,
        ptax_s10,
        ptax_s11,
        ptax_s12,
        ptax_s13,
        aupf_s1,
        aupf_s2,
        aupf_s3,
        aupf_s4,
        aupf_s5,
        aupf_s6,
        aupf_s7,
        aupf_s8,
        aupf_s9,
        aupf_s10,
        aupf_s11,
        aupf_s12,
        aupf_s13,
        sf_s1,
        sf_s2,
        sf_s3,
        sf_s4,
        sf_s5,
        sf_s6,
        sf_s7,
        sf_s8,
        sf_s9,
        sf_s10,
        sf_s11,
        sf_s12,
        sf_s13,
        income_s1,
        income_s2,
        income_s3,
        income_s4,
        income_s5,
        income_s6,
        income_s7,
        income_s8,
        income_s9,
        income_s10,
        income_s11,
        income_s12,
        income_s13,
        netsal_s1,
        netsal_s2,
        netsal_s3,
        netsal_s4,
        netsal_s5,
        netsal_s6,
        netsal_s7,
        netsal_s8,
        netsal_s9,
        netsal_s10,
        netsal_s11,
        netsal_s12,
        netsal_s13,
        having_arrear_s,
        gas_s,
        lpt_s,
        laupf_s,
        ltds_s,
        nas_s,
      }, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'updateResponseSuccess', payload: data.response });
      
     return data.success;
    } catch (error) {
      dispatch({ type: 'updateResponseFail', payload: error.response.data.message });
    }
  }; 

export const Form12BHanlder = (id,
  currentState,
  basic_f1,
  basic_f2,
  basic_f3,
  basic_f4,
  basic_f5,
  basic_f6,
  basic_f7,
  basic_f8,
  basic_f9,
  basic_f10,
  basic_f11,
  basic_f12,
  basic_f13,
  rate_f1,
  rate_f2,
  rate_f3,
  rate_f4,
  rate_f5,
  rate_f6,
  rate_f7,
  rate_f8,
  rate_f9,
  rate_f10,
  rate_f11,
  rate_f12,
  rate_f13,
  da_f1,
  da_f2,
  da_f3,
  da_f4,
  da_f5,
  da_f6,
  da_f7,
  da_f8,
  da_f9,
  da_f10,
  da_f11,
  da_f12,
  da_f13,
  hra_f1,
  hra_f2,
  hra_f3,
  hra_f4,
  hra_f5,
  hra_f6,
  hra_f7,
  hra_f8,
  hra_f9,
  hra_f10,
  hra_f11,
  hra_f12,
  hra_f13,
  ma_f1,
  ma_f2,
  ma_f3,
  ma_f4,
  ma_f5,
  ma_f6,
  ma_f7,
  ma_f8,
  ma_f9,
  ma_f10,
  ma_f11,
  ma_f12,
  ma_f13  ,
  gross_f1,
  gross_f2,
  gross_f3,
  gross_f4,
  gross_f5,
  gross_f6,
  gross_f7,
  gross_f8,
  gross_f9,
  gross_f10,
  gross_f11,
  gross_f12,
  gross_f13,
  ptax_f1,
  ptax_f2,
  ptax_f3,
  ptax_f4,
  ptax_f5,
  ptax_f6,
  ptax_f7,
  ptax_f8,
  ptax_f9,
  ptax_f10,
  ptax_f11,
  ptax_f12,
  ptax_f13,
  aupf_f1,
  aupf_f2,
  aupf_f3,
  aupf_f4,
  aupf_f5,
  aupf_f6,
  aupf_f7,
  aupf_f8,
  aupf_f9,
  aupf_f10,
  aupf_f11,
  aupf_f12,
  aupf_f13,
  sf_f1,
  sf_f2,
  sf_f3,
  sf_f4,
  sf_f5,
  sf_f6,
  sf_f7,
  sf_f8,
  sf_f9,
  sf_f10,
  sf_f11,
  sf_f12,
  sf_f13,
  income_f1,
  income_f2,
  income_f3,
  income_f4,
  income_f5,
  income_f6,
  income_f7,
  income_f8,
  income_f9,
  income_f10,
  income_f11,
  income_f12,
  income_f13,
  netsal_f1,
  netsal_f2,
  netsal_f3,
  netsal_f4,
  netsal_f5,
  netsal_f6,
  netsal_f7,
  netsal_f8,
  netsal_f9,
  netsal_f10,
  netsal_f11,
  netsal_f12,
  netsal_f13,
  having_arrear_f,
  gas_f,
  lpt_f,
  laupf_f,
  ltds_f,
  nas_f,
  
  
  ) => async dispatch => {
    try {
      dispatch({ type: 'updateResponseRequest' });
  
      const { data } = await axios.put(`${server}/response/${id}`, {
        currentState,
        basic_f1,
        basic_f2,
        basic_f3,
        basic_f4,
        basic_f5,
        basic_f6,
        basic_f7,
        basic_f8,
        basic_f9,
        basic_f10,
        basic_f11,
        basic_f12,
        basic_f13,
        rate_f1,
        rate_f2,
        rate_f3,
        rate_f4,
        rate_f5,
        rate_f6,
        rate_f7,
        rate_f8,
        rate_f9,
        rate_f10,
        rate_f11,
        rate_f12,
        rate_f13,
        da_f1,
        da_f2,
        da_f3,
        da_f4,
        da_f5,
        da_f6,
        da_f7,
        da_f8,
        da_f9,
        da_f10,
        da_f11,
        da_f12,
        da_f13,
        hra_f1,
        hra_f2,
        hra_f3,
        hra_f4,
        hra_f5,
        hra_f6,
        hra_f7,
        hra_f8,
        hra_f9,
        hra_f10,
        hra_f11,
        hra_f12,
        hra_f13,
        ma_f1,
        ma_f2,
        ma_f3,
        ma_f4,
        ma_f5,
        ma_f6,
        ma_f7,
        ma_f8,
        ma_f9,
        ma_f10,
        ma_f11,
        ma_f12,
        ma_f13  ,
        gross_f1,
        gross_f2,
        gross_f3,
        gross_f4,
        gross_f5,
        gross_f6,
        gross_f7,
        gross_f8,
        gross_f9,
        gross_f10,
        gross_f11,
        gross_f12,
        gross_f13,
        ptax_f1,
        ptax_f2,
        ptax_f3,
        ptax_f4,
        ptax_f5,
        ptax_f6,
        ptax_f7,
        ptax_f8,
        ptax_f9,
        ptax_f10,
        ptax_f11,
        ptax_f12,
        ptax_f13,
        aupf_f1,
        aupf_f2,
        aupf_f3,
        aupf_f4,
        aupf_f5,
        aupf_f6,
        aupf_f7,
        aupf_f8,
        aupf_f9,
        aupf_f10,
        aupf_f11,
        aupf_f12,
        aupf_f13,
        sf_f1,
        sf_f2,
        sf_f3,
        sf_f4,
        sf_f5,
        sf_f6,
        sf_f7,
        sf_f8,
        sf_f9,
        sf_f10,
        sf_f11,
        sf_f12,
        sf_f13,
        income_f1,
        income_f2,
        income_f3,
        income_f4,
        income_f5,
        income_f6,
        income_f7,
        income_f8,
        income_f9,
        income_f10,
        income_f11,
        income_f12,
        income_f13,
        netsal_f1,
        netsal_f2,
        netsal_f3,
        netsal_f4,
        netsal_f5,
        netsal_f6,
        netsal_f7,
        netsal_f8,
        netsal_f9,
        netsal_f10,
        netsal_f11,
        netsal_f12,
        netsal_f13,
        having_arrear_f,
        gas_f,
        lpt_f,
        laupf_f,
        ltds_f,
        nas_f,


      }, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'updateResponseSuccess', payload: data.response });
      return data.success;
     
    } catch (error) {
      dispatch({ type: 'updateResponseFail', payload: error.response.data.message });
    }
  }; 


  export const ChapterHandler = (id,
    currentState,
    aupf_c,
      epf_c,
      sf_c,
      lip_c,
      ppf_c,
      ssy_c,
      cs_c,
      phb_c,
      inp_n1,
      inp_n2,
      inp_n3,
      input1,
      input2,
      input3 ,
      deductible_80c,
      deductible_80c2,
      mii1_c,
      mii2_c,
      mii3_c,
      mis1_c,
      mis2_c,
      mis3_c   ,
      deductible_80d,
      disability_c,
      disability_c2,
      iel_c,
      nps_c,
      ihbl_c,
      ihbl_c2,
      isb_c,
      isb_c2,
      donation_c,
      electric_c,
      ex_sec,
      ex_i,
      ex_t,
      chapter_total
    ) => async dispatch => {
      try {
        dispatch({ type: 'updateResponseRequest' });
    
        const { data } = await axios.put(`${server}/response/${id}`, {
          currentState,
          aupf_c,
            epf_c,
            sf_c,
            lip_c,
            ppf_c,
            ssy_c,
            cs_c,
            phb_c,
            inp_n1,
            inp_n2,
            inp_n3,
            input1,
            input2,
            input3 ,
            deductible_80c,
            deductible_80c2,
            mii1_c,
            mii2_c,
            mii3_c,
            mis1_c,
            mis2_c,
            mis3_c   ,
            deductible_80d,
            disability_c,
            disability_c2,
            iel_c,
            nps_c,
            ihbl_c,
            ihbl_c2,
            isb_c,
            isb_c2,
            donation_c,
            electric_c,
            ex_sec,
            ex_i,
            ex_t,
            chapter_total
  
        }, {
          headers: {
            'Content-type': 'application/json',
          },
          withCredentials: true,
        });
        dispatch({ type: 'updateResponseSuccess', payload: data.response });
        
        return data.success;
       
      } catch (error) {
        
        dispatch({ type: 'updateResponseFail', payload: error.response.data.message });
      }
    }; 



  export const HraHandler = (id,currentState,
    rent_e,
    rent_n,
    r_ten_e,
    r_ten_n,
    living_m_e,
    living_m_n,
    non_living_m_e,
    non_living_m_n,
    actual_hra_e,
    actual_hra_n,
    hra_exempt_e,
    hra_exempt_n,
    live_in_e,
    live_in_n,
    exceed_lakh,
    pan1,
    pan2,
    pan3,
    pan4,
    name1,
    name2,
    name3,
    name4,
    count,
    nol,


    
    
    ) => async dispatch => {
    try {
      dispatch({ type: 'updateResponseRequest' });
  
      const { data } = await axios.put(`${server}/response/${id}`, {currentState,
        rent_e,
        rent_n,
        r_ten_e,
        r_ten_n,
        living_m_e,
        living_m_n,
        non_living_m_e,
        non_living_m_n,
        actual_hra_e,
        actual_hra_n,
        hra_exempt_e,
        hra_exempt_n,
        live_in_e,
        live_in_n,
        exceed_lakh,
        pan1,
        pan2,
        pan3,
        pan4,
        name1,
        name2,
        name3,
        name4,
        count,
        nol,
      
      
      }, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'updateResponseSuccess', payload: data.response });
     return data.success;
    } catch (error) {
      dispatch({ type: 'updateResponseFail', payload: error.response.data.message });
    }
  }; 

  export const ITHandler = (id, currentState,
    dor,
    it_status,
    gross_it_o,
    gross_it_n,
    bonus_it,
    bonus_it_o,
    bonus_it_n,
    hono_it,
    honoo_it,
    honoo_it2,
    current_it_o,
    current_it_n,
    previous_it_o,
    previous_it_n,
    pension_it_o,
    pension_it_n,
    cvp_it_o,
    cvp_it_n,
    ten_a__it_o,
    ten_a__it_n,
    thirteen_a__it_o,
    thirteen_a__it_n,
    gsp_it_o,
    gsp_it_n,
    c_employer_it,
    p_employer_it,
    employer_it_o,
    employer_it_n,
    s_deduction_it_o,
    s_deduction_it_n,
    net_sp_it_o,
    net_sp_it_n,
    interest_hbl_it,
    interest_hbl_it_o,
    interest_hbl_it_n,
    savings_interest_it,
    other_income_it,
    income_it_o,
    income_it_n,
    gross_income_it_o,
    gross_income_it_n,
    chapter_total,
    total_deduction_it_n,
    net_income_it_o,
    net_income_it_n,
    tax_income_it_o,
    tax_income_it_n,
    tax_pay_it_o,
    tax_pay_it_n,
    less_it_o,
    less_it_n,
    tar_it_o,
    tar_it_n,
    opting_for,
    tax_per_inp,
    tax_per_it,
    add_four_it,
    gtax_payable_it,
    less_relief_it,
    ntax_payable_it,
    td_sal_it,
    tex_payable_it,
    tax_refund,
    hbl_taken_fy,
    ihbl_c,
    ihbl_c2,
    isb_c,
    isb_c2

    ) => async dispatch => {
    try {
      dispatch({ type: 'updateResponseRequest' });
  
      const { data } = await axios.put(`${server}/response/${id}`, {currentState,
        dor,
        it_status,
        gross_it_o,
        gross_it_n,
        bonus_it,
        bonus_it_o,
        bonus_it_n,
        hono_it,
        honoo_it,
        honoo_it2,
        current_it_o,
        current_it_n,
        previous_it_o,
        previous_it_n,
        pension_it_o,
        pension_it_n,
        cvp_it_o,
        cvp_it_n,
        ten_a__it_o,
        ten_a__it_n,
        thirteen_a__it_o,
        thirteen_a__it_n,
        gsp_it_o,
        gsp_it_n,
        c_employer_it,
        p_employer_it,
        employer_it_o,
        employer_it_n,
        s_deduction_it_o,
        s_deduction_it_n,
        net_sp_it_o,
        net_sp_it_n,
        interest_hbl_it,
        interest_hbl_it_o,
        interest_hbl_it_n,
        savings_interest_it,
        other_income_it,
        income_it_o,
        income_it_n,
        gross_income_it_o,
        gross_income_it_n,
        chapter_total,
        total_deduction_it_n,
        net_income_it_o,
        net_income_it_n,
        tax_income_it_o,
        tax_income_it_n,
        tax_pay_it_o,
        tax_pay_it_n,
        less_it_o,
        less_it_n,
        tar_it_o,
        tar_it_n,
        opting_for,
        tax_per_inp,
        tax_per_it,
        add_four_it,
        gtax_payable_it,
        less_relief_it,
        ntax_payable_it,
        td_sal_it,
        tex_payable_it,
        tax_refund,
        hbl_taken_fy,
        ihbl_c,
        ihbl_c2,
        isb_c,
        isb_c2}, {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      });
      dispatch({ type: 'updateResponseSuccess', payload: data.response });
      
      return data.success;
     
    } catch (error) {
      dispatch({ type: 'updateResponseFail', payload: error.response.data.message });
    }
  }; 



  
