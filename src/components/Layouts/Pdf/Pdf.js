import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllResponses, GetSingleResponse, getMyResponses } from '../../../Redux/Actions/ResponseAction';
import Sidebar from '../../Layouts/Sidebar/Sidebar';
import AuthHeader from '../../Layouts/Header/AuthHeader';
import Loader from '../../Layouts/Loader/Loader';
import {FaFilePdf} from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import PdfFile from './PdfFile'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

function Pdf() {
  const {user, error} = useSelector(state=>state.user);
  const {loading, response, message} = useSelector(state=>state.response);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(()=>{
    dispatch(GetSingleResponse(params.id))
   }, [dispatch, params.id]);
  return (
    <>
    
{
  loading ? <Loader/> : <>
  
    {
      response===undefined ? <Loader/> : <>
      {/* <PDFViewer>
      <PdfFile response={response} />

      </PDFViewer> */}
      <PDFDownloadLink fileName='IT File' document={<PdfFile  response={response}  />}>
        <button>Download</button>
      </PDFDownloadLink>
    
       </> 
    }
   </>
}    
    
    </>
  )
}

export default Pdf