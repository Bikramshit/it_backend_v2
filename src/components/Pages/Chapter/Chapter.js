import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import AuthHeader from '../../Layouts/Header/AuthHeader'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { ChapterHandler, FileUploadedHandler, GetSingleResponse } from '../../../Redux/Actions/ResponseAction';
import Loader from '../../Layouts/Loader/Loader';
import toast from 'react-hot-toast';


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
    "title":"Regime",
     "value":"regime",
    "disable":true
  },
  {
    "title":"Feedback",
     "value":"feedback",
    "disable":true
  },
  {
    "title":"Preview",
     "value":"preview",
    "disable":true
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
    "title":"Regime",
     "value":"regime",
    "disable":true
  },
  {
    "title":"Feedback",
     "value":"feedback",
    "disable":true
  },
  {
    "title":"Preview",
     "value":"response",
    "disable":true
  },
  
]

function Chapter() {

  const {user, message, error} = useSelector(state=>state.user);
  const {loading, response} = useSelector(state=>state.response);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(()=>{
    dispatch(GetSingleResponse(params.id))
   }, [params.id]);

  
   const [lip_file, setLip_file] = useState(null);
   const [ppf_file, setPpf_file] = useState(null);
   const [ssc_file, setSsc_file] = useState(null);
   const [child_file, setChild_file] = useState(null);
   const [input_file, setInput_File] = useState(null);
   const [input_file2, setInput_File2] = useState(null);
   const [input_file3, setInput_File3] = useState(null);
 
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
    // if(selectedFile){
    //   if(selectedFile && FileType.includes(selectedFile.type)){
    //     let reader = new FileReader();
    //     reader.readAsDataURL(selectedFile);
    //     reader.onload = (e)=>{
    //       setSsc_file(e.target.result);
    //       // toast.success("File selected successfully")
    //     }
    //   } else {
    //   // toast.error("It supports only pdf extension");
    //   setSsc_file(null);
    //   }
    // } 
  }
  const Child_Handler = (e)=>{
    let selectedFile = e.target.files[0];
    setChild_file(selectedFile);
    // if(selectedFile){
    //   if(selectedFile && FileType.includes(selectedFile.type)){
    //     let reader = new FileReader();
    //     reader.readAsDataURL(selectedFile);
    //     reader.onload = (e)=>{
    //       setChild_file(e.target.result);
    //       // toast.success("File selected successfully")
    //     }
    //   } else {
    //   // toast.error("It supports only pdf extension");
    //   setChild_file(null);
    //   }
    // } 
  }



   const aupf_c = useRef(0);
   const epf = useRef(0);
   const lip = useRef(0);
   const sf_c = useRef();
   const ppf_c = useRef();
   const ssc = useRef();
   const csc = useRef();
   const hbl = useRef();
   const input1 = useRef();
   const input2 = useRef();
   const input3 = useRef();
   const inputt1 = useRef();
   const inputt2 = useRef();
   const inputt3 = useRef();
   const deductible = useRef();
   const deductible2 = useRef();
   const mip_i = useRef();
   const mip_i2 = useRef();
   const mip_i3 = useRef();
   const mip_c = useRef();
   const mip_c2 = useRef();
   const mip_c3 = useRef();
   const deductible_mip = useRef();
   const handicap = useRef();
   const handicap2 = useRef();
   const drd = useRef();
   const iel2 = useRef();
   const nps2 = useRef();
   const hbl2 = useRef();
   const hbl4 = useRef();
   const isb = useRef();
   const isb2 = useRef();
   const dti2 = useRef();
   const total_deduction = useRef();
   const c_extra = useRef(0);
   const c_extraa = useRef(0);
   const c_sec = useRef('');

  //  previous 
  const epf_f13= useRef(0);
  const basic_s13 = useRef(0);
  const sf_s13 = useRef(0);
  const sf_f13 = useRef(0);
  const laupf = useRef(0);
  const aupf_s13 = useRef(0);
  const donation_s13 = useRef(0);
  const age = useRef(45);
  const sbi = useRef(0);
  const ihbl = useRef(0);
  const hbl_yr = useRef('');

 

