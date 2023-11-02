import React, { useEffect, useState } from 'react'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import Loader from '../../Layouts/Loader/Loader'
import AuthHeader from '../../Layouts/Header/AuthHeader'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { changePassword, loadUser } from '../../../Redux/Actions/UserAction';
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
    const  {loading, message,error} = useSelector(state=>state.profile);

  const dispatch = useDispatch();
const navigate = useNavigate();
const [old, setOld] = useState();
const [newPass, setNewPass] = useState();
// const navigate = useNavigate();


const UpdateHandler = async()=>{
 const res = await dispatch(changePassword(old, newPass));
//  const params = useParams();
 if(res===true){
  dispatch(loadUser())
  navigate('/profile')
 }
}
useEffect(()=>{
  if(error){
    toast .error(error);
    dispatch({type:"clearError"})
  }
  if(message){
    toast.success(message);
    dispatch({type:"clearMessage"})
  }
}, [dispatch, error, message]);


  return (
    <>
      {
      loading ? <Loader/> : <>
      <Sidebar>
        <AuthHeader/>
        
        <div className="it_container">
      <div className="user_prof mt-2">Update Profile</div>

      <div className="q_sec2">
      <label htmlFor="name">Old Password</label>
      <input type="text" onChange={e=>setOld(e.target.value)}  />
    </div>  
    <div className="q_sec2">
      <label htmlFor="name">New Password</label>
      <input type="text" onChange={e=>setNewPass(e.target.value)}  />
    </div>  
    <div className="btns2">
        <button className='btn actives'  onClick={UpdateHandler} >Update</button>
      </div>
      </div>
</Sidebar>
        </>
      }
    
    </>
  )
}

export default ChangePassword