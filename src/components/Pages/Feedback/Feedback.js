import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AuthHeader from '../../Layouts/Header/AuthHeader';
import Sidebar from '../../Layouts/Sidebar/Sidebar';
import { useNavigate, useParams } from 'react-router-dom';
import { FeedbackHandler, GetSingleResponse } from '../../../Redux/Actions/ResponseAction';
import Loader from '../../Layouts/Loader/Loader';
const RouteList = [
  {
    "title":"Salary",
     "value":"salary",
    "disable":false
  },
  {
    "title":"Form 12B",
     "value":"form12b",
    "disable":false
  },
  {
    "title":"Chapter VI",
     "value":"chapter",
    "disable":false
  },
  {
    "title":"HRA",
     "value":"hra",
    "disable":false
  },
  {
    "title":"IT Computation",
     "value":"it",
    "disable":false
  },
  {
    "title":"Regime ",
     "value":"regime",
    "disable":false
  },
  {
    "title":"Feedback",
     "value":"feedback",
    "disable":false
  },
  {
    "title":"Preview",
     "value":"preview",
    "disable":false
  },
  
]

const RouteList2 = [
  {
    "title":"Salary",
     "value":"salary",
    "disable":false
  },
  {
    "title":"Form 12B",
     "value":"form12b",
    "disable":false
  },
  {
    "title":"Chapter VI",
     "value":"chapter",
    "disable":false
  },
  {
    "title":"HRA",
     "value":"hra",
    "disable":false
  },
  {
    "title":"IT Computation",
     "value":"it",
    "disable":false
  },
  {
    "title":"Regime ",
     "value":"regime",
    "disable":false
  },
  {
    "title":"Feedback",
     "value":"feedback",
    "disable":false
  },
  {
    "title":"Preview",
     "value":"response",
    "disable":false
  },
  
]