let sf = 0;
let deductible_=0;
let deductible2_=0;
let aupf = 0;
   useEffect(()=>{
    if(response!==undefined && response!==null){
      let aupf_s = parseInt(response.aupf_s13) || 0;
      let laupf_s = parseInt(response.laupf_s) || 0;
      aupf = parseInt(aupf_s) + parseInt(laupf_s);
      
      let sf_salary = parseInt(response.sf_s13) || 0;
      let sf_form = parseInt(response.sf_f13) || 0;
      sf  = parseInt(sf_salary) + parseInt(sf_form);

      let epf_form = parseInt(epf_f13) || 0;
     deductible_ = parseInt(aupf) + parseInt(epf_form) + parseInt(sf);
    // let deductible2_;
    if(deductible_>150000){
        deductible2_ = 150000;
   }
   else {
        deductible2_  = parseInt(deductible_);
   }
  

      // epf_f13.current.value = response.epf_f13;
      // basic_s13.current.value = response.basic_s13;
      // sf_s13.current.value = response.sf_s13;
      // sf_f13.current.value = response.sf_f13;
      // laupf.current.value = response.laupf_s;
      // aupf_s13.current.value = response.aupf_s13;
      // donation_s13.current.value = response.donation_s13;
      // age.current.value 
      // sbi.current.value = response.savings_interest_it;
      // ihbl.current.value = response.interest_hbl_it;
      // hbl_yr.current.value = response.hbl_taken_fy;

      let aupf_;
      // let aupf_s13 = parseInt(response.aupf_s13) || 0;
      // let aupf_c = parseInt(response.aupf_c) || 0;
      aupf_ = parseInt(response.aupf_s13) + parseInt(response.laupf_s);
      // if(response.aupf_c===0){
      //   aupf_ =  parseInt(response.aupf_s13) + parseInt(response.laupf_s)
      // } else {
      //   aupf_ = parseInt(response.aupf_c);
      // }
      aupf_c.current.value =aupf_ ;

      let epf_ = 0;
      if(response.epf_c===0){
        epf_ = response.aupf_f13;
      } else {
        epf_ =parseInt (response.epf_c );
      }
      epf.current.value = epf_;
      let sf_ = 0;
      // if(response.sf_c===0){
      //   sf_ = parseInt(response.sf_s13) + parseInt(response.sf_f13);
      // }else {
        sf_=parseInt(response.sf_s13) + parseInt(response.sf_f13);
      // }

      sf_c.current.value = sf_;
      lip.current.value = response.lip_c;
      ppf_c.current.value = response.ppf_c;
      ssc.current.value = response.ssy_c;
      csc.current.value = response.cs_c;
      hbl.current.value = response.phb_c;
      input1.current.value = response.inp_n1;
      input2.current.value = response.inp_n2;
      input3.current.value = response.inp_n3;
      inputt1.current.value = response.input1;
      inputt2.current.value = response.input2;
      inputt3.current.value = response.input3;
      deductible.current.value = response.deductible_80c;
      deductible2.current.value = response.deductible_80c2;
      mip_i.current.value = response.mii1_c;
      mip_i2.current.value = response.mii2_c;
      mip_i3.current.value = response.mii3_c;
      mip_c.current.value = response.mis1_c;
      mip_c2.current.value = response.mis2_c;
      mip_c3.current.value = response.mis3_c;
      deductible_mip.current.value = response.deductible_80d;
      handicap.current.value = response.disability_c;
      handicap2.current.value = response.disability_c2;
      drd.current.value = response.donation_c;
      iel2.current.value = response.iel_c;
      nps2.current.value = response.nps_c;
      hbl2.current.value = response.ihbl_c;
      hbl4.current.value = response.ihbl_c2;
      isb.current.value = response.isb_c;
      isb2.current.value = response.isb_c2;
      dti2.current.value = response.electric_c;
      c_sec.current.value = response.ex_sec;
      c_extra.current.value = response.ex_i;
      c_extraa.current.value = response.ex_t;
      
      total_deduction.current.value = response.chapter_total  


    }

   }, [response])



   const HandlerSubmit = async(currentState)=>{
    const id = params.id;
    // const currentState = "hra";
   

    const res =await dispatch(ChapterHandler( id,
      currentState,
      aupf_c.current.value,
      epf.current.value,
      sf_c.current.value,
      lip.current.value,
      ppf_c.current.value,
      ssc.current.value,
      csc.current.value,
      hbl.current.value,
      input1.current.value,
      input2.current.value,
      input3.current.value,
      inputt1.current.value,
      inputt2.current.value,
      inputt3.current.value,
      deductible.current.value,
      deductible2.current.value,
      mip_i.current.value,
      mip_i2.current.value,
      mip_i3.current.value,
      mip_c.current.value,
      mip_c2.current.value,
      mip_c3.current.value,
      deductible_mip.current.value,
      handicap.current.value,
      handicap2.current.value,
      iel2.current.value,
      nps2.current.value,
      hbl2.current.value,
      hbl4.current.value,
      isb.current.value,
      isb2.current.value,
      drd.current.value,
      dti2.current.value,
      c_sec.current.value,
      c_extra.current.value,
      c_extraa.current.value,
      total_deduction.current.value
    ));

    return res;

   }
   const navigate = useNavigate();
   const PreviousHandler = async()=>{
    const res = await HandlerSubmit("form12b");
    if(res===true){
      navigate(`/form12b/${params.id}`)
    }
   }

   const NextHandler = async()=>{
    const res = await HandlerSubmit("hra");
    if(res===true){
      navigate(`/hra/${params.id}`)
    }
   }
   const SelectHandler = async(e)=>{
   
    const res = await HandlerSubmit(e);
    if(res===true){
      navigate(`/${e}/${params.id}`);
    }
   }




  const  onKeyPressEvent = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (!(new RegExp("[0-9]").test(keyValue)))
      event.preventDefault();
    return;
  }


  const sum = ()=> {

    var sum;
    var sum2;
    var epf = parseInt(response.aupf_f13) || 0;
    document.getElementById('epf').value = epf;
    // toast.success(epf);
    var sf_s = parseInt(response.sf_s13) || 0;
    var sf_f = parseInt(response.sf_f13) || 0;
    var sf = parseInt(sf_s) + parseInt(sf_f);
    let aupf = parseInt(aupf_c.current.value);
    var lip = document.getElementById('lip').value || 0;
    lip = parseInt(lip) || 0;
    document.getElementById('lip').value = lip;
   var ppf = document.getElementById('ppf').value || 0;
   ppf = parseInt(ppf) || 0;
   document.getElementById('ppf').value = ppf;
   var ssc = document.getElementById('ssc').value || 0;
   ssc = parseInt(ssc) || 0;
   document.getElementById('ssc').value = ssc;
   var csc = document.getElementById('csc').value || 0;
   csc = parseInt(csc) || 0;
   document.getElementById('csc').value = csc;
   var phb = document.getElementById('phb').value || 0;
   phb = parseInt(phb);
   document.getElementById('phb').value = phb;
   var a = document.getElementById('a').value || 0;
   a = parseInt(a) || 0;
   document.getElementById('a').value = a;
   var b = document.getElementById('b').value || 0;
   b = parseInt(b) || 0;
   document.getElementById('b').value = b;
   var c = document.getElementById('c').value || 0;
   c = parseInt(c) || 0;
   document.getElementById('c').value = c;
   sum = parseInt(aupf) + parseInt(epf) + parseInt(sf) + parseInt(lip) + parseInt(ppf) + parseInt(ssc) + parseInt(csc) + parseInt(phb) + parseInt(a) + parseInt(b) + parseInt(c); 
   sum = parseInt(sum) || 0;

   document.getElementById('deductible').value = parseInt(sum);
   
  
   if(sum>150000){
        sum2 = 150000;
   }
   else {
        sum2 = parseInt(sum);
   }
   document.getElementById('deduct').value= sum2;



   var d1 = document.getElementById('d1').value;
   d1 = parseInt(d1) || 0;
   document.getElementById('d1').value = d1;
   if(d1>25000){
    document.getElementById('d1').value = 25000;
   }
   d1 = d1 || 0;
   var d2 = document.getElementById('d2').value || 0;
   d2 = parseInt(d2) || 0;
   document.getElementById('d2').value = d2;
   if(d2>25000){
    document.getElementById('d2').value = 25000;
   }
   
   var dd1 = document.getElementById('dd1').value;
   dd1 = parseInt(dd1) || 0;
   document.getElementById('dd1').value = dd1;
   if(dd1>50000){
    document.getElementById('dd1').value = 50000;
   }
   dd1 = dd1 || 0;
   var dd2 = document.getElementById('dd2').value;
   dd2 = parseInt(dd2) || 0;
   document.getElementById('dd2').value = dd2;
   if(dd2>50000){
    document.getElementById('dd2').value = 50000;
   }
   dd2 = dd2 || 0;
   var d1_show, d2_show,dd1_show, dd2_show;
   if(d1>25000){
       d1_show = 25000;
   }
   else if(d1<=25000){
       d1_show = d1;
   }
   if(d2>25000){
       d2_show = 25000;
   }
   else if(d2<=25000){
       d2_show = d2;
   }

   if(dd1>50000){
       dd1_show = 50000;
   }
   else if(dd1<=50000){
       dd1_show = dd1;
   }
   if(dd2>50000){
       dd2_show = 50000;
   }
   else if(dd2<=50000){
       dd2_show = dd2;
   }

   var d = parseInt(d1_show) + parseInt(d2_show);
   var d = d || 0;
   var dd = parseInt(dd1_show) + parseInt(dd2_show);
   var dd = dd || 0;
   var d_fina = parseInt(d) + parseInt(dd);
   var d_final;
   if(d_fina>100000){
       d_final = 100000;
   }
   else if(d_fina<=100000){
       d_final = d_fina;
   }

   document.getElementById('d').value = d;
   document.getElementById('dd').value = dd;
//    document.getElementById('d1_show').value = d1_show;
//    document.getElementById('d2_show').value = d2_show;
//    document.getElementById('dd1_show').value = dd1_show;
//    document.getElementById('dd2_show').value = dd2_show;
   document.getElementById('d_final').value = d_final;


   var selectedValue = document.getElementById("list").value;
   var dis;
   if(selectedValue==="Over 40%"){
      dis = 75000;
   }
   else if(selectedValue==="Over 80%"){
       dis = 125000;

   }
   else {
       dis = 0;
   }

   document.getElementById('dis').value = dis;

   var ell = document.getElementById('ell').value;
   ell = parseInt(ell) || 0;
   document.getElementById('ell').value = ell;
   if(ell>40000){
    ell = 40000;
   }
   document.getElementById('ell').value = ell;
   ell = ell || 0;
   var npss = document.getElementById('npss').value;
   npss = parseInt(npss) || 0;
   document.getElementById('npss').value = npss;

   if(npss>50000){
    npss = 50000;
   }
   document.getElementById('npss').value = npss;
   npss = npss || 0;


 

   var hbll  ;
   
   var hbll2  ;
   
    

   var ihbl_c = parseInt(response.interest_hbl_it) || 0;
   var interest;
   if(ihbl_c>200000){
    interest =parseInt(ihbl_c) - 200000;
   }

   interest = parseInt(interest) || 0;

   if(interest>50000){
    hbll = 50000;
   }
   else {
    hbll = interest;
   }
    
    
   if(interest>150000){
    hbll2 = 150000;
   }
   else {
    hbll2 = interest;
   }
    

var selectyr = response.hbl_taken_fy;
   if(selectyr=="2016-17"){
        hbll2 = 0;
   }
   else if(selectyr=="2019-20"){
    hbll = 0;
   }
   else {
    hbll =0;
    hbll2 =0;
   }
   
document.getElementById('hbll').value = hbll;
document.getElementById('hbll2').value = hbll2;
   
   var e_vehicle = document.getElementById('e_vehi').value;
   e_vehicle = parseInt(e_vehicle) || 0;
   document.getElementById('e_vehi').value = e_vehicle;
   var e_vehi;
   if(e_vehicle>150000){
       e_vehi = 150000;
   }
   else {
       e_vehi = e_vehicle;
   }
   var drd = document.getElementById('drd').value || 0;
   drd = parseInt(drd) || 0;
   document.getElementById('drd').value = drd;
   document.getElementById('e_vehi').value = e_vehi;
   e_vehi = parseInt(e_vehi) || 0;
   var donation = parseInt(donation_s13) || 0;
   var total_deduction;

  var  sbii = parseInt(response.savings_interest_it) || 0;
  var agee = response.it_status;


   var isbb, isbb2;
   if(agee==="INDIVIDUAL"){
       if(sbii>10000){
           isbb = 10000;
           isbb2 = 0;
       }
       else {
           isbb = sbii; 
           isbb2 = 0;
       }
       
   }
   else{
       if(sbii>50000){
           isbb2 = 50000; 
           isbb = 0;

       }
       else {
           isbb2 = sbii;
           isbb = 0;
       }
        
   }


   isbb = parseInt(isbb) || 0;
   isbb2 = parseInt(isbb2) || 0;
   
   document.getElementById('isb').value = isbb;
   document.getElementById('isb2').value = isbb2;

   let extraa = document.getElementById('extraa').value;
   extraa = parseInt(extraa) || 0;
   document.getElementById('extraa').value = extraa;
   if(extraa===undefined) extraa = 0;
   if(agee==="SR.CITIZEN"){
  
     
     total_deduction = parseInt(sum2) + parseInt(d_final) + parseInt(dis) + parseInt(ell) + parseInt(npss) + parseInt(hbll) + parseInt(hbll2) + parseInt(donation) + parseInt(e_vehi) + parseInt(isbb2) + parseInt(drd) + parseInt(extraa);
   }
   else {
     
    total_deduction = parseInt(sum2) + parseInt(d_final) + parseInt(dis) + parseInt(ell) + parseInt(npss) + parseInt(hbll) + parseInt(hbll2) + parseInt(donation) + parseInt(e_vehi) + parseInt(isbb)+ parseInt(drd) + parseInt(extraa); 
   }
   document.getElementById('total_deduction').value = total_deduction;
   


}


