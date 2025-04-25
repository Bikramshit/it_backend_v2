import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../../../Layouts/Sidebar/Sidebar'
import AuthHeader from '../../../Layouts/Header/AuthHeader'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CreateUserHandler } from '../../../../Redux/Actions/UserAction';
import { toast } from 'react-hot-toast';
import Loader from '../../../Layouts/Loader/Loader';

function CreateUser() {
    const {user, loading, message, error} = useSelector(state=>state.admin);
    // console.log(user.role);
    const dispatch = useDispatch();
   
    useEffect(()=>{
      if(error){
        toast.error(error);
        dispatch({type:"clearError"})
      }
      if(message){
        toast.success(message);
        dispatch({type:"clearMessage"})
      }
    }, [dispatch, error, message]);
    const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [category, setCategory] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pan, setPan] = useState('');
  const [aadhaar, setAadhaar] = useState();
  const [dob, setDob] = useState();
  const [empId, setEmpId] = useState('');
  const password = useRef();

    const navigate = useNavigate();
  const SubmitHandler =async()=>{
    if(phone.length!==10){
      toast.error("Please enter a valid phone number");
      return
    }
    if(pan.length!==10){
      toast.error("Please enter a valid PAN no");
      return;
    }
    if(name==="" || email==="" || designation==="" || department===""){
      toast.error("Please fill all fields");
      return;
    }

    const res = await dispatch(CreateUserHandler(name,  phone,email, password.current.value, dob, designation, department, pan, category, aadhaar, empId))
    // return res;
}

  const CancelHandler =()=>{
    navigate('/users');
  }
  const SaveHandler =async()=>{
    const res = await SubmitHandler();
    if(res===true){
        navigate('/user');
    }
  }
  const ContinueHandler =async()=>{
    const res = await SubmitHandler();
    if(res===true){
        navigate('/user/new');
    }
  }

  const getDOB = ()=>{
    console.log(dob);
    const today = new Date(dob);
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();
    console.log(mm);
if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd  + mm  + yyyy;
console.log(dd,mm, yyyy);
console.log(formattedToday);
document.getElementById('pasw').value = formattedToday
// return formattedToday;
  }



  
  const userNameHandler =(e)=>{
    e = e.target.value;
    e = e.toUpperCase();
    setPan(e);
    document.getElementById('username').value = e;
  }
  return (
   <>
     <Sidebar>
      <AuthHeader />

        {
            loading ? <Loader/> :<>
            
            <div className="it_container">
              <div className="crt_ff">
   <div className="create_header">Create New User</div>

   <div className="q_sec">
    <label htmlFor="">UIN</label>
    <input type="text" onChange={e=>setEmpId(e.target.value)} />
   </div>

   <div className="q_sec">
    <label htmlFor="">Name</label>
    <input type="text" onChange={e=>setName(e.target.value)} />
   </div>
   
   <div className="q_sec">
    <label htmlFor="">Designation</label>
    <select name="" id="" onChange={e=>setDesignation(e.target.value)}>
      <option value="">Select--</option>
      <option value="Hon'ble Vice Chancellor">Hon'ble Vice Chancellor</option>
      <option value="The Registrar">The Registrar</option>
      <option value="Controller of Examination">Controller of Examination</option>
      <option value="Finance Officer">Finance Officer</option>
      <option value="Deputy Registrar">Deputy Registrar</option>
      <option value="Assistant Controller of Examination">Assistant Controller of Examination</option>
      <option value="Training & Placement Officer">Training & Placement Officer</option>
      <option value="Senior Assistant">Senior Assistant</option>
      <option value="Junior Assistant">Junior Assistant</option>
      <option value="Junior Peon">Junior Peon</option>
      <option value="Junior Superintendent">Jr. Superintendent</option>
      <option value="Junior Superintendent/ Section Officer">Junior Superintendent/ Section Officer </option>
      <option value="Farmacist">Farmacist</option>
      <option value="Assistant Librarian">Assistant Librarian</option>
      <option value="Junior Store Keeper">Junior Store Keeper</option>
      <option value="Cashier">Cashier</option>
      <option value="Accountant">Accountant</option>
      <option value="Personal Assistant">Personal Assistant</option>
      <option value="Physical Training Instructor">Physical Training Instructor</option>
      <option value="Record Keeper">Record Keeper</option>
      <option value="Ground Supervisor">Ground Supervisor</option>
      <option value="Gardener">Gardener</option>
      <option value="Plumber">Plumber</option>      
      <option value="Assistant Professor">Assistant Professor</option>
      <option value="Associate Professor">Associate Professor</option>
      <option value="Professor">Professor</option>
      <option value="Technical Assistant">Technical Assistant</option>

    </select>
   </div>
   

   <div className="q_sec">
    <label htmlFor="">Department</label>
    <select  onChange={e=>setDepartment(e.target.value)} >
        <option value="">Select --</option>
      <option value="Office of the Hon'ble Vice-Chancellor" >Office of the Hon'ble Vice-Chancellor</option>
      <option value="Office of the Registrar">Office of the Registrar</option>
      <option value="Office of the COE">Office of the COE</option>
      <option value="Office of the Dy. Registrar">Office of the Dy. Registrar</option>
      <option value="Office of the Finance Officer">Office of the Finance Officer</option>
      <option value="Scholarship Section">Scholarship Section</option>
      <option value="Office of the TPO">Office of the TPO</option>
      <option value="VC Section">VC Section</option>
      <option value="Registrar Section">Registrar Section</option>
      <option value="Examination Section">Examination Section</option>
      <option value="Finance and Accounts Section">Finance and Accounts Section</option>
      <option value="AUAT Section">AUAT Section</option>
      <option value="Stores & Purchase Section">Stores & Purchase Section</option>
      <option value="CVS Section">CVS Section</option>
      <option value="PhD Section">PhD Section</option>
      <option value="Library Section">Library Section</option>
      <option value="Enquiry/Receiving Section">Enquiry/Receiving Section</option>
      <option value="Civil Engineering">Civil Engineering</option>
      <option value="Computer Science and Engineering">Computer Science and Engineering</option> 
      <option value="Electrical Engineering">Electrical Engineering</option>
      <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
      <option value="Mechanical Engineering">Mechanical Engineering</option>

      <option value="Physics">Physics</option>
      <option value="Chemistry">Chemistry</option>
      <option value="Mathematics and Statistics">Mathematics and Statistics</option>
      <option value="Biological Sciences">Biological Sciences</option>
      <option value="Nursing">Nursing</option>

      <option value="Bengali">Bengali</option>
      <option value="Journalism and Mass Communication">Journalism and Mass Communication</option> 
      <option value="Education">Education</option>
      <option value="Geography">Geography</option>
      <option value="Arabic">Arabic</option> 
      <option value="English">English</option>
      <option value="History">History</option>
      <option value="Islamic Theology">Islamic Theology</option> 
      <option value="Islamic Studies">Islamic Studies</option>
      <option value="Economics">Economics</option>
      <option value="Urdu">Urdu</option>
      <option value="Law">Law</option>  
      <option value="Management & Business Administration">Management & Business Administration</option>
      
        </select>
   </div>
 
   <div className="q_sec">
    <label htmlFor="">Category</label>
    <select name="" id="" onChange={e=>setCategory(e.target.value)}>
      <option value="">Select--</option>
      <option value="Officer">Officer</option>
      <option value="NTS">NTS</option>
      <option value="Registrar">Registrar</option>
      <option value="Faculty">Faculty</option>
    </select>
   </div>

  
   <div className="q_sec">
    <label htmlFor="">Contact No</label>
    <input type="text" onChange={e=>setPhone(e.target.value)}  />
   </div>
   <div className="q_sec">
    <label htmlFor="">Aadhaar No</label>
    <input type="text" onChange={e=>setAadhaar(e.target.value)} />
   </div>
   <div className="q_sec">
    <label htmlFor="">PAN</label>
    <input type="text" onChange={e=>userNameHandler(e)} id='username' />
   </div>
   <div className="q_sec">
    <label htmlFor="">Email Id</label>
    <input type="email" onChange={e=>setEmail(e.target.value)}  />
   </div>
   <div className="q_sec">
    <label htmlFor="">D.O.B</label>
    <input type="date" onChange={e=>setDob(e.target.value)}  />
   </div>
   <div className="q_sec">
    <label htmlFor="">Password</label>
    <input type="text" ref={password} id='pasw' onFocus={getDOB} placeholder='DDMMYYYY'  />
   </div>
   
   </div>
   <div className="submit_btn">
   <button onClick={SaveHandler}>Save</button>
   <button onClick={ContinueHandler} className='save'>Save and Add One</button>
   <button onClick={CancelHandler} className='cancel'>Cancel</button>
   </div>
   </div>
            </>
        }
      </Sidebar>
   </>
  )
}

export default CreateUser