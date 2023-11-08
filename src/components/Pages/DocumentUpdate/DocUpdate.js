import React, { useEffect, useState } from 'react'
import AuthHeader from '../../Layouts/Header/AuthHeader'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { FileUploadedHandler, GetSingleResponse } from '../../../Redux/Actions/ResponseAction';
import { Link } from 'react-router-dom';
import Loader from '../../Layouts/Loader/Loader';
import {IoDocumentTextSharp} from "react-icons/io5"
function DocUpdate() {
    const {user, error} = useSelector(state=>state.user);
    const {loading, response, message} = useSelector(state=>state.response);
    const dispatch = useDispatch();
    const params = useParams();
    useEffect(()=>{
      dispatch(GetSingleResponse(params.id))
     }, [dispatch, params.id]);


    const [paySlip, setPaySlip] = useState(null);
    const [lip_file, setLip_file] = useState(null);
    const [ppf_file, setPpf_file] = useState(null);
    const [ssc_file, setSsc_file] = useState(null);
    const [child_file, setChild_file] = useState(null);
    const [payment_file, setPayment_file] = useState(null);
   const [medical_file, setMedical_file] = useState(null);
   const [medical_srFile, setMedical_srFile] = useState(null);
   const [handicap_file, setHandlicap_file] = useState(null);
   const [education_file, setEducation_File] = useState(null);
   const [nps_file, setNps_file] = useState(null);
   const [donation_file, setDonation_file] = useState(null);
   const [electric_file, setElectric_file] = useState(null);
   const [extra_file, setExtra_File] = useState(null);
    const [input_file, setInput_File] = useState(null);
    const [input_file2, setInput_File2] = useState(null);
    const [input_file3, setInput_File3] = useState(null);
    const [lr1, setlr1] = useState(null)
    const [lr2, setlr2] = useState(null)
    const [lr3, setlr3] = useState(null)
    const [lr4, setlr4] = useState(null);
    const [hbl, setHbl] = useState(null);
 
 
 
 
    const PaySlipChange = (e)=>{
     let selectedFile = e.target.files[0];
     setPaySlip(selectedFile);
   }
    const LipHandler = (e)=>{
      let selectedFile = e.target.files[0];
      setLip_file(selectedFile);
       }
 
    const Ppf_Handler = (e)=>{
     let selectedFile = e.target.files[0];
     setPpf_file(selectedFile);
     }
   const Ssc_Handler = (e)=>{
     let selectedFile = e.target.files[0];
     setSsc_file(selectedFile);
      
   }
   const Child_Handler = (e)=>{
     let selectedFile = e.target.files[0];
     setChild_file(selectedFile);
   
   }
   const Input_Handler = (e)=>{
     let selectedFile = e.target.files[0];
     setInput_File(selectedFile);
    
   }
   const Input2_Handler = (e)=>{
     let selectedFile = e.target.files[0];
     setInput_File2(selectedFile);
    
   }
   const Input3_Handler = (e)=>{
     let selectedFile = e.target.files[0];
     setInput_File3(selectedFile);
  
   }
   const LandordHandler1 =(e)=>{
     let selectedFile = e.target.files[0];
     setlr1(selectedFile);
    }
    const LandordHandler2 =(e)=>{
     let selectedFile = e.target.files[0];
     setlr2(selectedFile);
    }
    const LandordHandler3 =(e)=>{
     let selectedFile = e.target.files[0];
     setlr3(selectedFile);
    }
    const LandordHandler4 =(e)=>{
     let selectedFile = e.target.files[0];
     setlr4(selectedFile);
    }
    const HBlHandler =(e)=>{
     let selectedFile = e.target.files[0];
     setHbl(selectedFile);
    }
    const PaymentHandler =(e)=>{
      let selectedFile = e.target.files[0];
      setPayment_file(selectedFile);
     }
     const MedicalIndHandler =(e)=>{
      let selectedFile = e.target.files[0];
      setMedical_file(selectedFile);
     }
     const MedicalSrHandler =(e)=>{
      let selectedFile = e.target.files[0];
      setMedical_srFile(selectedFile);
     }
     const HandicapHandler =(e)=>{
      let selectedFile = e.target.files[0];
      setHandlicap_file(selectedFile);
     }
     const EducationHandler =(e)=>{
      let selectedFile = e.target.files[0];
      setEducation_File(selectedFile);
     }
     const NpsHandler =(e)=>{
      let selectedFile = e.target.files[0];
      setNps_file(selectedFile);
     }
     const DonationHandler =(e)=>{
      let selectedFile = e.target.files[0];
      setDonation_file(selectedFile);
     }
     const ElectricHandler =(e)=>{
      let selectedFile = e.target.files[0];
      setElectric_file(selectedFile);
     }
     const ExtraHandler =(e)=>{
      let selectedFile = e.target.files[0];
      setExtra_File(selectedFile);
     }
 
 
   const PaySlipUpload =()=>{
     let myform = new FormData();
     const nn = "pay_slip";
     myform.append('fileName', nn);
     myform.append('file', paySlip);
     dispatch(FileUploadedHandler(response._id, myform));
   }
   const Lip_Upload =async()=>{
     const mForm = new FormData();
     mForm.append("fileName", "lip_c_file");
     mForm.append("file", lip_file);
     dispatch(FileUploadedHandler(response._id, mForm));
   }  
   const PPf_Upload =async()=>{
     const mForm = new FormData();
     mForm.append("fileName", "ppf_c_file");
     mForm.append("file", ppf_file);
     dispatch(FileUploadedHandler(response._id, mForm));
   }
   const Ssc_Upload =async()=>{
     const mForm = new FormData();
     mForm.append("fileName", "ssc_file");
     mForm.append("file", ssc_file);
     dispatch(FileUploadedHandler(response._id, mForm));
   }
   const Child_Upload =async()=>{
     const mForm = new FormData();
     mForm.append("fileName", "child_file");
     mForm.append("file", child_file);
     dispatch(FileUploadedHandler(response._id, mForm));
   }
   const Payment_Upload =async()=>{
    const mForm = new FormData();
    mForm.append("fileName", "payment_hbl_file");
    mForm.append("file", payment_file);
    dispatch(FileUploadedHandler(response._id, mForm));
  }
  const Medical_Upload =async()=>{
    const mForm = new FormData();
    mForm.append("fileName", "medical_ind_file");
    mForm.append("file", medical_file);
    dispatch(FileUploadedHandler(response._id, mForm));
  }
  const MedicalSr_Upload =async()=>{
    const mForm = new FormData();
    mForm.append("fileName", "medical_sr_file");
    mForm.append("file", medical_srFile);
    dispatch(FileUploadedHandler(response._id, mForm));
  }
  const Handicap_Upload =async()=>{
    const mForm = new FormData();
    mForm.append("fileName", "handicap_file");
    mForm.append("file", handicap_file);
    dispatch(FileUploadedHandler(response._id, mForm));
  }
  const Education_Upload =async()=>{
    const mForm = new FormData();
    mForm.append("fileName", "education_file");
    mForm.append("file", education_file);
    dispatch(FileUploadedHandler(response._id, mForm));
  }

  const Nps_Upload =async()=>{
    const mForm = new FormData();
    mForm.append("fileName", "nps_file");
    mForm.append("file", nps_file);
    dispatch(FileUploadedHandler(response._id, mForm));
  }
  const Donation_Upload =async()=>{
    const mForm = new FormData();
    mForm.append("fileName", "donation_file");
    mForm.append("file", donation_file);
    dispatch(FileUploadedHandler(response._id, mForm));
  }
  const Electric_Upload =async()=>{
    const mForm = new FormData();
    mForm.append("fileName", "electric_file");
    mForm.append("file", electric_file);
    dispatch(FileUploadedHandler(response._id, mForm));
  }
  const Extra_Upload =async()=>{
    const mForm = new FormData();
    mForm.append("fileName", "extra_file");
    mForm.append("file", extra_file);
    dispatch(FileUploadedHandler(response._id, mForm));
  }

   const Input_Upload =async()=>{
     const mForm = new FormData();
     mForm.append("fileName", "input_file");
     mForm.append("file", input_file);
     dispatch(FileUploadedHandler(response._id, mForm));
   }
   const Input2_Upload =async()=>{
     const mForm = new FormData();
     mForm.append("fileName", "input2_file");
     mForm.append("file", input_file2);
     dispatch(FileUploadedHandler(response._id, mForm));
   }
   const Input3_Upload =async()=>{
     const mForm = new FormData();
     mForm.append("fileName", "input3_file");
     mForm.append("file", input_file3);
     dispatch(FileUploadedHandler(response._id, mForm));
   }
   const LandordFileHandler =()=>{
     const mForm = new FormData();
   mForm.append("fileName", "landords_file1");
   mForm.append("file", lr1);
   dispatch(FileUploadedHandler(response._id, mForm));
    }
    const LandordFileHandler2 =()=>{
     const mForm = new FormData();
   mForm.append("fileName", "landords_file2");
   mForm.append("file", lr2);
   dispatch(FileUploadedHandler(response._id, mForm));
    }
    const LandordFileHandler3 =()=>{
     const mForm = new FormData();
   mForm.append("fileName", "landords_file3");
   mForm.append("file", lr3);
   dispatch(FileUploadedHandler(response._id, mForm));
    }
    const LandordFileHandler4 =()=>{
     const mForm = new FormData();
   mForm.append("fileName", "landords_file4");
   mForm.append("file", lr4);
   dispatch(FileUploadedHandler(response._id, mForm));
    }
    const HBLfileHandler =()=>{
     const mForm = new FormData();
   mForm.append("fileName", "hbl_file");
   mForm.append("file", hbl);
   dispatch(FileUploadedHandler(response._id, mForm));
    }
  return (
    <>
    <Sidebar>
    <AuthHeader />

        {
            loading ? <Loader/> : 
            <>
            {
                response!==undefined ?     <div className="doc_upload">
                <h6>Upload Documents</h6>
                <table>
                 {
                    response.netsal_f13!==0 && 
                     <tr>
                    <td>Pay Slip</td>
                    <td><input type="file" accept="application/pdf" onChange={PaySlipChange} /></td>
                    <td><button className="upload_btn" onClick={PaySlipUpload}>Upload</button></td>
                    {
                      response.pay_slip!==undefined ?   <td className="doc_view"><Link target="_blank" to={response.pay_slip.url} >View</Link></td> : ''
                    }
                  
                  </tr>
                 }
                  {
                    response.lip_c!==0 && <tr>
                    <td>Life Insurance Premium</td>
                    <td> <input type="file" accept="application/pdf" onChange={LipHandler} /></td>
                    <td><button className="upload_btn" onClick={Lip_Upload}>Upload</button></td>
                    {
                      response.lip_file!==undefined ? <td className="doc_view"><Link target="_blank" to={response.lip_c_file.url}>View</Link></td> : ''
                    }
                  </tr>
                  }
                 {
                   response.ppf_c!==0 &&  <tr>
                   <td>PPF</td>
                   <td><input type="file" accept="application/pdf" onChange={Ppf_Handler} /></td>
                   <td><button className="upload_btn" onClick={PPf_Upload}>Upload</button></td>
                   {
                     response.ppf_file!==undefined ? <td className="doc_view"><Link target="_blank" to={response.ppf_c_file.url} >View</Link></td> : ''
                   }
                 </tr>
                 }
                  {
                    response.ssy_c!==0 && <tr>
                    <td>Sukanya Samridhi Yojna Contribution</td>
                    <td><input type="file" accept="application/pdf" onChange={Ssc_Handler} /></td>
                    <td><button className="upload_btn" onClick={Ssc_Upload}>Upload</button></td>
                    {
                      response.ssc_file!==undefined ? <td className="doc_view"><Link target="_blank" to={response.ssc_file.url}>View</Link></td> : ''
                    }
                  </tr>
                  }
                  {
                    response.cs_c!==0 && <tr>
                    <td>Child's School/College Tuition Fee (Max. 02 child)</td>
                    <td><input type="file" accept="application/pdf" onChange={Child_Handler} /></td>
                    <td><button className="upload_btn" onClick={Child_Upload}>Upload</button></td>
                    {
                      response.child_file!==undefined ? <td className="doc_view"><Link target="_blank" to={response.child_file.url}>View</Link></td> : ''
                    }
                  </tr>
                  }
                  {
                    response.input1!==0 && <tr>
                    <td>{response.inp_n1}</td>
                    <td><input type="file" accept="application/pdf" onChange={Input_Handler} /></td>
                    <td><button className="upload_btn" onClick={Input_Upload}>Upload</button></td>
                    {
                      response.input_file!==undefined ? <td className="doc_view"><Link target="_blank" to={response.input_file.url}>View</Link></td> : ''
                    }
                  </tr> 
                  }
                  {
                    response.input2!==0 && <tr>
                    <td>{response.inp_n2}</td>
                    <td><input type="file" accept="application/pdf" onChange={Input2_Handler} /></td>
                    <td><button className="upload_btn" onClick={Input2_Upload}>Upload</button></td>
                    {
                      response.input2_file!==undefined ? <td className="doc_view"><Link target="_blank" to={response.input2_file.url}>View</Link></td> : ''
                    }
                  </tr> 
                  }
                  {
                    response.input3!==0 && <tr>
                    <td>{response.inp_n3}</td>
                    <td><input type="file" accept="application/pdf" onChange={Input3_Handler}/></td>
                    <td><button className="upload_btn" onClick={Input3_Upload}>Upload</button></td>
                   {
                    response.input3_file!==undefined ?  <td className="doc_view"><Link target="_blank" to={response.input3_file.url}>View</Link></td> : ''
                   }
                  </tr> 
                  }

{
    response.phb_c!==0 &&  <tr>
    <td>Payment of House Building Loan </td>
    <td><input type="file" accept="application/pdf" onChange={PaymentHandler} /></td>
    <td><button className="upload_btn" onClick={Payment_Upload}>Upload</button></td>
    {
      response.payment_hbl_file!==undefined ? 
    <td className="doc_view"><Link target="_blank" to={response.payment_hbl_file.url}><IoDocumentTextSharp/></Link></td> : ''
  }
  </tr>
   }

{
    response.mii3_c!==0 &&  <tr>
    <td>Medical Insurance Premium for Individual</td>
    <td><input type="file" accept="application/pdf" onChange={MedicalIndHandler} /></td>
    <td><button className="upload_btn" onClick={Medical_Upload}>Upload</button></td>
    {
      response.medical_ind_file!==undefined ? 
    <td className="doc_view"><Link target="_blank" to={response.medical_ind_file.url}><IoDocumentTextSharp/></Link></td> : ''
  }
  </tr>
   }

{
    response.mis3_c!==0 &&  <tr>
    <td>Medical Insurance Premium for Sr. Citizen</td>
    <td><input type="file" accept="application/pdf" onChange={MedicalSrHandler} /></td>
    <td><button className="upload_btn" onClick={MedicalSr_Upload}>Upload</button></td>
    {
      response.medical_sr_file!==undefined ? 
    <td className="doc_view"><Link target="_blank" to={response.medical_sr_file.url}><IoDocumentTextSharp/></Link></td> : ''
  }
  </tr>
   }

{
    response.disability_c2!==0 &&  <tr>
    <td>For maintenance of handicapped dependent/for own disability</td>
    <td><input type="file" accept="application/pdf" onChange={HandicapHandler} /></td>
    <td><button className="upload_btn" onClick={Handicap_Upload}>Upload</button></td>
    {
      response.handicap_file!==undefined ? 
    <td className="doc_view"><Link target="_blank" to={response.handicap_file.url}><IoDocumentTextSharp/></Link></td> : ''
  }
  </tr>
   }

{
    response.iel_c!==0 &&  <tr>
    <td>Interest on Educational Loan</td>
    <td><input type="file" accept="application/pdf" onChange={EducationHandler} /></td>
    <td><button className="upload_btn" onClick={Education_Upload}>Upload</button></td>
    {
      response.education_file!==undefined ? 
    <td className="doc_view"><Link target="_blank" to={response.education_file.url}><IoDocumentTextSharp/></Link></td> : ''
  }
  </tr>
   }

{
    response.nps_c!==0 &&  <tr>
    <td>NPS/Atal Pension Yojana </td>
    <td><input type="file" accept="application/pdf" onChange={NpsHandler} /></td>
    <td><button className="upload_btn" onClick={Nps_Upload}>Upload</button></td>
    {
      response.nps_file!==undefined ? 
    <td className="doc_view"><Link target="_blank" to={response.nps_file.url}><IoDocumentTextSharp/></Link></td> : ''
  }
  </tr>
   }

{
    response.donation_c!==0 &&  <tr>
    <td>Donation/Charity to registered donatee </td>
    <td><input type="file" accept="application/pdf" onChange={DonationHandler} /></td>
    <td><button className="upload_btn" onClick={Donation_Upload}>Upload</button></td>
    {
      response.donation_file!==undefined ? 
    <td className="doc_view"><Link target="_blank" to={response.donation_file.url}><IoDocumentTextSharp/></Link></td> : ''
  }
  </tr>
   }

{
    response.electric_c!==0 &&  <tr>
    <td>Loan for purchase of Electric Vehicle</td>
    <td><input type="file" accept="application/pdf" onChange={ElectricHandler} /></td>
    <td><button className="upload_btn" onClick={Electric_Upload}>Upload</button></td>
    {
      response.electric_file!==undefined ? 
    <td className="doc_view"><Link target="_blank" to={response.electric_file.url}><IoDocumentTextSharp/></Link></td> : ''
  }
  </tr>
   }
{
    response.ex_t!==0 &&  <tr>
    <td>{response.ex_i}</td>
    <td><input type="file" accept="application/pdf" onChange={ExtraHandler} /></td>
    <td><button className="upload_btn" onClick={Extra_Upload}>Upload</button></td>
    {
      response.extra_file!==undefined ? 
    <td className="doc_view"><Link target="_blank" to={response.extra_file.url}><IoDocumentTextSharp/></Link></td> : ''
  }
  </tr>
   }



                  {
                    response.pan1!=='' && response.name1!=='' && <tr>
                    <td>Landloard 1</td>
                    <td><input type="file" accept="application/pdf" onChange={LandordHandler1} /></td>
                    <td><button className="upload_btn" onClick={LandordFileHandler}>Upload</button></td>
                    {
                      response.landords_file1!==undefined ? 
                    <td className="doc_view"><Link target="_blank" to={response.landords_file1.url} >View</Link></td> : ''
                  }
                  </tr>
                  }
                 {
                  response.pan2!=='' && response.name2!=='' &&  <tr>
                  <td>Landloard 2</td>
                  <td><input type="file" accept="application/pdf" onChange={LandordHandler2} /></td>
                  <td><button className="upload_btn" onClick={LandordFileHandler2}>Upload</button></td>
                  {
                    response.landords_file2!==undefined ? 
                  <td className="doc_view"><Link target="_blank" to={response.landords_file2.url} >View</Link></td> : ''
                }
                </tr>
                 }
                  {
                    response.name3!=='' && response.pan3!=='' && <tr>
                    <td>Landloard 3</td>
                    <td><input type="file" accept="application/pdf" onChange={LandordHandler3} /></td>
                    <td><button className="upload_btn" onClick={LandordFileHandler3}>Upload</button></td>
                    {
                      response.landords_file3!==undefined ? 
                    <td className="doc_view"><Link target="_blank" to={response.landords_file3.url}>View</Link></td> : ''
                  }
                  </tr>
                  }
                  {
                    response.pan4!=='' && response.name4!=='' && <tr>
                    <td>Landloard 4</td>
                    <td><input type="file" accept="application/pdf" onChange={LandordHandler4} /></td>
                    <td><button className="upload_btn" onClick={LandordFileHandler4}>Upload</button></td>
                    {
                      response.landords_file3!==undefined ? 
                    <td className="doc_view"><Link target="_blank" to={response.landords_file3.url}>View</Link></td> : ''
                  }
                  </tr>
                  }
                 {
                  response.interest_hbl_it!==0 &&  <tr>
                  <td>Interest on House Building Loan u/s 24(b)</td>
                  <td><input type="file" accept="application/pdf" onChange={HBlHandler} /></td>
                  <td><button className="upload_btn" onClick={HBLfileHandler}>Upload</button></td>
                  {
                    response.hbl_file!==undefined ? 
                  <td className="doc_view"><Link target="_blank" to={response.hbl_file.url}>View</Link></td> : ''
                }
                </tr>
                 }
                  
                </table>
               </div> : <Loader/>
            }
            
            </>
        }





    </Sidebar>

    
    
    
    
    </>
  )
}

export default DocUpdate