import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../../Layouts/Sidebar/Sidebar';
import Loader from '../../../Layouts/Loader/Loader';
// import AuthHeader from '../../Layouts/Header/AuthHeader';
import { getUserDetails, updateProfile, updateProfileAdmin } from '../../../../Redux/Actions/UserAction';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import AuthHeader from '../../../Layouts/Header/AuthHeader';

const Dept = [
  "Office of the Hon'ble Vice-Chancellor",
  "Office of the Registrar",
  "Office of the COE",
  "Office of the Dy. Registrar",
  "Office of the Finance Officer",
  "Scholarship Section",
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
function UpdateUser() {
  // const {user} = useSelector(state=>state.user);
  const  {loading, user, message,error} = useSelector(state=>state.admin);
  // const {user}

  const dispatch = useDispatch();
  const params = useParams();
  useEffect(()=>{
    dispatch(getUserDetails(params.id))
  },[dispatch])

  const [name, setName] = useState();
  const [department, setDepartment] = useState();
  const [category, setCategory] = useState();
  const [dob, setDob] = useState();
  const [pan, setPan] = useState();
  const [aadhaar, setAadhaar] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [designation, setDesignation] = useState();
  const [empId, setEmpId] = useState('');

const navigate = useNavigate();
  useEffect(()=>{
    setName(user.name);
    setDepartment(user.department);
    setCategory(user.category);
    setDob(user.dob);
    setPan(user.pan);
    setAadhaar(user.aadhaar);
    setPhone(user.phone);
    setEmail(user.email);
    setDesignation(user.designation);
    setEmpId(user.emp_id);
  },[dispatch, user]);
  

  const UpdateHandler = async()=>{
    if(phone.length!==10){
      toast.error("Please enter a valid phone number");
      return;
    }
    if(pan.length!==10){
      toast.error("Please enter a valid PAN no");
      return;
    }
    
   const res = await dispatch(updateProfileAdmin(params.id, name,  phone,email, dob, designation, department, pan, category, aadhaar, empId));
  //  const params = useParams();
   if(res===true){
    navigate(`/user/${user._id}`)
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

  const getDate =(yourDate)=> {
    if(yourDate===undefined) return;
    yourDate = new Date(yourDate);
    const offset = yourDate.getTimezoneOffset();
    yourDate = new Date(yourDate.getTime() - (offset*60*1000))
    return yourDate.toISOString().split('T')[0]
  }
  return (
    <>
    {
      loading ? <Loader/> : <>
      <Sidebar>
        <AuthHeader/>
      <div className="it_container" >
      <div className="user_prof mt-2">Update Profile</div>

    <div className="q_sec_letter" id='update_user_sc' >
      <label htmlFor="name">UIN</label>
      <input type="text" onChange={e=>setEmpId(e.target.value)} defaultValue={empId} />
    </div>       

    <div className="q_sec_letter" id='update_user_sc' >
      <label htmlFor="name">Name</label>
      <input type="text" onChange={e=>setName(e.target.value)} defaultValue={name} />
    </div>       

    <div className="q_sec_letter" id='update_user_sc'>
      <label htmlFor="designation" >Desingation</label>
      <select name="" id="" onChange={e=>setDesignation(e.target.value)}>
      <option value="">Select--</option>
      <option value="HON'BLE VICE CHANCELLOR" selected={"HON'BLE VICE CHANCELLOR"===designation}>Hon'ble Vice Chancellor</option>
      <option value="The Registrar" selected={"The Registrar"===designation}>The Registrar</option>
      <option value="Controller of Examination">Controller of Examination</option>
      <option value="Finance Officer" selected={"Finance Officer"===designation}>Finance Officer</option>
      <option value="Deputy Registrar">Deputy Registrar</option>
      <option value="Assistant Controller of Examination">Assistant Controller of Examination</option>
      <option value="Training & Placement Officer" selected={"Training & Placement Officer"===designation}>Training & Placement Officer</option>
      <option value="Senior Assistant" selected={"Senior Assistant"===designation}>Senior Assistant</option>
      <option value="Junior Assistant" selected={"Junior Assistant"===designation}>Junior Assistant</option>
      <option value="Junior Peon" selected={"Junior Peon"===designation}>Junior Peon</option>
      <option value="Junior Superintendent" selected={"Junior Superintendent"===designation}>Jr. Superintendent</option>
      <option value="Junior Superintendent/ Section Officer" selected={"Junior Superintendent/ Section Officer"===designation}>Junior Superintendent/ Section Officer </option>
      <option value="Farmacist" selected={"Farmacist"===designation}>Farmacist</option>
      <option value="Assistant Librarian" selected={"Assistant Librarian"===designation}>Assistant Librarian</option>
      <option value="Junior Store Keeper" selected={"Junior Store Keeper"===designation}>Junior Store Keeper</option>
      <option value="Cashier" selected={"Cashier"===designation}>Cashier</option>
      <option value="Accountant" selected={"Accountant"===designation}>Accountant</option>
      <option value="Personal Assistant" selected={"Personal Assistant"===designation}>Personal Assistant</option>
      <option value="Physical Training Instructor" selected={"Physical Training Instructor"===designation}>Physical Training Instructor</option>
      <option value="Record Keeper" selected={"Record Keeper"===designation}>Record Keeper</option>
      <option value="Ground Supervisor" selected={"Ground Supervisor"===designation}>Ground Supervisor</option>
      <option value="Plumber" selected={"Plumber"===designation}>Gardener</option>
      <option value="Plumber" selected={"Plumber"===designation}>Plumber</option>      
      <option value="Assistant Professor" selected={"Assistant Professo"===designation}>Assistant Professor</option>
      <option value="Associate Professor" selected={"Associate Professor"===designation}>Associate Professor</option>
      <option value="Professor" selected={"Professor"===designation}>Professor</option>
      <option value="Technical Assistant" selected={"Technical Assistant"===designation}>Technical Assistant</option>

    </select>
    </div>

    <div className="q_sec_letter" id='update_user_sc'>
      <label htmlFor="department">Department/Section</label>
     <select name="" id="" onChange={e=>setDepartment(e.target.value)} defaultValue={department}>
      {
          Dept.map((dep)=>(
            <option value={dep} selected={dep===department}>{dep}</option>
          ))
        }
      </select>
    </div>

    <div className="q_sec_letter" id='update_user_sc'>
      <label htmlFor="category">Category</label>
     <select name="" id="" onChange={e=>setCategory(e.target.value)}>
      {
            Cat.map((cate)=>(
              <option value={cate} selected={cate===category}>{cate}</option>
            ))
          }
      </select>
    </div>
    <div className="q_sec_letter" id='update_user_sc'>
      <label htmlFor="pan">PAN</label>
      <input type="text" onChange={e=>setPan(e.target.value)} defaultValue={pan} />
    </div>   
    <div className="q_sec_letter" id='update_user_sc'>
      <label htmlFor="aadhaar">Aadhaar No</label>
      <input type="text" onChange={e=>setAadhaar(e.target.value)} defaultValue={aadhaar} />
    </div>   
    <div className="q_sec_letter" id='update_user_sc'>
      <label htmlFor="phone">Contact No</label>
      <input type="text" onChange={e=>setPhone(e.target.value)} defaultValue={phone} />
    </div>   
    <div className="q_sec_letter pb-2" id='update_user_sc'>
      <label htmlFor="email">Email Id</label>
      <input type="email" onChange={e=>setEmail(e.target.value)} defaultValue={email} />
    </div>   
    <div className="q_sec_letter pb-2" id='update_user_sc'>
      <label htmlFor="dob">D.O.B</label>
      <input type="date" onChange={e=>setDob(e.target.value)} defaultValue={getDate(dob)} />
    </div>  
      <div className="btns2">
        <button className='btn actives'  onClick={UpdateHandler} >Update User</button>
      </div>

    </div>
      </Sidebar>
      </>
    }
    
    </>
  )
}

export default UpdateUser