function Feedback() {
  const {user, message, error} = useSelector(state=>state.user);
  const {loading, response} = useSelector(state=>state.response);

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quality, setQuality] = useState();
  const [design, setDesign] = useState();
  const [taxc, setTaxc] = useState();
  const [timeCons, setTimeCons] = useState();
  const [better, setBetter]= useState();
  const [friendly, setFriendly] = useState();
  const [imporv, setImprov] = useState();
  const [comment, setComment] = useState();

  useEffect(()=>{
    dispatch(GetSingleResponse(params.id))
   }, [dispatch, params.id]);

  useEffect(()=>{
    if(response!==undefined){
      setQuality(response.quality);
      setDesign(response.design);
      setTaxc(response.tax_computation);
      setTimeCons(response.time_consuming);
      setBetter(response.better_previous);
      setFriendly(response.user_friendly);
      setImprov(response.need_improvement);
      setComment(response.feedback);
    }
  },[response])

  const HandlerSubmit =async(currentState)=>{
    const id = params.id;
    const res = await dispatch(FeedbackHandler(id, currentState, quality, design, taxc, timeCons, better, friendly, imporv, comment));
    return res;
  }

   const PreviousHandler = async()=>{
    const res = await HandlerSubmit("regime");
    if(res===true){
      navigate(`/regime/${params.id}`)
    }
   }

   const NextHandler = async()=>{
    const res = await HandlerSubmit("preview");
    if(res===true){
      navigate(`/preview/${params.id}`)
    }
   }

   const SelectHandler = async(e)=>{
    console.log(e);
    const res = await HandlerSubmit(e);
    if(res===true){
      navigate(`/${e}/${params.id}`);
    }
   }
   useEffect(()=>{
    if(response!==undefined){
      if(user.role==="user" && response.submitStatus==="Yes"){
        navigate('/error')
      }
    }
  });
  return (
    <>
    
  <Sidebar>
    
  <AuthHeader />

    {
      loading ? <Loader/> : <>
      {
        response===undefined ? <Loader/> :    <div className="it_container">
        <div className="form_header">
          <h4>Feedback Form</h4>
          <span>We would love to know your experience with the form so we can improve even better
  </span>
  
        <div className="gd_sec">
        <h6>Grade</h6>
        <table>
          <tr className='table_row_bg'>
            <td className='no'>1</td>
            <td className='nme'>Quality</td>
            <td className='tr_select'><select name="" id="" onChange={e=>setQuality(e.target.value)}>
            <option value="" selected={""===response.quality}>Select--</option>  
            <option value="Poor" selected={"Poor"===response.quality}>Poor</option>
            <option value="Good" selected={"Good"===response.quality}>Good</option>
            <option value="Best" selected={"Best"===response.quality}>Best</option>
              </select></td>
          </tr>
          <tr>
            <td className='no'>2</td>
            <td className='nme'>Design</td>
            <td className='tr_select'><select name="" id="" onChange={e=>setDesign(e.target.value)}>
            <option value="" selected={""===response.quality}>Select--</option>  
            <option value="Poor" selected={"Poor"===response.design}>Poor</option>
            <option value="Good" selected={"Good"===response.design}>Good</option>
            <option value="Best" selected={"Best"===response.design}>Best</option>
              </select></td>
          </tr>
          <tr className='table_row_bg'>
            <td className='no'>3</td>
            <td className='nme'>Tax Computation</td>
            <td className='tr_select'><select name="" id="" onChange={e=>setTaxc(e.target.value)}>
            <option value="" selected={""===response.quality}>Select--</option>  
            <option value="Poor" selected={"Poor"===response.tax_computation}>Poor</option>
            <option value="Good" selected={"Good"===response.tax_computation}>Good</option>
            <option value="Best" selected={"Best"===response.tax_computation}>Best</option>
              </select></td>
          </tr>
        </table>
        </div>
  
        <div className="gd_sec">
        <h6>Questions</h6>
        <table>
          <tr className='table_row_bg'>
            <td className='no'>1</td>
            <td className='nme'>Time Consuming</td>
            <td className='tr_select'><select name="" id="" onChange={e=>setTimeCons(e.target.value)}>
            <option value="" selected={""===response.time_consuming}>Select--</option>  
            <option value="Yes" selected={"Yes"===response.time_consuming}>Yes</option>
            <option value="No" selected={"No"===response.time_consuming}>No</option>
              </select></td>
          </tr>
          <tr>
            <td className='no'>2</td>
            <td className='nme'>Better than previous portal </td>
            <td className='tr_select'><select name="" id="" onChange={e=>setBetter(e.target.value)}>
            <option value="" selected={""===response.better_previous}>Select--</option>  
            <option value="Yes" selected={"Yes"===response.better_previous}>Yes</option>
            <option value="No" selected={"No"===response.better_previous}>No</option>
              </select></td>
          </tr>
          <tr className='table_row_bg'>
            <td className='no'>3</td>
            <td className='nme'>User Friendly </td>
            <td className='tr_select'><select name="" id="" onChange={e=>setFriendly(e.target.value)}>
            <option value="" selected={""===response.user_friendly}>Select--</option>  
            <option value="Yes" selected={"Yes"===response.user_friendly}>Yes</option>
            <option value="No" selected={"No"===response.user_friendly}>No</option>
              </select></td>
          </tr>
          <tr>
            <td className='no'>4</td>
            <td className='nme'>Need Improvement  </td>
            <td className='tr_select'><select name="" id="" onChange={e=>setImprov(e.target.value)}>
            <option value="" selected={""===response.need_improvement}>Select--</option>  
            <option value="Yes" selected={"Yes"===response.need_improvement}>Yes</option>
            <option value="No" selected={"No"===response.need_improvement}>No</option>
              </select></td>
          </tr>
        </table>
  
        <div className="gd_sec">
        <h6>Suggestions</h6>
  
        <div className="textr">
        <textarea name="" id=""  onChange={e=>setComment(e.target.value)} defaultValue={comment}>
          
          </textarea>
        </div>
  
  
        </div>
        </div>
       
  
  
        </div>
    
        <div className="btns chapt_btn">
          <div className='nepr'>
          <button onClick={PreviousHandler} className='btn prev'>Back</button>
          <button onClick={NextHandler} className='btn next'>Next</button>
          </div>
          <select name="" id=""  onChange={e=>SelectHandler(e.target.value)} >
            {
              user.role==="user" ? 
              
                RouteList.map((list)=>(
                  <option value={list.value} selected={list.value===response.currentState} disabled={list.disable}>{list.title}</option>
                ))
                : 
                RouteList2.map((list)=>(
                  <option value={list.value} selected={list.value===response.currentState} disabled={list.disable}>{list.title}</option>
                ))
               
            }
             
  
          </select>
      </div>
      </div>
      }

      </>
    }
    
    
    </Sidebar>    
    
    
    </>
  )
}

export default Feedback