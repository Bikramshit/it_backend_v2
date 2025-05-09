import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { getAllActiveForm, getAllUserForm, getStatusResponse } from '../../../Redux/Actions/FormAction';
import Loader from '../Loader/Loader';
import { ReSubmitForm } from '../../../Redux/Actions/ResponseAction';

function FormContainer() {
  const {user} = useSelector(state=>state.user);
  const {loading, forms} = useSelector(state=>state.form);
  const {rloading, responses} = useSelector(state=>state.response)
    const dispatch = useDispatch();
    useEffect(()=>{
      if(user!==undefined){
        if(user.role==="admin"){
          dispatch(getAllActiveForm());
        }else{
          dispatch(getAllUserForm());
        }
      }
    }, [dispatch]);

    useEffect(()=>{
      if(user!==undefined){
        if(user.role==="user"){
          dispatch(getStatusResponse());
        }
      }
    }, [dispatch])

    const getDate =(yourDate)=> {
      if(yourDate===undefined) return;
      const options = {
        // weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      yourDate = new Date(yourDate);
      const offset = yourDate.getTimezoneOffset();
      yourDate = new Date(yourDate.getTime() - (offset*60*1000))
      // return yourDate.toISOString().split('T')[0]
      // return yourDate.toLocaleDateString()
      return yourDate.toLocaleString("en-US", options)
    }



    const SubmitHandler =async()=>{
    
      const res = await dispatch(ReSubmitForm(responses[0]._id));
      console.log(res);
      if(res===undefined) return;
      if(res.success===true){
        Navigate(`/salary/${res.response._id}`);
      }
    }


  return (
    <>
    <div className="container">
      <div className='avail'>Available Forms</div>
      </div>
      {
        user.role==="user" ? <>
        {
      loading || rloading ? <Loader/> :
      <>
{/* to={`/letter/${form._id}`} */}
        {
          forms!==undefined && forms!==null && responses!==undefined ? <>
            {
              forms.map((form, index)=>(
                <>
          

                <div className="form_card" id='form_card'>
                  

                <div className="form_title">
                  <span className='ff_nn'>{form.name}</span>

                  <Link  to={ responses[0]===undefined ? `/letter/${form._id}` :   responses[0]!==undefined && responses[0].submitStatus==="Yes" ? `/submitted/${responses[0]._id}` : responses[0]!==undefined && responses[0].submitStatus==="No" ? `/${responses[0].currentState}/${responses[0]._id}` : ''    } key={index} >
                  <span className={ responses[0]===undefined ? "form_status actives" : responses[0]!==undefined && responses[0].submitStatus==="Yes" ? "Submitted form_status": "Continue form_status"} >  {responses[0]===undefined ? "Available" : responses[0].remark }   </span>

                  </Link>
                </div>
                <div className="form_year">
                <div>Financial Year: {form.financial_year}</div>
                <div>Assessment Year: {form.assessment_year}</div>
              </div>
              <div className="exprire_dt">
                <div className="exdt">
                Last Date to Submit: {getDate(form.expiryDate)}
                </div>
                <div>
                {
                  responses[0]!==undefined && responses[0].documentStatus==="Not Submitted" ? <div className="doc_sts">
                <Link to={`/document/upload/${responses[0]._id}`} className='btn can_p'>Upload Pending Document</Link>
                </div> :  ''
                }
                
                </div>
              </div>
              </div>

                </>
              ))
            }

            {
              forms?.length===0 && <>
                <div className='' style={{textAlign:"center", fontWeight:"bold"}}>
                The last date of submit the Form was 07.02.2025
                </div>
              </>
            }
          </>
          : <Loader/>
        }


        {/* <div className='form_card' style={{minHeight:"auto", backgroundColor:"transparent", boxShadow:"none", color:"black"}}>
          Do you want to make any changes  <button className='form_resubmit' onClick={SubmitHandler}>click here</button>
        </div> */}

      </>
    }
         </> : <>
         
         {
          loading ? <Loader/> : <>
          
          {
            forms===undefined ? <Loader/> : <> 
                <div className="container_sec">
            
            {
              forms.map((form, index)=>(
                <>
          <Link  to={`/form/${form._id}` }  key={index} >
                <div className="form_card" id='form_card'>

                  <div className="form_title">
                  <span className='ff_nn'>{form.name}</span>
                  <span className="form_status actives">  Available   </span>
                </div>
                <div className="form_year">
                <div>Financial Year: {form.financial_year}</div>
                <div>Assessment Year: {form.assessment_year}</div>
              </div>
              <div className="exprire_dt">
                <div className="exdt">
                Last Date to Submit: <span>{getDate(form.expiryDate)}</span>
                </div>
              </div>
              </div>

              </Link>
                </>
              ))
            }

{
              forms?.length===0 && <>
                <div className='container_sec ' style={{marginTop:"2rem", fontWeight:"600"}}>
                The last date of submit the Form was 07.02.2025
                </div>
              </>
            }
            </div>
             </>
          }
          
           </>
         }
         
         
          </>
      }
      <div className="container">
        <div className="avail">
<hr />
      <table className='status_table'>
        <tr className='status_tr'>
          <th>Status</th>
          <th>Remarks</th>
        </tr>
        <tr>
          <td className='tab_status'>Available</td>
          <td className='tab_remark'>Available to fill the form. User can start by clicking on the hyperlink</td>
        </tr>
        <tr className='stt_vgg'>
          <td className='tab_status'>In Progress</td>
          <td className='tab_remark'>User is wokring on the form</td>
        </tr>
        <tr>
          <td className='tab_status'>Submitted </td>
          <td className='tab_remark'>User have submitted the form</td>
        </tr>
        <tr className='stt_vgg'>
          <td className='tab_status'>Accepted</td>
          <td className='tab_remark'>Form has been accepted by the Admin</td>
        </tr>
        <tr>
          <td className='tab_status'>Rejected</td>
          <td className='tab_remark'>Form has been rejected by the Admin</td>
        </tr>
        
        <tr className='stt_vgg'>
          <td className='tab_status'>Processed</td>
          <td className='tab_remark'>Form has been processed</td>
        </tr>
        <tr className=''>
          <td className='tab_status'>Form 16 Processed</td>
          <td className='tab_remark'>Form 16 data has been uploaded</td>
        </tr> 
        <tr className='stt_vgg'>
          <td className='tab_status'>Pending</td>
          <td className='tab_remark'>Pending documents </td>
        </tr>

      </table>
      </div>

      </div>
  
    </>
  )
}

export default FormContainer