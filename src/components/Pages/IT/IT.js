import React, { useEffect, useRef } from 'react'
import AuthHeader from '../../Layouts/Header/AuthHeader'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { GetSingleResponse, ITHandler } from '../../../Redux/Actions/ResponseAction';
import Loader from '../../Layouts/Loader/Loader';
import { toast } from 'react-hot-toast';

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

export default function IT() {

  const {user, message, error} = useSelector(state=>state.user);
  const {loading, response} = useSelector(state=>state.response);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate()
  useEffect(()=>{
    dispatch(GetSingleResponse(params.id))
   }, [dispatch, params.id]);
  const gross_p13 = 0, arrear_p=0, income_p13=0,ltds_p=0, cvp=0  ;
  // const gas_s=0, gross_s13=0, gross_f13=0, arrear_p=0, gross_p13=0,income_p13=0, ltds_p=0 , cvp=0, hra_exempt=0, hra_exempt2=0, profession_s13=0, profession_f13=0, lpt_s=0,  pan_no=0 ,   dob=0, income_s13=0, ltds=0, income_f13=0, total_deduction=0,category=0, hbl2=0, hbl4=0, isb=0, isb2=0, Fyear='2019-20', Ayear='2020-23';
  const dor = useRef()
  const vs = useRef()
  const addhaar    = useRef()
  const salary_it  = useRef()
  const salaryy_it = useRef()
  const bonus_it   = useRef()
  const bonuss_it  = useRef()
  const bonuss_it2 = useRef()
  const hono_it    = useRef()
  const honoo_it  = useRef()
  const honoo_it2  = useRef()
  const cgs        = useRef()
  const cgss       = useRef()
  const pgs        = useRef()
  const pgss       = useRef()
  const pension_it = useRef()
  const pensionn_it= useRef()
  const cvp_it     = useRef()
  const cvp_it2     = useRef()
  const ten_it     = useRef();
  const ten_it2     = useRef();
  const thirteenn_it   = useRef()
  const thirteen_it= useRef()
  const salpen_it  = useRef()
  const salpen_it2  = useRef()
  const ce_it      = useRef()
  const pe_it      = useRef()
  const toe_it = useRef()
  const toee_it= useRef()
  const s_deduction  = useRef()
  const s_deductionn= useRef()
  const net_salpen = useRef()
  const net_salpen2 = useRef()
  const ihbl       = useRef()
  const ihbll     = useRef()
  const ihbll2     = useRef()
  const sbi         = useRef()
  const aoi_it     = useRef()
  const income_other_it= useRef()
  const income_other_it2= useRef()
  const gross_income_it  = useRef()
  const gross_incomee_it   = useRef()
  const total_deduction_it = useRef()
  const total_deductionn_it = useRef()
  const net_income_it= useRef()
  const net_incomee_it= useRef()
  const  taxable_income= useRef()
  const  taxable_incomee= useRef()
  const  tax_payable= useRef()
  const  tax_payablee= useRef()
  const  rebate_it= useRef() // less it o
  const  rebatee_it= useRef()
  const  tax_ar= useRef() // tax after rebate 
  const  tax_arr= useRef() // after rebate 
  const  regimeOpt= useRef() // opting for 
  const  tax_on= useRef()  // 21  text
  const  tax_nr= useRef()  // 21 input 
  const  add_he= useRef() // add 4
  const  gtp= useRef()
  const  relief= useRef()
  const  ntp= useRef()

  const ihbl_c = useRef();
  const ihbl_c2 = useRef();
  const isb_c = useRef();
  const isb_c2 = useRef();

  // const  age= useRef()
  const  tax_deduct= useRef()
  const  tax_rp= useRef() 
  const tax_refund = useRef();
  const  hbl_yr= useRef()
  const  dd= useRef()
  const  pan_it= useRef()


useEffect(()=>{
  if(response!==undefined && response!==null){
    dor.current.value                 = response.dor;
    vs.current.value                  = response.it_status;
    salary_it  .current.value         = response.gross_it_o;
    salaryy_it .current.value         = response.gross_it_n;
    bonus_it   .current.value         = response.bonus_it;
    bonuss_it  .current.value         = response.bonus_it_o;
    bonuss_it2 .current.value         = response.bonus_it_n;
    hono_it    .current.value         = response.hono_it;
    honoo_it  .current.value          = response.honoo_it;
    honoo_it2  .current.value         = response.honoo_it2
    cgs        .current.value         = response.current_it_o;
    cgss       .current.value         = response.current_it_n;
    pgs        .current.value         = response.previous_it_o;
    pgss       .current.value         = response.previous_it_n;
    pension_it .current.value         = response.pension_it_o;
    pensionn_it.current.value         = response.pension_it_n;
    cvp_it     .current.value         = response.cvp_it_o;
    cvp_it2.current.value             = response.cvp_it_n;
    ten_it     .current.value         = response.ten_a__it_o;
    ten_it2.current.value             = response.ten_a__it_n
    thirteenn_it.current.value        = response.thirteen_a__it_o
    thirteen_it.current.value         = response.thirteen_a__it_n
    salpen_it.current.value           = response.gsp_it_o;
    salpen_it2.current.value          = response.gsp_it_n;
    ce_it  .current.value             = response.c_employer_it;
    pe_it  .current.value             = response.p_employer_it;
    toe_it .current.value             = response.employer_it_o;
    toee_it    .current.value         = response.employer_it_n
    s_deduction.current.value         = response.s_deduction_it_o
    s_deductionn.current.value        = response.s_deduction_it_n
    net_salpen.current.value          = response.net_sp_it_o;
    net_salpen2.current.value         = response.net_sp_it_n;
    ihbl   .current.value             = response.interest_hbl_it;
    ihbll  .current.value             = response.interest_hbl_it_o;
    ihbll2 .current.value             = response.interest_hbl_it_n;
    sbi    .current.value             = response.savings_interest_it;
    aoi_it .current.value             = response.other_income_it;
    income_other_it.current.value     = response.income_it_o;
    income_other_it2.current.value    = response.income_it_n;
    gross_income_it.current.value     = response.gross_income_it_o;
    gross_incomee_it.current.value    = response.gross_income_it_n;
    total_deduction_it.current.value  = response.chapter_total;
    total_deductionn_it.current.value = response.total_deduction_it_n
    net_income_it.current.value       = response.net_income_it_o
    net_incomee_it.current.value      = response.net_income_it_n
    taxable_income.current.value      = response.tax_income_it_o
    taxable_incomee.current.value     = response.tax_income_it_n;
    tax_payable.current.value         = response.tax_pay_it_o;
    tax_payablee.current.value        = response.tax_pay_it_n;
    rebate_it.current.value           = response.less_it_o;
    rebatee_it.current.value          = response.less_it_n;
    tax_ar.current.value              = response.tar_it_o;
    tax_arr.current.value             = response.tar_it_n;
    regimeOpt.current.value           = response.opting_for;
    tax_on.current.value              = response.tax_per_inp;
    tax_nr.current.value              = response.tax_per_it;
    add_he.current.value              = response.add_four_it;
    gtp.current.value                 = response.gtax_payable_it;
    relief.current.value              = response.less_relief_it;
    ntp.current.value                 = response.ntax_payable_it
    tax_deduct.current.value          = response.td_sal_it;
    tax_rp.current.value              = response.tex_payable_it;
    // // console.log(response.tax_refund);
    tax_refund.current.value                = response.tax_refund;
    hbl_yr.current.value              = response.hbl_taken_fy;
  }
}, [response])



const SubmitHandler =async(currentState)=>{
  const  id = params.id;
  // console.log(tax_on, tax_nr);
  console.log("TAX PALYAMEBE ",tax_refund.current.value);
  const res = await dispatch(ITHandler(id, currentState,
 dor.current.value                ,    
vs.current.value                  ,
salary_it  .current.value         ,
salaryy_it .current.value         ,
bonus_it   .current.value         ,
bonuss_it  .current.value         ,
bonuss_it2 .current.value         ,
hono_it    .current.value         ,
honoo_it  .current.value          ,
honoo_it2  .current.value         ,
cgs        .current.value         ,
cgss       .current.value         ,
pgs        .current.value         ,
pgss       .current.value         ,
pension_it .current.value         ,
pensionn_it.current.value         ,
cvp_it     .current.value         ,
cvp_it2.current.value             ,
ten_it     .current.value         ,
ten_it2.current.value             ,
thirteen_it.current.value         ,
thirteenn_it.current.value        ,
salpen_it.current.value           ,
salpen_it2.current.value          ,
ce_it  .current.value             ,
pe_it  .current.value             ,
toe_it .current.value             ,
toee_it    .current.value         ,
s_deduction.current.value         ,
s_deductionn.current.value        ,
net_salpen.current.value          ,
net_salpen2.current.value         ,
ihbl   .current.value             ,
ihbll  .current.value             ,
ihbll2 .current.value             ,
sbi    .current.value             ,
aoi_it .current.value             ,
income_other_it.current.value     ,
income_other_it2.current.value    ,
gross_income_it.current.value     ,
gross_incomee_it.current.value    ,
total_deduction_it.current.value  ,
total_deductionn_it.current.value ,
net_income_it.current.value       ,
net_incomee_it.current.value      ,
taxable_income.current.value      ,
taxable_incomee.current.value     ,
tax_payable.current.value         ,
tax_payablee.current.value        ,
rebate_it.current.value           ,
rebatee_it.current.value          ,
tax_ar.current.value              ,
tax_arr.current.value             ,
regimeOpt.current.value           ,
tax_on.current.value              ,
tax_nr.current.value              ,
add_he.current.value              ,
gtp.current.value                 ,
relief.current.value              ,
ntp.current.value                 ,
tax_deduct.current.value          ,
tax_rp.current.value              ,
tax_refund.current.value,
hbl_yr.current.value              ,
ihbl_c.current.value,
ihbl_c2.current.value,
isb_c.current.value,
isb_c2.current.value    
    
    
    ));

    return res;
}

const PreviousHandler = async()=>{
  // const opt = document.getElementById('on__option').value;
  // if(opt==="Select--"){
  //   toast.error("Please select the regime option!");
  //   return;
  // }
  // console.log("TAX PALYAMEBE ",tax_refund.current.value);
  // toast.error(tax_refund.current)
  // toast.error(salary_it.current.value)
 

  
  const res = await SubmitHandler("hra");

  if(res===true){
    navigate(`/hra/${params.id}`)
  }
 }

 const NextHandler = async()=>{
  console.log("TAX PALYAMEBE ",tax_refund.current.value);

  const tax_Refund = document.getElementById("tr").value;
  const tax_pr = document.getElementById("tax_pr").value;

  

  const opt = document.getElementById('on__option').value;
  if(opt==="Select--"){
    toast.error("Please select the regime option!");
    return;
  }
  
  if(tax_Refund>0 && tax_pr==="Tax Payable"){
    toast.error(`Your "Tax Payable" is more than the "Tax Deducted" from salary.`);
    return;
  }
  const res = await SubmitHandler("regime");
  if(res===true){
    navigate(`/regime/${params.id}`)
  }
 }

 const SelectHandler = async(e)=>{
  const tax_Refund = tax_refund.current.value;
  const tax_pr = document.getElementById('tax_pr');

  if(tax_Refund>0 && tax_pr.value==="Tax Payable" && (e==="regime" || e==="feedback" || e==="preview")){
    toast.error("Your tax payable is more than the tax deducted.");
    return;
  }
  const opt = document.getElementById('on__option').value;
  if(opt==="Select--"){
    toast.error("Please select the regime option!");
    return;
  }
  const res = await SubmitHandler(e);
  if(res===true){
    navigate(`/${e}/${params.id}`);
  }
 }



  const threeDigit =(num)=>{
    return Math.round(num/1000)*1000;
 }

const oneDigit =(num)=>{
return Math.round(num/10)*10;
}


const getDate =(yourDate)=> {
  if(yourDate===undefined) return;
  yourDate = new Date(yourDate);
  const offset = yourDate.getTimezoneOffset();
  yourDate = new Date(yourDate.getTime() - (offset*60*1000))
  return yourDate.toISOString().split('T')[0]
}


// var a = parseInt(response.gas_s) || 0;
// var b = parseInt(response.gross_s13) || 0;

// var gross_arrear = parseInt(a) + parseInt(b);
// var v = "INDIVIDUAL";

// 10(10A)
// var hra_expt = parseInt(response.hra_exempt_e) || 0;
// var hra_expt2 = parseInt(response.hra_exempt_n) || 0;
// var tentenA =  parseInt(hra_expt) + parseInt(hra_expt2); 

// Pension 
// const gross_p13 = 0;
// var gross_p133 = parseInt(gross_p13) || 0;
// var arrear_pp = parseInt(arrear_p) || 0;
// var pension =  parseInt(gross_p133)  + parseInt(arrear_pp);


// Current Employee

// var prof_s = parseInt(response.ptax_s13) || 0;
// var less_pt = parseInt(response.lpt_s) || 0;

// var current_e = parseInt(prof_s) + parseInt(less_pt);

const  onKeyPressEvent = (event) => {
  const keyCode = event.keyCode || event.which;
  const keyValue = String.fromCharCode(keyCode);
  if (!(new RegExp("[0-9]").test(keyValue)))
    event.preventDefault();
  return;
}

const zero =(n)=> { 
 n = n || 0;
 return n<10 ? '0'+n : n;
}
const YZero =(n)=> {
 n = n||0;
 if(n<10){
   return '000' + n; 
 }
 else if(n<100 && n>=10){
   return '00'+n;
 }
 else if(n<1000 && n>=100){
   return '0' + n;
 }
 else {
   return n;
 }
}
 


const currentSal =()=> {

 // PAN 
 
 console.log("Current Sal executing");
 const gross_salary = parseInt(response.gross_s13) + parseInt(response.gas_s);
 document.getElementById('gross_salary').value = gross_salary;
 document.getElementById('gross_salary2').value = gross_salary;

 //DOB
 var inputt = response.dob;
 var pann = response.pan;

  if(inputt!=="1900-01-01"){
   document.getElementById("pan").value = pann;
   document.getElementById("pan").readOnly=true;

  }

 

 var dooob;
 var jk = document.getElementById('dd').value;
 if(inputt==="1900-01-01"){
   dooob = jk;
 }
 else {
   dooob = inputt; 
 }
// console.log(dooob);
 var dobb =new Date(dooob);

 let datee;
 if(response.financial_year==="2022-23"){
   datee = new Date("March 31, 2023");
 }if(response.financial_year==="2024-25"){
  datee = new Date("March 31, 2025");
 }  else {
   datee = new Date("March 31, 2024");
 }
 var subb = datee.getTime()- dobb.getTime() ;
 var substract =subb/(1000*60*60*24);
 substract = Math.round(substract);
 var yr = substract/365;
 yr = Math.floor(yr);
 // document.getElementById('age').value = yr;
 if(yr>60){
   document.getElementById('is').value = "SR.CITIZEN";
 }
 else {
   document.getElementById('is').value = "INDIVIDUAL";
 }

//  document.getElementById('age').value = yr;


 var employeer =response.category;
 // console.log(response.category);
 var dateofR, monthh;
    
 var dayy = dobb.getDate();

 monthh = dobb.getMonth();

// // console.log(dobb, monthh);
 if(employeer==='Officer' || employeer==='NTS' || employeer==="OFFICER" || employeer==="STUDENT" || employeer==="TESTER"){
  
   
   if(dayy===1){
     dateofR = new Date(dobb.setFullYear(dobb.getFullYear()+60));
   dateofR = new Date(dateofR.setDate(dateofR.getDate() -1));
   dateofR =YZero((dateofR.getFullYear())) + "-" +zero((dateofR.getMonth()+1)) + "-" + zero(dateofR.getDate()) ; 
   document.getElementById('dor').value =dateofR;
    
   }
   else {
     dateofR = new Date(dobb.setFullYear(dobb.getFullYear()+60));
     dateofR = new Date(dateofR.setMonth(dateofR.getMonth()+ 1));
     dateofR = new Date(dateofR.setDate(dateofR.getDate()-(dateofR.getDate())));
     dateofR =YZero((dateofR.getFullYear())) + "-" +zero((dateofR.getMonth()+1)) + "-" + zero(dateofR.getDate()) ; 
     document.getElementById('dor').value =dateofR;    
   }
 }
 else if(employeer==='Faculty' || employeer==="FACULTY" || employeer==="VICE CHANCELLOR"){
   if(dayy==1){
     dateofR = new Date(dobb.setFullYear(dobb.getFullYear()+65));
   dateofR = new Date(dateofR.setDate(dateofR.getDate() -1));
   dateofR =YZero((dateofR.getFullYear())) + "-" +zero((dateofR.getMonth()+1)) + "-" + zero(dateofR.getDate()) ; 
   document.getElementById('dor').value =dateofR;
    
   }
   else {
     dateofR = new Date(dobb.setFullYear(dobb.getFullYear()+65));
     dateofR = new Date(dateofR.setMonth(dateofR.getMonth()+ 1));
     dateofR = new Date(dateofR.setDate(dateofR.getDate()-(dateofR.getDate())));
     dateofR =YZero((dateofR.getFullYear())) + "-" +zero((dateofR.getMonth()+1)) + "-" + zero(dateofR.getDate()) ; 
     document.getElementById('dor').value =dateofR;    
   }
 }
 else if(employeer?.toUpperCase()==='REGISTRAR'){
   if(dayy==1){
     dateofR = new Date(dobb.setFullYear(dobb.getFullYear()+62));
   dateofR = new Date(dateofR.setDate(dateofR.getDate() -1));
   dateofR =YZero((dateofR.getFullYear())) + "-" +zero((dateofR.getMonth()+1)) + "-" + zero(dateofR.getDate()) ; 
   document.getElementById('dor').value =dateofR;
    
   }
   else {
     dateofR = new Date(dobb.setFullYear(dobb.getFullYear()+62));
     dateofR = new Date(dateofR.setMonth(dateofR.getMonth()+ 1));
     dateofR = new Date(dateofR.setDate(dateofR.getDate()-(dateofR.getDate())));
     dateofR =YZero((dateofR.getFullYear())) + "-" +zero((dateofR.getMonth()+1)) + "-" + zero(dateofR.getDate()) ; 
     document.getElementById('dor').value =dateofR;
    // console.log(dateofR);

   }
 }


//  // console.log(dateofR);
//  const input = response.dob;
//  // console.log(input);
 
// if(input!="1900-01-01"){

// const [year, month, day] = input.split('-');

// const dd2 = `${day}-${month}-${year}`;
// document.getElementById('dd').value = dd2;
// }




  

 var a = parseInt(response.gross_s13) || 0;
 var b = parseInt(response.gas_s) || 0;
 var y = parseInt(response.hra_exempt_e) || 0
 var z = parseInt(response.hra_exempt_n) || 0;
 var hra = parseInt(y) + parseInt(z);

 document.getElementById('hra_it').value = hra;

 var c = parseInt(response.gross_p13) || 0;
 var d = parseInt(arrear_p) || 0;
 var prev_Emp = parseInt(response.gross_f13) || 0 ;
 var pension = parseInt(c) + parseInt(d);
 var gross = parseInt(a) + parseInt(b);
//  var hra = parseInt(y) + parseInt(z);

 var bonus = document.getElementById('bonus').value || 0 ;
 bonus = parseInt(bonus) || 0;
 document.getElementById('bonus').value = bonus;
 var hono = document.getElementById('hono').value || 0 ;
 hono = parseInt(hono) || 0;
 document.getElementById('hono').value = hono;

 var current_emp = parseInt(gross) + parseInt(bonus);
 document.getElementById('bonus_a').value = bonus;
 document.getElementById('bonus_b').value = bonus;

 document.getElementById('hono_a').value = hono;
 document.getElementById('hono_b').value = hono;

 document.getElementById('ceg').value = current_emp;
 document.getElementById('ceg2').value = current_emp;
  
 var gross_sp= parseInt(current_emp) + parseInt(pension) + parseInt(prev_Emp) - parseInt(hra);
 var gross_sp2= parseInt(current_emp) + parseInt(pension) + parseInt(prev_Emp);

 document.getElementById('gross_sp').value = gross_sp;
 document.getElementById('gross_sp2').value = gross_sp2;

 // Standard Deduction
 var   standard, standard_new;
 if(gross_sp>50000){
     standard = 50000;
 }
 else {
   standard = 0;
 }

 if(response.financial_year==="2023-24"){
   if(gross_sp2>50000){
       standard_new = 50000;
   }
   else {
     standard_new = 0;
   }
 }
 else if(response.financial_year==="2024-25"){
   if(gross_sp2>75000){
       standard_new = 75000;
   }
   else {
     standard_new = 0;
   }
 }
 else {
   standard_new = 0;
 }
 

 document.getElementById('standard').value = standard;
 document.getElementById('standard2').value = standard_new;

 var prof1 = parseInt(response.ptax_s13) || 0;
 var prof2 = parseInt(response.lpt_s) || 0;
 var prof3 = parseInt(response.ptax_f13) || 0;
 
 var curr = parseInt(prof1 ) + parseInt(prof2);
 var prevv = parseInt(prof3);
 var cp = parseInt(curr) + parseInt(prevv);
 var cp_final;
 if(cp>2500){
  cp_final = 2500;
 }
 else if(cp<=2500){
  cp_final = cp;
 }

 document.getElementById("current_employer").value = parseInt(response.ptax_s13) +  parseInt(response.lpt_s);
 document.getElementById("cp_final").value = cp_final;

 var netsp = parseInt(gross_sp) - parseInt(cp_final) - parseInt(standard);
 var netsp2 = parseInt(gross_sp2) - parseInt(standard_new);
 document.getElementById('netsp').value = netsp;
 document.getElementById('netsp2').value = netsp2;

 var hb = document.getElementById('hb').value;
 hb = parseInt(hb) || 0;
 document.getElementById('hb').value = hb;
 var hb_final;
 if(hb>200000){
   hb_final = 200000;
 }
 else {
  //  hb_final = hb*95/100;
   hb_final = hb;
 }
var selectyr =document.getElementById("hbl_yrr").value;

 hb_final = threeDigit(hb_final);
 document.getElementById('hb_o').value = hb_final;
 document.getElementById('hb_n').value = 0;
 var hbll12 = parseInt(response.ihbl_c) || 0;
 var hbll14 = parseInt(response.ihbl_c2) || 0;
 var footer = document.getElementById('footer');
 var chapterBtn = document.getElementById('chapterBtn');
 // if(hb>200000 && hbll12==0 && hbll14==0 && (selectyr=='2016-17' || selectyr=='2019-20')  ){
 //     chapterBtn.style.display ='block';
 //     footer.style.display ='none';

 // }
 // // else if(hb>200000 && ((hbll2!=0 && selectyr=='2016-17') ||( hbll4!=0 && selectyr=='2019-20')) ){
 // //     chapterBtn.style.display ='none';
 // //     footer.style.display ='block';
    
     
 // // }
 // else if(hb==0 && (hbll12!=0 || hbll14!=0) ){
 //   chapterBtn.style.display ='block';
 //   footer.style.display ='none';
 
 // }
 // else {
 //   chapterBtn.style.display ='none';
 //     footer.style.display ='block';
  
 // }
 // Any Other Income

 var sbi = document.getElementById('sbi').value;
 sbi = parseInt(sbi) || 0;
 document.getElementById('sbi').value = sbi;

 var aoi = document.getElementById('aoi').value ;
 aoi = parseInt(aoi) || 0;
 document.getElementById('aoi').value = aoi;

 var isbb = parseInt(response.isb_c) || 0;
 var isbb2 = parseInt(response.isb_c2) || 0;
//  if(isbb==0 && isbb2==0 && sbi>0){
//    chapterBtn.style.display ='block';
//      footer.style.display ='none';
   
//  }
//  else if((isbb!=0 || isbb2!=0) && sbi>0){
//    chapterBtn.style.display ='none';
//      footer.style.display ='block';
//  }
//  else if((isbb!=0 || isbb2!=0) && sbi==0){
//    chapterBtn.style.display ='block';
//      footer.style.display ='none';
 
//  }
//  else {
//      chapterBtn.style.display ='none';
//      footer.style.display ='block';
//  }


 var income;
 income = parseInt(sbi) + parseInt(aoi);
 
 // income2 always 0
 document.getElementById('income').value = income;
 document.getElementById('income2').value = income;

 var netsp = document.getElementById('netsp').value || 0;
 netsp=parseInt(netsp)||0;
 document.getElementById('netsp').value = netsp;
 var netsp2 = document.getElementById('netsp2').value || 0;
 netsp2=parseInt(netsp2)||0;
 document.getElementById('netsp2').value=netsp2;

 var gross_income = parseInt(netsp) + parseInt(income) - parseInt(hb_final) + parseInt(hono);
 var gross_income2 = parseInt(netsp2) + parseInt(income) + parseInt(hono);

 document.getElementById('gross_income').value = gross_income;
 document.getElementById('gross_income2').value = gross_income2;

 var sbii;

 if(yr<60){
   if(sbi>10000){
     sbii = 10000;
   }
   else {
     sbii = parseInt(sbi);
   }
 }
 else {
   if(sbi>50000){
     sbii = 50000;
   }
   else {
     sbii = parseInt(sbi);
   }
 }


 var ihbl_c = parseInt(hb) ;
 var ihbll_c = threeDigit(hb_final);
  

 var interst = parseInt(ihbl_c) - parseInt(ihbll_c);
 var hbll, hbll2;
//  var inst = document.getElementById('inst');
 if(interst>50000){
  hbll = 50000;
 }
 hbll = hbll || 0;
  
 if(interst>150000){
  hbll2 = 150000;
 }
 hbll2 = hbll2 || 0;
 if(selectyr==="2016-17"){
  hbll = 0;
  // inst.style.display = 'block';
 }
 else if(selectyr==="2019-20"){
  hbll2 = 0;
  // inst.style.display = 'block';
 }
 else {
  hbll =0;
  hbll2 =0;
  // inst.style.display = 'none';
 }

 


 var total_deduction_c = parseInt(response.chapter_total) || 0;
 // console.log(response.chapter_total);
  
 var Deduction_chapter = parseInt(total_deduction_c)  ;

//  if(selectyr==="")

// 



var  chp_sbii = document.getElementById("sbi").value;
chp_sbii = parseInt(chp_sbii) || 0;
document.getElementById("sbi").value = chp_sbii;
var agee =  document.getElementById("is").value;
// parseInt(user.age) || 0;

 var chp_isbb, chp_isbb2;
 if(agee==="INDIVIDUAL"){
     if(sbii>10000){
      chp_isbb = 10000;
      chp_isbb2 = 0;
     }
     else {
      chp_isbb = sbii; 
      chp_isbb2 = 0;
     }
     
 }
 else{
     if(sbii>50000){
      chp_isbb2 = 50000; 
      chp_isbb = 0;

     }
     else {
      chp_isbb2 = sbii;
      chp_isbb = 0;
     }
      
 }


 chp_isbb = parseInt(chp_isbb) || 0;
 chp_isbb2 = parseInt(chp_isbb2) || 0;
 
 document.getElementById('chpt_isb').value = chp_isbb;
 document.getElementById('chpt_isb2').value = chp_isbb2;




// chapter hbl
var chp_interest;
let chapt_hb = document.getElementById('hb').value; 
chapt_hb = parseInt(chapt_hb) || 0;
document.getElementById('hb').value = chapt_hb;
if(chapt_hb>200000){
  chp_interest =parseInt(chapt_hb) - 200000;
}

chp_interest = parseInt(chp_interest) || 0;
let chp_hbl, chp_hbl2;
if(chp_interest>50000){
  chp_hbl = 50000;
}
else {
  chp_hbl = chp_interest;
}
 
 
if(chp_interest>150000){
  chp_hbl2 = 150000;
}
else {
  chp_hbl2 = chp_interest;
}
 

var chpt_select = document.getElementById('hbl_yrr').value;
if(chpt_select==="2016-17"){
  chp_hbl2 = 0;
  if(response.ihbl_c===0 && response.ihbl_c2===0){
    Deduction_chapter = parseInt(Deduction_chapter) + parseInt(chp_hbl);
  }else {
    // console.log(response.ihbl_c, response.ihbl_c2);
    if(response.ihbl_c===chp_hbl){
      Deduction_chapter = parseInt(Deduction_chapter);
    }else if(response.ihbl_c>chp_hbl){
      let minus = parseInt(response.ihbl_c) - parseInt(chp_hbl);
      Deduction_chapter = parseInt(Deduction_chapter) - parseInt(minus);
    } else if(response.ihbl_c<chp_hbl){
      let minus = parseInt(chp_hbl) - parseInt(response.ihbl_c);
      Deduction_chapter = parseInt(Deduction_chapter) + parseInt(minus);

    }
  }
}
else if(chpt_select==="2019-20"){
  chp_hbl = 0;
  
  if(response.ihbl_c===0 && response.ihbl_c2===0){
    Deduction_chapter = parseInt(Deduction_chapter) + parseInt(chp_hbl2);
  }else {
    Deduction_chapter = parseInt(Deduction_chapter);
    if(response.ihbl_c2===chp_hbl2){
      Deduction_chapter = parseInt(Deduction_chapter);
    }else if(response.ihbl_c2>chp_hbl2){
      let minus = parseInt(response.ihbl_c2) - parseInt(chp_hbl2);
      Deduction_chapter = parseInt(Deduction_chapter) - parseInt(minus);
    } else if(response.ihbl_c2<chp_hbl2){
      let minus = parseInt(chp_hbl2) - parseInt(response.ihbl_c2);
      Deduction_chapter = parseInt(Deduction_chapter) + parseInt(minus);
    }
  }
}
else {
  chp_hbl2 =0;
  chp_hbl =0;
}
document.getElementById('chp_hbl').value = chp_hbl;
document.getElementById('chp_hbl2').value = chp_hbl2;
  

  if(response.isb_c===0 && response.isb_c2===0){
  Deduction_chapter = parseInt(Deduction_chapter) + parseInt(chp_isbb) + parseInt(chp_isbb2);
  } else {
    // console.log(response.isb_c, response.isb_c2);
    let isb_to = parseInt(response.isb_c) + parseInt(response.isb_c2);
    let isb_ac = parseInt(chp_isbb) + parseInt(chp_isbb2)
    if(isb_to===isb_ac){
      Deduction_chapter = parseInt(Deduction_chapter);
    } else if(isb_to>isb_ac){
      let minus =parseInt((isb_to))- parseInt((isb_ac));
      Deduction_chapter = parseInt(Deduction_chapter) - parseInt(minus);
    }else {
      let minus =parseInt((isb_ac)) - parseInt((isb_to));
      Deduction_chapter = parseInt(Deduction_chapter) + parseInt(minus);
    }

  }

  // Deduction_chapter = parseInt(Deduction_chapter) + parseInt(chp_isbb) + parseInt(chp_isbb2);
 document.getElementById("tdi").value = Deduction_chapter;
 document.getElementById("tdi2").value = 0;

 
 var net_income = parseInt(gross_income) - parseInt(Deduction_chapter);
 
 // gross income 2 = net_income 2 (16 Net Income ) 
 document.getElementById('net_income').value = net_income;
 document.getElementById('net_income2').value =gross_income2;

 var taxable_in = (net_income/10)*10;
   taxable_in =oneDigit(taxable_in)  ;
 var taxable_in2 = (gross_income2/10)*10;
  taxable_in2 =  oneDigit(taxable_in2);

  // (17 Taxable Income Roundup in multiple of Rs 10)
 document.getElementById('taxable_income').value = taxable_in;
 document.getElementById('taxable_income2').value = taxable_in2;


 // 
   var tf = 250000;
   var temp = parseInt(taxable_in) - parseInt(tf);
    
   var ff = 500000;
   var temp2 = parseInt(taxable_in) - parseInt(ff);
   var tt = 1000000;
   var temp3 = parseInt(taxable_in) - parseInt(tt);
   var tax_payable;
         if(taxable_in<=250000){
             tax_payable = 0; 
         }
         else if(taxable_in<=500000){ 
           tax_payable = temp*5/100; 
         }
         else if(taxable_in<=1000000){ 
           tax_payable = (temp2*20/100) + 12500; 
         }
         else if(taxable_in>1000000){ 
           tax_payable = (temp3*30/100) + 112500; 
         }
          
       
       if(yr>=60) {
         if(taxable_in<=300000){
           tax_payable = 0;
       }
       else if(taxable_in<=500000){
         tax_payable = (parseInt(taxable_in) - 300000 )*5/100;
       }
       else if(taxable_in<=1000000){
         tax_payable = (( parseInt(taxable_in) - 500000)*20/100) + 10000;
       }
       else if(taxable_in>1000000){
         tax_payable = (( parseInt(taxable_in) - 1000000 )*30/100) + 110000;
       }
   } 

var tax_payable2;
if(response.financial_year==="2022-23") {
 if(taxable_in2<=250000){
   tax_payable2 = 0;
 }
 else if(taxable_in2<=500000){
  tax_payable2 = (parseInt(taxable_in2)-250000)*5/100;
 }
 else if(taxable_in2<=750000){
  tax_payable2 = ((parseInt(taxable_in2)-500000)*10/100) + 12500;
 }
 else if(taxable_in2<=1000000){
  tax_payable2 = ((parseInt(taxable_in2)-750000)*15/100) + 37500;
 }
 else if(taxable_in2<=1250000){
  tax_payable2 = ((parseInt(taxable_in2)-1000000)*20/100) + 75000;
 }
 else if(taxable_in2<=1500000){
  tax_payable2 = ((parseInt(taxable_in2)-1250000)*25/100) + 125000;
 }

 else if(taxable_in2>1500000){
  tax_payable2 = ((parseInt(taxable_in2)-1500000)*30/100) + 187500;
 }
}
else if(response.financial_year==="2023-24"){
  if(taxable_in2<=300000){
    tax_payable2 = 0;
  }
  else if(taxable_in2<=600000){
   tax_payable2 = (parseInt(taxable_in2)-300000)*5/100;
  }
  else if(taxable_in2<=900000){
   tax_payable2 = ((parseInt(taxable_in2)-600000)*10/100) + 15000;
  }
  else if(taxable_in2<=1200000){
   tax_payable2 = ((parseInt(taxable_in2)-900000)*15/100) + 45000;
  }
  else if(taxable_in2<=1500000){
   tax_payable2 = ((parseInt(taxable_in2)-1200000)*20/100) + 90000;
  }
  else if(taxable_in2>1500000){
   tax_payable2 = ((parseInt(taxable_in2)-1500000)*30/100) + 150000;
  }
 }
 else {
  if(taxable_in2<=300000){
    tax_payable2 = 0;
  }
  else if(taxable_in2<=700000 ){
   tax_payable2 = (parseInt(taxable_in2)-300000)*5/100;
  }
  else if(taxable_in2<=1000000 ){
   tax_payable2 = ((parseInt(taxable_in2)-700000)*10/100) + 20000;
  }
  else if(taxable_in2<=1200000 ){
   tax_payable2 = ((parseInt(taxable_in2)-1000000)*15/100) + 50000;
  }
  else if(taxable_in2<=1500000){
   tax_payable2 = ((parseInt(taxable_in2)-1200000)*20/100) + 80000;
  }
  else if(taxable_in2>1500000){
   tax_payable2 = ((parseInt(taxable_in2)-1500000)*30/100) + 140000;
  }
}


tax_payable = Math.round(tax_payable);
tax_payable2 = Math.round(tax_payable2);


 // tax Payable 

 document.getElementById('payable').value =tax_payable;
 document.getElementById('payable2').value =tax_payable2  ;


var rebatee, rebatee2;
 if(taxable_in<=500000){
   rebatee = tax_payable;
 }
 else {
   rebatee = 0;
 }
 if(response.financial_year=="2022-23"){
   if(taxable_in2<=500000){
     rebatee2 = tax_payable2;
   }
 }
 else if(response.financial_year=="2023-24"){
   if(taxable_in2<=700000){
     rebatee2 = tax_payable2;
   }
 }
 else if(response.financial_year==="2024-25"){
  if(taxable_in2<=700000){
    rebatee2 = tax_payable2;
  }
 }
 
 rebatee = parseInt(rebatee) || 0;
 rebatee2 = parseInt(rebatee2) || 0;

 // (19 Less Rebate)
 document.getElementById('rebate').value = rebatee;
 document.getElementById('rebatee').value = rebatee2;
 tax_payable2 = parseInt(tax_payable2) || 0;
 rebatee2 = parseInt(rebatee2) || 0;

 var tar1, tar2;
 if(tax_payable<rebatee) {
   tar1 = 0;
 }
 else {
   tar1 = parseInt(tax_payable) - parseInt(rebatee);
 }
 if(tax_payable2<rebatee2) {
   tar2 = 0;
 }
 else {
   tar2 = parseInt(tax_payable2) - parseInt(rebatee2);
 }
 // 20 Tax After Rebate 

 document.getElementById('tar').value = tar1;
 document.getElementById('tarr').value = tar2;

 // Regime Radio Button regimeopt
 // let regimeoptt = document.querySelector('input[name="regimeopt"]:checked');
 let regimeoptt = document.getElementById('on__option').value;
 let sh1 = document.getElementById('sh_1');
 let sh2= document.getElementById('sh_2');
 let sh3 = document.getElementById('sh_3');
 let sh4 = document.getElementById('sh_4');
 let sh5 = document.getElementById('sh_5');
 let sh6 = document.getElementById('sh_6');
 let sh7 = document.getElementById('sh_7');
 if(regimeoptt==='Select--'){
   // hide all 
   sh1.style.display = 'none';
   sh2.style.display = 'none';
   sh3.style.display = 'none';
   sh4.style.display = 'none';
   sh5.style.display = 'none';
   sh6.style.display = 'none';
   sh7.style.display = 'none';

 }
 else {
   // show all
   sh1.style.display = 'table-row';
   sh2.style.display = 'table-row';
   sh3.style.display = 'table-row';
   sh4.style.display = 'table-row';
   sh5.style.display = 'table-row';
   sh6.style.display = 'table-row';
   sh7.style.display = 'table-row';
   
 }


 ///      Tax as per new regime
 var tnr ;
 var regime =document.getElementById('regime');
 if(regimeoptt==="New Regime"){
  //  tnr = parseInt(tar2);
  //  regime.value = 'Tax as per New Regime';
   if(taxable_in2>700000 && taxable_in2<=727770){
   tnr = parseInt(taxable_in2) - 700000;
   regime.value = 'Tax as per New Regime after Marginal Relief';
  }else {
    tnr = parseInt(tar2);
    regime.value = 'Tax as per New Regime';
  }
  }
 else if(regimeoptt==="Old Regime"){
     tnr = parseInt(tar1);
     regime.value = 'Tax as per Old Regime';

 }
 else{
  
   // if(parseInt(tar1)<parseInt(tar2)) {
   //   tnr = parseInt(tar1);
   // regime.value = 'Tax as per old Regime';
   // }
   // else {
   //   tnr = tar2;
   // regime.value = 'Tax as per new Regime';

   // }
 }
 document.getElementById('tnr').value = tnr;

 // Add 4% 
 var add_h;
 if(tnr>0) {
   add_h = tnr*4/100;
 }
 else {
   add_h = 0;
 }
 add_h = Math.round(add_h);
 document.getElementById('add_he').value = add_h;

 // 23 Gross Tax Payable
 var gtp = parseInt(add_h) + parseInt(tnr);
 document.getElementById('gtp').value = gtp;
 // 24 Less: Relief
 var less_relief = document.getElementById('relief').value || 0;
 less_relief = parseInt(less_relief) || 0;
 document.getElementById('relief').value = less_relief;
 var ntp = parseInt(gtp) - parseInt(less_relief);
 // 25  Net Tax Payable 
 document.getElementById('ntp').value = ntp;

 /// Tax Deducted from salary 
 var income_s = parseInt(response.income_s13) || 0;
 var income_f = parseInt(response.income_f13) || 0;
 var ltdss   = parseInt(response.ltds_s) || 0;
 var income_p = parseInt(income_p13) || 0;
 var ltds_pe = parseInt(ltds_p) || 0;
 var tax_deduct_s = parseInt(income_s) + parseInt(income_f) + parseInt(ltdss) + parseInt(income_p) + parseInt(ltds_pe) ;
 document.getElementById('tds').value = tax_deduct_s;

 var tax_refund = parseInt(ntp) - parseInt(tax_deduct_s);

 document.getElementById('tr').value = tax_refund;
 var tax_pr= document.getElementById('tax_pr');
 if(tax_refund>=0){
   tax_pr.value="Tax Payable";
   tax_pr.style.color = 'red';
 }
 else {
   tax_pr.value ="Tax Refund";
   tax_pr.style.color='green';
 }
 
 
}






const Cp_Final =()=>{
  var prof1 = parseInt(response.ptax_s13) || 0;
  var prof2 = parseInt(response.lpt_s) || 0;
  var prof3 = parseInt(response.ptax_f13) || 0;
  
  var curr = parseInt(prof1 ) + parseInt(prof2);
  var prevv = parseInt(prof3);
  var cp = parseInt(curr) + parseInt(prevv);
  var cp_final;
  if(cp>2500){
   cp_final = 2500;
  }
  else if(cp<=2500){
   cp_final = cp;
  }

  return cp_final;

    }






//House Building


// const hb = ()=> {
//   var hb = document.getElementById('hb').value;
//   var hb_final;
//   if(hb>200000){
//     hb_final = 200000;
//   }
//   else {
//     hb_final = hb*90/100;
//   }
//   document.getElementById('hb_o').value = threeDigit(hb_final);
//   document.getElementById('hb_n').value = 0;
// }

const panValidation =()=> {
var panPattern = /([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}$/;
var pan = document.getElementById('pan').value;
var sign = document.getElementById('sign');

if(pan.match(panPattern)){
 sign.innerHTML = "<i class='bi bi-check2-circle'></i>";
 sign.classList.remove('text-danger');
 sign.style.color='green';
}
else {
 sign.innerHTML = "<i class='bi bi-x-circle'></i>";
 sign.classList.add('text-danger');
}


}
const addhaarType =()=> { 
var addhaar = document.getElementById('addhaar') ;
if(addhaar.value.length>0){
 if(addhaar.value.length / 4 == 1){
   addhaar.value +=" ";
 }
 if(addhaar.value.length / 9 == 1){
   addhaar.value +=" ";
 }
 if(addhaar.value.length / 14 == 1){
   addhaar.value +=" ";
 }
  
}
}


const addhaarValidation =()=> {
var addhaarPattern =/^[0-9]{12}$/;
// [2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
var addhaar = document.getElementById('addhaar').value;
var signn = document.getElementById('signn');

if(addhaar.match(addhaarPattern)){
 signn.innerHTML = "<i class='bi bi-check2-circle'></i>";
 signn.classList.remove('text-danger');
 signn.style.color='green';
}
else {
 signn.innerHTML = "<i class='bi bi-x-circle'></i>";
 signn.classList.add('text-danger');
}

}




const transform =()=> {
var e = document.getElementById('pan').value;

var x = e.toUpperCase();
document.getElementById('pan').value = x;


}



const d=()=>{
document.getElementById('dd').style.borderColor='';

}
const p=()=>{
document.getElementById('pan').style.borderColor='';

}
const ad=()=> {
document.getElementById('ad').style.border='1px solid #5cb85c';
document.getElementById('ad').style.boxShadow='0 0 0 0.1rem rgba(40, 167, 69, 0.25)';
document.getElementById('ad').style.borderRadius='5px';
}
const ad2=()=>{
document.getElementById('ad').style.borderColor='#b2b6bd';
document.getElementById('ad').style.boxShadow='';

}

const on_opt_regime =()=> {
document.getElementById('on__option').style.borderColor='';
}


useEffect(()=>{
  if(response!==undefined){
    console.log("currentSal");
    currentSal();
  }
}, [response])
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
  loading ? <Loader/> :<>
  
  {
    response===undefined ? <Loader/> : <> 
     {
   response===undefined ? <Loader/> :<>
  <div className="chapter_container">
    <h4 className='text-center text-decoration-underline'>Income Tax Computation Form</h4>

    <div className="table_div">
          <table>
            <tr className='table_bg'>
              <td>Name</td>
              <td><input type="text" value={response.name}   readOnly /></td>
              <td>D.O.B</td>
              <td><input type="date" name="" value={getDate(user.dob)} readOnly id="dd" onChange={currentSal}  ref={dd}  onFocus={d}  /></td>
              <td>D.O.R</td>
              <td><input type="text" name=""  id="dor" defaultValue={dor} ref={dor} readOnly/></td>
            </tr>
            <tr className='table_bg'>
              <td>PAN</td>
              <td><input type="text" placeholder="XXXXX1234X" id="pan"  ref={pan_it} 
               onChange={transform} maxLength={10} onKeyUp={currentSal} onFocus={p} readOnly value={user.pan}  /></td>
              <td>Aadhaar</td>
              <td><input type="text" name="" value={user.aadhaar} readOnly /></td>
              <td>Status</td>
              <td>
                <input type="text" id='is' ref={vs} defaultValue={vs} readOnly />
                {/* <select name="" id="is"  ref={vs} defaultValue={vs}  >
                <option value="INDIVIDUAL">INDIVIDUAL</option>
                <option value="SR. CITIZEN"></option>SR. CITIZEN</select> */}
                </td>
            </tr>

            </table>

            <div className="fyay">
              <div className="fy_child">Financial Year: {response.financial_year==="2024-25" ? "2024-25" :"2023-24"}</div>
              <div className="fy_child">Assessment Year:{response.financial_year==="2024-25" ? "2025-26" :"2024-25"} </div>
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
                  <td><input type="text" name="" id='gross_salary' defaultValue={salary_it} ref={salary_it}  /></td>
                  <td><input type="text" name="" id='gross_salary2' defaultValue={salaryy_it } ref={salaryy_it} /></td>
                </tr>
                <tr className='table_row_bg'>
                  <td>2</td>
                  <td><div className="bonus">
                    <div>Bonus</div>
                    <div><input type="text" name="" onKeyPress={onKeyPressEvent} id="bonus" onChange={currentSal} defaultValue={ bonus_it} ref={bonus_it}  /></div>
                    </div></td>
                  <td><input type="text" name="" id="bonus_a" readOnly defaultValue={bonuss_it } ref={bonuss_it}  /></td>
                  <td><input type="text" name="" id="bonus_b" readOnly defaultValue={bonuss_it2} ref={bonuss_it2} /></td>
                </tr>
                
                <tr  className='table_row_bg'>
                  <td>3</td>
                  <td>Current Employer Gross Salary	</td>
                  <td><input type="text" name="" readOnly id="ceg" defaultValue={cgs} ref={cgs}  /></td>
                  <td><input type="text" name="" id="ceg2" defaultValue={cgss} ref={cgss} readOnly  /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Previous Employer Gross Salary</td>
                  <td><input type="text" name="" value={response.gross_f13 || 0} readOnly defaultValue={pgs} ref={pgs}   /></td>
                  <td><input type="text" name="" value={response.gross_f13} readOnly defaultValue={pgss} ref={pgss}  /></td>
                </tr>
                <tr  className='table_row_bg' style={{display:"none"}}>
                  <td></td>
                  <td>Pension</td>
                  <td><input type="text" name="" readOnly value={ 0 } defaultValue={pension_it} ref={pension_it}   /></td>
                  <td><input type="text" name="" readOnly value={ 0 } defaultValue={pensionn_it} ref={pensionn_it}  /></td>
                </tr>
                <tr style={{display:"none"}}>
                  <td></td>
                  <td>	Cuommuted Value of Pension</td>
                  <td><input type="text" name="" value={parseInt(cvp)|| 0} defaultValue={cvp_it} ref={cvp_it} readOnly /></td>
                  <td><input type="text" name="" readOnly value={0}  ref={cvp_it2} defaultValue={cvp_it2} /></td>
                </tr>
                <tr  className='table_row_bg'>
                  <td rowSpan={2}>5</td>
                  <td>Less: Allowance under section 10</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr style={{display:"none"}}>
                  <td>10 (10A) - Commuted value of Pension</td>
                  <td><input type="text" name="" value={parseInt(cvp)|| 0} readOnly defaultValue={ten_it} ref={ten_it} /></td>
                  <td><input type="text" name="" value={ 0 } defaultValue={ten_it2} ref={ten_it2}  /></td>
                </tr>
                <tr  className='table_row_bg'>
                  <td>	10 (13A) - HRA</td>
                  <td><input type="text" name="" id="hra_it"  readOnly defaultValue={thirteen_it} ref={thirteen_it} /></td>
                  <td><input type="text" name="" value={ 0 } defaultValue={thirteenn_it} ref={thirteenn_it}  /></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Gross Salary</td>
                  <td><input type="text" name="" id="gross_sp" readOnly defaultValue={salpen_it} ref={salpen_it}  /></td>
                  <td><input type="text" name="" id="gross_sp2" readOnly defaultValue={salpen_it2} ref={salpen_it2}  /></td>
                </tr>
                <tr  className='table_row_bg'>
                  <td rowSpan={4}>7</td>
                  <td>Less: Deduction u/s 16:</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Tax on Employment (16iii)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr  className='table_row_bg'>
                  <td>
                  <div className="bonus">
                    <div className="bonus">
                      <div className="">Current Employer</div>
                      <div className=""><input type="text" name="" value={  parseInt(response.ptax_s13) +  parseInt(response.lpt_s)}  id='current_employer' readOnly  ref={ce_it}  /></div>
                    </div>
                    <div className="bonus">
                      <div className="">Previous Employer</div>
                      <div className=""><input type="text" name="" value={response.ptax_f13} readOnly defaultValue={pe_it} ref={pe_it} /></div>
                    </div>
                  </div>
                  </td>
                  <td><input type="text" name="" id="cp_final"  readOnly defaultValue={toe_it} ref={toe_it} /></td>
                  <td><input type="text" name="" id="cp_final2" value={0} readOnly defaultValue={toee_it} ref={toee_it}  /></td>
                </tr>
                <tr>
                  <td>	Standard Deduction u/s (16ia)</td>
                  <td><input type="text" name="" id="standard" readOnly defaultValue={s_deduction} ref={s_deduction}  /></td>
                  <td><input type="text" name="" id="standard2" readOnly defaultValue={s_deductionn} ref={s_deductionn}  /></td>
                </tr>
                <tr  className='table_row_bg'>
                  <td>8</td>
                  <td>Net Salary</td>
                  <td><input type="text" name="" id="netsp" readOnly defaultValue={net_salpen} ref={net_salpen}  /></td>
                  <td><input type="text" name="" id="netsp2" readOnly defaultValue={net_salpen2} ref={net_salpen2}  /></td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                  <div className="bonus">
                    <div>	
Interest on House Building Loan u/s 24(b)</div>
                    <div><input type="text" name=""  id="hb" onChange={currentSal} onKeyPress={onKeyPressEvent}  defaultValue={ihbl} ref={ihbl}   /></div>
                    </div>
                  </td>
                  <td><input type="text" name="" id="hb_o" readOnly defaultValue={ihbll} ref={ihbll}  /></td>
                  <td><input type="text" name="" id="hb_n" readOnly defaultValue={ihbll2} ref={ihbll2} /></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td><div className="bonus">
                    <div>Honorarium (AUAT/Dean/Hostel,Exametc)</div>
                    <div><input type="text" name=""  id="hono" onKeyPress={onKeyPressEvent} onChange={currentSal} defaultValue={hono_it} ref={hono_it}  /></div>
                    </div></td>
                  <td><input type="text" name="" id="hono_a" readOnly defaultValue={honoo_it} ref={honoo_it}  /></td>
                  <td><input type="text" name="" id="hono_b" readOnly defaultValue={honoo_it2} ref={honoo_it2} /></td>
                </tr>
                <tr className='table_row_bg'> 
                  <td rowSpan={2}>11</td>
                  <td >Income from other Sources:</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <div className="bonus">
                      <div className="bonus">
                        <div>Savings Bank Interest</div>
                        <div><input type="text" name="" id="sbi" onKeyPress={onKeyPressEvent} onChange={ currentSal} defaultValue={sbi} ref={sbi} /></div>
                      </div>
                      <div className="bonus">
                        <div>Any Other Income</div>
                        <div><input type="text" name="" onKeyPress={onKeyPressEvent} id="aoi" onChange={ currentSal} defaultValue={aoi_it} ref={aoi_it}  /></div>
                      </div>
                    </div>
                  </td>
                  <td><input type="text" name="" readOnly id="income" defaultValue={income_other_it} ref={income_other_it}  /></td>
                  <td><input type="text" name="" readOnly id="income2" value={0}  ref={income_other_it2} defaultValue={income_other_it2} /></td>
                </tr>
                <tr className='table_row_bg'>
                  <td>12</td>
                  <td>Gross Income</td>
                  <td><input type="text" name="" readOnly id="gross_income" defaultValue={gross_income_it} ref={gross_income_it} /></td>
                  <td><input type="text" name="" readOnly id="gross_income2" defaultValue={gross_incomee_it} ref={gross_incomee_it} /></td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Total Deductions under Chapter VIA</td>
                  <td><input type="text" name="" readOnly     id="tdi" defaultValue={total_deduction_it} ref={total_deduction_it}  /></td>
                  <td><input type="text" name="" readOnly   id="tdi2"  defaultValue={total_deductionn_it} ref={total_deductionn_it} /></td>
                </tr>
                <tr className='table_row_bg'>
                  <td>14</td>
                  <td>Net Income</td>
                  <td><input type="text" name="" id="net_income" readOnly defaultValue={net_income_it} ref={net_income_it}  /></td>
                  <td><input type="text" name="" id="net_income2" readOnly defaultValue={net_incomee_it} ref={net_incomee_it}  /></td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Taxable Income (Roundup u/s 288A in multiple of Rs.10/-)</td>
                  <td><input type="text" name="" id="taxable_income" readOnly defaultValue={taxable_income} ref={taxable_income} /></td>
                  <td><input type="text" name="" id="taxable_income2" readOnly  defaultValue={taxable_incomee} ref={taxable_incomee} /></td>
                </tr>
                <tr className='table_row_bg'>
                  <td>16</td>
                  <td>Tax Payable on Taxable Income</td>
                  <td><input type="text" name="" id="payable"  readOnly defaultValue={tax_payable} ref={tax_payable}  /></td>
                  <td><input type="text" name="" id="payable2" readOnly defaultValue={tax_payablee} ref={tax_payablee}  /></td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Less: Rebate u/s 87A</td>
                  <td><input type="text" name="" id="rebate" readOnly defaultValue={rebate_it} ref={rebate_it} /></td>
                  <td><input type="text" name="" id="rebatee" readOnly defaultValue={rebatee_it} ref={rebatee_it} /></td>
                </tr>
                <tr className='table_row_bg'>
                  <td>18</td>
                  <td>Tax after Rebate</td>
                  <td><input type="text" name="" id="tar" readOnly defaultValue={tax_ar} ref={tax_ar} /></td>
                  <td><input type="text" name="" id="tarr" defaultValue={tax_arr} ref={tax_arr} readOnly /></td>
                </tr>
                <tr className='table_bg'>
                  <th colSpan={3} className='text-align'> I am opting for</th>
                  <td><select name=""  id="on__option"  onChange={currentSal} defaultValue={regimeOpt} ref={regimeOpt} onFocus={on_opt_regime} >
      <option value="Select--">Select--</option>
                    <option value="New Regime">New Regime</option>
                    <option value="Old Regime">Old Regime</option>
                    </select></td>
                </tr>
                <tr className='table_row_bg' id="sh_1">
                  <td>19</td>
                  <td colSpan={2}><input type="text" name="" id="regime" readOnly style={{border:'0',boxShadow:'none', padding:'5px', color:'blue', background:"transparent" }} defaultValue={tax_on} ref={tax_on}  /></td>
                  <td><input type="text" name=""  id="tnr" defaultValue={tax_nr} ref={tax_nr} readOnly /></td>
                </tr>
                
               
                <tr id="sh_2">
                  <td>20</td>
                  <td colSpan={2}>Add: 4% CESS (Health & Education)</td>
                  <td><input type="text" name="" id="add_he" readOnly defaultValue={add_he} ref={add_he}  /></td>
                </tr>
                <tr className='table_row_bg' id="sh_3">
                <td>21</td>
                  <td colSpan={2}>Gross Tax Payable</td>
                  <td><input type="text" name="" id="gtp" readOnly defaultValue={gtp} ref={gtp} /></td>
                </tr>
                <tr id="sh_4">
                <td>22</td>
                  <td colSpan={2}>Less: Relief u/s 89 (Please ensure to submit Form 10E to claim this relief)</td>
                  <td><input type="text" name="" id="relief" defaultValue={relief} ref={relief} onChange={currentSal} /></td>
                </tr>
                <tr className='table_row_bg' id="sh_5">
                <td>23</td>
                  <td colSpan={2}>Net Tax Payable</td>
                  <td><input type="text" name="" id="ntp" defaultValue={ntp} ref={ntp} readOnly  /></td>
                </tr>
                <tr id="sh_6">
                <td>24</td>
                  <td colSpan={2}>Tax Deducted From Salary</td>
                  <td><input type="text" name="" id="tds" defaultValue={tax_deduct} ref={tax_deduct} readOnly /></td>
                </tr>
                <tr className='table_row_bg' id="sh_7">
                <td>25</td>
                  <td  style={{color:'green'}} colSpan={2}><input  id='tax_pr' readOnly style={{border:'0',boxShadow:'none', padding:'5px', background:"transparent" }} type="text" defaultValue={tax_rp} ref={tax_rp}  /> </td>
                  <td><input type='text' id="tr" defaultValue={tax_refund} ref={tax_refund} readOnly /> </td>
                </tr>
                
              </table>
              <table className='hbl_taken'>
  <tr>
    <td><i class="bi bi-1-circle"></i>&nbsp; <span> HBL taken in which Financial Year </span></td>
    <td><select style={{width:"100%"}}  id="hbl_yrr" defaultValue={hbl_yr} ref={hbl_yr} onChange={currentSal}  >
      <option value="Select--">Select--</option>
      <option value="2016-17">2016-17</option>
      <option value="2019-20">2019-20 till 2021-22</option>
      <option value="NA">NA</option>
    </select></td>
  </tr>
</table>

            </div>

    
    </div>
        <div className="" style={{display:"none"}}>
        <input type="text" name="" id="chp_hbl" ref={ihbl_c} />
<input type="text" name="" id="chp_hbl2" ref={ihbl_c2} />
<input type="text" name="" id="chpt_isb" ref={isb_c} />
<input type="text" name="" id="chpt_isb2" ref={isb_c2} />
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
  
  </>
 }
    </Sidebar>
   
   
   
   
   
   
   </>
  )
}
