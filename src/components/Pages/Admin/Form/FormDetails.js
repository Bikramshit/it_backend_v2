import React, { useEffect } from 'react'
import Sidebar from '../../../Layouts/Sidebar/Sidebar'
import AuthHeader from '../../../Layouts/Header/AuthHeader'
import { ActiveFormHandler, DeleteForm, GetSingleForm } from '../../../../Redux/Actions/FormAction';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../Layouts/Loader/Loader';
import { Link } from 'react-router-dom';
function FormDetails() {
  const {loading, form} = useSelector(state=>state.form);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
useEffect(()=>{
  dispatch(GetSingleForm(params.id))
}, [dispatch, params.id])

const DeleteHandler =async()=>{
  const res = await dispatch(DeleteForm(params.id));
  if(res===true){
    navigate('/forms')
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
  if(yourDate===undefined) return;
  yourDate = new Date(yourDate);
  const offset = yourDate.getTimezoneOffset();
  yourDate = new Date(yourDate.getTime() - (offset*60*1000))
  return yourDate.toISOString().split('T')[0]
}

const ActiveHandler =async()=>{
  const res = await dispatch(ActiveFormHandler(params.id));
  if(res===true){
    await dispatch(GetSingleForm(params.id))
  }
}


console.log(form);
  return (
    <>
   <Sidebar>
      <AuthHeader />

     {
      loading ? <Loader/> :<>
     {
      form===undefined ? <Loader/> :<>
  <div className="it_container">
        <div className="user_sec">
          <div className="labels">
            <div>Name</div>
            <div>Assessment Year</div>
            <div>Financial Year</div>
            <div>Visibility</div>
            <div>Total Response</div>
            <div>Created At</div>
            <div>Expiry Date</div>
          </div>

          <div className="value">
            <div>{form.name}</div>
            <div>{form.assessment_year}</div>
            <div>{form.financial_year}</div>
            <div>{form.visibility}</div>
            <div>{form.totalResponse}</div>
            <div>{getDate(form.createdAt)}</div>
            <div>{getDate(form.expiryDate)}</div>
            
          </div>
        </div>
    </div>
   
      <div className="submit_btn">
   <Link to={`/form/update/${params.id}`}><button className='update'>Update</button></Link>
   <button className={form.visibility==="Deactive" ? "Active": "Deactivate"}  onClick={ActiveHandler} >{form.visibility==="Deactive" ? "Activate": "Deactivate"}</button>

   {/* <button>{form.visibility}</button> */}
   <button onClick={openModal} className='delete'>Delete</button>
   

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

export default FormDetails