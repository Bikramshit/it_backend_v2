import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../../Layouts/Sidebar/Sidebar';
import Loader from '../../../Layouts/Loader/Loader';
// import AuthHeader from '../../Layouts/Header/AuthHeader';
import { getUserDetails, updateProfile } from '../../../../Redux/Actions/UserAction';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import AuthHeader from '../../../Layouts/Header/AuthHeader';

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
function UpdateUser() {
  const {user} = useSelector(state=>state.user);
  const  {loading, message,error} = useSelector(state=>state.profile);

  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [department, setDepartment] = useState();
  const [category, setCategory] = useState();
  const [dob, setDob] = useState();
  const [pan, setPan] = useState();
  const [aadhaar, setAadhaar] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [designation, setDesignation] = useState();
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
  },[dispatch, user]);

  const UpdateHandler = async()=>{
   const res = await dispatch(updateProfile(name,  phone,email, dob, designation, department, pan, category, aadhaar));
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
      <div className="it_container">
      <div className="user_prof mt-2">Update Profile</div>

    <div className="q_sec_letter">
      <label htmlFor="name">Name</label>
      <input type="text" onChange={e=>setName(e.target.value)} defaultValue={name} />
    </div>       

    <div className="q_sec_letter">
      <label htmlFor="designation">Desingation</label>
      <input type="text" onChange={e=>setDesignation(e.target.value)} defaultValue={designation} />
    </div>

    <div className="q_sq_sec_letterec2">
      <label htmlFor="department">Department/Section</label>
      {/* <input type="text" onChange={e=>setDepartment(e.target.value)} defaultValue={department} /> */}
      <select name="" id="" onChange={e=>setDepartment(e.target.value)} defaultValue={department}>
      {
          Dept.map((dep)=>(
            <option value={dep} selected={dep===department}>{dep}</option>
          ))
        }
      </select>
    </div>

    <div className="q_sec_letter">
      <label htmlFor="category">Category</label>
      {/* <input type="text" onChange={e=>setCategory(e.target.value)} defaultValue={category} /> */}
      <select name="" id="" onChange={e=>setCategory(e.target.value)}>
      {
            Cat.map((cate)=>(
              <option value={cate} selected={cate===category}>{cate}</option>
            ))
          }
      </select>
    </div>
    <div className="q_sec_letter">
      <label htmlFor="pan">PAN</label>
      <input type="text" onChange={e=>setPan(e.target.value)} defaultValue={pan} />
    </div>   
    <div className="q_sec_letter">
      <label htmlFor="aadhaar">Aadhaar</label>
      <input type="text" onChange={e=>setAadhaar(e.target.value)} defaultValue={aadhaar} />
    </div>   
    <div className="q_sec_letter">
      <label htmlFor="phone">Contact No</label>
      <input type="text" onChange={e=>setPhone(e.target.value)} defaultValue={phone} />
    </div>   
    <div className="q_sec_letter pb-2">
      <label htmlFor="email">Email</label>
      <input type="email" onChange={e=>setEmail(e.target.value)} defaultValue={email} />
    </div>   
    <div className="q_sec_letter pb-2">
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