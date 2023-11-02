import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom"
import { GetAllResponseByForm } from '../../../../Redux/Actions/ResponseAction';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Sidebar from '../../../Layouts/Sidebar/Sidebar';
import AuthHeader from '../../../Layouts/Header/AuthHeader';
import Loader from '../../../Layouts/Loader/Loader';
import 
function ResponseByForm() {
    const {loading, responses} = useSelector(state=>state.response);
    const dispatch = useDispatch();
    const params = useParams();
    useEffect(()=>{
        dispatch(GetAllResponseByForm(params.id));
    },[])
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
        responses===undefined ? <Loader/> :    <div className='it_container'>
        <h6>All Responses</h6>
        <div className="table_div">
        <table id='response'>
          <tr className='table_bg'>
            <th>Sl. No</th>
            <th>Reference Id</th>
            <th>Name</th>
            <th>CreatedAt</th>
            <th>Submitted</th>
            <th>Approved</th>
            <th>File</th>

          </tr>
          {
            responses.map((response, index)=>(
              <tr className={(index+1)%2===0 ? 'table_row_bg' : ''}>
                <td><Link to={`/response/${response._id}`}> {index+1} </Link></td>
                <td><Link to={`/response/${response._id}`}> {response._id} </Link></td>
                <td><Link to={`/response/${response._id}`}> {response.FormName} </Link></td>
                <td><Link to={`/response/${response._id}`}> {getDate(response.createdAt)} </Link></td>
                <td><Link to={`/response/${response._id}`}> {response.submitStatus} </Link></td>
                <td><Link to={`/response/${response._id}`}> {response.seen} </Link></td>
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
    </Sidebar>
    
    
    
    </>
  )
}

export default ResponseByForm