import React, { useEffect } from 'react'
import Sidebar from '../../../Layouts/Sidebar/Sidebar'
import AuthHeader from '../../../Layouts/Header/AuthHeader'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../../../../Redux/Actions/UserAction';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../Layouts/Loader/Loader';
import { DeleteUser } from '../../../../Redux/Actions/UserAction';
import { Link } from 'react-router-dom';
function UserDetails() {
  const {loading, user} = useSelector(state=>state.admin);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
useEffect(()=>{
  dispatch(getUserDetails(params.id))
}, [dispatch, params.id])

const DeleteHandler =async()=>{
  const res = await dispatch(DeleteUser(params.id));
  if(res===true){
    navigate('/users')
  }
}
const openModal =()=> {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}
const closeModal =()=> {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

const getDate =(yourDate)=> {
  yourDate = new Date(yourDate);
  const offset = yourDate.getTimezoneOffset();
  yourDate = new Date(yourDate.getTime() - (offset*60*1000))
  return yourDate.toISOString().split('T')[0]
}


  return (
    <>

<Sidebar>
      <AuthHeader />

     {
      loading ? <Loader/> :<>
     {
      user===undefined ? <Loader/> :<>
  <div className="it_container">
    <h5 className='text-decoration-underline pt-1'>User Details</h5>
        <div className="user_sec">
          <div className="labels">
            <div>UIN</div>
            <div>Name</div>
            <div>Designation</div>
            <div>Department/Section</div>
            <div>Category</div>
            <div>Contact No</div>
            <div>Email Id</div>
            <div>D.O.B</div>
            <div>PAN</div>
            <div>Aadhaar</div>
          </div>

          <div className="value">
            <div>{user.emp_id}</div>
            <div>{user.name}</div>
            <div>{user.designation}</div>
            <div>{user.department}</div>
            <div>{user.category}</div>
            <div>{user.phone}</div>
            <div>{user.email}</div>
            <div>{getDate(user.dob)}</div>
            <div>{user.pan}</div>
            <div>{user.aadhaar}</div>
          </div>
        </div>
    </div>
    <div className="submit_btn1">
   <button onClick={openModal} className='delete'>Delete</button>
 <Link to={`/update/user/${user._id}`}>Update User</Link>
   </div>
      </>

      
     }

      </>
     }

<div id="modal" class="modal">
  <div class="modal-content">
    <h5 className='mt-2'>Deleting User</h5>
    <p className='mt-1'>Are you sure you want to delete this user?</p>


    <div className="modal-footerr">
    <button onClick={closeModal} className='cancell'>No</button>
    <button className='createe' onClick={DeleteHandler} >Yes</button>
    </div>
  </div>
</div>

</Sidebar>



    </>
  )
}

export default UserDetails