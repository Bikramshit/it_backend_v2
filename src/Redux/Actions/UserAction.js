import axios from "axios";
import { server } from "../Store/Store";


export const CreateUserHandler = (name,  phone,email, password, dob, designation, department, pan, category, aadhaar) => async dispatch => {
  try {
    dispatch({ type: 'createUserRequest' });

    const { data } = await axios.post(`${server}/admin/new/user`, {name,  phone,email, password, dob, designation, department, pan, category, aadhaar}, {
      headers: {
        'Content-type': 'application/json',
      },
      withCredentials: true,
    });
    dispatch({ type: 'createUserSuccess', payload: data.message });
    console.log(data);
   return data.success;
  } catch (error) {
    dispatch({ type: 'registerFail', payload: error.response.data.message });
  }
};



export const login =(pan,password)=>async(dispatch)=>{
    try {
        dispatch({type:'loginRequest'});
        const {data} = await axios.post(`${server}/login`, {pan,password}, {
            headers:{
                "Content-Type":"application/json",
            },
            withCredentials:true
        });
       
        
        dispatch({type:'loginSuccess', payload:data});
        console.log(data);
        return data;
    } catch (error) {
        dispatch({type:'loginFail', payload:error.response.data.message});
    }
}

export const VerifyHandler =(otp, userId)=>async(dispatch)=>{
  try {
      dispatch({type:'verifyEmailRequest'});
      const {data} = await axios.post(`${server}/verify`, {otp, userId}, {
          headers:{
              "Content-Type":"application/json",
          },
          withCredentials:true
      });
     
      
      dispatch({type:'verifyEmailSuccess', payload:data});
      console.log(data);
      return data.success;
  } catch (error) {
      dispatch({type:'verifyEmailFail', payload:error.response.data.message});
  }
}
export const resendHandler =(userId)=>async(dispatch)=>{
  try {
      dispatch({type:'resendRequest'});
      const {data} = await axios.put(`${server}/resend`, {userId}, {
          headers:{
              "Content-Type":"application/json",
          },
          withCredentials:true
      });
     
      
      dispatch({type:'resendsuccess', payload:data});
      console.log(data);
      // return data.success;
  } catch (error) {
      dispatch({type:'resendFail', payload:error.response.data.message});
  }
}

export const loadUser = () => async dispatch => {
    try {
      dispatch({ type: 'loadUserRequest' });
  
      const { data } = await axios.get(
        `${server}/me`,
  
        {
          withCredentials: true,
        }
      );
      dispatch({ type: 'loadUserSuccess', payload: data.user });
    
      return data;
    } catch (error) {
     
      dispatch({ type: 'loadUserFail',
      
      payload: error.response.data.message
     });
    }
  };
  
export const logout = () => async dispatch => {
    try {
      dispatch({ type: 'logoutRequest' });
  
      const { data } = await axios.get(`${server}/logout`, {
        withCredentials: true,
      });
      dispatch({ type: 'logoutSuccess', payload: data.message });
      return data.success;
    } catch (error) {
      dispatch({ type: 'logoutFail', payload: error.response.data.message });
    }
  };








  export const updateProfile = (name,  phone,email,  dob, designation, department, pan, category, aadhaar) => async dispatch => {
    try {
      dispatch({ type: 'updateProfileRequest' });
  
      const { data } = await axios.put(
        `${server}/updateprofile`,
        {
            name,  phone,email, dob, designation, department, pan, category, aadhaar
        },
        {
          headers: {
            'Content-type': 'application/json',
          },
  
          withCredentials: true,
        }
      );
      
      dispatch({ type: 'updateProfileSuccess', payload: data.message });
      return data.success;
      return data;
    } catch (error) {
      dispatch({
        type: 'updateProfileFail',
        payload: error.response.data.message,
      });
    }
  };
  

  export const changePassword = (oldPassword, newPassword) => async dispatch => {
    try {
      dispatch({ type: 'changePasswordRequest' });
  
      const { data } = await axios.put(
        `${server}/changepassword`,
        {
          oldPassword,
          newPassword,
        },
        {
          headers: {
            'Content-type': 'application/json',
          },
  
          withCredentials: true,
        }
      );
  
      dispatch({ type: 'changePasswordSuccess', payload: data.message });
      return data.success;
    } catch (error) {
      dispatch({
        type: 'changePasswordFail',
        payload: error.response.data.message,
      });
    }
  };
  
  export const forgetPassword = pan => async dispatch => {
    try {
      dispatch({ type: 'forgetPasswordRequest' });
  
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
  
        withCredentials: true,
      };
  
      const { data } = await axios.post(
        `${server}/forgetpassword`,
        {
          pan,
        },
        config
      );
  
      dispatch({ type: 'forgetPasswordSuccess', payload: data.message });
      return data.success;
    } catch (error) {
      dispatch({
        type: 'forgetPasswordFail',
        payload: error.response.data.message,
      });
    }
  };
  
  export const resetPassword = (token, password) => async dispatch => {
    try {
      dispatch({ type: 'resetPasswordRequest' });
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
  
        withCredentials: true,
      };
  
      const { data } = await axios.put(
        `${server}/resetpassword/${token}`,
        {
          password,
        },
        config
      );
  
      dispatch({ type: 'resetPasswordSuccess', payload: data.message });
      // console.log(data);
      return data.success;
    } catch (error) {
      dispatch({
        type: 'resetPasswordFail',
        payload: error.response.data.message,
      });
    }
  };
  

  export const getUserDetails = (id) => async dispatch => {
    try {
      dispatch({ type: 'userDetailsRequest' });
      const config = {
        withCredentials: true,
      };
  
      const { data } = await axios.get(
        `${server}/admin/user/${id}`,
        
        config
      );
  
      dispatch({ type: 'userDetailsSuccess', payload: data.user });
        console.log(data);
      return data.user.name;
    } catch (error) {
      dispatch({
        type: 'userDetailsFail',
        payload: error.response.data.message,
      });
    }
  };
  

  export const getAllUsers = () => async dispatch => {
    try {
      dispatch({ type: 'allUserRequest' });
      const config = {
        withCredentials: true,
      };
  
      const { data } = await axios.get(
        `${server}/admin/users`,
        
        config
      );
  
      dispatch({ type: 'allUserSuccess', payload: data.users });
   
    } catch (error) {
      dispatch({
        type: 'allUserFail',
        payload: error.response.data.message,
      });
    }
  };
  



  export const DeleteUser = (id) => async dispatch => {
    try {
      dispatch({ type: 'deleteUserRequest' });
      const config = {
        withCredentials: true,
      };
  
      const { data } = await axios.delete(
        `${server}/admin/user/${id}`,
        
        config
      );
  
      dispatch({ type: 'deleteUserSuccess', payload: data.message });
        console.log(data);
        return data.success;
    } catch (error) {
      dispatch({
        type: 'deleteUserFail',
        payload: error.response.data.message,
      });
    }
  };


  export const SendMailHandler = (id,subject,  msg ) => async dispatch => {
    try {
      dispatch({ type: 'sendMailRequest' });
      const config = {
        withCredentials: true,
      };
  
      const { data } = await axios.post(
        `${server}/send/mail`,
        {id,subject,  msg},
        config
      );
  
      dispatch({ type: 'sendMailSuccess', payload: data.message });
        console.log(data);
        return data.success;
    } catch (error) {
      dispatch({
        type: 'sendMailFail',
        payload: error.response.data.message,
      });
    }
  };
