import React, { useEffect, useState } from 'react'
import Loader from '../../../Layouts/Loader/Loader';
import Sidebar from '../../../Layouts/Sidebar/Sidebar';
import AuthHeader from '../../../Layouts/Header/AuthHeader';
import { useDispatch, useSelector } from 'react-redux';
import { CreateNewForm } from '../../../../Redux/Actions/FormAction';
import { toast } from 'react-hot-toast';
function CreateForm() {
  const {loading, message, error} = useSelector(state=>state.form);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [assYr, setAssYr] = useState('');
  const [finYr, setFinYr] = useState('');
  const [expriy, setExpiry] = useState('');
  const [starting, setStarting] = useState('');

  const SubmitHandler = ()=>{
    dispatch(CreateNewForm(name, assYr, finYr, expriy, starting));
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
   <div className="it_container">
    <div className="crt_ff">
   <div className="create_header">Create New Form</div>

   <div className="q_sec">
    <label htmlFor="">Name</label>
    <input type="text" onChange={e=>setName(e.target.value)}  />
   </div>
   
   <div className="q_sec">
    <label htmlFor="">Financial Year</label>
    <input type="text" onChange={e=>setFinYr(e.target.value)}  placeholder='eg. 2020-21' />
   </div>
   

   <div className="q_sec">
    <label htmlFor="">Assessment Year</label>
    <input type="text" onChange={e=>setAssYr(e.target.value)}  placeholder='eg. 2021-22' />
   </div>
 
   <div className="q_sec">
    <label htmlFor="">Starting Date</label>
    <input type="date" onChange={e=>setStarting(e.target.value)} />
   </div>

   <div className="q_sec">
    <label htmlFor="">Expriy Date</label>
    <input type="date" onChange={e=>setExpiry(e.target.value)}  />
   </div>

   </div>
   <div className="submit_btn">
   <button onClick={SubmitHandler}>Submit</button>
   </div>
   </div>
   </Sidebar>
      </>
    }
   </>
  )
}

export default CreateForm