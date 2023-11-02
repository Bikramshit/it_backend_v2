import React, { useEffect } from 'react'
import Sidebar from '../../../Layouts/Sidebar/Sidebar'
import DHeader from "../../../Layouts/Header/AuthHeader"
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../Layouts/Loader/Loader';
import { getAllForm } from '../../../../Redux/Actions/FormAction';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function Form() {
  // const {loading, user} = useSelector(state=>state.user);
  const {loading, forms} = useSelector(state=>state.form);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllForm());
  }, [dispatch]);


  const getDate =(yourDate)=> {
    yourDate = new Date(yourDate);
    const offset = yourDate.getTimezoneOffset();
    yourDate = new Date(yourDate.getTime() - (offset*60*1000))
    return yourDate.toISOString().split('T')[0]
  }

  
  return (
    <>
    {
      loading ? <Loader/> :
      <>
    <Sidebar>
    <DHeader />
    <div className="create_section">
      <div>All Forms</div>
      <Link to='/form/new'> <button>Create Form</button></Link>
    </div>
     {
      forms===undefined ? <Loader/> : <>
      
      {
        forms.map((form, i)=>(
          <Link to={`/form/${form._id}`} key={i}>
          <div className="form_card">
            <div className="form_title lora">
              {form.name}
            </div>
            <div className="form_year">
              <div>Financial Year: {form.financial_year}</div>
              <div>Assessment Year: {form.assessment_year}</div>
            </div>
            <div>
              Status: {form.visibility}
            </div>
            <div className="form_footer">
              <span>Created At:{getDate(form.createdAt)}</span>
            </div>
            <p>Total Responses: {form.totalResponse}</p>
          </div>
          </Link>
        ))
      }
      
      </>
     }

   </Sidebar>
      </>
    }
    </>
  )
}

export default Form