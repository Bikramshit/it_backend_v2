import React, { useEffect, useState } from 'react'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import Header from "../../Layouts/Header/AuthHeader"
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Layouts/Loader/Loader';
import { StartResponse } from '../../../Redux/Actions/ResponseAction';
import { toast } from 'react-hot-toast';
import { GetSingleForm } from '../../../Redux/Actions/FormAction';

const Dept = [
  "Office of the Hon'ble Vice-Chancellor",
  "Office of the Registrar",
  "Office of the COE",
  "Office of the Dy. Registrar",
  "Office of the Finance Officer",
  "Office of the TPO",
  "VC Section",
  "Registrar Section",
  "Controller of Examination Section",
  "Finance and Accounts Section",
  "AUAT Section",
  "Stores & Purchase Section",
  "CVS Section",
  "PhD Section",
  "Library Section",
  "Enquiry/Receiving Section",
  "Civil Engineering",
  "Computer Science and Engineering",
  "Electrical Engineering",
  "Electronics and Communication Engineering",
  "Mechanical Engineering",
  "Physics",
  "Chemistry",
  "Mathematics and Statistics",
  "Biological Sciences",
  "Nursing",
  "Bengali",
  "Journalism and Mass Communication",
  "Education",
  "Geography",
  "Arabic",
  "English",
  "History",
  "Islamic Theology",
  "Islamic Studies",
  "Economics",
  "Urdu",
  "Law",
  "Management & Business Administration"
]

const Cat = [
  "Officer",
  "NTS",
  "Registrar",
  "Faculty"
 
]


function Letter() {
  const {user, loading} = useSelector(state=>state.user);
  // const {form, loading} = useSelector(state=>state.form)
  const {message, error} = useSelector(state=>state.response);
  const {form} = useSelector(state=>state.form);
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [category, setCategory] = useState('');
  const [employer, setEmployer] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pan, setPan] = useState('');
  const [aadhaar, setAadhaar] = useState();
  const [dob, setDob] = useState();

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();



  // if(form===undefined){
  //   navigate('/error');
  // }

  useEffect(()=>{
      setName(user.name);
      setDesignation(user.designation);
      setDepartment(user.department);
      setCategory(user.category)
      setPhone(user.phone);
      setEmail(user.email);
      setPan(user.pan);
      setAadhaar(user.aadhaar);
      setDob(user.dob);
  }, [user])
  
  const SubmitHandler =async()=>{
    console.log( name, pan, aadhaar, email, phone, department, designation, category, dob);
    console.log(pan);
    console.log(aadhaar);
    console.log(email);
    console.log(phone);
    console.log(department);
    console.log(designation);
    console.log(category);
    console.log(dob);
    console.log(name);
    const res = await dispatch(StartResponse(params.id, name, pan, aadhaar, email, phone, department, designation, category, dob))
    if(res===undefined) return;
    if(res.success===true){
      navigate(`/salary/${res.response._id}`);
    }
  }

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

  const getDate =(yourDate)=> {
    if(yourDate===undefined) return;
    yourDate = new Date(yourDate);
    const offset = yourDate.getTimezoneOffset();
    yourDate = new Date(yourDate.getTime() - (offset*60*1000))
    return yourDate.toISOString().split('T')[0]
  }
  return (
   <Sidebar>
    <Header  user={user} />
    {
      loading ? <Loader/> :
      <>
        <div className="it_container">
      
      <div className="letter_input">
      <div className="letter_from">
        From,
      </div>
      <div className="container">
      <div className="q_sec_letter">
        <label htmlFor="name">Name:</label>
        <input type="text" onChange={e=>setName(e.target.value)} defaultValue={name} readOnly />
      </div>
      <div className="q_sec_letter">
        <label htmlFor="designation">Designation:</label>
        <input type="text" onChange={e=>setDesignation(e.target.value)} defaultValue={designation} readOnly />
      </div>
      <div className="q_sec_letter" id="letter_disable">
        <label htmlFor="department">Department/Section:</label>
       
        <select name=""  onChange={e=>setDepartment(e.target.value)} defaultValue={department} disabled >
        <option value="">Select --</option>
        {
          Dept.map((dep)=>(
            <option value={dep} selected={dep===department}>{dep}</option>
          ))
        }
      
      
        </select>
      
      
      </div>
      <div className="q_sec_letter" id='letter_disable'>
        <label htmlFor="">Category:</label>
        {/* <input type="text" onChange={e=>setCategory(e.target.value)} defaultValue={category} /> */}
        <select name="" id="" onChange={e=>setCategory(e.target.value)} disabled>
          <option value="">Select--</option>
          {
            Cat.map((cate)=>(
              <option value={cate} selected={cate===category}>{cate}</option>
            ))
          }
        </select>
      </div>
      <div className="q_sec_letter" id=''>
        <label htmlFor="">Employer:</label>
        <input type="text" onChange={e=>setEmployer(e.target.value)} value={"Aliah University"} readOnly />
      </div>
      <div className="q_sec_letter">
        <label htmlFor="phone">Contact No:</label>
        <input type="text" onChange={e=>setPhone(e.target.value)} defaultValue={phone} readOnly />
      </div>
      <div className="q_sec_letter">
        <label htmlFor="email">Email:</label>
        <input type="email" onChange={e=>setEmail(e.target.value)} defaultValue={email} readOnly />
      </div>
      <div className="q_sec_letter">
        <label htmlFor="pan">PAN:</label>
        <input type="text" onChange={e=>setPan(e.target.value)} defaultValue={pan} readOnly />
      </div>
      <div className="q_sec_letter">
        <label htmlFor="aadhaar">Aadhaar:</label>
        <input type="text" onChange={e=>setAadhaar(e.target.value)} defaultValue={aadhaar} readOnly />
      </div>
      <div className="q_sec_letter">
        <label htmlFor="aadhaar">DOB:</label>
        <input type="date" onChange={e=>setDob(e.target.value)} defaultValue={getDate(dob)} readOnly />
      </div>

      </div>


      <div className="letter">
      <span className='to'>To,</span>

        <div className="letter_first">
          <span>Finance Officer</span>
          <span>Aliah University</span>
          <span>  A/27, Action Area II, </span>
          <span>New Town, Rajarhat</span>
          <span>Kolkata-700160</span>

        </div>

        <div className="letter_subject">
          Subject: IT Decleration
          </div>
          <div className="letter_body">
          <span>Sir,</span>
          <div>
            <span>Please find encolsed herewith my proposed Income Tax Calculation Form for <b>FY  2023-24</b> </span>
            <ol>
              <li>I certify that particulars furnished are true and correct to the best of my knowledge and belief</li>
              <li>I authorize the University to recover Income Tax from my salary based on the declaration/documents submitted here</li>
              <li>I certify that these investments/savings have been made/proposed from my own earned income</li>
              <li>Documents of the proposed investments/savings declared will be submitted positively by <b>12.04.2024</b></li>
              <li>I will be solely responsible to CBDT, Income Tax Department, Govt. of India for all information pertaining to income tax assessment</li>
              <li>I will be solely responsible if not paid the proposed investment and will deposit the tax payable and its penalty directly to the Income Tax Department and will furnish the copy of paid challan to collect the Form 16</li>
            </ol>
          </div>
          </div>
        </div>
      </div>


      

<div className="start_fill">
<button onClick={SubmitHandler} className='btn start'>Start </button>
</div>


    </div>
      
      </>
    }
   </Sidebar>
  )
}

export default Letter