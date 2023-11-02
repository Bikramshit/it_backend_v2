import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import {FaRegCircleUser} from "react-icons/fa6"
import { useDispatch, useSelector } from 'react-redux';
import {CiLogout} from "react-icons/ci"
import {PiUserCircleLight} from "react-icons/pi"
import { logout } from '../../../Redux/Actions/UserAction';
function AuthHeader() {
  const {user} = useSelector(state=>state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LogoutHandler =async()=>{
    const res = await dispatch(logout());
    if(res===true){
      // window.location='/login';
      navigate('/')
    }
  }
  return (
    <>
    
    <div className="AuthHeader">
      <div className="logo">
        <img src="https://res.cloudinary.com/dhtlzxed4/image/upload/v1691233087/Aliah_University_Logo_ytk0g6.png" alt="" />
        <span>Aliah University</span>
      </div>
      <div className="links">
      <ul>
      <li class="dropdown">
				<a href="#">
        <FaRegCircleUser/>&nbsp;
          
          {user.name!==undefined? user.name : user.pan}
					<svg class="icon" width="14" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"/></svg>
				</a>
				<ul class="dropdown-nav">
					<span><NavLink to={'/profile'}><button className='btn'><PiUserCircleLight/> Profile</button></NavLink></span>
          <span><button className='btn' onClick={LogoutHandler}> <CiLogout/> Logout</button></span>
				</ul>
			</li>
      </ul>
       
        {/* <Link to='/profile' className='porfile'>
          
         <FaRegCircleUser/>&nbsp;
          
          {user.name!==undefined? user.name : user.pan}</Link> */}
      </div>
      </div>
    
    
    
    </>
  )
}

export default AuthHeader