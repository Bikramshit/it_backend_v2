import React, { useEffect, useState } from 'react'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import AuthHeader from '../../Layouts/Header/AuthHeader'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Layouts/Loader/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { FileUploadedHandler, GetSingleResponse, SubmitResponse } from '../../../Redux/Actions/ResponseAction';
import Price from '../../Layouts/Price/Price';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import {IoDocumentTextSharp} from "react-icons/io5"

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
function Preview() {
  const {user, error} = useSelector(state=>state.user);
  const {loading, response, message} = useSelector(state=>state.response);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    dispatch(GetSingleResponse(params.id))
   }, [dispatch, params.id]);


   const SubmitHandler =async()=>{
    let check = document.getElementById("chckbox").checked;
    if(check===true){
      // if(response.netsal_f13!=0 && response.pay_slip===undefined){
      //   toast.error("Please upload the pay slip(s)");
      //   return;
      // }
      // if(response.opting_for==="Old Regime" && response.lip_c_file===undefined && response.lip_c!==0){
      //   toast.error("Please upload the document of Life Insurance Premium ");
      //   return;
      // }
      // else if(response.opting_for==="Old Regime" && response.ppf_c_file===undefined && response.ppf_c!==0){
      //   toast.error("Please upload the document of PPF");
      //   return;
      // }
      // else if(response.opting_for==="Old Regime" && response.ssc_file===undefined && response.ssy_c!==0){
      //   toast.error("Please upload the document of Sukanya Samridhi Yojna Contribution");
      //   return;
      // }
      // else if(response.opting_for==="Old Regime" && response.child_file===undefined && response.cs_c!==0){
      //   toast.error("Please upload the document of Child's School/College Tuition Fee");
      //   return;
      // }
      // // start 
      // else if(response.opting_for==="Old Regime" && response.payment_hbl_file===undefined && response.phb_c!==0){
      //   toast.error("Please upload the document of Child's School/College Tuition Fee");
      //   return;
      // }
      // else if(response.opting_for==="Old Regime" && response.medical_ind_file===undefined && response.mii3_c!==0){
      //   toast.error("Please upload the document of Medical Insurance Premium for Individual ");
      //   return;
      // }
      // else if(response.opting_for==="Old Regime" && response.medical_sr_file===undefined && response.mis3_c!==0){
      //   toast.error("Please upload the document of Medical Insurance Premium for Sr. Citizen");
      //   return;
      // }
      // else if(response.opting_for==="Old Regime" && response.handicap_file===undefined && response.disability_c2!==0){
      //   toast.error("Please upload the document of handicapped dependent/for own disability");
      //   return;
      // }
      // else if(response.opting_for==="Old Regime" && response.education_file===undefined && response.iel_c!==0){
      //   toast.error("Please upload the document of Interest on Educational Loan");
      //   return;
      // }
      // else if(response.opting_for==="Old Regime" && response.nps_file===undefined && response.nps_c!==0){
      //   toast.error("Please upload the document of NPS/Atal Pension Yojana ");
      //   return;
      // }
      // else if(response.opting_for==="Old Regime" && response.donation_file===undefined && response.donation_c!==0){
      //   toast.error("Please upload the document of Donation/Charity to registered donatee");
      //   return;
      // }
      // else if(response.opting_for==="Old Regime" && response.electric_file===undefined && response.electric_c!==0){
      //   toast.error("Please upload the document loan for purchase of Electric Vehicle");
      //   return;
      // }
      // else if(response.opting_for==="Old Regime" && response.extra_file===undefined && response.ex_t!==0){
      //   toast.error(`Please upload the document of ${response.ex_i}`);
      //   return;
      // }
      // // end 
      
      // else if(response.opting_for==="Old Regime" && response.input_file===undefined && response.input1!==0){
      //   toast.error(`Please upload the document of ${response.inp_n1}`);
      //   return;
      // }
      // else if(response.opting_for==="Old Regime" && response.input2_file===undefined && response.input2!==0){
      //   toast.error(`Please upload the document of ${response.inp_n2}`);
      //   return;
      // }
      // else if(response.opting_for==="Old Regime" && response.input3_file===undefined && response.input3!==0){
      //   toast.error(`Please upload the document of ${response.inp_n3}`);
      //   return;
      // }
      // else if(response.pan1!=='' && response.name1!=='' && response.landords_file1===undefined){
      //   toast.error(`Please upload the document of landlord 1`);
      //   return;
      // }
      // else if(response.pan2!=='' && response.name2!=='' && response.landords_file2===undefined){
      //   toast.error(`Please upload the document of landlord 2`);
      //   return;
      // }
      // else if(response.pan4!=='' && response.name4!=='' && response.landords_file4===undefined){
      //   toast.error(`Please upload the document of landlord 4`);
      //   return;
      // }
      // else if(response.pan3!=='' && response.name3!=='' && response.landords_file3===undefined){
      //   toast.error(`Please upload the document of landlord 3`);
      //   return;
      // }
      // else if(response.opting_for==="Old Regime" && response.hbl_file===undefined && response.interest_hbl_it!==0){
      //   toast.error("Please upload the document of Interest on House Building Loan u/s 24(b)");
      //   return;
      // }
      const res = await dispatch(SubmitResponse(params.id));
      if(res===true){
        navigate('/');
      }
    }else {
      toast.error("Please check the checkbox!")
    }

  }

  const getDate =(yourDate)=> {
    if(yourDate===undefined) return;
    yourDate = new Date(yourDate);
    const offset = yourDate.getTimezoneOffset();
    yourDate = new Date(yourDate.getTime() - (offset*60*1000))
    return yourDate.toISOString().split('T')[0]
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




  const SelectHandler = async(e)=>{
 
      navigate(`/${e}/${params.id}`);
    
   }

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
   // start 
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
        <AuthHeader user={user} />
    {
      loading ? <Loader/> :
      <>
      
      {response===undefined ? <Loader/> :<>
      <div>
<div className="chapter_container">

<div className="preview_container">

  
  <div className="letter_input">
  <div className="letter_from">
    From,
  </div>
  <div className="input_div">
    <div className="input_label">
    <label htmlFor="">Name</label>
    <label htmlFor="">Designation</label>
    <label htmlFor="">Department/Section</label>
    <label htmlFor="">Category</label>
    <label htmlFor="">Employer</label>
    <label htmlFor="">Phone No</label>
    <label htmlFor="">Email</label>
    <label htmlFor="">PAN</label>
    <label htmlFor="">Aadhaar No</label>

    </div>
    <div className="input_values">
    <div className="input_value">: {response.name}</div>
    <div className="input_value">: {response.designation}</div>
    <div className="input_value">: {response.department}</div>
    <div className="input_value">: {response.category}</div>
    <div className="input_value">: Aliah University</div>
    <div className="input_value">: {response.phone}</div>
    <div className="input_value">: {response.email}</div>
    <div className="input_value">: {response.pan}</div>
    <div className="input_value">: {response.aadhaar}</div>

    </div>
  </div>


  <div className="letter">
  <span className='to'>To,</span>

    <div className="letter_first">
      <span>Finance Officer</span>
      <span>Aliah University</span>
      <span>  A/27, Action Area II, </span>
      <span>New Town, Rajarhat</span>
      <span>Kolkata-700160</span>

    </div>

    <div className="letter_subject">
      Subject: IT Decleration
      </div>
      <div className="letter_body">
      <span>Sir,</span>
      <div>
        <span>Please find encolsed herewith my proposed Income Tax Calculation Form for <b>FY 2023-24</b> </span>
        <ol>
          <li>I certify that particulars furnished are true and correct to the best of my knowledge and belief</li>
          <li>I authorize the University to recover Income Tax from my salary based on the declaration/documents submitted here</li>
          <li>I certify that these investments/savings have been made/proposed from my own earned income</li>
          <li>Proof of the proposed investments/savings declared will be submitted positively by <b>12.04.2024</b></li>
          <li>I will be solely responsible to CBDT, Income Tax Department, Govt. of India for all information pertaining to income tax assessment</li>
          <li>I will be solely responsible if not paid the proposed investment and will deposit the tax payable and its penalty directly to the Income Tax Department and will furnish the copy of paid challan to collect the Form 16</li>
        </ol>
      </div>
      </div>
    </div>
  </div>


</div>
</div>

{
  response.netsal_s13===0 ? "": <>
  
  <div className="preview_container">
<div className="salary">
    <h6>Salary Statement of Bikram</h6>

    <div className="contract">
       <span> Are you a contractual employee:</span>
       <span> {response.contactual} </span>
    </div>

    <div className="table_div">
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>F.Y 2023-24</th>
                    <td colSpan={9}></td>
                    <th colSpan={2}>A.Y 2024-25</th>
                </tr>
                <tr className='table_bg'>
                    <th className='months'>Months</th>
                    <th className='da_rate'>DA Rate</th>
                    <th className='basic'>Basic/ Consolidate</th>
                    <th className='da'>DA</th>
                    <th className='hra'>HRA</th>
                    <th className='ma'>MA</th>
                    <th className='adjust'>Adjustment</th>
                    <th className='gross'>Gross</th>
                    <th className='ptax'>Profession <br /> Tax</th>
                    <th className='aupf'>AUPF/GPF</th>
                    <th className='sf'> SF/IF</th>
                    <th className='income'>Income Tax</th>
                    <th className='netsal'>Net Salary</th>



                </tr>
            </thead>
            <tbody>
              
                <tr>
                    <th>MAR 2023</th>
                    <td><Price number={response.  rate_s1}/></td>
                    <td><Price number={response. basic_s1}/></td>
                    <td><Price number={response.    da_s1}/></td>
                    <td><Price number={response.   hra_s1}/></td>
                    <td><Price number={response.    ma_s1}/></td>
                    <td><Price number={response.adjust_s1}/></td>
                    <td><Price number={response. gross_s1}/></td>
                    <td><Price number={response.  ptax_s1}/></td>
                    <td><Price number={response.  aupf_s1}/></td>
                    <td><Price number={response.    sf_s1}/></td>
                    <td><Price number={response.income_s1}/></td>
                    <td><Price number={response.netsal_s1}/></td>
                </tr>
                <tr className='table_row_bg'>
                    <th>APR 2023</th>
                    <td><Price number={response.  rate_s2}/></td>
                    <td><Price number={response. basic_s2}/></td>
                    <td><Price number={response.    da_s2}/></td>
                    <td><Price number={response.   hra_s2}/></td>
                    <td><Price number={response.    ma_s2}/></td>
                    <td><Price number={response.adjust_s2}/></td>
                    <td><Price number={response. gross_s2}/></td>
                    <td><Price number={response.  ptax_s2}/></td>
                    <td><Price number={response.  aupf_s2}/></td>
                    <td><Price number={response.    sf_s2}/></td>
                    <td><Price number={response.income_s2}/></td>
                    <td><Price number={response.netsal_s2}/></td>
                </tr>
                <tr>
                    <th>MAY 2023</th>
                    <td><Price number={response.  rate_s3}/></td>
                    <td><Price number={response. basic_s3}/></td>
                    <td><Price number={response.    da_s3}/></td>
                    <td><Price number={response.   hra_s3}/></td>
                    <td><Price number={response.    ma_s3}/></td>
                    <td><Price number={response.adjust_s3}/></td>
                    <td><Price number={response. gross_s3}/></td>
                    <td><Price number={response.  ptax_s3}/></td>
                    <td><Price number={response.  aupf_s3}/></td>
                    <td><Price number={response.    sf_s3}/></td>
                    <td><Price number={response.income_s3}/></td>
                    <td><Price number={response.netsal_s3}/></td>
                </tr>
                <tr className='table_row_bg'>
                    <th>JUN 2023</th>
                    <td><Price number={response.  rate_s4}/></td>
                    <td><Price number={response. basic_s4}/></td>
                    <td><Price number={response.    da_s4}/></td>
                    <td><Price number={response.   hra_s4}/></td>
                    <td><Price number={response.    ma_s4}/></td>
                    <td><Price number={response.adjust_s4}/></td>
                    <td><Price number={response. gross_s4}/></td>
                    <td><Price number={response.  ptax_s4}/></td>
                    <td><Price number={response.  aupf_s4}/></td>
                    <td><Price number={response.    sf_s4}/></td>
                    <td><Price number={response.income_s4}/></td>
                    <td><Price number={response.netsal_s4}/></td>
                </tr>
                <tr>
                    <th>JUL 2023</th>
                    <td><Price number={response.  rate_s5}/></td>
                    <td><Price number={response. basic_s5}/></td>
                    <td><Price number={response.    da_s5}/></td>
                    <td><Price number={response.   hra_s5}/></td>
                    <td><Price number={response.    ma_s5}/></td>
                    <td><Price number={response.adjust_s5}/></td>
                    <td><Price number={response. gross_s5}/></td>
                    <td><Price number={response.  ptax_s5}/></td>
                    <td><Price number={response.  aupf_s5}/></td>
                    <td><Price number={response.    sf_s5}/></td>
                    <td><Price number={response.income_s5}/></td>
                    <td><Price number={response.netsal_s5}/></td>
                </tr>
                <tr className='table_row_bg'>
                    <th>AUG 2023</th>
                    <td><Price number={response.  rate_s6}/></td>
                    <td><Price number={response. basic_s6}/></td>
                    <td><Price number={response.    da_s6}/></td>
                    <td><Price number={response.   hra_s6}/></td>
                    <td><Price number={response.    ma_s6}/></td>
                    <td><Price number={response.adjust_s6}/></td>
                    <td><Price number={response. gross_s6}/></td>
                    <td><Price number={response.  ptax_s6}/></td>
                    <td><Price number={response.  aupf_s6}/></td>
                    <td><Price number={response.    sf_s6}/></td>
                    <td><Price number={response.income_s6}/></td>
                    <td><Price number={response.netsal_s6}/></td>
                </tr>
                <tr>
                    <th>SEP 2023</th>
                    <td><Price number={response.  rate_s7}/></td>
                    <td><Price number={response. basic_s7}/></td>
                    <td><Price number={response.    da_s7}/></td>
                    <td><Price number={response.   hra_s7}/></td>
                    <td><Price number={response.    ma_s7}/></td>
                    <td><Price number={response.adjust_s7}/></td>
                    <td><Price number={response. gross_s7}/></td>
                    <td><Price number={response.  ptax_s7}/></td>
                    <td><Price number={response.  aupf_s7}/></td>
                    <td><Price number={response.    sf_s7}/></td>
                    <td><Price number={response.income_s7}/></td>
                    <td><Price number={response.netsal_s7}/></td>
                </tr>
                <tr className='table_row_bg'>
                    <th>OCT 2023</th>
                    <td><Price number={response.  rate_s8}/></td>
                    <td><Price number={response. basic_s8}/></td>
                    <td><Price number={response.    da_s8}/></td>
                    <td><Price number={response.   hra_s8}/></td>
                    <td><Price number={response.    ma_s8}/></td>
                    <td><Price number={response.adjust_s8}/></td>
                    <td><Price number={response. gross_s8}/></td>
                    <td><Price number={response.  ptax_s8}/></td>
                    <td><Price number={response.  aupf_s8}/></td>
                    <td><Price number={response.    sf_s8}/></td>
                    <td><Price number={response.income_s8}/></td>
                    <td><Price number={response.netsal_s8}/></td>
                </tr>
                <tr>
                    <th>NOV 2023</th>
                    <td><Price number={response.  rate_s9}/></td>
                    <td><Price number={response. basic_s9}/></td>
                    <td><Price number={response.    da_s9}/></td>
                    <td><Price number={response.   hra_s9}/></td>
                    <td><Price number={response.    ma_s9}/></td>
                    <td><Price number={response.adjust_s9}/></td>
                    <td><Price number={response. gross_s9}/></td>
                    <td><Price number={response.  ptax_s9}/></td>
                    <td><Price number={response.  aupf_s9}/></td>
                    <td><Price number={response.    sf_s9}/></td>
                    <td><Price number={response.income_s9}/></td>
                    <td><Price number={response.netsal_s9}/></td>
                </tr>
                <tr className='table_row_bg'>
                    <th>DEC 2023</th>
                    <td><Price number={response.  rate_s10}/></td>
                    <td><Price number={response. basic_s10}/></td>
                    <td><Price number={response.    da_s10}/></td>
                    <td><Price number={response.   hra_s10}/></td>
                    <td><Price number={response.    ma_s10}/></td>
                    <td><Price number={response.adjust_s10}/></td>
                    <td><Price number={response. gross_s10}/></td>
                    <td><Price number={response.  ptax_s10}/></td>
                    <td><Price number={response.  aupf_s10}/></td>
                    <td><Price number={response.    sf_s10}/></td>
                    <td><Price number={response.income_s10}/></td>
                    <td><Price number={response.netsal_s10}/></td>
                </tr>
                <tr>
                    <th>JAN 2024</th>
                    <td><Price number={response.  rate_s11}/></td>
                    <td><Price number={response. basic_s11}/></td>
                    <td><Price number={response.    da_s11}/></td>
                    <td><Price number={response.   hra_s11}/></td>
                    <td><Price number={response.    ma_s11}/></td>
                    <td><Price number={response.adjust_s11}/></td>
                    <td><Price number={response. gross_s11}/></td>
                    <td><Price number={response.  ptax_s11}/></td>
                    <td><Price number={response.  aupf_s11}/></td>
                    <td><Price number={response.    sf_s11}/></td>
                    <td><Price number={response.income_s11}/></td>
                    <td><Price number={response.netsal_s11}/></td>
                </tr>
                <tr className='table_row_bg'>
                    <th>FEB 2024</th>
                    <td><Price number={response.  rate_s12}/></td>
                    <td><Price number={response. basic_s12}/></td>
                    <td><Price number={response.    da_s12}/></td>
                    <td><Price number={response.   hra_s12}/></td>
                    <td><Price number={response.    ma_s12}/></td>
                    <td><Price number={response.adjust_s12}/></td>
                    <td><Price number={response. gross_s12}/></td>
                    <td><Price number={response.  ptax_s12}/></td>
                    <td><Price number={response.  aupf_s12}/></td>
                    <td><Price number={response.    sf_s12}/></td>
                    <td><Price number={response.income_s12}/></td>
                    <td><Price number={response.netsal_s12}/></td>
                </tr>
                <tr className='table_bg' id='total_sal'>
                    <th> Total</th>
                    <th><Price number={response.  rate_s13}/></th>
                    <th><Price number={response. basic_s13}/></th>
                    <th><Price number={response.    da_s13}/></th>
                    <th><Price number={response.   hra_s13}/></th>
                    <th><Price number={response.    ma_s13}/></th>
                    <th><Price number={response.adjust_s13}/></th>
                    <th><Price number={response. gross_s13}/></th>
                    <th><Price number={response.  ptax_s13}/></th>
                    <th><Price number={response.  aupf_s13}/></th>
                    <th><Price number={response.    sf_s13}/></th>
                    <th><Price number={response.income_s13}/></th>
                    <th><Price number={response.netsal_s13}/></th>  
                </tr>
            </tbody>
        </table>
    </div>

<div className="sal_footer">
    <div className="sal_note">
        <span>Note:</span>
        <ol>
            <li>Enter the amount for March 2023</li>
            <li>In HRA column, enter the amount for March and July</li>
            <li>In Adjustment column enter the monthly extra drawal amount, if any.</li>
        </ol>
    </div>

  {
    response.nas_s!==0 ? 
    
    <div className="sal_arr">
        <div className="sal_table">
        <table>
            <tr className='arr_title table_bg'>
                <th colSpan={2}>Arrear Salary</th>
            </tr>
            <tr>
                <td className='td'>Gross Arrear Salary</td>
                <td id='as_td'><Price number={response.gas_s}/></td>
            </tr>
            <tr>
                <td className='td'>Less: Profession Tax</td>
                <td id='as_td'><Price number={response.lpt_s}/></td>
            </tr>
            <tr>
                <td className='td'>Less: TDS</td>
                <td id='as_td'><Price number={response.ltds_s}/></td>
            </tr>
            <tr className='table_bg'>
                <th className='td'>Net Arrear Salary</th>
                <th id='as_td'  ><Price number={response.nas_s}/></th>
            </tr>
        </table>
        </div>
    </div>
    
    : ''
  }


    
</div>



</div>
</div>
  </>
}

      {
        response.netsal_f13===0 ? "" : <>
        
        
        <div className="preview_container">
<div className="salary">
   <div className="form_header">
   <h4>Form No 12B</h4>
   <span>[See Rule 26A]</span>
   <h6>Form for furnishing details of Income Tax under section 192(2) for the year ending 31st March, 2023</h6>
   <p>Details to be furnished by the newly joined employee during the year</p>
   </div>


    <div className="table_div">
      <p>Name: Bikram Shit</p>
        <table>
            <thead>
                
                <tr className='table_bg'>
                    <th className='months'>Months</th>
                    <th className='da_rate'>DA Rate</th>
                    <th className='basic'>Basic/ Consolidate</th>
                    <th className='da'>DA</th>
                    <th className='hra'>HRA</th>
                    <th className='ma'>MA</th>
                    <th className='gross'>Gross</th>
                    <th className='ptax'>Profession <br /> Tax</th>
                    <th className='aupf'>GPF/EPF</th>
                    <th className='sf'> SF/IF</th>
                    <th className='income'>Income Tax</th>
                    <th className='netsal'>Net Salary</th>



                </tr>
            </thead>
            <tbody>
              
                <tr>
                    <th>MAR 2023</th>
                    <td><Price number={response.  rate_f1}/></td>
                    <td><Price number={response. basic_f1}/></td>
                    <td><Price number={response.    da_f1}/></td>
                    <td><Price number={response.   hra_f1}/></td>
                    <td><Price number={response.    ma_f1}/></td>
                    <td><Price number={response. gross_f1}/></td>
                    <td><Price number={response.  ptax_f1}/></td>
                    <td><Price number={response.  aupf_f1}/></td>
                    <td><Price number={response.    sf_f1}/></td>
                    <td><Price number={response.income_f1}/></td>
                    <td><Price number={response.netsal_f1}/></td>
                </tr>
                <tr className='table_row_bg'>
                    <th>APR 2023</th>
                    <td><Price number={response.  rate_f2}/></td>
                    <td><Price number={response. basic_f2}/></td>
                    <td><Price number={response.    da_f2}/></td>
                    <td><Price number={response.   hra_f2}/></td>
                    <td><Price number={response.    ma_f2}/></td>
                    <td><Price number={response. gross_f2}/></td>
                    <td><Price number={response.  ptax_f2}/></td>
                    <td><Price number={response.  aupf_f2}/></td>
                    <td><Price number={response.    sf_f2}/></td>
                    <td><Price number={response.income_f2}/></td>
                    <td><Price number={response.netsal_f2}/></td>
                </tr>
                <tr>
                    <th>MAY 2023</th>
                    <td><Price number={response.  rate_f3}/></td>
                    <td><Price number={response. basic_f3}/></td>
                    <td><Price number={response.    da_f3}/></td>
                    <td><Price number={response.   hra_f3}/></td>
                    <td><Price number={response.    ma_f3}/></td>
                    <td><Price number={response. gross_f3}/></td>
                    <td><Price number={response.  ptax_f3}/></td>
                    <td><Price number={response.  aupf_f3}/></td>
                    <td><Price number={response.    sf_f3}/></td>
                    <td><Price number={response.income_f3}/></td>
                    <td><Price number={response.netsal_f3}/></td>
                </tr>
                <tr className='table_row_bg'>
                    <th>JUN 2023</th>
                    <td><Price number={response.  rate_f4}/></td>
                    <td><Price number={response. basic_f4}/></td>
                    <td><Price number={response.    da_f4}/></td>
                    <td><Price number={response.   hra_f4}/></td>
                    <td><Price number={response.    ma_f4}/></td>
                    <td><Price number={response. gross_f4}/></td>
                    <td><Price number={response.  ptax_f4}/></td>
                    <td><Price number={response.  aupf_f4}/></td>
                    <td><Price number={response.    sf_f4}/></td>
                    <td><Price number={response.income_f4}/></td>
                    <td><Price number={response.netsal_f4}/></td>
                </tr>
                <tr>
                    <th>JUL 2023</th>
                    <td><Price number={response.  rate_f5}/></td>
                    <td><Price number={response. basic_f5}/></td>
                    <td><Price number={response.    da_f5}/></td>
                    <td><Price number={response.   hra_f5}/></td>
                    <td><Price number={response.    ma_f5}/></td>
                    <td><Price number={response. gross_f5}/></td>
                    <td><Price number={response.  ptax_f5}/></td>
                    <td><Price number={response.  aupf_f5}/></td>
                    <td><Price number={response.    sf_f5}/></td>
                    <td><Price number={response.income_f5}/></td>
                    <td><Price number={response.netsal_f5}/></td>
                </tr>
                <tr className='table_row_bg'>
                    <th>AUG 2023</th>
                    <td><Price number={response.  rate_f6}/></td>
                    <td><Price number={response. basic_f6}/></td>
                    <td><Price number={response.    da_f6}/></td>
                    <td><Price number={response.   hra_f6}/></td>
                    <td><Price number={response.    ma_f6}/></td>
                    <td><Price number={response. gross_f6}/></td>
                    <td><Price number={response.  ptax_f6}/></td>
                    <td><Price number={response.  aupf_f6}/></td>
                    <td><Price number={response.    sf_f6}/></td>
                    <td><Price number={response.income_f6}/></td>
                    <td><Price number={response.netsal_f6}/></td>
                </tr>
                <tr>
                    <th>SEP 2023</th>
                    <td><Price number={response.  rate_f7}/></td>
                    <td><Price number={response. basic_f7}/></td>
                    <td><Price number={response.    da_f7}/></td>
                    <td><Price number={response.   hra_f7}/></td>
                    <td><Price number={response.    ma_f7}/></td>
                    <td><Price number={response. gross_f7}/></td>
                    <td><Price number={response.  ptax_f7}/></td>
                    <td><Price number={response.  aupf_f7}/></td>
                    <td><Price number={response.    sf_f7}/></td>
                    <td><Price number={response.income_f7}/></td>
                    <td><Price number={response.netsal_f7}/></td>
                </tr>
                <tr className='table_row_bg'>
                    <th>OCT 2023</th>
                    <td><Price number={response.  rate_f8}/></td>
                    <td><Price number={response. basic_f8}/></td>
                    <td><Price number={response.    da_f8}/></td>
                    <td><Price number={response.   hra_f8}/></td>
                    <td><Price number={response.    ma_f8}/></td>
                    <td><Price number={response. gross_f8}/></td>
                    <td><Price number={response.  ptax_f8}/></td>
                    <td><Price number={response.  aupf_f8}/></td>
                    <td><Price number={response.    sf_f8}/></td>
                    <td><Price number={response.income_f8}/></td>
                    <td><Price number={response.netsal_f8}/></td>
                </tr>
                <tr>
                    <th>NOV 2023</th>
                    <td><Price number={response.  rate_f9}/></td>
                    <td><Price number={response. basic_f9}/></td>
                    <td><Price number={response.    da_f9}/></td>
                    <td><Price number={response.   hra_f9}/></td>
                    <td><Price number={response.    ma_f9}/></td>
                    <td><Price number={response. gross_f9}/></td>
                    <td><Price number={response.  ptax_f9}/></td>
                    <td><Price number={response.  aupf_f9}/></td>
                    <td><Price number={response.    sf_f9}/></td>
                    <td><Price number={response.income_f9}/></td>
                    <td><Price number={response.netsal_f9}/></td>
                </tr>
                <tr className='table_row_bg'>
                    <th>DEC 2023</th>
                    <td><Price number={response.  rate_f10}/></td>
                    <td><Price number={response. basic_f10}/></td>
                    <td><Price number={response.    da_f10}/></td>
                    <td><Price number={response.   hra_f10}/></td>
                    <td><Price number={response.    ma_f10}/></td>
                    <td><Price number={response. gross_f10}/></td>
                    <td><Price number={response.  ptax_f10}/></td>
                    <td><Price number={response.  aupf_f10}/></td>
                    <td><Price number={response.    sf_f10}/></td>
                    <td><Price number={response.income_f10}/></td>
                    <td><Price number={response.netsal_f10}/></td>
                </tr>
                <tr>
                    <th>JAN 2024</th>
                    <td><Price number={response.  rate_f11}/></td>
                    <td><Price number={response. basic_f11}/></td>
                    <td><Price number={response.    da_f11}/></td>
                    <td><Price number={response.   hra_f11}/></td>
                    <td><Price number={response.    ma_f11}/></td>
                    <td><Price number={response. gross_f11}/></td>
                    <td><Price number={response.  ptax_f11}/></td>
                    <td><Price number={response.  aupf_f11}/></td>
                    <td><Price number={response.    sf_f11}/></td>
                    <td><Price number={response.income_f11}/></td>
                    <td><Price number={response.netsal_f11}/></td>
                </tr>
                <tr className='table_row_bg'>
                    <th>FEB 2024</th>
                    <td><Price number={response.  rate_f12}/></td>
                    <td><Price number={response. basic_f12}/></td>
                    <td><Price number={response.    da_f12}/></td>
                    <td><Price number={response.   hra_f12}/></td>
                    <td><Price number={response.    ma_f12}/></td>
                    <td><Price number={response. gross_f12}/></td>
                    <td><Price number={response.  ptax_f12}/></td>
                    <td><Price number={response.  aupf_f12}/></td>
                    <td><Price number={response.    sf_f12}/></td>
                    <td><Price number={response.income_f12}/></td>
                    <td><Price number={response.netsal_f12}/></td>
                </tr>
                <tr className='table_bg'>
                    <th> Total</th>
                    <th><Price number={response.  rate_f13}/></th>
                    <th><Price number={response. basic_f13}/></th>
                    <th><Price number={response.    da_f13}/></th>
                    <th><Price number={response.   hra_f13}/></th>
                    <th><Price number={response.    ma_f13}/></th>
                    <th><Price number={response. gross_f13}/></th>
                    <th><Price number={response.  ptax_f13}/></th>
                    <th><Price number={response.  aupf_f13}/></th>
                    <th><Price number={response.    sf_f13}/></th>
                    <th><Price number={response.income_f13}/></th>
                    <th><Price number={response.netsal_f13}/></th>  
                </tr>
            </tbody>
        </table>
    </div>

<div className="sal_footer">
    <div className="sal_note">
        <h6>Enclosure:</h6>
       <ol>
        <li>Pay slip(s)</li>
       </ol>
        
    </div>

    {response.nas_f!==0 ?
    
    <div className="sal_arr">
    <div className="sal_table">
    <table>
        <tr className='arr_title table_bg'>
            <th colSpan={2}>Arrear Salary</th>
        </tr>
        <tr>
            <td className='td'>Gross Arrear Salary</td>
            <td><Price number={response.  gas_f}/></td>
        </tr>
        <tr>
            <td className='td'>Less: Profession Tax</td>
            <td><Price number={response.  lpt_f}/></td>
        </tr>
        <tr>
            <td className='td'>Less: TDS</td>
            <td><Price number={response.  ltds_f}/></td>
        </tr>
        <tr className='table_bg'>
            <th className='td'>Net Arrear Salary</th>
            <th><Price number={response.  nas_f}/></th>
        </tr>
    </table>
    </div>
</div>   
    
    : ''}



</div>



</div>
</div>
        </>
      }
<div className="">
<div className="chapter_container">
      <h4 className='text-center text-decoration-underline'>Chapter VI</h4>

    <div className="chapter">
      
      <table >
        <tr className='chp_heading table_bg'>
          <th>u/s</th>
          <th>Particulars</th>
          <th className='damount'>Actual Amount</th>
          <th className='damount'>Deductible Amount</th>
        </tr>
        <tr>
           <th rowSpan={12} className='table_row_bg'>80C</th>
          <td>AUPF/ GPF/ PF transferred</td>
          <td ><Price number={response.aupf_c}/></td>
            <td rowSpan={11} className='table_row_bg'></td> 
         
        </tr>
        <tr className='table_row_bg'>
          <td>EPF/GPF deducted from Ex-employer</td>
          <td><Price number={response.epf_c}/></td>
        </tr>
        <tr >
          <td>SF/IF</td>
          <td><Price number={response.sf_c}/></td>
        </tr>
        <tr className='table_row_bg'>
          <td>Life Insurance Premium</td>
          <td><Price number={response.lip_c}/></td>
        </tr>
        <tr>
          <td>PPF</td>
          <td><Price number={response.ppf_c}/></td>
        </tr>
        <tr className='table_row_bg'>
          <td>Sukanya Samridhi Yojna Contribution</td>
          <td><Price number={response.ssy_c}/></td>
        </tr>
        <tr>
          <td>Child's School/College Tuition Fee (Max. 02 child)</td>
          <td><Price number={response.cs_c}/></td>
        </tr>
        <tr className='table_row_bg'>
          <td>Payment of House Building Loan (Principle Only)</td>
          <td><Price number={response.phb_c}/></td>
        </tr>
       <tr>
          <td>{response.inp_n1}</td>
          <td><Price number={response.input1}/></td>
        </tr> 
        
        
      <tr className='table_row_bg'>
        <td>{response.inp_n2}</td>
        <td><Price number={response.input2}/></td>
      </tr>
     <tr>
        <td>{response.inp_n3}</td>
        <td><Price number={response.input3}/></td>
      </tr>
       
        <tr className='table_row_bg'>
          <th>Deductible</th>
          <td><Price number={response.deductible_80c}/></td>
          <td><Price number={response.deductible_80c2}/></td>
        </tr>
        <tr>
          <th rowSpan={4}>80D</th>
          <td>
            <div className="chp">
              <div className="chp_child">
                  <div className="head">
                  Head
                  </div>

              </div>
              <div className="chp_child1"> Assessee, Spouse, & <br />
Independent Children</div>
            </div>
          </td>
          <td>Assessee's Parents</td>
          <td></td>
        </tr>
        <tr className='table_row_bg'>
          <td>
          <div className="chp">
              <div className="chp_child"> Medical Insurance Premium for Individual <br />
(mode other than cash, maximum Rs.25000/- in each case)</div>
              <div className="chp_child chapt_in"> 
              <Price number={response.mii1_c}/>
              </div>
            </div>
         
          </td>
          <td className='chapt_in'><Price number={response.mii2_c}/></td>
          <td className='chapt_in'><Price number={response.mii3_c}/></td>
        </tr>
        <tr>
          <td>
          <div className="chp">
              <div className="chp_child"> Medical Insurance Premium for Sr. Citizen <br />
(mode other than cash, maximum Rs.50000/- in each case )</div>
              <div className="chp_child chapt_in"><Price number={response.mis1_c}/> </div>
            </div>
         
          </td>
          <td className='chapt_in'>
          <Price number={response.mis2_c}/>
          </td>
          <td className='chapt_in'>
          <Price number={response.mis3_c}/>
          </td>
        </tr>
        <tr className='table_row_bg'>
          <th>Deductible</th>
          <td></td>
          <td><Price number={response.deductible_80d}/></td>
        </tr>
        <tr>
          <th>80DD <br /> 80U</th>
          <td>For maintenance of handicapped dependent/for own disability
Rs.75,000/- for disability over 40% & Rs.1,25,000/- for severe disability over 80%</td>
            <td className='chapt_in'>
              {response.disability_c}
            </td>
            <td className='chapt_in'>
            <Price number={response.disability_c2}/>
            </td>
        </tr>
        <tr className='table_row_bg'>
          <th>80E</th>
          <td>Interest on Educational Loan (Max Rs.40,000)</td>
          <td></td>
          <td><Price number={response.iel_c}/></td>
        </tr>

        <tr>
          <th>80CCD (1B)</th>
          <td>NPS/Atal Pension Yojana (Max Rs.50,000)</td>
          <td></td>
          <td><Price number={response.nps_c}/></td>
        </tr>
        <tr className='table_row_bg'>
          <th>80EE</th>
          <td>Interest in HBL (Max Rs.50,000)</td>
          <td></td>
          <td><Price number={response.ihbl_c}/></td>
        </tr>
        <tr>
          <th>80EEA</th>
          <td>Interest in HBL (Max Rs.1,50,000)</td>
          <td></td>
          <td><Price number={response.ihbl_c2}/></td>
          
        </tr>
        <tr className='table_row_bg'>
          <th>80TTA</th>
          <td>Interest on Savings Bank A/c (for Individual - Maximum Rs.10,000/-)</td>
          <td></td>
          <td><Price number={response.isb_c}/></td>
        </tr>
        <tr>
          <th>80TTB</th>
          <td>Interest on Savings Bank A/c (for Sr. Citizen - Maximum Rs.50,000/-)</td>
          <td></td>
          <td><Price number={response.isb_c2}/></td>
        </tr>
        <tr className='table_row_bg'>
          <th>80G</th>
          <td>Donation/Charity to registered donatee (Refer to IT website for any clarification)</td>
          <td></td>
          <td><Price number={response.donation_c}/></td>
        </tr>
        <tr>
          <th>80EEB</th>
          <td>Deduction towards interest payments made on loan for purchase of Electric Vehicle</td>
          <td></td>
          <td><Price number={response.electric_c}/></td>
        </tr>
        <tr className='table_row_bg'>
          <td className='us'></td>
          <td>{response.ex_sec}</td>
          <td>{response.ex_i}</td>
          <td><Price number={response.ex_t}/></td>
        </tr>
        <tr className='table_bg'>
          <th colSpan={2}>Total</th>
          <td></td>
          <th><Price number={response.chapter_total}/></th>
        </tr>
      </table>
    </div>



    </div>

    </div>


{/* {
  response.rent_e===0 && response.rent_n===0 ? '' : 
} */}
<div className="">
<div className="chapter_container">
<h4 className='text-center text-decoration-underline hra_h'>HRA Exemption u/s 10(13A)</h4>
    <div className="hra_body">
        <div className="hra_child">
            <table>
                <tr className='table_bg'>
                    <th colSpan={2} className='tr'>For Existing Employee</th>
                </tr>
                <tr>
                    <th className='tr'>Particulars</th>
                    <th className='tr'>Amount</th>
                </tr>
                <tr className='table_row_bg'>
                    <td> Rent Paid</td>
                    <td><Price number={response.rent_e}/></td>
                </tr>
                <tr>
                    <td>1. Rent Paid - 10% of Salary</td>
                    <td><Price number={response.r_ten_e}/></td>
                </tr>
                <tr className='table_row_bg'>
                    <td>2. (i) 50% of (BP+DA) for those living in metro cities</td>
                    <td><Price number={response.living_m_e}/></td>
                </tr>
                <tr>
                    <td> (ii) 40% of (BP+DA) for those living in non-metro cities</td>
                    <td className='chapt_in'><Price number={response.non_living_m_e}/></td>
                </tr>
                <tr className='table_row_bg'>
                    <td>3. Actual HRA Received1.Rent Paid - 10% of Salary</td>
                    <td><Price number={response.actual_hra_e}/></td>
                </tr>
                <tr>
                    <td>HRA Exempt u/s 10 (13A)</td>
                    <td><Price number={response.hra_exempt_e}/></td>
                </tr>
                <tr className='table_row_bg'>
                    <td>Do you live in Delhi, Mumbai, Kolkata or channai?</td>
                    <td> {response.live_in_e}</td>
                </tr>


            </table>
        </div>
        <div className="hra_child1">
        <table>
                <tr className='table_bg'>
                    <th colSpan={2} className='tr'>For New Employee</th>
                </tr>
                <tr>
                    <th className='tr'>Particulars</th>
                    <th className='tr'>Amount</th>
                </tr>
                <tr className='table_row_bg'>
                    <td> Rent Paid</td>
                    <td><Price number={response.rent_n}/></td>
                </tr>
                <tr>
                    <td>1. Rent Paid - 10% of Salary</td>
                    <td><Price number={response.r_ten_n}/></td>
                </tr>
                <tr className='table_row_bg'>
                    <td>2. (i) 50% of (BP+DA) for those living in metro cities</td>
                    <td><Price number={response.living_m_n}/></td>
                </tr>
                <tr>
                    <td> (ii) 40% of (BP+DA) for those living in non-metro cities</td>
                    <td className='chapt_in'><Price number={response.non_living_m_n}/></td>
                </tr>
                <tr className='table_row_bg'>
                    <td>3. Actual HRA Received1.Rent Paid - 10% of Salary</td>
                    <td><Price number={response.actual_hra_n}/></td>
                </tr>
                <tr>
                    <td>HRA Exempt u/s 10 (13A)</td>
                    <td><Price number={response.hra_exempt_n}/></td>
                </tr>
                <tr className='table_row_bg'>
                    <td>Do you live in Delhi, Mumbai, Kolkata or channai?</td>
                    <td> {response.live_in_n}</td>
                </tr>


            </table>
        </div>
    </div>

<div className="one_lk">
    <table className=''>
        <tr className='table_bg'>
            <th>Whether aggregate rent payment exceeds rupees one lakh</th>
            <td>{response.exceed_lakh}</td>
        </tr>

        
    </table>


</div>

<div className="landlord">
<table>
  {
    response.pan1!=='' && response.name1!=='' ? 
    <>
<span>Please fill the landord(s) details :</span>

    <tr  className='table_row_bg'>
        <td>PAN of Landord 1</td>
        <td>{response.pan1}</td>
        <td>Name of Landord 1</td>
        <td>{response.name1}</td>
    </tr>
    </>
    : ''
  }
    
  {
    response.pan2!=='' && response.name2!=='' ? <> 
        <tr>
        <td>PAN of Landord 2</td>
        <td>{response.pan2} </td>
        <td>Name of Landord 2</td>
        <td>{response.name2}</td>
    </tr>
    </> : ''
  }

  {
    response.pan3!=='' && response.name3!=='' ? <> 
        <tr className='table_row_bg'>
        <td>PAN of Landord 3</td>
        <td>{response.pan3}</td>
        <td>Name of Landord 3</td>
        <td>{response.name3}</td>
    </tr>
    </> : ''
  }

  {
    response.pan4!=='' && response.name4!=='' ?     <tr>
    <td>PAN of Landord 4</td>
    <td>{response.pan4}</td>
    <td>Name of Landord 4</td>
    <td>{response.name4}</td>
</tr> : ''
  }

</table>
</div>



</div>
</div>

<div className="chapter_container">
<h4 className='text-center text-decoration-underline'>Income Tax Compuation Form</h4>

<div className="table_div" id='it_table'>
      <table>
        <tr className='table_bg'>
          <th>Name</th>
          <td>{response.name}</td>
          <th>D.O.B</th>
          <td>{getDate(response.dob)}</td>
          <th>DOR</th>
          <td>{getDate(response.dor)}</td>
        </tr>
        <tr className='table_bg'>
          <th>PAN</th>
          <td>{response.pan}</td>
          <th>Aadhaar</th>
          <td>{response.aadhaar}</td>
          <th>Status</th>
          <td>{response.it_status}</td>
        </tr>

        </table>

        <div className="fyay">
          <div className="fy_child">Financial Year: {response.financial_year}</div>
          <div className="fy_child">Assessment Year: {response.assessment_year} </div>
        </div>

        <div className="it_table">
          <table>
            <tr className='table_bg'>
              <th className='tr'>Sl No</th>
              <th className='tr'>Particulars</th>
              <th className='tr'>Old Regime</th>
              <th className='tr'>New Regime</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Gross Salary</td>
              <td><Price number={response.gross_it_o} /></td>
              <td><Price number={response.gross_it_n} /></td>
            </tr>
            <tr className='table_row_bg'>
              <td>2</td>
              <td><div className="bonus">
                <div>Bonus</div>
                <div><Price number={response.bonus_it} /></div>
                </div></td>
              <td><Price number={response.bonus_it_o} /></td>
              <td><Price number={response.bonus_it_n} /></td>
            </tr>
            <tr>
              <td>3</td>
              <td><div className="bonus">
                <div>Honorarium (AUAT/Dean/Hostel,Exam, etc)</div>
                <div>
                <Price number={response.hono_it} />
                </div>
                </div></td>
              <td>
              <Price number={response.honoo_it} />
              </td>
              <td>
              <Price number={response.honoo_it2} />
              </td>
            </tr>
            <tr  className='table_row_bg'>
              <td>4</td>
              <td>Current Employer Gross Salary	</td>
              <td>
              <Price number={response.current_it_o} />
              </td>
              <td>
              <Price number={response.current_it_n} />
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Previous Employer Gross Salary</td>
              <td>
              <Price number={response.previous_it_o} />
              </td>
              <td>
              <Price number={response.previous_it_n} />
              </td>
            </tr>
            <tr  className='table_row_bg'>
              <td>6</td>
              <td>Pension</td>
              <td>
              <Price number={response.pension_it_o} />
              </td>
              <td>
              <Price number={response.pension_it_n} />
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>	Cuommuted Value of Pension</td>
              <td>
              <Price number={response.cvp_it_o} />
              </td>
              <td>
              <Price number={response.cvp_it_n} />
              </td>
            </tr>
            <tr  className='table_row_bg'>
              <td rowSpan={3}>8</td>
              <td>Less: Allowance under section 10</td>
              <td>
              </td>
              <td>
              </td>
            </tr>
            <tr>
              <td>10 (10A) - Commuted value of Pension</td>
              <td>
              <Price number={response.ten_a__it_o} />
              </td>
              <td>
              <Price number={response.ten_a__it_n} />
              </td>
            </tr>
            <tr  className='table_row_bg'>
              <td>	10 (13A) - HRA</td>
              <td>
              <Price number={response.thirteen_a__it_o} />
              </td>
              <td>
              <Price number={response.thirteen_a__it_n} />
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>Gross Salary and Pension</td>
              <td>
              <Price number={response.gsp_it_o} />
              </td>
              <td>
              <Price number={response.gsp_it_n} />
              </td>
            </tr>
            <tr  className='table_row_bg'>
              <td rowSpan={4}>10</td>
              <td>Less: Deduction u/s 16:</td>
              <td>
              </td>
              <td>
              </td>
            </tr>
            <tr>
              <td>Tax on Employment (16iii)</td>
              <td>
              </td>
              <td>
              </td>
            </tr>
            <tr  className='table_row_bg'>
              <td>
              <div className="bonus">
                <div className="bonus">
                  <div className="">Current Employer</div>
                  <div className="">
                  <Price number={response.c_employer_it} />
                  </div>
                </div>
                <div className="bonus">
                  <div className="">Previous Employer</div>
                  <div className="">
                  <Price number={response.p_employer_it} />
                  </div>
                </div>
              </div>
              </td>
              <td><Price number={response.employer_it_o} /></td>
              <td><Price number={response.employer_it_n} /></td>
            </tr>
            <tr>
              <td>	Standard Deduction u/s (16ia)</td>
              <td><Price number={response.s_deduction_it_o} /></td>
              <td><Price number={response.s_deduction_it_n} /></td>
            </tr>
            <tr  className='table_row_bg'>
              <td>11</td>
              <td>Net Salary and Pension</td>
              <td><Price number={response.net_sp_it_o} /></td>
              <td><Price number={response.net_sp_it_n} /></td>
            </tr>
            <tr>
              <td>12</td>
              <td>
              <div className="bonus">
                <div>	
Interest on House Building Loan u/s 24(b) </div>
                <div><Price number={response.interest_hbl_it} /></div>
                </div>
              </td>
              <td><Price number={response.interest_hbl_it_o} /></td>
              <td><Price number={response.interest_hbl_it_n} /></td>
            </tr>
            <tr className='table_row_bg'> 
              <td rowSpan={2}>13</td>
              <td >Income from other Sources:</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div className="bonus">
                  <div className="bonus">
                    <div>Savings Bank Interest: </div>
                    <div className=''><Price number={response.savings_interest_it} /></div>
                  </div>
                  <div className="bonus">
                    <div>Any Other Income: </div>
                    <div><Price number={response.other_income_it} /></div>
                  </div>
                </div>
              </td>
              <td><Price number={response.income_it_o} /></td>
              <td><Price number={response.income_it_n} /></td>
            </tr>
            <tr className='table_row_bg'>
              <td>14</td>
              <td>Gross Income</td>
              <td><Price number={response.gross_income_it_o} /></td>
              <td><Price number={response.gross_income_it_n} /></td>
            </tr>
            <tr>
              <td>15</td>
              <td>Total Deductions under Chapter VIA</td>
              <td><Price number={response.chapter_total} /></td>
              <td><Price number={response.total_deduction_it_n} /></td>
            </tr>
            <tr className='table_row_bg'>
              <td>16</td>
              <td>Net Income</td>
              <td><Price number={response.net_income_it_o} /></td>
              <td><Price number={response.net_income_it_n} /></td>
            </tr>
            <tr>
              <td>17</td>
              <td>Taxable Income (Roundup u/s 288A in multiple of Rs.10/-)</td>
              <td><Price number={response.tax_income_it_o} /></td>
              <td><Price number={response.tax_income_it_n} /></td>
            </tr>
            <tr className='table_row_bg'>
              <td>18</td>
              <td>Tax Payable on Taxable Income</td>
              <td><Price number={response.tax_pay_it_o} /></td>
              <td><Price number={response.tax_pay_it_n} /></td>
            </tr>
            <tr>
              <td>19</td>
              <td>Less: Rebate u/s 87A</td>
              <td><Price number={response.less_it_o} /></td>
              <td><Price number={response.less_it_n} /></td>
            </tr>
            <tr className='table_row_bg'>
              <td>20</td>
              <td>Tax after Rebate</td>
              <td><Price number={response.tar_it_o} /></td>
              <td><Price number={response.tar_it_n} /></td>
            </tr>
            <tr className='table_bg'>
              <th colSpan={3} className='text-align'> I am opting for</th>
              <td>
                {response.opting_for}
              </td>
            </tr>
            <tr className='table_row_bg'>
              <td>21</td>
              <td colSpan={2}>{response.tax_per_inp}</td>
              <td><Price number={response.tax_per_it} /></td>
            </tr>
            <tr>
              <td>22</td>
              <td colSpan={2}>Add: 4% CESS (Health & Education)</td>
              <td><Price number={response.add_four_it} /></td>
            </tr>
            <tr className='table_row_bg'>
              <td>23</td>
              <td colSpan={2}>Gross Tax Payable</td>
              <td><Price number={response.gtax_payable_it} /></td>
            </tr>
            <tr>
              <td>24</td>
              <td colSpan={2}>Less: Relief u/s 89 (Please ensure to submit Form 10E to claim this relief)</td>
              <td><Price number={response.less_relief_it} /></td>
            </tr>
            <tr className='table_row_bg'>
              <td>25</td>
              <td colSpan={2}>Net Tax Payable</td>
              <td><Price number={response.ntax_payable_it} /></td>
            </tr>
            <tr>
              <td>26</td>
              <td colSpan={2}>Tax Deducted From Salary</td>
              <td><Price number={response.td_sal_it} /></td>
            </tr>
            <tr className='table_row_bg'>
              <td>27</td>
              <td colSpan={2}>{response.tex_payable_it}</td>
              <td><Price number={response.tax_refund} /></td>
            </tr>
            
          </table>


          <table className='hbl_taken'>
  <tr>
    <td><i class="bi bi-1-circle"></i>&nbsp; <span> HBL taken in which Financial Year </span></td>
    <td>
      {response.hbl_taken_fy}
    </td>
  </tr>
</table>

        </div>


</div>


</div>

<div className="it_container">
<div className="form_header">
          <h4 className='mt-3'>Feedback Form</h4>
          <span>We would love to know your experience with the form so we can improve even better
  </span>
  
        <div className="gd_sec">
        <h6>Grade</h6>
        <table>
          <tr className='table_row_bg'>
            <td className='no'>1</td>
            <td className='nme'>Quality</td>
            <td className='tr_select'>{response.quality}</td>
          </tr>
          <tr>
            <td className='no'>2</td>
            <td className='nme'>Design</td>
            <td className='tr_select'>{response.design}</td>
          </tr>
          <tr className='table_row_bg'>
            <td className='no'>3</td>
            <td className='nme'>Tax Computation</td>
            <td className='tr_select'>{response.tax_computation}</td>
          </tr>
        </table>
        </div>
  
        <div className="gd_sec">
        <h6>Questions</h6>
        <table>
          <tr className='table_row_bg'>
            <td className='no'>1</td>
            <td className='nme'>Time Consuming</td>
            <td className='tr_select'>{response.time_consuming}</td>
          </tr>
          <tr>
            <td className='no'>2</td>
            <td className='nme'>Better than previous portal </td>
            <td className='tr_select'>{response.better_previous}</td>
          </tr>
          <tr className='table_row_bg'>
            <td className='no'>3</td>
            <td className='nme'>User Friendly </td>
            <td className='tr_select'>{response.user_friendly}</td>
          </tr>
          <tr>
            <td className='no'>4</td>
            <td className='nme'>Need Improvement  </td>
            <td className='tr_select'>{response.need_improvement}</td>
          </tr>
        </table>
  
        <div className="gd_sec">
        <h6>Suggestions</h6>
  
        <div className="textr">
        <textarea name="" id="" disabled value={response.feedback}>
          
          </textarea>
        </div>
  
  
        </div>
        </div>
       
  
  
        </div>
</div>




{
  response.netsal_f13===0 && response.lip_c===0 && response.ppf_c===0 && response.ssy_c===0 && response.cs_c===0 && response.input1===0 && response.input2===0 && response.input3===0 && response.phb_c===0 &&  response.mii3_c===0 &&  response.mis3_c===0 && response.disability_c2===0 && response.iel_c===0 &&   response.nps_c===0 && response.donation_c===0 &&   response.electric_c===0 && response.ex_t===0 && 
   response.name1==='' && response.pan1==='' && response.name2==='' && response.pan2==='' && response.pan3==='' && response.name3==='' && response.name4==='' && response.pan4==='' && response.interest_hbl_it===0 ? '' :
  <div className="doc_upload">
  <h6>Upload Documents</h6>
  <table>
   {
      response.netsal_f13!==0 &&  <tr>
      <td>Pay Slip</td>
      <td><input type="file" accept="application/pdf" onChange={PaySlipChange} /></td>
      <td><button className="upload_btn" onClick={PaySlipUpload}>Upload</button></td>
      {
        response.pay_slip!==undefined ?   <td className="doc_view"><Link target="_blank" to={response.pay_slip.url} ><IoDocumentTextSharp/></Link></td> : ''
      }
    
    </tr>
   }
    {
      response.lip_c!==0 && <tr>
      <td>Life Insurance Premium</td>
      <td> <input type="file" accept="application/pdf" onChange={LipHandler} /></td>
      <td><button className="upload_btn" onClick={Lip_Upload}>Upload</button></td>
      
      {
        response.lip_c_file!==undefined ? <td className="doc_view"><Link target="_blank" to={response.lip_c_file.url}><IoDocumentTextSharp/></Link></td> : ''
      }
    </tr>
    }
   {
     response.ppf_c!==0 &&  <tr>
     <td>PPF</td>
     <td><input type="file" accept="application/pdf" onChange={Ppf_Handler} /></td>
     <td><button className="upload_btn" onClick={PPf_Upload}>Upload</button></td>
     {
       response.ppf_c_file!==undefined ? <td className="doc_view"><Link target="_blank" to={response.ppf_c_file.url} ><IoDocumentTextSharp/></Link></td> : ''
     }
   </tr>
   }
    {
      response.ssy_c!==0 && <tr>
      <td>Sukanya Samridhi Yojna Contribution</td>
      <td><input type="file" accept="application/pdf" onChange={Ssc_Handler} /></td>
      <td><button className="upload_btn" onClick={Ssc_Upload}>Upload</button></td>
      {
        response.ssc_file!==undefined ? <td className="doc_view"><Link target="_blank" to={response.ssc_file.url}><IoDocumentTextSharp/></Link></td> : ''
      }
    </tr>
    }
    {
      response.cs_c!==0 && <tr>
      <td>Child's School/College Tuition Fee (Max. 02 child)</td>
      <td><input type="file" accept="application/pdf" onChange={Child_Handler} /></td>
      <td><button className="upload_btn" onClick={Child_Upload}>Upload</button></td>
      {
        response.child_file!==undefined ? <td className="doc_view"><Link target="_blank" to={response.child_file.url}><IoDocumentTextSharp/></Link></td> : ''
      }
    </tr>
    }
    {
      response.input1!==0 && <tr>
      <td>{response.inp_n1}</td>
      <td><input type="file" accept="application/pdf" onChange={Input_Handler} /></td>
      <td><button className="upload_btn" onClick={Input_Upload}>Upload</button></td>
      {
        response.input_file!==undefined ? <td className="doc_view"><Link target="_blank" to={response.input_file.url}><IoDocumentTextSharp/></Link></td> : ''
      }
    </tr> 
    }
    {
      response.input2!==0 && <tr>
      <td>{response.inp_n2}</td>
      <td><input type="file" accept="application/pdf" onChange={Input2_Handler} /></td>
      <td><button className="upload_btn" onClick={Input2_Upload}>Upload</button></td>
      {
        response.input2_file!==undefined ? <td className="doc_view"><Link target="_blank" to={response.input2_file.url}><IoDocumentTextSharp/></Link></td> : ''
      }
    </tr> 
    }
    {
      response.input3!==0 && <tr>
      <td>{response.inp_n3}</td>
      <td><input type="file" accept="application/pdf" onChange={Input3_Handler} /></td>
      <td><button className="upload_btn" onClick={Input3_Upload}>Upload</button></td>
     {
      response.input3_file!==undefined ?  <td className="doc_view"><Link target="_blank" to={response.input3_file.url}><IoDocumentTextSharp/></Link></td> : ''
     }
    </tr> 
    }
    
   
  {/* start  */}
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
    <td>{response.ex_i} </td>
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
      <td className="doc_view"><Link target="_blank" to={response.landords_file1.url} ><IoDocumentTextSharp/></Link></td> : ''
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
    <td className="doc_view"><Link target="_blank" to={response.landords_file2.url} ><IoDocumentTextSharp/></Link></td> : ''
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
      <td className="doc_view"><Link target="_blank" to={response.landords_file3.url}><IoDocumentTextSharp/></Link></td> : ''
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
      <td className="doc_view"><Link target="_blank" to={response.landords_file3.url}><IoDocumentTextSharp/></Link></td> : ''
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
    <td className="doc_view"><Link target="_blank" to={response.hbl_file.url}><IoDocumentTextSharp/></Link></td> : ''
  }
  </tr>

}

    
  </table>
 </div>
}


       

           <select name="" id="jump"  onChange={e=>SelectHandler(e.target.value)} >
           {
            RouteList.map((list)=>(
              <option value={list.value} selected={list.value===response.currentState} disabled={list.disable}>{list.title}</option>
            ))
           }

        </select>


<div className="submit_section">
<div className="checkbox">
<input type="checkbox" id='chckbox' onClick={CheckClick} /> I do hereby declare that all the above given information are true to the best of my knowledge and belief.
</div>
<button className='btn' onClick={SubmitHandler} >Submit</button>
</div>

</div>
      
      </>}
      </>
    }

    </Sidebar>
    
    </>
  )
}

export default Preview