useEffect(()=>{
  if(response!==undefined){
    sum();
  }
},[ response])

   
const inputFun1 = () => {
    var input = document.getElementById('input1'); 
    
    var a = document.getElementById('a');
    if(input.value == ''){
         
         a.value ='';
         a.readOnly = true;
    }
    else {
         
        a.readOnly = false;
    }

}

   
const inputFun2 = () => {
    var input = document.getElementById('input2'); 
     
    var a = document.getElementById('b');
    if(input.value == ''){
         
         a.value ='';
         a.readOnly = true;
    }
    else {
         
        a.readOnly = false;
    }

}
  
const inputFun3 = () => {
    var input = document.getElementById('input3'); 
     
    var a = document.getElementById('c');
    if(input.value == ''){
         
         a.value ='';
         a.readOnly = true;
    }
    else {
         
        a.readOnly = false;
    }

}

const chk=()=>{
    const extra=document.getElementById('extra').value;
    const sec = document.getElementById('c_sec').value;
    if(extra=='' || sec==''){
        document.getElementById('extraa').readOnly=true;
    }
    else {
        document.getElementById('extraa').readOnly=false;            
    }
}
const del=()=>{
    const extra=document.getElementById('extra').value;
    const sec=document.getElementById('c_sec').value;
    if(extra=='' || sec==''){
        document.getElementById('extraa').value='';
    }
}



