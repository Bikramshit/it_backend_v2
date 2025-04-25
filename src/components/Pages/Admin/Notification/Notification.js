
import Sidebar from '../../../Layouts/Sidebar/Sidebar'
import AuthHeader from '../../../Layouts/Header/AuthHeader'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { GetAllResponses, getMyResponses } from '../../../Redux/Actions/ResponseAction';

import {FaFilePdf} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Loader from '../../../Layouts/Loader/Loader';
import PdfFile from '../../../Layouts/Pdf/PdfFile';
import { GetAllPendingResponse, GetAllResponses } from '../../../../Redux/Actions/ResponseAction';
// import PdfFile from '../../Layouts/Pdf/PdfFile';

function Notification() {
    const {user} = useSelector(state=>state.user)
  const {loading, responses, message} = useSelector(state=>state.response);
  const dispatch = useDispatch();
  useEffect(()=>{
       dispatch(GetAllPendingResponse())
   }, [dispatch]);
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
        <> 
   {
    loading ? <Loader/> : <>
    
    {
        responses===undefined ? <Loader/> :    <div className='it_container'>
        <h6>All Pending Responses</h6>
        <div className="table_div">
        <table id='response'>
          <tr className='table_bg'>
            <th>Sl. No</th>
            <th>Name</th>
            <th>Department</th>
            <th>Financial Year</th>
            <th>Submitted On</th>
            <th>Status</th>
            <th>Download</th>

          </tr>
         
            
            {
            responses.map((response, index)=>(
              <tr className={(index+1)%2===0 ? 'table_row_bg' : ''}>
                <td><Link to={`/response/${response._id}`}> {index+1} </Link></td>
                <td><Link to={`/response/${response._id}`}> {response.name} </Link></td>
                <td><Link to={`/response/${response._id}`}> {response.department} </Link></td>
                <td><Link to={`/response/${response._id}`}> {response.financial_year} </Link></td>                
                <td><Link to={`/response/${response._id}`}> { response.submitTime===undefined ? "Not yet submitted" :    getDate(response.submitTime)} </Link></td>
               <td><Link to={`/response/${response._id}`}> {response.remark} </Link></td>
                <td className=''>

      <Link to={`/response/${response._id}`}> View</Link>
              </td>
                  
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
    </Sidebar>
    
    </>
  )
}

export default Notification