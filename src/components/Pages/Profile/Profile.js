import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../Layouts/Sidebar/Sidebar';
import AuthHeader from '../../Layouts/Header/AuthHeader';
import { logout } from '../../../Redux/Actions/UserAction';
import { useNavigate } from 'react-router-dom';
import {BsPersonCircle} from "react-icons/bs";
import { Link } from 'react-router-dom';
import Loader from '../../Layouts/Loader/Loader';


function Profile() {
  const {user, loading, message, error} = useSelector(state=>state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const getDate =(yourDate)=> {
    if(yourDate===undefined) return;
    yourDate = new Date(yourDate);
    const offset = yourDate.getTimezoneOffset();
    yourDate = new Date(yourDate.getTime() - (offset*60*1000))
    // return yourDate.toISOString().split('T')[0]
    return yourDate.toLocaleDateString()
  }


  return (
    <>
    
    <Sidebar>
      <AuthHeader  />

 {
  loading ? <Loader/> :
  <div className="chapter_container">
  <div className="user_prof">Profile</div>

  <div className="profile">
  <span id='icn'><BsPersonCircle/></span>
  <div className="pro_n">
  <p className='nme'>{user.name}</p>
  <div className="contact_info">
  <span>{user.email}</span>
  <span>{user.phone}</span>

  </div>

  </div>
  </div>
  <div className="basic_info">
    <hr />
    <div className="basic_cont">
      <div className="basic_in">UIN</div>
      <div className="basic_fo">{user.emp_id}</div>
    </div>
    <div className="basic_cont">
      <div className="basic_in">Department/Section</div>
      <div className="basic_fo">{user.department}</div>
    </div>
    {/* <hr /> */}
    <div className="basic_cont">
      <div className="basic_in">designation</div>
      <div className="basic_fo">{user.designation}</div>
    </div>
    <div className="basic_cont">
      <div className="basic_in">category</div>
      <div className="basic_fo">{user.category}</div>
    </div>
    <div className="basic_cont">
      <div className="basic_in">D.O.B</div>
      <div className="basic_fo">{getDate(user.dob)}</div>
    </div>
    <div className="basic_cont">
      <div className="basic_in">PAN</div>
      <div className="basic_fo">{user.pan}</div>
    </div>
    <div className="basic_cont">
      <div className="basic_in">Aadhaar</div>
      <div className="basic_fo">{user.aadhaar}</div>
    </div>
  </div>

<div className="  btns btns2" >
{/* <button>Logout</button> */}
<div className='nepr'>
{/* <Link to={`/updateprofile`}><button className='btn prev' >Update Profile</button></Link> */}

       <Link to={'/changepassword'}><button  className='btn next'>Change Password</button></Link> 
        </div>

</div>
</div>
 }


    </Sidebar>
    
    
    
    </>
  )
}

export default Profile