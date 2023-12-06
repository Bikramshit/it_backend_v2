import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllResponseByForm, GetAllResponses, getMyResponses } from '../../../Redux/Actions/ResponseAction';
import Sidebar from '../../Layouts/Sidebar/Sidebar';
import AuthHeader from '../../Layouts/Header/AuthHeader';
import Loader from '../../Layouts/Loader/Loader';
import {FaFilePdf} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfFile from '../../Layouts/Pdf/PdfFile';
import { getAllForm } from '../../../Redux/Actions/FormAction';
import toast from 'react-hot-toast';
function Responses() {
  const {user} = useSelector(state=>state.user)
  const {loading, responses, message} = useSelector(state=>state.response);
  const { forms} = useSelector(state=>state.form);

  const [formId, setFormId] = useState();
  const [remark, setRemark] = useState('');

  const dispatch = useDispatch();
  useEffect(()=>{
    if(user!==undefined){
      if(user.role==="admin"){
       dispatch(GetAllResponses())
        dispatch(getAllForm());

      }else {
        dispatch(getMyResponses());
      }
    }
   }, []);

   const FormHandler = async(id)=>{
    setFormId(id);
    // console.log("Month", mon);
    if(id===""){
      dispatch(GetAllResponses());
      return;
    }
    await dispatch(GetAllResponseByForm(id));
  }

  const RemarkHandler = async(e)=>{
    console.log(formId);
    if(formId==="" || formId===undefined){
      toast.error("First Select Financial Year");
      return;
    }
    setRemark(e);
    await dispatch(GetAllResponseByForm(formId, e));
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
          loading ? <Loader/> :
          <>
          

       {
        user.role==="user" ? <>{
          responses===undefined ? <Loader/> :    <div className='salary'>
          <h6>All Responses</h6>
          <div className="table_div">
          <table id='response'>
            <tr className='table_bg'>
              <th>Sl. No</th>
              <th>Reference Id</th>
              <th>Name</th>
              <th>Financial Year</th>
              <th>CreatedAt</th>
              <th>Submitted At</th>
              {/* <th>Submitted</th> */}
              <th>Status</th>
              <th>Download</th>
  
            </tr>
            {
              responses.map((response, index)=>(
                <tr className={(index+1)%2===0 ? 'table_row_bg' : ''}>
                  <td><Link to={`/response/${response._id}`}> {index+1} </Link></td>
                  <td><Link to={`/response/${response._id}`}> {response._id} </Link></td>
                  <td><Link to={`/response/${response._id}`}> {response.FormName} </Link></td>
                  <td><Link to={`/response/${response._id}`}> {response.financial_year} </Link></td>
                  
                  <td><Link to={`/response/${response._id}`}> {getDate(response.createdAt)} </Link></td>
                  <td><Link to={`/response/${response._id}`}> { response.submitTime===undefined ? "Not yet submitted" :    getDate(response.submitTime)} </Link></td>
                  {/* <td><Link to={`/response/${response._id}`}> {response.submitStatus} </Link></td> */}
                  <td><Link to={`/response/${response._id}`}> {response.remark} </Link></td>
                  <td className='pdf_icon'><PDFDownloadLink fileName='IT File' document={<PdfFile  response={response}  />}>
                  <FaFilePdf/>
        </PDFDownloadLink>
                </td>
                    
                    
                    {/* <Link to={`/pdf/${response._id}`}><FaFilePdf/></Link></td> */}
                </tr>
              ))
            }
          </table>
        </div>
        </div>
         } </> : <>
         {
       forms===undefined ||  responses===undefined ? <Loader/> :    <div className='salary'>
        <h6 className='text-decoration-underline'>All Responses</h6>
          <div style={{display:"flex", justifyContent:"space-between"}}>
          <div className="res_select">
            Select Financial Year:
            <select name="" id="" onChange={(e)=>FormHandler(e.target.value)} >
              <option value="">All</option>
              {
                forms.map((form, i)=> 
                
                <option value={form._id} key={i} selected={form._id==formId}>{form.financial_year}</option>
                
                )
            }
            </select>
          </div>
          <div className="res_select">
            Select Response Status:
            <select name="" id="" onChange={(e)=>RemarkHandler(e.target.value)} >
              <option value="">All</option>
              <option value="Accepted" selected={"Accepted"===remark}>Accepted</option>
              <option value="Rejected" selected={"Rejected"===remark}>Rejected</option>
              <option value="Processed" selected={"Processed"===remark}>Processed</option>
              <option value="Form 16 Processed" selected={"Form 16 Processed"===remark}>Form 16 Processed</option>
           
            </select>
          </div>
          </div>
        <div className="table_div">
        <table id='response'>
          <tr className='table_bg'>
            <th>Sl. No</th>
            <th>Name</th>
            <th>Financial Year</th>
            <th>Submitted On</th>
            {/* <th>Submitted</th> */}
            <th>Status</th>
            <th>Documents Status</th>
            <th>Download</th>

          </tr>
          {
            responses && responses.map((response, index)=>(
              <tr className={(index+1)%2===0 ? 'table_row_bg' : ''}>
                <td><Link to={`/response/${response._id}`}> {index+1} </Link></td>
                <td><Link to={`/response/${response._id}`}> {response.name} </Link></td>
                <td><Link to={`/response/${response._id}`}> {response.financial_year} </Link></td>                
                <td><Link to={`/response/${response._id}`}> { response.submitTime===undefined ? "Not yet submitted" :    getDate(response.submitTime)} </Link></td>
               <td><Link to={`/response/${response._id}`}> {response.remark} </Link></td>
               <td><Link to={`/response/${response._id}`}> {response.documentStatus} </Link></td>
                <td className='pdf_icon'><PDFDownloadLink fileName='IT File' document={<PdfFile  response={response}  />}>
                <FaFilePdf/>
      </PDFDownloadLink>
              </td>
                  
                  
                  {/* <Link to={`/pdf/${response._id}`}><FaFilePdf/></Link></td> */}
              </tr>
            ))
          }
        </table>
      </div>
      </div>
       }
         </>
       }

          
          </>
        }
    </Sidebar>
    
    
    
    </>
  )
}

export default Responses