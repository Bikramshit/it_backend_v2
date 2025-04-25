import React, { useState } from 'react'
import Footer from '../../Layouts/Footer/Footer'
import Header from "../../Layouts/Header/Header"
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../Redux/Actions/UserAction'
import Loader from '../../Layouts/Loader/Loader'
import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"

function Login() {
  const {loading, message, error, user} = useSelector(state=>state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('')
  const SubmitHandler =async(e)=>{
    e.preventDefault();
    let res = await dispatch(login(username, password));
    if(res===undefined || res.success!==true) return;
   
    if(res.success===true){
        const result = res.data.userId;
        navigate(`/verify/${res.data.userId}`, {state:{result}});

      
    }
    // if(res===true){
    //   navigate('/dashboard')
    // }
  }
  // useEffect(()=>{
  //   if(error){
  //     toast.error(error);
  //     dispatch({type:"clearError"})
  //   }
  //   if(message){
  //     toast.success(message);
  //     dispatch({type:"clearMessage"})
  //   }
  // }, [dispatch, error, message]);

  const userNameHandler =(e)=>{
    e = e.target.value;
    e = e.toUpperCase();
    setusername(e);
    document.getElementById('username').value = e;
  }

  return (
    <>

    {
      loading ? <Loader/> :<>
   

      <div className="main_con">
        <div className='main'>
     <Header/>
    <div className="intro_section">
      <div className='intro_text'>Here You Can Compute Your Income Tax Comfortably and Efficiently</div>
      <div className='intro_text'>Without Using Any Paper, Pen or Calculator</div>
      
<div className='intro_namse'>
        <div className="intro_name"> - Finance Officer </div>
      </div>
     

    </div>

    <div className="login_container">
<div className="login_child">
    <div className="login">
      <form action="">
    <div className="login_sec">

      <div className="login_title">Login</div>

          <label htmlFor="pan">User Id</label>
          <input type="text"  onChange={e=>{ userNameHandler(e)}} id='username' placeholder='PAN' />
      </div>
      <div className="login_sec">
          <label htmlFor="password">Password</label>
          <input type="password" onChange={e=>setPassword(e.target.value)} placeholder='Password' />
      </div>
      <div className=" login_btn">
        <button type='submit' className='btn' onClick={(e)=>SubmitHandler(e)}>Generate OTP</button>
      </div>

      <div className='login_options'>
      <Link to={'/forgot-password'}><p className='forgot_pss'>Forgot Password? </p></Link>
      <Link to={'/new-user'}><p className='forgot_pss'>New user? </p></Link>
      
      </div>
      </form>
    </div>
    </div>
    <div className="login_child1">
    <div className="rules">
    
    <p>Rules</p>

      <div className="rules_div">

    <div className="scroll-text " >
                      <div className="scroll_div"  >
                      <button className="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">1. House Building Loan Interest deduction u/s 24(b)</button>
                   
                     
                      </div>
                      <div className="scroll_div">
                        <button  data-bs-toggle="modal" data-bs-target="#staticBackdrop1">2. Spouse Declaration Form for those whose spouse is employed</button>
                      </div>
                      {/* <div className="scroll_div">
                        <button href="https://drive.google.com/file/d/1-0a_3lBngF30fs_ullETA4Efxn5vXAGr/view" className="" target="_black">2. Spouse Declaration Form for those whose spouse is employed</button>
                    
                      </div> */}
                      <div className="scroll_div">
                      <button className="" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">3. House Rent Allowance exemption u/s 10(13A) </button>
                      </div>
                      <div className="scroll_div">
                      <button className="" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">4. Home loan taken against "House under construction"</button>
                      </div>
                    </div>
                    </div>
    </div>
      </div>
      </div>
      </div>
    {/* </div> */}
    <Footer/>


    <div class="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-black">
      <h6>House Rent Allowance exemption u/s 10(13A) </h6>



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-black">
      <h6>House Building Loan Interest deduction u/s 24(b)</h6>



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>




<div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-black">
      <h6>Spouse Declaration Form for those whose spouse is employed</h6>



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-black">
      <h6>Home Loan taken against "House under construction"</h6>



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
    </div>
</div>





      </>
    }
    
    </>
  )
}

export default Login