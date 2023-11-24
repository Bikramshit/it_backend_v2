import React, { useEffect, useState } from 'react'
import Footer from '../../Layouts/Footer/Footer'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { VerifyHandler, resendHandler } from '../../../Redux/Actions/UserAction';
import { Link } from 'react-router-dom';
import Header from '../../Layouts/Header/Header';

function Verify() {
  
    const [otp, setOtp] = useState();
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    // const location = useLocation();
    const [secondLeft, setSecondLeft] = useState(60);

    useEffect(()=>{
      if(secondLeft<=-1) return;
      const timeout = setTimeout(() => {
        setSecondLeft(secondLeft - 1);
      }, 1000);
      return ()=>clearTimeout(timeout);
    }, [secondLeft]);


    const {state} = useLocation();
    if(state===null){
      navigate('/error')
    }
    const SubmitHandler =async()=>{
        let res = await dispatch(VerifyHandler(otp, params.id));
        
        if(res===true){
          navigate('/')
        }
      }
    
    const resendOtp = ()=>{
       dispatch(resendHandler(params.id));
      
    }

      


  return (
   <>
   
   <div className="main_con">
     <Header/>
    <div className="login_container">
      <div className="login_child">
    <div className="login">
      <div className="login_title">Email Verification</div>
      <div className="login_sec">
          <label htmlFor="pan">Email OTP</label>
          <input type="text"  onChange={e=>setOtp(e.target.value)} id='username' />
      </div>
     
      <div className=" login_btn">
        <button type='submit' className='btn' onClick={SubmitHandler}>Submit</button>
      </div>

      {secondLeft>=0 ?`Resend in ${secondLeft} seconds` : ''} <button className='resend' disabled={secondLeft>=0} onClick={resendOtp}> Resend OTP </button>

    </div>
    </div>
    <div className="login_child1 mt-5">
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
  )
}

export default Verify