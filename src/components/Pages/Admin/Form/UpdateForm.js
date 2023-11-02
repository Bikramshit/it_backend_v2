import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Layouts/Sidebar/Sidebar'
import AuthHeader from '../../../Layouts/Header/AuthHeader'
import {  GetSingleForm, UpdateFormHandler } from '../../../../Redux/Actions/FormAction';
import {  useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../Layouts/Loader/Loader';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function UpdateForm() {
  const {loading, message, error, form} = useSelector(state=>state.form);
  const dispatch = useDispatch();
  const params = useParams()
  const [name, setName] = useState('');
  const [assYr, setAssYr] = useState('');
  const [finYr, setFinYr] = useState('');
  const [expriy, setExpiry] = useState('');
  const [starting, setStarting] = useState('');

  useEffect(()=>{
    dispatch(GetSingleForm(params.id))
  }, [dispatch])

  const getDate =(yourDate)=> {
    if(yourDate===undefined) return;
    yourDate = new Date(yourDate);
    const offset = yourDate.getTimezoneOffset();
    yourDate = new Date(yourDate.getTime() - (offset*60*1000))
    return yourDate.toISOString().split('T')[0]
  }


  useEffect(()=>{
    if(form!==undefined){
      setName(form.name);
      setAssYr(form.assessment_year);
      setFinYr(form.financial_year);
      setExpiry(getDate(form.expiryDate));
      setStarting(getDate(form.startingDate));
      console.log(expriy);
    }
  }, [form])

  const SubmitHandler = ()=>{
    // id,name, assessment_year, financial_year, visibility, expiryDate, startingDate
    dispatch(UpdateFormHandler(params.id, name, assYr, finYr, expriy, starting));
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
  return (
   <>
   
   {
      loading ? <Loader/> :
      <>
    <Sidebar>
    <AuthHeader />
    {
      form===undefined ? <Loader/> : <>
         <div className="it_container">
   <div className="create_header">Update Form</div>

   <div className="q_sec">
    <label htmlFor="">Name</label>
    <input type="text" onChange={e=>setName(e.target.value)} defaultValue={form.name} />
   </div>
   
   <div className="q_sec">
    <label htmlFor="">Financial Year</label>
    <input type="text" onChange={e=>setFinYr(e.target.value)} defaultValue={form.financial_year} placeholder='FY- 2020-21' />
   </div>
   

   <div className="q_sec">
    <label htmlFor="">Assessment Year</label>
    <input type="text" onChange={e=>setAssYr(e.target.value)} defaultValue={form.assessment_year} placeholder='AY-2021-22' />
   </div>
 
   <div className="q_sec">
    <label htmlFor="">Starting Date</label>
    <input type="date" onChange={e=>setStarting(e.target.value)} defaultValue={starting} />
   </div>

   <div className="q_sec">
    <label htmlFor="">Expriy Date</label>
    <input type="date" onChange={e=>setExpiry(e.target.value)} defaultValue={expriy}  />
   </div>

   </div>
   <div className="submit_btn">
   <button onClick={SubmitHandler}>Submit</button>
   </div>
      
      </>
    }

   </Sidebar>
      </>
    }
   
   </>
  )
}

export default UpdateForm