useEffect(()=>{
  if(response!==undefined){
    if(user.role==="user" && response.submitStatus==="Yes"){
      navigate('/error')
    }
  }
});



  // console.log(response.aupf_s13);
  // console.log(response.laupf_s);
  return (
   <>
   
   <Sidebar user={user} >
        <AuthHeader/>
     {
      loading ? <Loader/> :
      <>
      
 {
  response===undefined ? <Loader/> : <>
        <div className="chapter_container">
          <h4 className='text-center text-decoration-underline'>Chapter VI</h4>

        <div className="chapter">
          <table>
            <tr className='chp_heading table_bg'>
              <th>u/s</th>
              <th>Particulars</th>
              <th className='damount'>Actual Amount</th>
              <th className='damount'>Deductible Amount</th>
            </tr>
            <tr>
              <th rowSpan={12} className='table_row_bg'>80C</th>
              <td>AUPF/ GPF/ PF transferred</td>
              <td><input type="text" onKeyPress={onKeyPressEvent} id="aupf"  ref={aupf_c} readOnly  /></td>
              <td rowSpan={11} className='table_row_bg'></td>
            </tr>
            <tr className='table_row_bg'>
              <td>EPF/GPF deducted from Ex-employer</td>
              <td><input type="text" onKeyPress={onKeyPressEvent} id='epf' defaultValue={epf} ref={epf} readOnly value={epf} /></td>
            </tr>
            <tr >
              <td>SF/IF</td>
              <td><input type="text" onKeyPress={onKeyPressEvent} id='sf' defaultValue={sf_c} ref={sf_c} readOnly /></td>
            </tr>
            <tr className='table_row_bg'>
              <td>Life Insurance Premium
</td>
              <td><input type="text" onKeyPress={onKeyPressEvent} id='lip' defaultValue={lip} ref={lip} onChange={sum} /></td>
            </tr>
            <tr>
              <td className='ppf'>PPF  
               </td>
              <td><input type="text" onKeyPress={onKeyPressEvent} id='ppf' onChange={sum} defaultValue={ppf_c} ref={ppf_c} />  </td>
            </tr>
            <tr className='table_row_bg'>
              <td className='ppf'>Sukanya Samridhi Yojna Contribution 
               </td>
              <td><input type="text" onKeyPress={onKeyPressEvent} id='ssc' onChange={sum} defaultValue={ssc} ref={ssc} /></td>
            </tr>
            <tr>
              <td className='ppf'>Child's School/College Tuition Fee (Max. 02 child) 
               </td>
              <td><input type="text" onKeyPress={onKeyPressEvent} id='csc' onChange={sum} defaultValue={csc} ref={csc}  /></td>
            </tr>
            <tr className='table_row_bg'>
              <td>Payment of House Building Loan (Principle Only)</td>
              <td><input type="text" onKeyPress={onKeyPressEvent} id='phb' onChange={sum} ref={hbl} defaultValue={hbl} /></td>
            </tr>
            <tr>
              <td className='ppf'><input type="text" id='input1' onChange={inputFun1}   defaultValue={input1} ref={input1}   />
               </td>
              <td><input type="text" onKeyPress={onKeyPressEvent} id='a' onChange={sum} defaultValue={inputt1} ref={inputt1} onFocus={inputFun1} /></td>
            </tr>
            <tr className='table_row_bg'>
              <td className='ppf'><input type="text" id='input2' onKeyPress={onKeyPressEvent} defaultValue={input2} ref={input2}  onChange={inputFun2}  />
               </td>
              <td><input type="text" onKeyPress={onKeyPressEvent} id='b' defaultValue={inputt2} ref={inputt2}  onChange={sum}  onFocus={inputFun2}  /></td>
            </tr>
            <tr>
              <td className='ppf'><input type="text" id='input3'defaultValue={input3} ref={input3} onChange={inputFun3}  />
               </td>
              <td><input type="text" onKeyPress={onKeyPressEvent} id='c' onChange={sum} defaultValue={inputt3} ref={inputt3} onFocus={inputFun3} /></td>
            </tr>
            <tr className='table_row_bg'>
              <th>Deductible</th>
              <td><input type="text" onKeyPress={onKeyPressEvent} name="" id="deductible" defaultValue={deductible} ref={deductible} readOnly  /></td>
              <td><input type="text" onKeyPress={onKeyPressEvent} id="deduct" defaultValue={deductible2} ref={deductible2} readOnly/></td>
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
              <td style={{textAlign:"center"}}>Assessee's Parents</td>
              <td></td>
            </tr>
            <tr className='table_row_bg'>
              <td>
              <div className="chp">
                  <div className="chp_child"> Medical Insurance Premium for Individual <br />
(mode other than cash, maximum Rs.25000/- in each case)</div>
                  <div className="chp_child chapt_in"> <input type="text" onKeyPress={onKeyPressEvent} name="" id="d1" onChange={sum} defaultValue={mip_i} ref={mip_i} /></div>
                </div>
             
              </td>
              <td className='chapt_in'><input type="text" onKeyPress={onKeyPressEvent} name=""  id="d2"  defaultValue={mip_i2} ref={mip_i2}  onChange={sum} /></td>
              <td className='chapt_in'><input type="text" onKeyPress={onKeyPressEvent} name="" id="d" readOnly defaultValue={mip_i3} ref={mip_i3}  /></td>
            </tr>
            <tr>
              <td>
              <div className="chp">
                  <div className="chp_child"> Medical Insurance Premium for Sr. Citizen <br />
(mode other than cash, maximum Rs.50000/- in each case )</div>
                  <div className="chp_child chapt_in"> <input type="text" onKeyPress={onKeyPressEvent} id="dd1"  onChange={sum} defaultValue={mip_c} ref={mip_c}  /></div>
                </div>
             
              </td>
              <td className='chapt_in'><input type="text" onKeyPress={onKeyPressEvent}  id="dd2" onChange={sum} defaultValue={mip_c2} ref={mip_c2} /></td>
              <td className='chapt_in'><input type="text" onKeyPress={onKeyPressEvent} id="dd" readOnly defaultValue={mip_c3} ref={mip_c3} /></td>
            </tr>
            <tr className='table_row_bg'>
              <th>Deductible</th>
              <td></td>
              <td><input type="text" onKeyPress={onKeyPressEvent} id="d_final" readOnly defaultValue={deductible_mip} ref={deductible_mip} /></td>
            </tr>
            <tr>
              <th>80DD <br /> 80U</th>
              <td>For maintenance of handicapped dependent/for own disability
Rs.75,000/- for disability over 40% & Rs.1,25,000/- for severe disability over 80%</td>
                <td className='chapt_in'>
                  <select onChange={sum} defaultValue={handicap} ref={handicap} id="list">
                    <option value="Select--">select--</option>
                    <option value="Over 40%">Over 40%</option>
                    <option value="Over 80%">Over 80%</option>
                  </select>
                </td>
                <td className='chapt_in'><input type="text" onKeyPress={onKeyPressEvent}  defaultValue={handicap2} ref={handicap2}   id="dis" readOnly  /></td>
            </tr>
            <tr className='table_row_bg'>
              <th>80E</th>
              <td>Interest on Educational Loan (Max Rs.40,000)</td>
              <td></td>
              <td><input type="text" onKeyPress={onKeyPressEvent}  onChange={sum}   id="ell"  defaultValue={iel2} ref={iel2} /></td>
            </tr>

            <tr>
              <th>80CCD (1B)</th>
              <td>NPS/Atal Pension Yojana (Max Rs.50,000)</td>
              <td></td>
              <td><input type="text" onKeyPress={onKeyPressEvent} onChange={sum} id="npss"   defaultValue={nps2} ref={nps2} /></td>
            </tr>
            <tr className='table_row_bg'>
              <th>80EE</th>
              <td>Interest in HBL (Max Rs.50,000)</td>
              <td></td>
              <td><input type="text" onKeyPress={onKeyPressEvent}   onChange={sum} id="hbll"   defaultValue={hbl2} ref={hbl2} readOnly /></td>
            </tr>
            <tr>
              <th>80EEA</th>
              <td>Interest in HBL (Max Rs.1,50,000)</td>
              <td></td>
              <td><input type="text" onKeyPress={onKeyPressEvent}  onChange={sum} id="hbll2"   defaultValue={hbl4} ref={hbl4}  readOnly /></td>
            </tr>
            <tr className='table_row_bg'>
              <th>80TTA</th>
              <td>Interest on Savings Bank A/c (for Individual - Maximum Rs.10,000/-)</td>
              <td></td>
              <td><input type="text" onKeyPress={onKeyPressEvent} readOnly defaultValue={isb} ref={isb} id="isb"  /></td>
            </tr>
            <tr>
              <th>80TTB</th>
              <td>Interest on Savings Bank A/c (for Sr. Citizen - Maximum Rs.50,000/-)</td>
              <td></td>
              <td><input type="text" onKeyPress={onKeyPressEvent} defaultValue={isb2} readOnly id="isb2" ref={isb2}  /></td>
            </tr>
            {/* <tr className='table_row_bg'>
              <th>80G</th>
              <td>Admissible amount of 50% (not allowable by DDO)</td>
              <td></td>
              <td><input type="text" onKeyPress={onKeyPressEvent} id="drd" defaultValue={drd} ref={drd} onChange={sum}  /></td>
            </tr> */}
             <td style={{display:"none"}}> <input type="text" onKeyPress={onKeyPressEvent} id="drd" defaultValue={drd} ref={drd} onChange={sum}  /></td>
            <tr>
              <th>80EEB</th>
              <td>Deduction towards interest payments made on loan for purchase of Electric Vehicle</td>
              <td></td>
              <td><input type="text" onKeyPress={onKeyPressEvent}  onChange={sum}   id="e_vehi" defaultValue={dti2} ref={dti2}  /></td>
            </tr>
            <tr className='table_row_bg'>
              <td className='us'><input type="text" id="c_sec" onBlur={sum} onChange={del} ref={c_sec} defaultValue={c_sec} /></td>
              <td><input type="text"  id="extra" defaultValue={c_extra} ref={c_extra} onBlur={sum} onChange={del} /></td>
              <td></td>
              <td><input type="text" onKeyPress={onKeyPressEvent}  onChange={sum}   id="extraa" defaultValue={c_extraa} ref={c_extraa} onFocus={chk}   /></td>
            </tr>
            <tr className='table_bg'>
              <th colSpan={2}>Total</th>
              <td></td>
              <td><input type="text" onKeyPress={onKeyPressEvent} name="" id="total_deduction" readOnly defaultValue={total_deduction} ref={total_deduction} /></td>
            </tr>
          </table>
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
  </>
 }
      
      </>
     }
        </Sidebar>
   
   
   </>
  )
}

export default Chapter