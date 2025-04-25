import React, { useEffect, useState } from 'react'
import Footer from '../../Layouts/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate, useParams } from 'react-router-dom';
import { RegistrationHandler, RegistrationVerifyHandler, resendHandler } from '../../../Redux/Actions/UserAction';
import Header from '../../Layouts/Header/Header';
import Loader from '../../Layouts/Loader/Loader';

function NewUser() {
  const {loading, message, error, user, show} = useSelector(state => state.user);
  
  const [otp, setOtp] = useState(user?.phoneOtp);
  const [pan, setPan] = useState(user?.pan);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const [secondLeft, setSecondLeft] = useState(60);

  useEffect(() => {
    if (secondLeft <= -1) return;
    const timeout = setTimeout(() => {
      setSecondLeft(secondLeft - 1);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [secondLeft]);

  // Track changes to 'show' state for debugging


  const RegisterHandler = async (e) => {
    e.preventDefault();
     await dispatch(RegistrationHandler(pan));
   

  };
  const GeneratePassword = async(e)=>{
    e.preventDefault();
    let res = await dispatch(RegistrationVerifyHandler(pan, otp));
    console.log(res);
    if(res?.success===true){
      console.log("Navigatorrrr");
      navigate("/");
    }
  }

  const resendOtp = () => {
    dispatch(resendHandler(params.id));
  };


  const userNameHandler =(e)=>{
    e = e.toUpperCase();
    setPan(e);
    document.getElementById('pan').value = e;
  }


  return (
    <>
      {loading ? <Loader /> :
        <div className="main_con">
          <div className="main">
            <Header />
            <div className="login_container">
              <div className="login_child">
                <div className="login">
                  <div className="login_title">User Registration</div>
                  <div className="login_sec">
                    <label htmlFor="pan">PAN</label>
                    <input type="text" onChange={e => userNameHandler(e.target.value)} value={pan} id='pan' />
                  </div>
                  {show && 
                    <div className="login_sec">
                      <label htmlFor="pan">EMAIL OTP</label>
                      <input type="text" onChange={e => setOtp(e.target.value)} value={otp} id='email otp' />
                    </div>
                  }
                    <div className="login_btn">
                      <button type='submit' className='btn' onClick={show ? GeneratePassword : RegisterHandler} disabled={loading}>
                        {
                          show ? "GENERATE PASSWORD" : "SEND OTP"
                        }
                        </button>
                    </div>
                  
                </div>
              </div>
              <div className="login_child1 mt-5">
                <div className="rules">
                  <p>Rules</p>
                  <div className="rules_div">
                    <div className="scroll-text">
                      <div className="scroll_div">
                        <button className="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">1. House Building Loan Interest deduction u/s 24(b)</button>
                      </div>
                      <div className="scroll_div">
                        <button data-bs-toggle="modal" data-bs-target="#staticBackdrop1">2. Spouse Declaration Form for those whose spouse is employed</button>
                      </div>
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
          <Footer />
          {/* Modals */}
          {/* ... modals code remains unchanged */}
        </div>
      }
    </>
  );
}

export default NewUser;
