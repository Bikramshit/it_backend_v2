import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import AuthHeader from '../../Layouts/Header/AuthHeader'
import {  useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { GetSingleResponse, SalaryHandler } from '../../../Redux/Actions/ResponseAction';
import Loader from '../../Layouts/Loader/Loader';
import {TbPointFilled} from "react-icons/tb"

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
    "disable":true
  },
  {
    "title":"IT Computation",
     "value":"it",
    "disable":true
  },
  {
    "title":"Regime ",
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
    "disable":true
  },
  {
    "title":"IT Computation",
     "value":"it",
    "disable":true
  },
  {
    "title":"Regime ",
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
function Salary() {
  const {user} = useSelector(state=>state.user);
  const {loading, response} = useSelector(state=>state.response); 
  
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(()=>{
   dispatch(GetSingleResponse(params.id))
  }, [dispatch, params.id])


    const contract =useRef('No')   
    const  basic1 = useRef(0);
     const  rate1 = useRef(0);
       const  da1 = useRef(0);
      const  hra1 = useRef(0);
       const  ma1 = useRef(0);
   const  adjust1 = useRef(0);
    const  gross1 = useRef(0);
     const  ptax1 = useRef(0);
     const  aupf1 = useRef(0);
       const  sf1 = useRef(0);
   const  income1 = useRef(0);
   const  netsal1 = useRef(0);
   const  basic2 = useRef(0);
   const  rate2 = useRef(0);
     const  da2 = useRef(0);
    const  hra2 = useRef(0);
     const  ma2 = useRef(0);
 const  adjust2 = useRef(0);
  const  gross2 = useRef(0);
   const  ptax2 = useRef(0);
   const  aupf2 = useRef(0);
     const  sf2 = useRef(0);
 const  income2 = useRef(0);
 const  netsal2 = useRef(0);
    const  basic3 = useRef(0);
     const  rate3 = useRef(0);
       const  da3 = useRef(0);
      const  hra3 = useRef(0);
       const  ma3 = useRef(0);
   const  adjust3 = useRef(0);
    const  gross3 = useRef(0);
     const  ptax3 = useRef(0);
     const  aupf3 = useRef(0);
       const  sf3 = useRef(0);
   const  income3 = useRef(0);
   const  netsal3 = useRef(0);

  const  basic4 = useRef(0);
   const  rate4 = useRef(0);
     const  da4 = useRef(0);
    const  hra4 = useRef(0);
     const  ma4 = useRef(0);
 const  adjust4 = useRef(0);
  const  gross4 = useRef(0);
   const  ptax4 = useRef(0);
   const  aupf4 = useRef(0);
     const  sf4 = useRef(0);
 const  income4 = useRef(0);
 const  netsal4 = useRef(0);
    const  basic5 = useRef(0);
     const  rate5 = useRef(0);
       const  da5 = useRef(0);
      const  hra5 = useRef(0);
       const  ma5 = useRef(0);
   const  adjust5 = useRef(0);
    const  gross5 = useRef(0);
     const  ptax5 = useRef(0);
     const  aupf5 = useRef(0);
       const  sf5 = useRef(0);
   const  income5 = useRef(0);
   const  netsal5 = useRef(0);

  const  basic6 = useRef(0);
   const  rate6 = useRef(0);
     const  da6 = useRef(0);
    const  hra6 = useRef(0);
     const  ma6 = useRef(0);
 const  adjust6 = useRef(0);
  const  gross6 = useRef(0);
   const  ptax6 = useRef(0);
   const  aupf6 = useRef(0);
     const  sf6 = useRef(0);
 const  income6 = useRef(0);
 const  netsal6 = useRef(0);

    const  basic7 = useRef(0);
     const  rate7 = useRef(0);
       const  da7 = useRef(0);
      const  hra7 = useRef(0);
       const  ma7 = useRef(0);
   const  adjust7 = useRef(0);
    const  gross7 = useRef(0);
     const  ptax7 = useRef(0);
     const  aupf7 = useRef(0);
       const  sf7 = useRef(0);
   const  income7 = useRef(0);
   const  netsal7 = useRef(0);
  const having_arrear = useRef();
  const  basic8 = useRef(0);
   const  rate8 = useRef(0);
     const  da8 = useRef(0);
    const  hra8 = useRef(0);
     const  ma8 = useRef(0);
 const  adjust8 = useRef(0);
  const  gross8 = useRef(0);
   const  ptax8 = useRef(0);
   const  aupf8 = useRef(0);
     const  sf8 = useRef(0);
 const  income8 = useRef(0);
 const  netsal8 = useRef(0);

  const  basic9 = useRef(0);
   const  rate9 = useRef(0);
     const  da9 = useRef(0);
    const  hra9 = useRef(0);
     const  ma9 = useRef(0);
 const  adjust9 = useRef(0);
  const  gross9 = useRef(0);
   const  ptax9 = useRef(0);
   const  aupf9 = useRef(0);
     const  sf9 = useRef(0);
 const  income9 = useRef(0);
 const  netsal9 = useRef(0);

  const  basic10 = useRef(0);
   const  rate10 = useRef(0);
     const  da10 = useRef(0);
    const  hra10 = useRef(0);
     const  ma10 = useRef(0);
 const  adjust10 = useRef(0);
  const  gross10 = useRef(0);
   const  ptax10 = useRef(0);
   const  aupf10 = useRef(0);
     const  sf10 = useRef(0);
 const  income10 = useRef(0);
 const  netsal10 = useRef(0);

  const  basic11 = useRef(0);
   const  rate11 = useRef(0);
     const  da11 = useRef(0);
    const  hra11 = useRef(0);
     const  ma11 = useRef(0);
 const  adjust11 = useRef(0);
  const  gross11 = useRef(0);
   const  ptax11 = useRef(0);
   const  aupf11 = useRef(0);
     const  sf11 = useRef(0);
 const  income11 = useRef(0);
 const  netsal11 = useRef(0);



  const  basic12 = useRef(0);
   const  rate12 = useRef(0);
     const  da12 = useRef(0);
    const  hra12 = useRef(0);
     const  ma12 = useRef(0);
 const  adjust12 = useRef(0);
  const  gross12 = useRef(0);
   const  ptax12 = useRef(0);
   const  aupf12 = useRef(0);
     const  sf12 = useRef(0);
 const  income12 = useRef(0);
 const  netsal12 = useRef(0);



  const  basic13 = useRef(0);
   const  rate13 = useRef(0);
     const  da13 = useRef(0);
    const  hra13 = useRef(0);
     const  ma13 = useRef(0);
 const  adjust13 = useRef(0);
  const  gross13 = useRef(0);
   const  ptax13 = useRef(0);
   const  aupf13 = useRef(0);
     const  sf13 = useRef(0);
 const  income13 = useRef(0);
 const  netsal13 = useRef(0);






 const gas  = useRef(0);
 const lpt  = useRef(0);
 const laupf =useRef(0);
 const ltds=  useRef(0);
 const nas  = useRef(0);

 
 useEffect(()=>{
  if(response!==undefined && response!==null){
    having_arrear.current.value = response.having_arrear_s;
     basic1.      current.value =    response.basic_s1;
      rate1.       current.value =    response.rate_s1;
        da1.         current.value =    response.da_s1;
       hra1.        current.value =    response.hra_s1;
        ma1.         current.value =    response.ma_s1;
    adjust1.    current.value =     response.adjust_s1;
     gross1.      current.value =    response.gross_s1;
      ptax1.       current.value =    response.ptax_s1;
      aupf1.       current.value =    response.aupf_s1;
        sf1.         current.value =    response.sf_s1;
    income1.     current.value =    response.income_s1;
    netsal1.     current.value =    response.netsal_s1;      
   basic2.      current.value =    response.basic_s2;
    rate2.       current.value =    response.rate_s2;
      da2.         current.value =    response.da_s2;
     hra2.        current.value =    response.hra_s2;
      ma2.         current.value =    response.ma_s2;
  adjust2.    current.value =     response.adjust_s2;
   gross2.      current.value =    response.gross_s2;
    ptax2.       current.value =    response.ptax_s2;
    aupf2.       current.value =    response.aupf_s2;
      sf2.         current.value =    response.sf_s2;
  income2.     current.value =    response.income_s2;
  netsal2.     current.value =    response.netsal_s2;
 basic3.      current.value =    response.basic_s3;
  rate3.       current.value =    response.rate_s3;
    da3.         current.value =    response.da_s3;
   hra3.        current.value =    response.hra_s3;
    ma3.         current.value =    response.ma_s3;
adjust3.    current.value =     response.adjust_s3;
 gross3.      current.value =    response.gross_s3;
  ptax3.       current.value =    response.ptax_s3;
  aupf3.       current.value =    response.aupf_s3;
    sf3.         current.value =    response.sf_s3;
income3.     current.value =    response.income_s3;
netsal3.     current.value =    response.netsal_s3;
     basic4.      current.value =    response.basic_s4;
      rate4.       current.value =    response.rate_s4;
        da4.         current.value =    response.da_s4;
       hra4.        current.value =    response.hra_s4;
        ma4.         current.value =    response.ma_s4;
    adjust4.    current.value =     response.adjust_s4;
     gross4.      current.value =    response.gross_s4;
      ptax4.       current.value =    response.ptax_s4;
      aupf4.       current.value =    response.aupf_s4;
        sf4.         current.value =    response.sf_s4;
    income4.     current.value =    response.income_s4;
    netsal4.     current.value =    response.netsal_s4;

     basic5.      current.value =    response.basic_s5;
      rate5.       current.value =    response.rate_s5;
        da5.         current.value =    response.da_s5;
       hra5.        current.value =    response.hra_s5;
        ma5.         current.value =    response.ma_s5;
    adjust5.    current.value =     response.adjust_s5;
     gross5.      current.value =    response.gross_s5;
      ptax5.       current.value =    response.ptax_s5;
      aupf5.       current.value =    response.aupf_s5;
        sf5.         current.value =    response.sf_s5;
    income5.     current.value =    response.income_s5;
    netsal5.     current.value =    response.netsal_s5;
    

     basic6.      current.value =    response.basic_s6;
      rate6.       current.value =    response.rate_s6;
        da6.         current.value =    response.da_s6;
       hra6.        current.value =    response.hra_s6;
        ma6.         current.value =    response.ma_s6;
    adjust6.    current.value =     response.adjust_s6;
     gross6.      current.value =    response.gross_s6;
      ptax6.       current.value =    response.ptax_s6;
      aupf6.       current.value =    response.aupf_s6;
        sf6.         current.value =    response.sf_s6;
    income6.     current.value =    response.income_s6;
    netsal6.     current.value =    response.netsal_s6;
     basic7.      current.value =    response.basic_s7;
      rate7.       current.value =    response.rate_s7;
        da7.         current.value =    response.da_s7;
       hra7.        current.value =    response.hra_s7;
        ma7.         current.value =    response.ma_s7;
    adjust7.    current.value =     response.adjust_s7;
     gross7.      current.value =    response.gross_s7;
      ptax7.       current.value =    response.ptax_s7;
      aupf7.       current.value =    response.aupf_s7;
        sf7.         current.value =    response.sf_s7;
    income7.     current.value =    response.income_s7;
    netsal7.     current.value =    response.netsal_s7;
     basic8.      current.value =    response.basic_s8;
      rate8.       current.value =    response.rate_s8;
        da8.         current.value =    response.da_s8;
       hra8.        current.value =    response.hra_s8;
        ma8.         current.value =    response.ma_s8;
    adjust8.    current.value =     response.adjust_s8;
     gross8.      current.value =    response.gross_s8;
      ptax8.       current.value =    response.ptax_s8;
      aupf8.       current.value =    response.aupf_s8;
        sf8.         current.value =    response.sf_s8;
    income8.     current.value =    response.income_s8;
    netsal8.     current.value =    response.netsal_s8;
     basic9.      current.value =    response.basic_s9;
      rate9.       current.value =    response.rate_s9;
        da9.         current.value =    response.da_s9;
       hra9.        current.value =    response.hra_s9;
        ma9.         current.value =    response.ma_s9;
    adjust9.    current.value =     response.adjust_s9;
     gross9.      current.value =    response.gross_s9;
      ptax9.       current.value =    response.ptax_s9;
      aupf9.       current.value =    response.aupf_s9;
        sf9.         current.value =    response.sf_s9;
    income9.     current.value =    response.income_s9;
    netsal9.     current.value =    response.netsal_s9;

     basic10.      current.value =    response.basic_s10;
      rate10.       current.value =    response.rate_s10;
        da10.         current.value =    response.da_s10;
       hra10.        current.value =    response.hra_s10;
        ma10.         current.value =    response.ma_s10;
    adjust10.    current.value =     response.adjust_s10;
     gross10.      current.value =    response.gross_s10;
      ptax10.       current.value =    response.ptax_s10;
      aupf10.       current.value =    response.aupf_s10;
        sf10.         current.value =    response.sf_s10;
    income10.     current.value =    response.income_s10;
    netsal10.     current.value =    response.netsal_s10;
     basic11.      current.value =    response.basic_s11;
      rate11.       current.value =    response.rate_s11;
        da11.         current.value =    response.da_s11;
       hra11.        current.value =    response.hra_s11;
        ma11.         current.value =    response.ma_s11;
    adjust11.    current.value =     response.adjust_s11;
     gross11.      current.value =    response.gross_s11;
      ptax11.       current.value =    response.ptax_s11;
      aupf11.       current.value =    response.aupf_s11;
        sf11.         current.value =    response.sf_s11;
    income11.     current.value =    response.income_s11;
    netsal11.     current.value =    response.netsal_s11;
     basic12.      current.value =    response.basic_s12;
      rate12.       current.value =    response.rate_s12;
        da12.         current.value =    response.da_s12;
       hra12.        current.value =    response.hra_s12;
        ma12.         current.value =    response.ma_s12;
    adjust12.    current.value =     response.adjust_s12;
     gross12.      current.value =    response.gross_s12;
      ptax12.       current.value =    response.ptax_s12;
      aupf12.       current.value =    response.aupf_s12;
        sf12.         current.value =    response.sf_s12;
    income12.     current.value =    response.income_s12;
    netsal12.     current.value =    response.netsal_s12;
     basic13.      current.value =    response.basic_s13;
      rate13.       current.value =    response.rate_s13;
        da13.         current.value =    response.da_s13;
       hra13.        current.value =    response.hra_s13;
        ma13.         current.value =    response.ma_s13;
    adjust13.    current.value =     response.adjust_s13;
     gross13.      current.value =    response.gross_s13;
      ptax13.       current.value =    response.ptax_s13;
      aupf13.       current.value =    response.aupf_s13;
        sf13.         current.value =    response.sf_s13;
    income13.     current.value =    response.income_s13;
    netsal13.     current.value =    response.netsal_s13;

    gas.current.value = response.gas_s;
    lpt.current.value = response.lpt_s;
    laupf.current.value = response.laupf_s;
    ltds.current.value = response.ltds_s;
    nas.current.value = response.nas_s;

 
    // da1
  }
}, [dispatch, response])




  






const navigate = useNavigate();
 const SubmitHandler =async(currentState)=>{
  const id = params.id;
  // const currentState="Form12B";

 const res = await dispatch(SalaryHandler(id,
    currentState,
    contract.current.value,
    basic1.current.value,
    basic2.current.value,
    basic3.current.value,
    basic4.current.value,
    basic5.current.value,
    basic6.current.value,
    basic7.current.value,
    basic8.current.value,
    basic9.current.value,
    basic10.current.value,
    basic11.current.value,
    basic12.current.value,
    basic13.current.value,
    rate1.current.value,
    rate2.current.value,
    rate3.current.value,
    rate4.current.value,
    rate5.current.value,
    rate6.current.value,
    rate7.current.value,
    rate8.current.value,
    rate9.current.value,
    rate10.current.value,
    rate11.current.value,
    rate12.current.value,
    rate13.current.value,
    da1.current.value,
    da2.current.value,
    da3.current.value,
    da4.current.value,
    da5.current.value,
    da6.current.value,
    da7.current.value,
    da8.current.value,
    da9.current.value,
    da10.current.value,
    da11.current.value,
    da12.current.value,
    da13.current.value,
    hra1.current.value,
    hra2.current.value,
    hra3.current.value,
    hra4.current.value,
    hra5.current.value,
    hra6.current.value,
    hra7.current.value,
    hra8.current.value,
    hra9.current.value,
    hra10.current.value,
    hra11.current.value,
    hra12.current.value,
    hra13.current.value,
    ma1.current.value,
    ma2.current.value,
    ma3.current.value,
    ma4.current.value,
    ma5.current.value,
    ma6.current.value,
    ma7.current.value,
    ma8.current.value,
    ma9.current.value,
    ma10.current.value,
    ma11.current.value,
    ma12.current.value,
    ma13  .current.value,
    adjust1.current.value,
    adjust2.current.value,
    adjust3.current.value,
    adjust4.current.value,
    adjust5.current.value,
    adjust6.current.value,
    adjust7.current.value,
    adjust8.current.value,
    adjust9.current.value,
    adjust10.current.value,
    adjust11.current.value,
    adjust12.current.value,
    adjust13.current.value,
    gross1.current.value,
    gross2.current.value,
    gross3.current.value,
    gross4.current.value,
    gross5.current.value,
    gross6.current.value,
    gross7.current.value,
    gross8.current.value,
    gross9.current.value,
    gross10.current.value,
    gross11.current.value,
    gross12.current.value,
    gross13.current.value,
    ptax1.current.value,
    ptax2.current.value,
    ptax3.current.value,
    ptax4.current.value,
    ptax5.current.value,
    ptax6.current.value,
    ptax7.current.value,
    ptax8.current.value,
    ptax9.current.value,
    ptax10.current.value,
    ptax11.current.value,
    ptax12.current.value,
    ptax13.current.value,
    aupf1.current.value,
    aupf2.current.value,
    aupf3.current.value,
    aupf4.current.value,
    aupf5.current.value,
    aupf6.current.value,
    aupf7.current.value,
    aupf8.current.value,
    aupf9.current.value,
    aupf10.current.value,
    aupf11.current.value,
    aupf12.current.value,
    aupf13.current.value,
    sf1.current.value,
    sf2.current.value,
    sf3.current.value,
    sf4.current.value,
    sf5.current.value,
    sf6.current.value,
    sf7.current.value,
    sf8.current.value,
    sf9.current.value,
    sf10.current.value,
    sf11.current.value,
    sf12.current.value,
    sf13.current.value,
    income1.current.value,
    income2.current.value,
    income3.current.value,
    income4.current.value,
    income5.current.value,
    income6.current.value,
    income7.current.value,
    income8.current.value,
    income9.current.value,
    income10.current.value,
    income11.current.value,
    income12.current.value,
    income13.current.value,
    netsal1.current.value,
    netsal2.current.value,
    netsal3.current.value,
    netsal4.current.value,
    netsal5.current.value,
    netsal6.current.value,
    netsal7.current.value,
    netsal8.current.value,
    netsal9.current.value,
    netsal10.current.value,
    netsal11.current.value,
    netsal12.current.value,
    netsal13.current.value,
    having_arrear.current.value,
    gas.current.value,
    lpt.current.value,
    laupf.current.value,
    ltds.current.value,
    nas.current.value,

    ))
    // console.log(res);

    return res;
 
 }

 const NextHandler=async()=>{
  const res = await SubmitHandler("form12b");
   if(res===true){
    navigate(`/form12b/${params.id}`)

   }
 }

 const SelectHandler = async(e)=>{

  const res = await SubmitHandler(e);
  if(res===true){
    navigate(`/${e}/${params.id}`);
  }
 }
 useEffect(()=>{
  if(response!==undefined){
    if(user.role==="user" && response.submitStatus==="Yes"){
      navigate('/error')
    }
  }
});

    const twoDigit =(num)=>{
        return Math.round(num/100)*100;
     }
    const  onKeyPressEvent = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        if (!(new RegExp("[0-9]").test(keyValue)))
          event.preventDefault();
        return;
      }
     
     const net_arrear_fun =()=>{
       var arrear_salary, profession_tax, less_aupf, less_tds , net_arrear_salary;
 
      arrear_salary = document.getElementById('arrear_salary').value;
      arrear_salary  = parseInt(arrear_salary) || 0;
      document.getElementById('arrear_salary').value = arrear_salary;
      profession_tax = document.getElementById('profession_tax').value;
      profession_tax = parseInt(profession_tax) || 0;
      document.getElementById('profession_tax').value = profession_tax;
      less_aupf = document.getElementById('less_aupf').value;
      less_aupf = parseInt(less_aupf) || 0;
      document.getElementById('less_aupf').value = less_aupf;
      less_tds = document.getElementById('less_tds').value;
     less_tds = parseInt(less_tds) || 0;
     document.getElementById('less_tds').value = less_tds
     net_arrear_salary =parseInt(arrear_salary) - parseInt( profession_tax) - parseInt( less_aupf ) - parseInt( less_tds );
     net_arrear_salary = parseInt(net_arrear_salary) || 0;
     document.getElementById("net_arrear_salary").value = net_arrear_salary;
 
 
     }
 

       

const basic =(e, val)=>{
      let basicc =parseInt( e.target.value);
      basicc = parseInt(basicc) || 0;
      let adjust = document.getElementById(`donation${val}`).value || 0;
      adjust = parseInt(adjust) || 0;
      let adjust2 = parseInt(adjust);
      let aupf = document.getElementById(`aupf${val}`).value || 0;
      aupf = parseInt(aupf) || 0;
      let aupf2 = parseInt(aupf);
      let sf = document.getElementById(`sf${val}`).value || 0;
      sf = parseInt(sf) || 0;
      let sf2 = parseInt(sf) || 0;
      let income = document.getElementById(`income_tax${val}`).value || 0;
      income = parseInt(income) || 0;
      let income2 = parseInt(income) || 0;
      let rate = document.getElementById(`rate${val}`).value || 0;
      rate = parseInt(rate) || 0;
      let rate2 = parseInt(rate);
      
      

      
      let da = (basicc* parseInt(rate))/100;
      da = Math.round(da);

      let hra = basicc*12/100;
      hra = Math.round(hra);
      if(hra>12000) hra = 12000;
      let ma, ma2;

     


      let basiccc = twoDigit(basicc*3/100);
      let basic2 = parseInt(basicc) + parseInt(basiccc);
      if(val>4){
        basic2 = parseInt(basicc);
      }
      let da2 = (parseInt(basic2) *parseInt(rate2))/100;
      da2 = Math.round(da2);

      let hra2 = basic2*12/100;
      hra2 = Math.round(hra2);
      if(hra2>12000) hra2 = 12000;

      // if(basic2>0){
      //     ma2 = 500;
      // }
      // else ma2 = 0;

      if(basicc>0){
        if(val==1){
          ma = 500;
        }else {
          let prev = document.getElementById(`ma${val-1}`).value;
          ma = parseInt(prev);
        }
         
      }
      else {
          ma=0;
      }

      if(basic2>0){
        if(val==1){
          ma2 = 500;
        }else {
          let prev = document.getElementById(`ma${val-1}`).value;
          ma2 = parseInt(prev);
        }
         
      }
      else {
          ma2=0;
      }
      
   


      let contract = document.getElementById('list').value;
      if(contract==='Yes'){
          da=0;
          da2=0;
          ma=0;
          ma2=0
          hra=0;
          hra2=0;
          rate=0;
          rate2=0;

          for(let i=1; i<=12; i++){
              document.getElementById(`da${i}`).readOnly =true;
              document.getElementById(`hra${i}`).readOnly =true;
              document.getElementById(`ma${i}`).readOnly =true;
              document.getElementById(`rate${i}`).readOnly =true;
          }

      }

      let gross = parseInt(basicc) + parseInt(da )+ parseInt(hra) + parseInt(ma)  - parseInt(adjust);
      let gross2 = parseInt(basic2) + parseInt(da2)+ parseInt(hra2) + parseInt(ma2) - parseInt(adjust);
     
  
  
      let p_tax, p_tax2;
      if(gross<=10000) p_tax=0;
      else if(gross<=15000) p_tax=110;
      else if(gross<=25000) p_tax=130;
      else if(gross<=40000) p_tax=150;
      else if(gross>40000) p_tax=200;
      
      if(gross2<=10000) p_tax2=0;
      else if(gross2<=15000) p_tax2=110;
      else if(gross2<=25000) p_tax2=130;
      else if(gross2<=40000) p_tax2=150;
      else if(gross2>40000) p_tax2=200;
  
    //   if(gross_val<=10000) p_taxv=0;
    //   else if(gross_val<=15000) p_taxv=110;
    //   else if(gross_val<=25000) p_taxv=130;
    //   else if(gross_val<=40000) p_taxv=150;
    //   else if(gross_val>40000)  p_taxv=200;
      
    //   if(gross_val2<=10000) p_taxv2=0;
    //   else if(gross_val2<=15000) p_taxv2=110;
    //   else if(gross_val2<=25000) p_taxv2=130;
    //   else if(gross_val2<=40000) p_taxv2=150;
    //   else if(gross_val2>40000)  p_taxv2=200;
  
  
    //   
    //   
      let netsal = parseInt(gross) - parseInt(p_tax) - parseInt(aupf) - parseInt(sf) - parseInt(income);
      let netsal2 = parseInt(gross2) - parseInt(p_tax2) - parseInt(aupf2) - parseInt(sf2) - parseInt(income2);
  
  
      if(val<=4){
          for(let i=val; i<=12; i++){
  
              document.getElementById(`da${i}`).value = da;
              document.getElementById(`rate${i}`).value = rate;
              document.getElementById(`hra${i}`).value = hra;
              document.getElementById(`ma${i}`).value = ma;
              
              
              document.getElementById(`sf${i}`).value = sf;
              document.getElementById(`aupf${i}`).value = aupf;
              document.getElementById(`income_tax${i}`).value = income;
              document.getElementById(`net_salary${i}`).value = netsal;
              document.getElementById(`basic${i}`).value = parseInt(basicc);
  
            //   if(i==val){
            //   document.getElementById(`gross${i}`).value = gross_val;
            //   document.getElementById(`donation${i}`).value = adjust;
            //   document.getElementById(`net_salary${i}`).value = netsal_val;
            //   document.getElementById(`profession${i}`).value = p_taxv;
            //   }
            //   else {
                  document.getElementById(`gross${i}`).value = gross;
                  document.getElementById(`donation${i}`).value = adjust;
                  document.getElementById(`net_salary${i}`).value = netsal;
                  document.getElementById(`profession${i}`).value = p_tax;
            //   }
              if(i>4){
                  document.getElementById(`basic${i}`).value = basic2;
                  document.getElementById(`rate${i}`).value = rate2;
                  document.getElementById(`da${i}`).value = da2;
                  document.getElementById(`hra${i}`).value = hra2;
                  document.getElementById(`ma${i}`).value = ma2;
                  document.getElementById(`donation${i}`).value = adjust;
                  document.getElementById(`profession${i}`).value = p_tax2;
                  document.getElementById(`sf${i}`).value = sf2;
                  document.getElementById(`aupf${i}`).value = aupf2;
                  document.getElementById(`income_tax${i}`).value = income2;
  
                //   if(i==val){
                //       document.getElementById(`gross${i}`).value = gross_val2;
                //       document.getElementById(`donation${i}`).value = adjust;
                //       document.getElementById(`net_salary${i}`).value = netsal_val2;
                //       document.getElementById(`profession${i}`).value = p_taxv2;
                      
                //   }
                //   else {
                      document.getElementById(`gross${i}`).value = gross2;
                      document.getElementById(`donation${i}`).value = adjust;
                      document.getElementById(`net_salary${i}`).value = netsal2;
                      document.getElementById(`profession${i}`).value = p_tax2;
                //   }
  
              }
          }
        }
        if(val>4){
          for(let i=val; i<=12; i++){
              document.getElementById(`da${i}`).value = da;
              document.getElementById(`basic${i}`).value = basicc;
              document.getElementById(`rate${i}`).value = rate;
              document.getElementById(`hra${i}`).value = hra;
              document.getElementById(`ma${i}`).value = ma;
              document.getElementById(`donation${i}`).value = adjust;
              document.getElementById(`gross${i}`).value = gross;
              document.getElementById(`sf${i}`).value = sf;
              document.getElementById(`aupf${i}`).value = aupf;
              document.getElementById(`income_tax${i}`).value = income;
              document.getElementById(`net_salary${i}`).value = netsal;
            //   if(i==val){
            //       document.getElementById(`gross${i}`).value = gross_val;
            //       document.getElementById(`donation${i}`).value = adjust;
            //       document.getElementById(`net_salary${i}`).value = netsal_val;
            //       document.getElementById(`profession${i}`).value = p_taxv;
                  
            //   }
            //   else {
                  document.getElementById(`gross${i}`).value = gross;
                  document.getElementById(`donation${i}`).value = adjust;
                  document.getElementById(`net_salary${i}`).value = netsal;
                  document.getElementById(`profession${i}`).value = p_tax;
  
            //   }            
          }
        }

      let t_basic=basicc, t_da=0,t_rate=0, t_hra=0, t_ma=0, t_adjust=0, t_gross=0, t_p_tax=0, t_aupf=0, t_sf=0, t_income=0, t_net_salary=0;

      for(let i=1; i<=12; i++){
          if(val!=i){
              let t_b=document.getElementById(`basic${i}`).value || 0;
              t_basic=parseInt(t_b) + parseInt(t_basic);
          }
          let tt_rate = document.getElementById(`rate${i}`).value || 0;
          t_rate = Math.max(tt_rate,t_rate);
          let tt_da=document.getElementById(`da${i}`).value || 0;
          t_da= parseInt(tt_da) + parseInt(t_da);
          let tt_ma=document.getElementById(`ma${i}`).value || 0;
          t_ma = parseInt(tt_ma) + parseInt(t_ma);
          let tt_hra=document.getElementById(`hra${i}`).value || 0;
          t_hra= parseInt(t_hra) + parseInt(tt_hra);
          let tt_adjust=document.getElementById(`donation${i}`).value || 0;
          t_adjust= parseInt(tt_adjust) + parseInt(t_adjust);
          let tt_gross=document.getElementById(`gross${i}`).value || 0;
          t_gross= parseInt(t_gross) + parseInt(tt_gross);
          let tt_p_tax=document.getElementById(`profession${i}`).value || 0;
          t_p_tax= parseInt(t_p_tax) + parseInt(tt_p_tax);
          let tt_aupf=document.getElementById(`aupf${i}`).value || 0;
          t_aupf= parseInt(t_aupf) + parseInt(tt_aupf);
          let tt_sf=document.getElementById(`sf${i}`).value || 0;
          t_sf= parseInt(tt_sf) + parseInt(t_sf);
          let tt_income=document.getElementById(`income_tax${i}`).value || 0;
          t_income= parseInt(tt_income) + parseInt(t_income);
          let tt_net_salary=document.getElementById(`net_salary${i}`).value || 0;
          t_net_salary= parseInt(t_net_salary) + parseInt(tt_net_salary);

      }

  

      document.getElementById('basic13').value = t_basic;
      document.getElementById('rate13').value = t_rate;
      document.getElementById('da13').value = t_da;
      document.getElementById('hra13').value = t_hra;
      document.getElementById('ma13').value = t_ma;
      document.getElementById('donation13').value = t_adjust;
      document.getElementById('gross13').value = t_gross;
      document.getElementById('profession13').value = t_p_tax;
      document.getElementById('sf13').value = t_sf;
      document.getElementById('aupf13').value = t_aupf;
      document.getElementById('income_tax13').value = t_income;
      document.getElementById("net_salary13").value = t_net_salary;



}

const da_Rate=(e,val)=>{
      let rate=e.target.value;
      rate = parseInt(rate) || 0;
      let basicc = document.getElementById(`basic${val}`).value || 0;
      basicc = parseInt(basicc) || 0;
      let adjust = document.getElementById(`donation${val}`).value || 0;
      adjust = parseInt(adjust) || 0;
      let adjust2 = parseInt(adjust) || 0;
      let aupf = document.getElementById(`aupf${val}`).value || 0;
      aupf = parseInt(aupf) || 0;
      let aupf2 = parseInt(aupf) || 0;
      let sf = document.getElementById(`sf${val}`).value || 0;
      sf = parseInt(sf) || 0;
      let sf2 = parseInt(sf);
      let income = document.getElementById(`income_tax${val}`).value || 0;
      income = parseInt(income) || 0;
      let income2 = parseInt(income) || 0;
      
      let rate2 = parseInt(rate);


      let da = (basicc* parseInt(rate))/100;
      da = Math.round(da);
      let hra = basicc*12/100;
      hra = Math.round(hra);
      if(hra>12000) hra = 12000;
      let ma, ma2;

      // if(basicc>0){
      //     ma = 500;
      // }
      // else {
      //     ma=0;
      // }
   

      let basiccc = twoDigit(basicc*3/100);
      let basic2 = parseInt(basicc) + parseInt(basiccc);
      if(val>4){
        basic2 = parseInt(basicc);
      }
      let da2 = (parseInt(basic2) *parseInt(rate2))/100;
      da2 = Math.round(da2);
      let hra2 = basic2*12/100;
      hra2 = Math.round(hra2);
      if(hra2>12000) hra2 = 12000;
      // if(basic2>0){
      //     ma2 = 500;
      // }
      // else ma2 = 0;

      if(basicc>0){
        if(val==1){
          ma = 500;
        }else {
          let prev = document.getElementById(`ma${val-1}`).value;
          ma = parseInt(prev);
        }
         
      }
      else {
          ma=0;
      }

      if(basic2>0){
        if(val==1){
          ma2 = 500;
        }else {
          let prev = document.getElementById(`ma${val-1}`).value;
          ma2 = parseInt(prev);
        }
         
      }
      else {
          ma2=0;
      }
      
      

     
      let contract = document.getElementById('list').value;
      if(contract==='Yes'){
          da=0;
          da2=0;
          ma=0;
          ma2=0
          hra=0;
          hra2=0;
          rate=0;
          rate2=0;

          for(let i=1; i<=12; i++){
              document.getElementById(`da${i}`).readOnly =true;
              document.getElementById(`hra${i}`).readOnly =true;
              document.getElementById(`ma${i}`).readOnly =true;
              document.getElementById(`rate${i}`).readOnly =true;
          }

      }





      let gross = parseInt(basicc) + parseInt(da )+ parseInt(hra) + parseInt(ma)  - parseInt(adjust);
      let gross2 = parseInt(basic2) + parseInt(da2)+ parseInt(hra2) + parseInt(ma2) - parseInt(adjust) ;
      
      
      
  
  
      let p_tax, p_tax2;
      if(gross<=10000) p_tax=0;
      else if(gross<=15000) p_tax=110;
      else if(gross<=25000) p_tax=130;
      else if(gross<=40000) p_tax=150;
      else if(gross>40000) p_tax=200;
      
      if(gross2<=10000) p_tax2=0;
      else if(gross2<=15000) p_tax2=110;
      else if(gross2<=25000) p_tax2=130;
      else if(gross2<=40000) p_tax2=150;
      else if(gross2>40000) p_tax2=200;
  
     
  
  
      
      
      let netsal = parseInt(gross) - parseInt(p_tax) - parseInt(aupf) - parseInt(sf) - parseInt(income);
      let netsal2 = parseInt(gross2) - parseInt(p_tax2) - parseInt(aupf2) - parseInt(sf2) - parseInt(income2);
  
  
      if(val<=4){
          for(let i=val; i<=12; i++){
  
              document.getElementById(`da${i}`).value = da;
              document.getElementById(`rate${i}`).value = rate;
              document.getElementById(`hra${i}`).value = hra;
              document.getElementById(`ma${i}`).value = ma;
              
              
              document.getElementById(`sf${i}`).value = sf;
              document.getElementById(`aupf${i}`).value = aupf;
              document.getElementById(`income_tax${i}`).value = income;
              document.getElementById(`net_salary${i}`).value = netsal;
              document.getElementById(`basic${i}`).value = parseInt(basicc);
  
            //   if(i==val){
            //   document.getElementById(`gross${i}`).value = gross_val;
            //   document.getElementById(`donation${i}`).value = adjust;
            //   document.getElementById(`net_salary${i}`).value = netsal_val;
            //   document.getElementById(`profession${i}`).value = p_taxv;
            //   }
            //   else {
                  document.getElementById(`gross${i}`).value = gross;
                  document.getElementById(`donation${i}`).value = adjust;
                  document.getElementById(`net_salary${i}`).value = netsal;
                  document.getElementById(`profession${i}`).value = p_tax;
            //   }
              if(i>4){
                  document.getElementById(`basic${i}`).value = basic2;
                  document.getElementById(`rate${i}`).value = rate2;
                  document.getElementById(`da${i}`).value = da2;
                  document.getElementById(`hra${i}`).value = hra2;
                  document.getElementById(`ma${i}`).value = ma2;
                  document.getElementById(`donation${i}`).value = adjust;
                  document.getElementById(`profession${i}`).value = p_tax2;
                  document.getElementById(`sf${i}`).value = sf2;
                  document.getElementById(`aupf${i}`).value = aupf2;
                  document.getElementById(`income_tax${i}`).value = income2;
  
                //   if(i==val){
                //       document.getElementById(`gross${i}`).value = gross_val2;
                //       document.getElementById(`donation${i}`).value = adjust;
                //       document.getElementById(`net_salary${i}`).value = netsal_val2;
                //       document.getElementById(`profession${i}`).value = p_taxv2;
                      
                //   }
                //   else {
                      document.getElementById(`gross${i}`).value = gross2;
                      document.getElementById(`donation${i}`).value = adjust2;
                      document.getElementById(`net_salary${i}`).value = netsal2;
                      document.getElementById(`profession${i}`).value = p_tax2;
                //   }
  
              }
          }
        }
        if(val>4){
          for(let i=val; i<=12; i++){
              document.getElementById(`da${i}`).value = da;
              document.getElementById(`basic${i}`).value = basicc;
              document.getElementById(`rate${i}`).value = rate;
              document.getElementById(`hra${i}`).value = hra;
              document.getElementById(`ma${i}`).value = ma;
              document.getElementById(`donation${i}`).value = adjust;
              document.getElementById(`gross${i}`).value = gross;
              document.getElementById(`sf${i}`).value = sf;
              document.getElementById(`aupf${i}`).value = aupf;
              document.getElementById(`income_tax${i}`).value = income;
              document.getElementById(`net_salary${i}`).value = netsal;
            //   if(i==val){
            //       document.getElementById(`gross${i}`).value = gross_val;
            //       document.getElementById(`donation${i}`).value = adjust;
            //       document.getElementById(`net_salary${i}`).value = netsal_val;
            //       document.getElementById(`profession${i}`).value = p_taxv;
                  
            //   }
            //   else {
                  document.getElementById(`gross${i}`).value = gross;
                  document.getElementById(`donation${i}`).value = adjust;
                  document.getElementById(`net_salary${i}`).value = netsal;
                  document.getElementById(`profession${i}`).value = p_tax;
  
            //   }            
          }
        }


      let t_basic=0, t_da=0,t_rate=rate, t_hra=0, t_ma=0, t_adjust=0, t_gross=0, t_p_tax=0, t_aupf=0, t_sf=0, t_income=0, t_net_salary=0;

      for(let i=1; i<=12; i++){
         
          let t_b=document.getElementById(`basic${i}`).value || 0;
          t_basic=parseInt(t_b) + parseInt(t_basic);
          let tt_rate = document.getElementById(`rate${i}`).value || 0;
          t_rate = Math.max(tt_rate,t_rate);
          let tt_da=document.getElementById(`da${i}`).value || 0;
          t_da= parseInt(tt_da) + parseInt(t_da);
          let tt_ma=document.getElementById(`ma${i}`).value || 0;
          t_ma = parseInt(tt_ma) + parseInt(t_ma);
          let tt_hra=document.getElementById(`hra${i}`).value || 0;
          t_hra= parseInt(t_hra) + parseInt(tt_hra);
          let tt_adjust=document.getElementById(`donation${i}`).value || 0;
          t_adjust= parseInt(tt_adjust) + parseInt(t_adjust);
          let tt_gross=document.getElementById(`gross${i}`).value || 0;
          t_gross= parseInt(t_gross) + parseInt(tt_gross);
          let tt_p_tax=document.getElementById(`profession${i}`).value || 0;
          t_p_tax= parseInt(t_p_tax) + parseInt(tt_p_tax);
          let tt_aupf=document.getElementById(`aupf${i}`).value || 0;
          t_aupf= parseInt(t_aupf) + parseInt(tt_aupf);
          let tt_sf=document.getElementById(`sf${i}`).value || 0;
          t_sf= parseInt(tt_sf) + parseInt(t_sf);
          let tt_income=document.getElementById(`income_tax${i}`).value || 0;
          t_income= parseInt(tt_income) + parseInt(t_income);
          let tt_net_salary=document.getElementById(`net_salary${i}`).value || 0;
          t_net_salary= parseInt(t_net_salary) + parseInt(tt_net_salary);

      }

      document.getElementById('basic13').value = t_basic;
      document.getElementById('rate13').value = t_rate;
      document.getElementById('da13').value = t_da;
      document.getElementById('hra13').value = t_hra;
      document.getElementById('ma13').value = t_ma;
      document.getElementById('donation13').value = t_adjust;
      document.getElementById('gross13').value = t_gross;
      document.getElementById('profession13').value = t_p_tax;
      document.getElementById('sf13').value = t_sf;
      document.getElementById('aupf13').value = t_aupf;
      document.getElementById('income_tax13').value = t_income;
      document.getElementById("net_salary13").value = t_net_salary;




}
const hra_fun=(e,val)=>{
      let hra = e.target.value;
      hra = parseInt(hra) || 0;
      if(hra>12000) hra = 12000;
      let hra2 =parseInt(hra);
     
      let basicc = document.getElementById(`basic${val}`).value || 0;
      basicc = parseInt(basicc) || 0;

      let ma = document.getElementById(`ma${val}`).value || 0;
      let ma2 = parseInt(ma) || 0;

      let adjust = document.getElementById(`donation${val}`).value || 0;
      adjust = parseInt(adjust) || 0;
      let adjust2 = parseInt(adjust) || 0;
      let aupf = document.getElementById(`aupf${val}`).value || 0;
      aupf = parseInt(aupf) || 0;
      let aupf2 = parseInt(aupf) || 0;
      let sf = document.getElementById(`sf${val}`).value || 0;
      sf = parseInt(sf) || 0;
      let sf2 = parseInt(sf);
      let income = document.getElementById(`income_tax${val}`).value || 0;
      income = parseInt(income) || 0;
      let income2 = parseInt(income) || 0;
      let rate = document.getElementById(`rate${val}`).value || 0;
      rate = parseInt(rate) || 0;
      let rate2 = parseInt(rate);
      
      


      let da = (basicc* parseInt(rate))/100;
      da = Math.round(da);
   
      if(hra>12000) hra = 12000;
     

      let basiccc = twoDigit(basicc*3/100);
      let basic2 = parseInt(basicc) + parseInt(basiccc);
      if(val>4){
        basic2 = parseInt(basicc);
      }
      let da2 = (parseInt(basic2) *parseInt(rate2))/100;
      da2 = Math.round(da2);
   
      
      
      


      let contract = document.getElementById('list').value;
      if(contract==='Yes'){
          da=0;
          da2=0;
          ma=0;
          ma2=0
          hra=0;
          hra2=0;
          rate=0;
          rate2=0;

          for(let i=1; i<=12; i++){
              document.getElementById(`da${i}`).readOnly =true;
              document.getElementById(`hra${i}`).readOnly =true;
              document.getElementById(`ma${i}`).readOnly =true;
              document.getElementById(`rate${i}`).readOnly =true;
          }

      }





      let gross = parseInt(basicc) + parseInt(da )+ parseInt(hra) + parseInt(ma) - parseInt(adjust);;
      let gross2 = parseInt(basic2) + parseInt(da2)+ parseInt(hra2) + parseInt(ma2) - parseInt(adjust) ;
      
      
      
  
  let p_tax, p_tax2;
      
      if(gross<=10000) p_tax=0;
      else if(gross<=15000) p_tax=110;
      else if(gross<=25000) p_tax=130;
      else if(gross<=40000) p_tax=150;
      else if(gross>40000) p_tax=200;
      
      if(gross2<=10000) p_tax2=0;
      else if(gross2<=15000) p_tax2=110;
      else if(gross2<=25000) p_tax2=130;
      else if(gross2<=40000) p_tax2=150;
      else if(gross2>40000) p_tax2=200;
  
     
  
  
      
      
      let netsal = parseInt(gross) - parseInt(p_tax) - parseInt(aupf) - parseInt(sf) - parseInt(income);
      let netsal2 = parseInt(gross2) - parseInt(p_tax2) - parseInt(aupf2) - parseInt(sf2) - parseInt(income2);
  
  
      if(val<=4){
          for(let i=val; i<=12; i++){
  
              document.getElementById(`da${i}`).value = da;
              document.getElementById(`rate${i}`).value = rate;
              document.getElementById(`hra${i}`).value = hra;
              document.getElementById(`ma${i}`).value = ma;
              
              
              document.getElementById(`sf${i}`).value = sf;
              document.getElementById(`aupf${i}`).value = aupf;
              document.getElementById(`income_tax${i}`).value = income;
              document.getElementById(`net_salary${i}`).value = netsal;
              document.getElementById(`basic${i}`).value = parseInt(basicc);
  
             
                  document.getElementById(`gross${i}`).value = gross;
                  document.getElementById(`donation${i}`).value = adjust;
                  document.getElementById(`net_salary${i}`).value = netsal;
                  document.getElementById(`profession${i}`).value = p_tax;
            
              if(i>4){
                  document.getElementById(`basic${i}`).value = basic2;
                  document.getElementById(`rate${i}`).value = rate2;
                  document.getElementById(`da${i}`).value = da2;
                  document.getElementById(`hra${i}`).value = hra2;
                  document.getElementById(`ma${i}`).value = ma2;
                  document.getElementById(`donation${i}`).value = adjust;
                  document.getElementById(`profession${i}`).value = p_tax2;
                  document.getElementById(`sf${i}`).value = sf2;
                  document.getElementById(`aupf${i}`).value = aupf2;
                  document.getElementById(`income_tax${i}`).value = income2;
  
                //   if(i==val){
                //       document.getElementById(`gross${i}`).value = gross_val2;
                //       document.getElementById(`donation${i}`).value = adjust;
                //       document.getElementById(`net_salary${i}`).value = netsal_val2;
                //       document.getElementById(`profession${i}`).value = p_taxv2;
                      
                //   }
                //   else {
                      document.getElementById(`gross${i}`).value = gross2;
                      document.getElementById(`donation${i}`).value =adjust2;
                      document.getElementById(`net_salary${i}`).value = netsal2;
                      document.getElementById(`profession${i}`).value = p_tax2;
                //   }
  
              }
          }
        }


        if(val>4){
          for(let i=val; i<=12; i++){
              document.getElementById(`da${i}`).value = da;
              document.getElementById(`basic${i}`).value = basicc;
              document.getElementById(`rate${i}`).value = rate;
              document.getElementById(`hra${i}`).value = hra;
              document.getElementById(`ma${i}`).value = ma;
              document.getElementById(`donation${i}`).value = adjust;
              document.getElementById(`gross${i}`).value = gross;
              document.getElementById(`sf${i}`).value = sf;
              document.getElementById(`aupf${i}`).value = aupf;
              document.getElementById(`income_tax${i}`).value = income;
              document.getElementById(`net_salary${i}`).value = netsal;
              
                  document.getElementById(`gross${i}`).value = gross;
                  document.getElementById(`donation${i}`).value = adjust;
                  document.getElementById(`net_salary${i}`).value = netsal;
                  document.getElementById(`profession${i}`).value = p_tax;
  
                      
          }
        }


      let t_basic=0, t_da=0,t_rate=0, t_hra=0, t_ma=0, t_adjust=0, t_gross=0, t_p_tax=0, t_aupf=0, t_sf=0, t_income=0, t_net_salary=0;

      for(let i=1; i<=12; i++){
         
          let t_b=document.getElementById(`basic${i}`).value || 0;
          t_basic=parseInt(t_b) + parseInt(t_basic);
          let tt_rate = document.getElementById(`rate${i}`).value || 0;
          t_rate = Math.max(tt_rate,t_rate);
          let tt_da=document.getElementById(`da${i}`).value || 0;
          t_da= parseInt(tt_da) + parseInt(t_da);
          let tt_ma=document.getElementById(`ma${i}`).value || 0;
          t_ma = parseInt(tt_ma) + parseInt(t_ma);
          let tt_hra=document.getElementById(`hra${i}`).value || 0;
          t_hra= parseInt(t_hra) + parseInt(tt_hra);
          let tt_adjust=document.getElementById(`donation${i}`).value || 0;
          t_adjust= parseInt(tt_adjust) + parseInt(t_adjust);
          let tt_gross=document.getElementById(`gross${i}`).value || 0;
          t_gross= parseInt(t_gross) + parseInt(tt_gross);
          let tt_p_tax=document.getElementById(`profession${i}`).value || 0;
          t_p_tax= parseInt(t_p_tax) + parseInt(tt_p_tax);
          let tt_aupf=document.getElementById(`aupf${i}`).value || 0;
          t_aupf= parseInt(t_aupf) + parseInt(tt_aupf);
          let tt_sf=document.getElementById(`sf${i}`).value || 0;
          t_sf= parseInt(tt_sf) + parseInt(t_sf);
          let tt_income=document.getElementById(`income_tax${i}`).value || 0;
          t_income= parseInt(tt_income) + parseInt(t_income);
          let tt_net_salary=document.getElementById(`net_salary${i}`).value || 0;
          t_net_salary= parseInt(t_net_salary) + parseInt(tt_net_salary);

      }
      document.getElementById('basic13').value = t_basic;
      document.getElementById('rate13').value = t_rate;
      document.getElementById('da13').value = t_da;
      document.getElementById('hra13').value = t_hra;
      document.getElementById('ma13').value = t_ma;
      document.getElementById('donation13').value = t_adjust;
      document.getElementById('gross13').value = t_gross;
      document.getElementById('profession13').value = t_p_tax;
      document.getElementById('sf13').value = t_sf;
      document.getElementById('aupf13').value = t_aupf;
      document.getElementById('income_tax13').value = t_income;
      document.getElementById("net_salary13").value = t_net_salary;
}

const ma_fun =(e, val)=> {
     
     
      let ma = e.target.value;
      ma = parseInt(ma) || 0;
      let ma2 = parseInt(ma);
      if(ma>500) ma=500;
      if(ma2>500) ma2=500;
      let basicc = document.getElementById(`basic${val}`).value || 0;
      basicc = parseInt(basicc) || 0;
  let hra, hra2;


       hra = document.getElementById(`hra${val}`).value || 0;
      hra = parseInt(hra) || 0;
      if(val<=4) hra2 = document.getElementById('hra5').value || 0;

      else hra2 = parseInt(hra);
      hra2 = parseInt(hra2) || 0;
      let adjust = document.getElementById(`donation${val}`).value || 0;
      adjust = parseInt(adjust) || 0;
      let adjust2 = parseInt(adjust) || 0;
      let aupf = document.getElementById(`aupf${val}`).value || 0;
      aupf = parseInt(aupf) || 0;
      let aupf2 = parseInt(aupf) || 0;
      let sf = document.getElementById(`sf${val}`).value || 0;
      sf = parseInt(sf) || 0;
      let sf2 = parseInt(sf);
      let income = document.getElementById(`income_tax${val}`).value || 0;
      income = parseInt(income) || 0;
      let income2 = parseInt(income) || 0;
      let rate = document.getElementById(`rate${val}`).value || 0;
      rate = parseInt(rate) || 0;
      let rate2 = parseInt(rate);
      
      


      let da = (basicc* parseInt(rate))/100;
      da = Math.round(da);
   
      

     

      let basiccc = twoDigit(basicc*3/100);
      let basic2 = parseInt(basicc) + parseInt(basiccc);
      if(val>4){
        basic2 = parseInt(basicc);
      }
      let da2 = (parseInt(basic2) *parseInt(rate2))/100;
      da2 = Math.round(da2);
   
      
      


      let contract = document.getElementById('list').value;
      if(contract==='Yes'){
          da=0;
          da2=0;
          ma=0;
          ma2=0
          hra=0;
          hra2=0;
          rate=0;
          rate2=0;

          for(let i=1; i<=12; i++){
              document.getElementById(`da${i}`).readOnly =true;
              document.getElementById(`hra${i}`).readOnly =true;
              document.getElementById(`ma${i}`).readOnly =true;
              document.getElementById(`rate${i}`).readOnly =true;
          }

      }





      let gross = parseInt(basicc) + parseInt(da )+ parseInt(hra) + parseInt(ma) - parseInt(adjust);;
      let gross2 = parseInt(basic2) + parseInt(da2)+ parseInt(hra2) + parseInt(ma2) - parseInt(adjust) ;
      
      
      
  
  
      let p_tax, p_tax2;
      if(gross<=10000) p_tax=0;
      else if(gross<=15000) p_tax=110;
      else if(gross<=25000) p_tax=130;
      else if(gross<=40000) p_tax=150;
      else if(gross>40000) p_tax=200;
      
      if(gross2<=10000) p_tax2=0;
      else if(gross2<=15000) p_tax2=110;
      else if(gross2<=25000) p_tax2=130;
      else if(gross2<=40000) p_tax2=150;
      else if(gross2>40000) p_tax2=200;
  
     
  
  
      
      
      let netsal = parseInt(gross) - parseInt(p_tax) - parseInt(aupf) - parseInt(sf) - parseInt(income);
      let netsal2 = parseInt(gross2) - parseInt(p_tax2) - parseInt(aupf2) - parseInt(sf2) - parseInt(income2);
  
  
      if(val<=4){
          for(let i=val; i<=12; i++){
  
              document.getElementById(`da${i}`).value = da;
              document.getElementById(`rate${i}`).value = rate;
              document.getElementById(`hra${i}`).value = hra;
              document.getElementById(`ma${i}`).value = ma;
              
              
              document.getElementById(`sf${i}`).value = sf;
              document.getElementById(`aupf${i}`).value = aupf;
              document.getElementById(`income_tax${i}`).value = income;
              document.getElementById(`net_salary${i}`).value = netsal;
              document.getElementById(`basic${i}`).value = parseInt(basicc);
  
            //   if(i==val){
              
            //   }
            //   else {
                  document.getElementById(`gross${i}`).value = gross;
                  document.getElementById(`donation${i}`).value = adjust;
                  document.getElementById(`net_salary${i}`).value = netsal;
                  document.getElementById(`profession${i}`).value = p_tax;
            //   }
              if(i>4){
                  document.getElementById(`basic${i}`).value = basic2;
                  document.getElementById(`rate${i}`).value = rate2;
                  document.getElementById(`da${i}`).value = da2;
                  document.getElementById(`hra${i}`).value = hra2;
                  document.getElementById(`ma${i}`).value = ma2;
                  document.getElementById(`donation${i}`).value = adjust;
                  document.getElementById(`profession${i}`).value = p_tax2;
                  document.getElementById(`sf${i}`).value = sf2;
                  document.getElementById(`aupf${i}`).value = aupf2;
                  document.getElementById(`income_tax${i}`).value = income2;
  
                //   if(i==val){
                //       document.getElementById(`gross${i}`).value = gross_val2;
                //       document.getElementById(`donation${i}`).value = adjust;
                //       document.getElementById(`net_salary${i}`).value = netsal_val2;
                //       document.getElementById(`profession${i}`).value = p_taxv2;
                      
                //   }
                //   else {
                      document.getElementById(`gross${i}`).value = gross2;
                      document.getElementById(`donation${i}`).value = adjust;
                      document.getElementById(`net_salary${i}`).value = netsal2;
                      document.getElementById(`profession${i}`).value = p_tax2;
                //   }
  
              }
          }
        }
        if(val>4){
          for(let i=val; i<=12; i++){
              document.getElementById(`da${i}`).value = da;
              document.getElementById(`basic${i}`).value = basicc;
              document.getElementById(`rate${i}`).value = rate;
              document.getElementById(`hra${i}`).value = hra;
              document.getElementById(`ma${i}`).value = ma;
              document.getElementById(`donation${i}`).value = adjust;
              document.getElementById(`gross${i}`).value = gross;
              document.getElementById(`sf${i}`).value = sf;
              document.getElementById(`aupf${i}`).value = aupf;
              document.getElementById(`income_tax${i}`).value = income;
              document.getElementById(`net_salary${i}`).value = netsal;
            //   if(i==val){
                  
                  
            //   }
            //   else {
                  document.getElementById(`gross${i}`).value = gross;
                  document.getElementById(`donation${i}`).value = adjust;
                  document.getElementById(`net_salary${i}`).value = netsal;
                  document.getElementById(`profession${i}`).value = p_tax;
  
            //   }            
          }
        }
  
          let t_basic=basicc, t_da=0,t_rate=0, t_hra=0, t_ma=0, t_adjust=0, t_gross=0, t_p_tax=0, t_aupf=0, t_sf=0, t_income=0, t_net_salary=0;
  
          for(let i=1; i<=12; i++){
              if(val!=i){
                  let t_b=document.getElementById(`basic${i}`).value || 0;
                  t_basic=parseInt(t_b) + parseInt(t_basic);
              }
              let tt_rate = document.getElementById(`rate${i}`).value || 0;
              t_rate = Math.max(tt_rate,t_rate);
              let tt_da=document.getElementById(`da${i}`).value || 0;
              t_da= parseInt(tt_da) + parseInt(t_da);
              let tt_ma=document.getElementById(`ma${i}`).value || 0;
              t_ma = parseInt(tt_ma) + parseInt(t_ma);
              let tt_hra=document.getElementById(`hra${i}`).value || 0;
              t_hra= parseInt(t_hra) + parseInt(tt_hra);
              let tt_adjust=document.getElementById(`donation${i}`).value || 0;
              t_adjust= parseInt(tt_adjust) + parseInt(t_adjust);
              let tt_gross=document.getElementById(`gross${i}`).value || 0;
              t_gross= parseInt(t_gross) + parseInt(tt_gross);
              let tt_p_tax=document.getElementById(`profession${i}`).value || 0;
              t_p_tax= parseInt(t_p_tax) + parseInt(tt_p_tax);
              let tt_aupf=document.getElementById(`aupf${i}`).value || 0;
              t_aupf= parseInt(t_aupf) + parseInt(tt_aupf);
              let tt_sf=document.getElementById(`sf${i}`).value || 0;
              t_sf= parseInt(tt_sf) + parseInt(t_sf);
              let tt_income=document.getElementById(`income_tax${i}`).value || 0;
              t_income= parseInt(tt_income) + parseInt(t_income);
              let tt_net_salary=document.getElementById(`net_salary${i}`).value || 0;
              t_net_salary= parseInt(t_net_salary) + parseInt(tt_net_salary);
  
          }
  
          document.getElementById('basic13').value = t_basic;
      document.getElementById('rate13').value = t_rate;
      document.getElementById('da13').value = t_da;
      document.getElementById('hra13').value = t_hra;
      document.getElementById('ma13').value = t_ma;
      document.getElementById('donation13').value = t_adjust;
      document.getElementById('gross13').value = t_gross;
      document.getElementById('profession13').value = t_p_tax;
      document.getElementById('sf13').value = t_sf;
      document.getElementById('aupf13').value = t_aupf;
      document.getElementById('income_tax13').value = t_income;
      document.getElementById("net_salary13").value = t_net_salary;


   
}

const adjust_fun =(e,val)=> {
  let adjust = e.target.value;
  adjust = parseInt(adjust) || 0;
  let basicc = document.getElementById(`basic${val}`).value || 0;
  basicc = parseInt(basicc) || 0;

  let ma = document.getElementById(`ma${val}`).value || 0;
  ma = parseInt(ma) || 0;
  let ma2;
  if(val<=4) ma2 = document.getElementById('ma5').value || 0;
  else  ma2 = parseInt(ma) || 0;
  
  ma2 = parseInt(ma2) || 0;

  let hra, hra2;
  hra = document.getElementById(`hra${val}`).value || 0;
  hra = parseInt(hra) || 0;
  if(val<=4) hra2 = document.getElementById('hra5').value || 0;
  else hra2 = parseInt(hra);
  hra2 = parseInt(hra2) || 0;

  let aupf = document.getElementById(`aupf${val}`).value || 0;
  aupf = parseInt(aupf) || 0;
  let aupf2 = parseInt(aupf) || 0;
  let sf = document.getElementById(`sf${val}`).value || 0;
  sf = parseInt(sf) || 0;
  let sf2 = parseInt(sf);
  let income = document.getElementById(`income_tax${val}`).value || 0;
  income = parseInt(income) || 0;
  let income2 = parseInt(income) || 0;
  let rate = document.getElementById(`rate${val}`).value || 0;
  rate = parseInt(rate) || 0;
  let rate2 = parseInt(rate);
  
  


  let da = (basicc* parseInt(rate))/100;
      da = Math.round(da);


 

  let basiccc = twoDigit(basicc*3/100);
      let basic2 = parseInt(basicc) + parseInt(basiccc);
      if(val>4){
        basic2 = parseInt(basicc);
      }
  let da2 = (parseInt(basic2) *parseInt(rate2))/100;
      da2 = Math.round(da2);

if(hra2>12000) hra2 = 12000;
  
  
 
  let contract = document.getElementById('list').value;
  if(contract==='Yes'){
      da=0;
      da2=0;
      ma=0;
      ma2=0
      hra=0;
      hra2=0;
      rate=0;
      rate2=0;

      for(let i=1; i<=5; i++){
          document.getElementById(`da${i}`).readOnly =true;
          document.getElementById(`hra${i}`).readOnly =true;
          document.getElementById(`ma${i}`).readOnly =true;
          document.getElementById(`rate${i}`).readOnly =true;
      }


  }    

  let gross = parseInt(basicc) + parseInt(da )+ parseInt(hra) + parseInt(ma) - parseInt(adjust);;
  let gross2 = parseInt(basic2) + parseInt(da2)+ parseInt(hra2) + parseInt(ma2) - parseInt(adjust) ;
  
  
//    gross_val2 = parseInt(gross2) - parseInt(adjust);
//   console.log(gross_val2, gross2, adjust);

  let p_tax, p_tax2;
  if(gross<=10000) p_tax=0;
  else if(gross<=15000) p_tax=110;
  else if(gross<=25000) p_tax=130;
  else if(gross<=40000) p_tax=150;
  else if(gross>40000) p_tax=200;
  
  if(gross2<=10000) p_tax2=0;
  else if(gross2<=15000) p_tax2=110;
  else if(gross2<=25000) p_tax2=130;
  else if(gross2<=40000) p_tax2=150;
  else if(gross2>40000) p_tax2=200;

  


  
  
  let netsal = parseInt(gross) - parseInt(p_tax) - parseInt(aupf) - parseInt(sf) - parseInt(income);
  let netsal2 = parseInt(gross2) - parseInt(p_tax2) - parseInt(aupf2) - parseInt(sf2) - parseInt(income2);


  if(val<=4){
      for(let i=val; i<=12; i++){

          document.getElementById(`da${i}`).value = da;
          document.getElementById(`rate${i}`).value = rate;
          document.getElementById(`hra${i}`).value = hra;
          document.getElementById(`ma${i}`).value = ma;
          
          
          document.getElementById(`sf${i}`).value = sf;
          document.getElementById(`aupf${i}`).value = aupf;
          document.getElementById(`income_tax${i}`).value = income;
          document.getElementById(`net_salary${i}`).value = netsal;
          document.getElementById(`basic${i}`).value = parseInt(basicc);

          document.getElementById(`gross${i}`).value = gross;
          document.getElementById(`donation${i}`).value = adjust;
          document.getElementById(`net_salary${i}`).value = netsal;
          document.getElementById(`profession${i}`).value = p_tax;
         
          if(i>4){
              document.getElementById(`basic${i}`).value = basic2;
              document.getElementById(`rate${i}`).value = rate2;
              document.getElementById(`da${i}`).value = da2;
              document.getElementById(`hra${i}`).value = hra2;
              document.getElementById(`ma${i}`).value = ma2;
            //   document.getElementById(`donation${i}`).value = adjust;
              document.getElementById(`profession${i}`).value = p_tax2;
              document.getElementById(`sf${i}`).value = sf2;
              document.getElementById(`aupf${i}`).value = aupf2;
              document.getElementById(`income_tax${i}`).value = income2;

             
                //   document.getElementById(`gross${i}`).value = gross_val2;
                //   document.getElementById(`donation${i}`).value = adjust;
                //   document.getElementById(`net_salary${i}`).value = netsal_val2;
                //   document.getElementById(`profession${i}`).value = p_taxv2;
            
                  document.getElementById(`gross${i}`).value = gross2;
                  document.getElementById(`donation${i}`).value = adjust;
                  document.getElementById(`net_salary${i}`).value = netsal2;
                  document.getElementById(`profession${i}`).value = p_tax2;
           

          }
      }
    }
    if(val>4){
      for(let i=val; i<=12; i++){
          document.getElementById(`da${i}`).value = da;
          document.getElementById(`rate${i}`).value = rate;
          document.getElementById(`hra${i}`).value = hra;
          document.getElementById(`ma${i}`).value = ma;
          document.getElementById(`donation${i}`).value = adjust;
          document.getElementById(`gross${i}`).value = gross;
          document.getElementById(`sf${i}`).value = sf;
          document.getElementById(`aupf${i}`).value = aupf;
          document.getElementById(`income_tax${i}`).value = income;
          document.getElementById(`net_salary${i}`).value = netsal;
        //   if(i==val){
              
              
        //   }
        //   else {
              document.getElementById(`gross${i}`).value = gross;
              document.getElementById(`donation${i}`).value = adjust;
              document.getElementById(`net_salary${i}`).value = netsal;
              document.getElementById(`profession${i}`).value = p_tax;

        //   }            
      }
    }

      let t_basic=basicc, t_da=0,t_rate=0, t_hra=0, t_ma=0, t_adjust=0, t_gross=0, t_p_tax=0, t_aupf=0, t_sf=0, t_income=0, t_net_salary=0;

      for(let i=1; i<=12; i++){
          if(val!=i){
              let t_b=document.getElementById(`basic${i}`).value || 0;
              t_basic=parseInt(t_b) + parseInt(t_basic);
          }
          let tt_rate = document.getElementById(`rate${i}`).value || 0;
          t_rate = Math.max(tt_rate,t_rate);
          let tt_da=document.getElementById(`da${i}`).value || 0;
          t_da= parseInt(tt_da) + parseInt(t_da);
          let tt_ma=document.getElementById(`ma${i}`).value || 0;
          t_ma = parseInt(tt_ma) + parseInt(t_ma);
          let tt_hra=document.getElementById(`hra${i}`).value || 0;
          t_hra= parseInt(t_hra) + parseInt(tt_hra);
          let tt_adjust=document.getElementById(`donation${i}`).value || 0;
          t_adjust= parseInt(tt_adjust) + parseInt(t_adjust);
          let tt_gross=document.getElementById(`gross${i}`).value || 0;
          t_gross= parseInt(t_gross) + parseInt(tt_gross);
          let tt_p_tax=document.getElementById(`profession${i}`).value || 0;
          t_p_tax= parseInt(t_p_tax) + parseInt(tt_p_tax);
          let tt_aupf=document.getElementById(`aupf${i}`).value || 0;
          t_aupf= parseInt(t_aupf) + parseInt(tt_aupf);
          let tt_sf=document.getElementById(`sf${i}`).value || 0;
          t_sf= parseInt(tt_sf) + parseInt(t_sf);
          let tt_income=document.getElementById(`income_tax${i}`).value || 0;
          t_income= parseInt(tt_income) + parseInt(t_income);
          let tt_net_salary=document.getElementById(`net_salary${i}`).value || 0;
          t_net_salary= parseInt(t_net_salary) + parseInt(tt_net_salary);

      }

      document.getElementById('basic13').value = t_basic;
      document.getElementById('rate13').value = t_rate;
      document.getElementById('da13').value = t_da;
      document.getElementById('hra13').value = t_hra;
      document.getElementById('ma13').value = t_ma;
      document.getElementById('donation13').value = t_adjust;
      document.getElementById('gross13').value = t_gross;
      document.getElementById('profession13').value = t_p_tax;
      document.getElementById('sf13').value = t_sf;
      document.getElementById('aupf13').value = t_aupf;
      document.getElementById('income_tax13').value = t_income;
      document.getElementById("net_salary13").value = t_net_salary;

}

const aupf_fun =(e, val)=> {
  let aupf = e.target.value;
  aupf = parseInt(aupf) || 0;
  let aupf2 = parseInt(aupf) || 0;
  let basicc = document.getElementById(`basic${val}`).value || 0;
  basicc = parseInt(basicc) || 0;
  let hra, hra2;
  hra = document.getElementById(`hra${val}`).value || 0;
  hra = parseInt(hra) || 0;
  if(val<=4) hra2 = document.getElementById('hra5').value || 0;
  else hra2 = parseInt(hra);
  hra2 = parseInt(hra2) || 0;
  
  let ma = document.getElementById(`ma${val}`).value || 0;
  ma = parseInt(ma) || 0;
  let ma2;
  if(val<=4) ma2 = document.getElementById('ma5').value || 0;
  else  ma2 = parseInt(ma) || 0;
  
  ma2 = parseInt(ma2) || 0;

  let adjust = document.getElementById(`donation${val}`).value || 0;
  adjust = parseInt(adjust) || 0;
  let adjust2 = parseInt(adjust) || 0;
  let sf = document.getElementById(`sf${val}`).value || 0;
  sf = parseInt(sf) || 0;
  let sf2 = parseInt(sf);
  let income = document.getElementById(`income_tax${val}`).value || 0;
  income = parseInt(income) || 0;
  let income2 = parseInt(income) || 0;
  let rate = document.getElementById(`rate${val}`).value || 0;
  rate = parseInt(rate) || 0;
  let rate2 = parseInt(rate);
  
  


  let da = (basicc* parseInt(rate))/100;
      da = Math.round(da);

  
  
 

  let basiccc = twoDigit(basicc*3/100);
  let basic2 = parseInt(basicc) + parseInt(basiccc);
      if(val>4){
        basic2 = parseInt(basicc);
      }



  let da2 = (parseInt(basic2) *parseInt(rate2))/100;
      da2 = Math.round(da2);

  if(hra2>12000) hra2 = 12000;


  
  


  let contract = document.getElementById('list').value;
  if(contract==='Yes'){
      da=0;
      da2=0;
      ma=0;
      ma2=0
      hra=0;
      hra2=0;
      rate=0;
      rate2=0;

      for(let i=1; i<=12; i++){
          document.getElementById(`da${i}`).readOnly =true;
          document.getElementById(`hra${i}`).readOnly =true;
          document.getElementById(`ma${i}`).readOnly =true;
          document.getElementById(`rate${i}`).readOnly =true;
      }

  }





  let gross = parseInt(basicc) + parseInt(da )+ parseInt(hra) + parseInt(ma) - parseInt(adjust);;
  let gross2 = parseInt(basic2) + parseInt(da2)+ parseInt(hra2) + parseInt(ma2) - parseInt(adjust) ;
  
  
  


  let p_tax, p_tax2;
  if(gross<=10000) p_tax=0;
  else if(gross<=15000) p_tax=110;
  else if(gross<=25000) p_tax=130;
  else if(gross<=40000) p_tax=150;
  else if(gross>40000) p_tax=200;
  
  if(gross2<=10000) p_tax2=0;
  else if(gross2<=15000) p_tax2=110;
  else if(gross2<=25000) p_tax2=130;
  else if(gross2<=40000) p_tax2=150;
  else if(gross2>40000) p_tax2=200;

  


  
  
  let netsal = parseInt(gross) - parseInt(p_tax) - parseInt(aupf) - parseInt(sf) - parseInt(income);
  let netsal2 = parseInt(gross2) - parseInt(p_tax2) - parseInt(aupf2) - parseInt(sf2) - parseInt(income2);


  if(val<=4){
      for(let i=val; i<=12; i++){

          document.getElementById(`da${i}`).value = da;
          document.getElementById(`rate${i}`).value = rate;
          document.getElementById(`hra${i}`).value = hra;
          document.getElementById(`ma${i}`).value = ma;
          
          
          document.getElementById(`sf${i}`).value = sf;
          document.getElementById(`aupf${i}`).value = aupf;
          document.getElementById(`income_tax${i}`).value = income;
          document.getElementById(`net_salary${i}`).value = netsal;
          document.getElementById(`basic${i}`).value = parseInt(basicc);

        //   if(i==val){
        //   document.getElementById(`gross${i}`).value = gross_val;
        //   document.getElementById(`donation${i}`).value = adjust;
        //   document.getElementById(`net_salary${i}`).value = netsal_val;
        //   document.getElementById(`profession${i}`).value = p_taxv;
        //   }
        //   else {
              document.getElementById(`gross${i}`).value = gross;
              document.getElementById(`donation${i}`).value = adjust;
              document.getElementById(`net_salary${i}`).value = netsal;
              document.getElementById(`profession${i}`).value = p_tax;
        //   }
          if(i>4){
              document.getElementById(`basic${i}`).value = basic2;
              document.getElementById(`rate${i}`).value = rate2;
              document.getElementById(`da${i}`).value = da2;
              document.getElementById(`hra${i}`).value = hra2;
              document.getElementById(`ma${i}`).value = ma2;
              document.getElementById(`donation${i}`).value = adjust;
              document.getElementById(`profession${i}`).value = p_tax2;
              document.getElementById(`sf${i}`).value = sf2;
              document.getElementById(`aupf${i}`).value = aupf2;
              document.getElementById(`income_tax${i}`).value = income2;

            //   if(i==val){
            //       document.getElementById(`gross${i}`).value = gross_val2;
            //       document.getElementById(`donation${i}`).value = adjust;
            //       document.getElementById(`net_salary${i}`).value = netsal_val2;
            //       document.getElementById(`profession${i}`).value = p_taxv2;
                  
            //   }
            //   else {
                  document.getElementById(`gross${i}`).value = gross2;
                  document.getElementById(`donation${i}`).value = adjust;
                  document.getElementById(`net_salary${i}`).value = netsal2;
                  document.getElementById(`profession${i}`).value = p_tax2;
            //   }

          }
      }
    }
    if(val>4){
      for(let i=val; i<=12; i++){
          document.getElementById(`da${i}`).value = da;
          document.getElementById(`rate${i}`).value = rate;
          document.getElementById(`hra${i}`).value = hra;
          document.getElementById(`ma${i}`).value = ma;
          document.getElementById(`donation${i}`).value = adjust;
          document.getElementById(`gross${i}`).value = gross;
          document.getElementById(`sf${i}`).value = sf;
          document.getElementById(`aupf${i}`).value = aupf;
          document.getElementById(`income_tax${i}`).value = income;
          document.getElementById(`net_salary${i}`).value = netsal;
        //   if(i==val){
              
              
        //   }
        //   else {
              document.getElementById(`gross${i}`).value = gross;
              document.getElementById(`donation${i}`).value = adjust;
              document.getElementById(`net_salary${i}`).value = netsal;
              document.getElementById(`profession${i}`).value = p_tax;

        //   }            
      }
    }

      let t_basic=basicc, t_da=0,t_rate=0, t_hra=0, t_ma=0, t_adjust=0, t_gross=0, t_p_tax=0, t_aupf=0, t_sf=0, t_income=0, t_net_salary=0;

      for(let i=1; i<=12; i++){
          if(val!=i){
              let t_b=document.getElementById(`basic${i}`).value || 0;
              t_basic=parseInt(t_b) + parseInt(t_basic);
          }
          let tt_rate = document.getElementById(`rate${i}`).value || 0;
          t_rate = Math.max(tt_rate,t_rate);
          let tt_da=document.getElementById(`da${i}`).value || 0;
          t_da= parseInt(tt_da) + parseInt(t_da);
          let tt_ma=document.getElementById(`ma${i}`).value || 0;
          t_ma = parseInt(tt_ma) + parseInt(t_ma);
          let tt_hra=document.getElementById(`hra${i}`).value || 0;
          t_hra= parseInt(t_hra) + parseInt(tt_hra);
          let tt_adjust=document.getElementById(`donation${i}`).value || 0;
          t_adjust= parseInt(tt_adjust) + parseInt(t_adjust);
          let tt_gross=document.getElementById(`gross${i}`).value || 0;
          t_gross= parseInt(t_gross) + parseInt(tt_gross);
          let tt_p_tax=document.getElementById(`profession${i}`).value || 0;
          t_p_tax= parseInt(t_p_tax) + parseInt(tt_p_tax);
          let tt_aupf=document.getElementById(`aupf${i}`).value || 0;
          t_aupf= parseInt(t_aupf) + parseInt(tt_aupf);
          let tt_sf=document.getElementById(`sf${i}`).value || 0;
          t_sf= parseInt(tt_sf) + parseInt(t_sf);
          let tt_income=document.getElementById(`income_tax${i}`).value || 0;
          t_income= parseInt(tt_income) + parseInt(t_income);
          let tt_net_salary=document.getElementById(`net_salary${i}`).value || 0;
          t_net_salary= parseInt(t_net_salary) + parseInt(tt_net_salary);

      }

      document.getElementById('basic13').value = t_basic;
      document.getElementById('rate13').value = t_rate;
      document.getElementById('da13').value = t_da;
      document.getElementById('hra13').value = t_hra;
      document.getElementById('ma13').value = t_ma;
      document.getElementById('donation13').value = t_adjust;
      document.getElementById('gross13').value = t_gross;
      document.getElementById('profession13').value = t_p_tax;
      document.getElementById('sf13').value = t_sf;
      document.getElementById('aupf13').value = t_aupf;
      document.getElementById('income_tax13').value = t_income;
      document.getElementById("net_salary13").value = t_net_salary;



}

const sf_fun =(e, val)=> {
  let sf = e.target.value;
  sf = parseInt(sf) || 0;
  let sf2 = parseInt(sf) || 0;
  let basicc = document.getElementById(`basic${val}`).value || 0;
  basicc = parseInt(basicc) || 0;

  let hra, hra2;
  hra = document.getElementById(`hra${val}`).value || 0;
  hra = parseInt(hra) || 0;
  if(val<=4) hra2 = document.getElementById('hra5').value || 0;
  else hra2 = parseInt(hra);
  hra2 = parseInt(hra2) || 0;
  
  let ma = document.getElementById(`ma${val}`).value || 0;
  ma = parseInt(ma) || 0;
  let ma2;
  if(val<=4) ma2 = document.getElementById('ma5').value || 0;
  else  ma2 = parseInt(ma) || 0;
  
  ma2 = parseInt(ma2) || 0;

  let adjust = document.getElementById(`donation${val}`).value || 0;
  adjust = parseInt(adjust) || 0;
  let adjust2 = parseInt(adjust) || 0;
  let aupf = document.getElementById(`aupf${val}`).value || 0;
  aupf = parseInt(aupf) || 0;
  let aupf2 = parseInt(aupf);
  let income = document.getElementById(`income_tax${val}`).value || 0;
  income = parseInt(income) || 0;
  let income2 = parseInt(income) || 0;
  let rate = document.getElementById(`rate${val}`).value || 0;
  rate = parseInt(rate) || 0;
  let rate2 = parseInt(rate);
  
  


  let da = (basicc* parseInt(rate))/100;
      da = Math.round(da);


 

  let basiccc = twoDigit(basicc*3/100);
      let basic2 = parseInt(basicc) + parseInt(basiccc);
      if(val>4){
        basic2 = parseInt(basicc);
      }
  let da2 = (parseInt(basic2) *parseInt(rate2))/100;
      da2 = Math.round(da2);

  
  

 
  let contract = document.getElementById('list').value;
  if(contract==='Yes'){
      da=0;
      da2=0;
      ma=0;
      ma2=0
      hra=0;
      hra2=0;
      rate=0;
      rate2=0;

      for(let i=1; i<=12; i++){
          document.getElementById(`da${i}`).readOnly =true;
          document.getElementById(`hra${i}`).readOnly =true;
          document.getElementById(`ma${i}`).readOnly =true;
          document.getElementById(`rate${i}`).readOnly =true;
      }

  }





  let gross = parseInt(basicc) + parseInt(da )+ parseInt(hra) + parseInt(ma) - parseInt(adjust);;
  let gross2 = parseInt(basic2) + parseInt(da2)+ parseInt(hra2) + parseInt(ma2) - parseInt(adjust) ;
  
  
  


  let p_tax, p_tax2;
  if(gross<=10000) p_tax=0;
  else if(gross<=15000) p_tax=110;
  else if(gross<=25000) p_tax=130;
  else if(gross<=40000) p_tax=150;
  else if(gross>40000) p_tax=200;
  
  if(gross2<=10000) p_tax2=0;
  else if(gross2<=15000) p_tax2=110;
  else if(gross2<=25000) p_tax2=130;
  else if(gross2<=40000) p_tax2=150;
  else if(gross2>40000) p_tax2=200;

  


  
  
  let netsal = parseInt(gross) - parseInt(p_tax) - parseInt(aupf) - parseInt(sf) - parseInt(income);
  let netsal2 = parseInt(gross2) - parseInt(p_tax2) - parseInt(aupf2) - parseInt(sf2) - parseInt(income2);


  if(val<=4){
      for(let i=val; i<=12; i++){

          document.getElementById(`da${i}`).value = da;
          document.getElementById(`rate${i}`).value = rate;
          document.getElementById(`hra${i}`).value = hra;
          document.getElementById(`ma${i}`).value = ma;
          
          
          document.getElementById(`sf${i}`).value = sf;
          document.getElementById(`aupf${i}`).value = aupf;
          document.getElementById(`income_tax${i}`).value = income;
          document.getElementById(`net_salary${i}`).value = netsal;
          document.getElementById(`basic${i}`).value = parseInt(basicc);

        //   if(i==val){
        //   document.getElementById(`gross${i}`).value = gross_val;
        //   document.getElementById(`donation${i}`).value = adjust;
        //   document.getElementById(`net_salary${i}`).value = netsal_val;
        //   document.getElementById(`profession${i}`).value = p_taxv;
        //   }
        //   else {
              document.getElementById(`gross${i}`).value = gross;
              document.getElementById(`donation${i}`).value = adjust;
              document.getElementById(`net_salary${i}`).value = netsal;
              document.getElementById(`profession${i}`).value = p_tax;
        //   }
          if(i>4){
              document.getElementById(`basic${i}`).value = basic2;
              document.getElementById(`rate${i}`).value = rate2;
              document.getElementById(`da${i}`).value = da2;
              document.getElementById(`hra${i}`).value = hra2;
              document.getElementById(`ma${i}`).value = ma2;
              document.getElementById(`donation${i}`).value = adjust;
              document.getElementById(`profession${i}`).value = p_tax2;
              document.getElementById(`sf${i}`).value = sf2;
              document.getElementById(`aupf${i}`).value = aupf2;
              document.getElementById(`income_tax${i}`).value = income2;

            //   if(i==val){
            //       document.getElementById(`gross${i}`).value = gross_val2;
            //       document.getElementById(`donation${i}`).value = adjust;
            //       document.getElementById(`net_salary${i}`).value = netsal_val2;
            //       document.getElementById(`profession${i}`).value = p_taxv2;
                  
            //   }
            //   else {
                  document.getElementById(`gross${i}`).value = gross2;
                  document.getElementById(`donation${i}`).value = adjust;
                  document.getElementById(`net_salary${i}`).value = netsal2;
                  document.getElementById(`profession${i}`).value = p_tax2;
            //   }

          }
      }
    }
    if(val>4){
      for(let i=val; i<=12; i++){
          document.getElementById(`da${i}`).value = da;
          document.getElementById(`rate${i}`).value = rate;
          document.getElementById(`hra${i}`).value = hra;
          document.getElementById(`ma${i}`).value = ma;
          document.getElementById(`donation${i}`).value = adjust;
          document.getElementById(`gross${i}`).value = gross;
          document.getElementById(`sf${i}`).value = sf;
          document.getElementById(`aupf${i}`).value = aupf;
          document.getElementById(`income_tax${i}`).value = income;
          document.getElementById(`net_salary${i}`).value = netsal;
        //   if(i==val){
              
              
        //   }
        //   else {
              document.getElementById(`gross${i}`).value = gross;
              document.getElementById(`donation${i}`).value = adjust;
              document.getElementById(`net_salary${i}`).value = netsal;
              document.getElementById(`profession${i}`).value = p_tax;

        //   }            
      }
    }

      let t_basic=basicc, t_da=0,t_rate=0, t_hra=0, t_ma=0, t_adjust=0, t_gross=0, t_p_tax=0, t_aupf=0, t_sf=0, t_income=0, t_net_salary=0;

      for(let i=1; i<=12; i++){
          if(val!=i){
              let t_b=document.getElementById(`basic${i}`).value || 0;
              t_basic=parseInt(t_b) + parseInt(t_basic);
          }
          let tt_rate = document.getElementById(`rate${i}`).value || 0;
          t_rate = Math.max(tt_rate,t_rate);
          let tt_da=document.getElementById(`da${i}`).value || 0;
          t_da= parseInt(tt_da) + parseInt(t_da);
          let tt_ma=document.getElementById(`ma${i}`).value || 0;
          t_ma = parseInt(tt_ma) + parseInt(t_ma);
          let tt_hra=document.getElementById(`hra${i}`).value || 0;
          t_hra= parseInt(t_hra) + parseInt(tt_hra);
          let tt_adjust=document.getElementById(`donation${i}`).value || 0;
          t_adjust= parseInt(tt_adjust) + parseInt(t_adjust);
          let tt_gross=document.getElementById(`gross${i}`).value || 0;
          t_gross= parseInt(t_gross) + parseInt(tt_gross);
          let tt_p_tax=document.getElementById(`profession${i}`).value || 0;
          t_p_tax= parseInt(t_p_tax) + parseInt(tt_p_tax);
          let tt_aupf=document.getElementById(`aupf${i}`).value || 0;
          t_aupf= parseInt(t_aupf) + parseInt(tt_aupf);
          let tt_sf=document.getElementById(`sf${i}`).value || 0;
          t_sf= parseInt(tt_sf) + parseInt(t_sf);
          let tt_income=document.getElementById(`income_tax${i}`).value || 0;
          t_income= parseInt(tt_income) + parseInt(t_income);
          let tt_net_salary=document.getElementById(`net_salary${i}`).value || 0;
          t_net_salary= parseInt(t_net_salary) + parseInt(tt_net_salary);

      }

      document.getElementById('basic13').value = t_basic;
      document.getElementById('rate13').value = t_rate;
      document.getElementById('da13').value = t_da;
      document.getElementById('hra13').value = t_hra;
      document.getElementById('ma13').value = t_ma;
      document.getElementById('donation13').value = t_adjust;
      document.getElementById('gross13').value = t_gross;
      document.getElementById('profession13').value = t_p_tax;
      document.getElementById('sf13').value = t_sf;
      document.getElementById('aupf13').value = t_aupf;
      document.getElementById('income_tax13').value = t_income;
      document.getElementById("net_salary13").value = t_net_salary;



}

const income_fun =(e, val)=> {
  let income = e.target.value;
  income = parseInt(income) || 0;
  let income2 = parseInt(income);
  let basicc = document.getElementById(`basic${val}`).value || 0;
  basicc = parseInt(basicc) || 0;

  let hra, hra2;
  hra = document.getElementById(`hra${val}`).value || 0;
  hra = parseInt(hra) || 0;
  if(val<=4) hra2 = document.getElementById('hra5').value || 0;
  else hra2 = parseInt(hra);
  hra2 = parseInt(hra2) || 0;
  
  let ma = document.getElementById(`ma${val}`).value || 0;
  ma = parseInt(ma) || 0;
  let ma2;
  if(val<=4) ma2 = document.getElementById('ma5').value || 0;
  else  ma2 = parseInt(ma) || 0;
  
  ma2 = parseInt(ma2) || 0;


  let adjust = document.getElementById(`donation${val}`).value || 0;
  adjust = parseInt(adjust) || 0;
  let adjust2 = parseInt(adjust) || 0;
  let sf = document.getElementById(`sf${val}`).value || 0;
  sf = parseInt(sf) || 0;
  let sf2 = parseInt(sf);
  let aupf = document.getElementById(`aupf${val}`).value || 0;
  aupf = parseInt(aupf) || 0;
  let aupf2 = parseInt(aupf) || 0;
  let rate = document.getElementById(`rate${val}`).value || 0;
  rate = parseInt(rate) || 0;
  let rate2 = parseInt(rate);
  
  


  let da = (basicc* parseInt(rate))/100;
      da = Math.round(da);


 

  let basiccc = twoDigit(basicc*3/100);
      let basic2 = parseInt(basicc) + parseInt(basiccc);
      if(val>4){
        basic2 = parseInt(basicc);
      }
  let da2 = (parseInt(basic2) *parseInt(rate2))/100;
      da2 = Math.round(da2);

  
  

  let contract = document.getElementById('list').value;
  if(contract==='Yes'){
      da=0;
      da2=0;
      ma=0;
      ma2=0
      hra=0;
      hra2=0;
      rate=0;
      rate2=0;

      for(let i=1; i<=12; i++){
          document.getElementById(`da${i}`).readOnly =true;
          document.getElementById(`hra${i}`).readOnly =true;
          document.getElementById(`ma${i}`).readOnly =true;
          document.getElementById(`rate${i}`).readOnly =true;
      }

  }





  let gross = parseInt(basicc) + parseInt(da )+ parseInt(hra) + parseInt(ma) - parseInt(adjust);;
  let gross2 = parseInt(basic2) + parseInt(da2)+ parseInt(hra2) + parseInt(ma2) - parseInt(adjust) ;
  
  
  


  let p_tax, p_tax2;
  if(gross<=10000) p_tax=0;
  else if(gross<=15000) p_tax=110;
  else if(gross<=25000) p_tax=130;
  else if(gross<=40000) p_tax=150;
  else if(gross>40000) p_tax=200;
  
  if(gross2<=10000) p_tax2=0;
  else if(gross2<=15000) p_tax2=110;
  else if(gross2<=25000) p_tax2=130;
  else if(gross2<=40000) p_tax2=150;
  else if(gross2>40000) p_tax2=200;

  


  
  
  let netsal = parseInt(gross) - parseInt(p_tax) - parseInt(aupf) - parseInt(sf) - parseInt(income);
  let netsal2 = parseInt(gross2) - parseInt(p_tax2) - parseInt(aupf2) - parseInt(sf2) - parseInt(income2);


  if(val<=4){
      for(let i=val; i<=12; i++){

          document.getElementById(`da${i}`).value = da;
          document.getElementById(`rate${i}`).value = rate;
          document.getElementById(`hra${i}`).value = hra;
          document.getElementById(`ma${i}`).value = ma;
          
          
          document.getElementById(`sf${i}`).value = sf;
          document.getElementById(`aupf${i}`).value = aupf;
          document.getElementById(`income_tax${i}`).value = income;
          document.getElementById(`net_salary${i}`).value = netsal;
          document.getElementById(`basic${i}`).value = parseInt(basicc);

        //   if(i==val){
        //   document.getElementById(`gross${i}`).value = gross_val;
        //   document.getElementById(`donation${i}`).value = adjust;
        //   document.getElementById(`net_salary${i}`).value = netsal_val;
        //   document.getElementById(`profession${i}`).value = p_taxv;
        //   }
        //   else {
              document.getElementById(`gross${i}`).value = gross;
              document.getElementById(`donation${i}`).value = adjust;
              document.getElementById(`net_salary${i}`).value = netsal;
              document.getElementById(`profession${i}`).value = p_tax;
        //   }
          if(i>4){
              document.getElementById(`basic${i}`).value = basic2;
              document.getElementById(`rate${i}`).value = rate2;
              document.getElementById(`da${i}`).value = da2;
              document.getElementById(`hra${i}`).value = hra2;
              document.getElementById(`ma${i}`).value = ma2;
              document.getElementById(`donation${i}`).value = adjust;
              document.getElementById(`profession${i}`).value = p_tax2;
              document.getElementById(`sf${i}`).value = sf2;
              document.getElementById(`aupf${i}`).value = aupf2;
              document.getElementById(`income_tax${i}`).value = income2;

            //   if(i==val){
            //       document.getElementById(`gross${i}`).value = gross_val2;
            //       document.getElementById(`donation${i}`).value = adjust;
            //       document.getElementById(`net_salary${i}`).value = netsal_val2;
            //       document.getElementById(`profession${i}`).value = p_taxv2;
                  
            //   }
            //   else {
                  document.getElementById(`gross${i}`).value = gross2;
                  document.getElementById(`donation${i}`).value = adjust;
                  document.getElementById(`net_salary${i}`).value = netsal2;
                  document.getElementById(`profession${i}`).value = p_tax2;
            //   }

          }
      }
    }
    if(val>4){
      for(let i=val; i<=12; i++){
          document.getElementById(`da${i}`).value = da;
          document.getElementById(`rate${i}`).value = rate;
          document.getElementById(`hra${i}`).value = hra;
          document.getElementById(`ma${i}`).value = ma;
          document.getElementById(`donation${i}`).value = adjust;
          document.getElementById(`gross${i}`).value = gross;
          document.getElementById(`sf${i}`).value = sf;
          document.getElementById(`aupf${i}`).value = aupf;
          document.getElementById(`income_tax${i}`).value = income;
          document.getElementById(`net_salary${i}`).value = netsal;
        //   if(i==val){
              
              
        //   }
        //   else {
              document.getElementById(`gross${i}`).value = gross;
              document.getElementById(`donation${i}`).value = adjust;
              document.getElementById(`net_salary${i}`).value = netsal;
              document.getElementById(`profession${i}`).value = p_tax;

        //   }            
      }
    }

      let t_basic=basicc, t_da=0,t_rate=0, t_hra=0, t_ma=0, t_adjust=0, t_gross=0, t_p_tax=0, t_aupf=0, t_sf=0, t_income=0, t_net_salary=0;

      for(let i=1; i<=12; i++){
          if(val!=i){
              let t_b=document.getElementById(`basic${i}`).value || 0;
              t_basic=parseInt(t_b) + parseInt(t_basic);
          }
          let tt_rate = document.getElementById(`rate${i}`).value || 0;
          t_rate = Math.max(tt_rate,t_rate);
          let tt_da=document.getElementById(`da${i}`).value || 0;
          t_da= parseInt(tt_da) + parseInt(t_da);
          let tt_ma=document.getElementById(`ma${i}`).value || 0;
          t_ma = parseInt(tt_ma) + parseInt(t_ma);
          let tt_hra=document.getElementById(`hra${i}`).value || 0;
          t_hra= parseInt(t_hra) + parseInt(tt_hra);
          let tt_adjust=document.getElementById(`donation${i}`).value || 0;
          t_adjust= parseInt(tt_adjust) + parseInt(t_adjust);
          let tt_gross=document.getElementById(`gross${i}`).value || 0;
          t_gross= parseInt(t_gross) + parseInt(tt_gross);
          let tt_p_tax=document.getElementById(`profession${i}`).value || 0;
          t_p_tax= parseInt(t_p_tax) + parseInt(tt_p_tax);
          let tt_aupf=document.getElementById(`aupf${i}`).value || 0;
          t_aupf= parseInt(t_aupf) + parseInt(tt_aupf);
          let tt_sf=document.getElementById(`sf${i}`).value || 0;
          t_sf= parseInt(tt_sf) + parseInt(t_sf);
          let tt_income=document.getElementById(`income_tax${i}`).value || 0;
          t_income= parseInt(tt_income) + parseInt(t_income);
          let tt_net_salary=document.getElementById(`net_salary${i}`).value || 0;
          t_net_salary= parseInt(t_net_salary) + parseInt(tt_net_salary);

      }

      document.getElementById('basic13').value = t_basic;
      document.getElementById('rate13').value = t_rate;
      document.getElementById('da13').value = t_da;
      document.getElementById('hra13').value = t_hra;
      document.getElementById('ma13').value = t_ma;
      document.getElementById('donation13').value = t_adjust;
      document.getElementById('gross13').value = t_gross;
      document.getElementById('profession13').value = t_p_tax;
      document.getElementById('sf13').value = t_sf;
      document.getElementById('aupf13').value = t_aupf;
      document.getElementById('income_tax13').value = t_income;
      document.getElementById("net_salary13").value = t_net_salary;



}

const AtHandler =( )=>{
  let table = document.getElementById('arrear_table');
  console.log(table);
  let val = document.getElementById('arrear_opt').value;
  // console.log(val);
  // console.log(val);

  if(val==="Yes"){
    table.style.display="block";

  }else {
    table.style.display="none";

  }

}
// AtHandler();

useEffect(()=>{
  if(response!==undefined && loading===false){
    AtHandler()
  }
})



  return (
    <>
    
    <Sidebar>
        <AuthHeader user={user} />

   
      
      <div className="salary">
        <h6>Salary Statement</h6>

  {
    loading ? <Loader/> :<>
    
    {
      response===undefined ? <Loader/> :<> 
          
    <div className="contract">
           <span> Are you a contractual employee:</span>
           <span> <select name="" id="list" ref={contract} defaultValue={contract}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
            </select> </span>
        </div>

        <div className="table_div">
            
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}>F.Y {response.financial_year==="2024-25" ? "2024-25" :"2023-24"} </th>
                        <td colSpan={9}></td>
                        <th colSpan={2}>A.Y  {response.financial_year==="2024-25" ? "2025-26" :"2024-25"} </th>
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
                        <th>MAR {response.financial_year==="2024-25" ? "2024" :"2023"} </th>
                        <td><input type="text" defaultValue={      rate1}      id='rate1'    ref={rate1}    onChange={e=>da_Rate(e,1)}   onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={     basic1}      id='basic1'   ref={basic1}      onChange={e=>basic(e,1)}  onKeyPress={onKeyPressEvent}     /></td>
                        <td><input type="text" defaultValue={        da1} id='da1'      ref={da1}              readOnly   /></td>
                        <td><input type="text" defaultValue={       hra1}        id='hra1'     ref={hra1}    onChange={e=>hra_fun(e,1)}  onKeyPress={onKeyPressEvent}  /></td>
                        <td><input type="text" defaultValue={        ma1}         id='ma1'      ref={ma1}     onChange={e=>ma_fun(e,1)}  onKeyPress={onKeyPressEvent}   /></td>
                        <td><input type="text" defaultValue={    adjust1}         id='donation1'  ref={adjust1} onChange={e=>adjust_fun(e,1)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={     gross1}         id='gross1'   ref={gross1}            readOnly /></td>
                        <td><input type="text" defaultValue={      ptax1}         id='profession1'    ref={ptax1}           readOnly /></td>
                        <td><input type="text" defaultValue={      aupf1}         id='aupf1'    ref={aupf1}   onChange={e=>aupf_fun(e,1)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={        sf1}         id='sf1'      ref={sf1}     onChange={e=>sf_fun(e,1)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={    income1}     readOnly    id='income_tax1'  ref={income1} onChange={e=>income_fun(e,1)}  onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={    netsal1}         id='net_salary1'  ref={netsal1}             readOnly /></td>
                    </tr>
                    <tr className='table_row_bg'>
                        <th>APR {response.financial_year==="2024-25" ? "2024" :"2023"}</th>
                        <td><input type="text" defaultValue={      rate2}      id='rate2'    ref={rate2}    onChange={e=>da_Rate(e,2)}   onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={     basic2}      id='basic2'   ref={basic2}      onChange={e=>basic(e,2)}  onKeyPress={onKeyPressEvent}     /></td>
                        <td><input type="text" defaultValue={        da2} id='da2'      ref={da2}              readOnly   /></td>
                        <td><input type="text" defaultValue={       hra2}        id='hra2'     ref={hra2}    onChange={e=>hra_fun(e,2)}  onKeyPress={onKeyPressEvent}  /></td>
                        <td><input type="text" defaultValue={        ma2}         id='ma2'      ref={ma2}     onChange={e=>ma_fun(e,2)}  onKeyPress={onKeyPressEvent}   /></td>
                        <td><input type="text" defaultValue={    adjust2}         id='donation2'  ref={adjust2} onChange={e=>adjust_fun(e,2)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={     gross2}         id='gross2'   ref={gross2}            readOnly /></td>
                        <td><input type="text" defaultValue={      ptax2}         id='profession2'    ref={ptax2}           readOnly /></td>
                        <td><input type="text" defaultValue={      aupf2}         id='aupf2'    ref={aupf2}   onChange={e=>aupf_fun(e,2)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={        sf2}         id='sf2'      ref={sf2}     onChange={e=>sf_fun(e,2)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={    income2}         id='income_tax2'  ref={income2} onChange={e=>income_fun(e,2)}  onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={    netsal2}         id='net_salary2'  ref={netsal2}             readOnly /></td>
                    
                    </tr>
                    <tr>
                        <th>MAY {response.financial_year==="2024-25" ? "2024" :"2023"}</th>
                        <td><input type="text" defaultValue={      rate3}      id='rate3'    ref={rate3}    onChange={e=>da_Rate(e,3)}   onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={     basic3}      id='basic3'   ref={basic3}      onChange={e=>basic(e,3)}  onKeyPress={onKeyPressEvent}     /></td>
                        <td><input type="text" defaultValue={        da3} id='da3'      ref={da3}              readOnly   /></td>
                        <td><input type="text" defaultValue={       hra3}        id='hra3'     ref={hra3}    onChange={e=>hra_fun(e,3)}  onKeyPress={onKeyPressEvent}  /></td>
                        <td><input type="text" defaultValue={        ma3}         id='ma3'      ref={ma3}     onChange={e=>ma_fun(e,3)}  onKeyPress={onKeyPressEvent}   /></td>
                        <td><input type="text" defaultValue={    adjust3}         id='donation3'  ref={adjust3} onChange={e=>adjust_fun(e,3)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={     gross3}         id='gross3'   ref={gross3}            readOnly /></td>
                        <td><input type="text" defaultValue={      ptax3}         id='profession3'    ref={ptax3}           readOnly /></td>
                        <td><input type="text" defaultValue={      aupf3}         id='aupf3'    ref={aupf3}   onChange={e=>aupf_fun(e,3)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={        sf3}         id='sf3'      ref={sf3}     onChange={e=>sf_fun(e,3)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={    income3}         id='income_tax3'  ref={income3} onChange={e=>income_fun(e,3)}  onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={    netsal3}         id='net_salary3'  ref={netsal3}             readOnly /></td>
                    
                    </tr>
                    <tr className='table_row_bg'>
                        <th>JUN {response.financial_year==="2024-25" ? "2024" :"2023"}</th>
                        <td><input type="text" defaultValue={      rate4}      id='rate4'    ref={rate4}    onChange={e=>da_Rate(e,4)}   onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={     basic4}      id='basic4'   ref={basic4}      onChange={e=>basic(e,4)}  onKeyPress={onKeyPressEvent}     /></td>
                        <td><input type="text" defaultValue={        da4} id='da4'      ref={da4}              readOnly   /></td>
                        <td><input type="text" defaultValue={       hra4}        id='hra4'     ref={hra4}    onChange={e=>hra_fun(e,4)}  onKeyPress={onKeyPressEvent}  /></td>
                        <td><input type="text" defaultValue={        ma4}         id='ma4'      ref={ma4}     onChange={e=>ma_fun(e,4)}  onKeyPress={onKeyPressEvent}   /></td>
                        <td><input type="text" defaultValue={    adjust4}         id='donation4'  ref={adjust4} onChange={e=>adjust_fun(e,4)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={     gross4}         id='gross4'   ref={gross4}            readOnly /></td>
                        <td><input type="text" defaultValue={      ptax4}         id='profession4'    ref={ptax4}           readOnly /></td>
                        <td><input type="text" defaultValue={      aupf4}         id='aupf4'    ref={aupf4}   onChange={e=>aupf_fun(e,4)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={        sf4}         id='sf4'      ref={sf4}     onChange={e=>sf_fun(e,4)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={    income4}         id='income_tax4'  ref={income4} onChange={e=>income_fun(e,4)}  onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={    netsal4}         id='net_salary4'  ref={netsal4}             readOnly /></td>
                    
                    </tr>
                    <tr>
                        <th>JUL {response.financial_year==="2024-25" ? "2024" :"2023"}</th>
                        <td><input type="text" defaultValue={      rate5}      id='rate5'    ref={rate5}    onChange={e=>da_Rate(e,5)}   onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={     basic5}      id='basic5'   ref={basic5}      onChange={e=>basic(e,5)}  onKeyPress={onKeyPressEvent}     /></td>
                        <td><input type="text" defaultValue={        da5} id='da5'      ref={da5}              readOnly   /></td>
                        <td><input type="text" defaultValue={       hra5}        id='hra5'     ref={hra5}    onChange={e=>hra_fun(e,5)}  onKeyPress={onKeyPressEvent}  /></td>
                        <td><input type="text" defaultValue={        ma5}         id='ma5'      ref={ma5}     onChange={e=>ma_fun(e,5)}  onKeyPress={onKeyPressEvent}   /></td>
                        <td><input type="text" defaultValue={    adjust5}         id='donation5'  ref={adjust5} onChange={e=>adjust_fun(e,5)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={     gross5}         id='gross5'   ref={gross5}            readOnly /></td>
                        <td><input type="text" defaultValue={      ptax5}         id='profession5'    ref={ptax5}           readOnly /></td>
                        <td><input type="text" defaultValue={      aupf5}         id='aupf5'    ref={aupf5}   onChange={e=>aupf_fun(e,5)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={        sf5}         id='sf5'      ref={sf5}     onChange={e=>sf_fun(e,5)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={    income5}         id='income_tax5'  ref={income5} onChange={e=>income_fun(e,5)}  onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={    netsal5}         id='net_salary5'  ref={netsal5}             readOnly /></td>
                    
                    </tr>
                    <tr className='table_row_bg'>
                        <th>AUG {response.financial_year==="2024-25" ? "2024" :"2023"}</th>
                        <td><input type="text" defaultValue={      rate6}      id='rate6'    ref={rate6}    onChange={e=>da_Rate(e,6)}   onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={     basic6}      id='basic6'   ref={basic6}      onChange={e=>basic(e,6)}  onKeyPress={onKeyPressEvent}     /></td>
                        <td><input type="text" defaultValue={        da6} id='da6'      ref={da6}              readOnly   /></td>
                        <td><input type="text" defaultValue={       hra6}        id='hra6'     ref={hra6}    onChange={e=>hra_fun(e,6)}  onKeyPress={onKeyPressEvent}  /></td>
                        <td><input type="text" defaultValue={        ma6}         id='ma6'      ref={ma6}     onChange={e=>ma_fun(e,6)}  onKeyPress={onKeyPressEvent}   /></td>
                        <td><input type="text" defaultValue={    adjust6}         id='donation6'  ref={adjust6} onChange={e=>adjust_fun(e,6)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={     gross6}         id='gross6'   ref={gross6}            readOnly /></td>
                        <td><input type="text" defaultValue={      ptax6}         id='profession6'    ref={ptax6}           readOnly /></td>
                        <td><input type="text" defaultValue={      aupf6}         id='aupf6'    ref={aupf6}   onChange={e=>aupf_fun(e,6)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={        sf6}         id='sf6'      ref={sf6}     onChange={e=>sf_fun(e,6)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={    income6}         id='income_tax6'  ref={income6} onChange={e=>income_fun(e,6)}  onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={    netsal6}         id='net_salary6'  ref={netsal6}             readOnly /></td>
                    
                    </tr>
                    <tr>
                        <th>SEP {response.financial_year==="2024-25" ? "2024" :"2023"}</th>
                        <td><input type="text" defaultValue={      rate7}      id='rate7'    ref={rate7}    onChange={e=>da_Rate(e,7)}   onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={     basic7}      id='basic7'   ref={basic7}      onChange={e=>basic(e,7)}  onKeyPress={onKeyPressEvent}     /></td>
                        <td><input type="text" defaultValue={        da7} id='da7'      ref={da7}              readOnly   /></td>
                        <td><input type="text" defaultValue={       hra7}        id='hra7'     ref={hra7}    onChange={e=>hra_fun(e,7)}  onKeyPress={onKeyPressEvent}  /></td>
                        <td><input type="text" defaultValue={        ma7}         id='ma7'      ref={ma7}     onChange={e=>ma_fun(e,7)}  onKeyPress={onKeyPressEvent}   /></td>
                        <td><input type="text" defaultValue={    adjust7}         id='donation7'  ref={adjust7} onChange={e=>adjust_fun(e,7)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={     gross7}         id='gross7'   ref={gross7}            readOnly /></td>
                        <td><input type="text" defaultValue={      ptax7}         id='profession7'    ref={ptax7}           readOnly /></td>
                        <td><input type="text" defaultValue={      aupf7}         id='aupf7'    ref={aupf7}   onChange={e=>aupf_fun(e,7)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={        sf7}         id='sf7'      ref={sf7}     onChange={e=>sf_fun(e,7)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={    income7}         id='income_tax7'  ref={income7} onChange={e=>income_fun(e,7)}  onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={    netsal7}         id='net_salary7'  ref={netsal7}             readOnly /></td>
                    
                    </tr>
                    <tr className='table_row_bg'>
                        <th>OCT {response.financial_year==="2024-25" ? "2024" :"2023"}</th>
                        <td><input type="text" defaultValue={      rate8}      id='rate8'    ref={rate8}    onChange={e=>da_Rate(e,8)}   onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={     basic8}      id='basic8'   ref={basic8}      onChange={e=>basic(e,8)}  onKeyPress={onKeyPressEvent}     /></td>
                        <td><input type="text" defaultValue={        da8} id='da8'      ref={da8}              readOnly   /></td>
                        <td><input type="text" defaultValue={       hra8}        id='hra8'     ref={hra8}    onChange={e=>hra_fun(e,8)}  onKeyPress={onKeyPressEvent}  /></td>
                        <td><input type="text" defaultValue={        ma8}         id='ma8'      ref={ma8}     onChange={e=>ma_fun(e,8)}  onKeyPress={onKeyPressEvent}   /></td>
                        <td><input type="text" defaultValue={    adjust8}         id='donation8'  ref={adjust8} onChange={e=>adjust_fun(e,8)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={     gross8}         id='gross8'   ref={gross8}            readOnly /></td>
                        <td><input type="text" defaultValue={      ptax8}         id='profession8'    ref={ptax8}           readOnly /></td>
                        <td><input type="text" defaultValue={      aupf8}         id='aupf8'    ref={aupf8}   onChange={e=>aupf_fun(e,8)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={        sf8}         id='sf8'      ref={sf8}     onChange={e=>sf_fun(e,8)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={    income8}         id='income_tax8'  ref={income8} onChange={e=>income_fun(e,8)}  onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={    netsal8}         id='net_salary8'  ref={netsal8}             readOnly /></td>
                    
                    </tr>
                    <tr>
                        <th>NOV {response.financial_year==="2024-25" ? "2024" :"2023"}</th>
                        <td><input type="text" defaultValue={      rate9}      id='rate9'    ref={rate9}    onChange={e=>da_Rate(e,9)}   onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={     basic9}      id='basic9'   ref={basic9}      onChange={e=>basic(e,9)}  onKeyPress={onKeyPressEvent}     /></td>
                        <td><input type="text" defaultValue={        da9} id='da9'      ref={da9}              readOnly   /></td>
                        <td><input type="text" defaultValue={       hra9}        id='hra9'     ref={hra9}    onChange={e=>hra_fun(e,9)}  onKeyPress={onKeyPressEvent}  /></td>
                        <td><input type="text" defaultValue={        ma9}         id='ma9'      ref={ma9}     onChange={e=>ma_fun(e,9)}  onKeyPress={onKeyPressEvent}   /></td>
                        <td><input type="text" defaultValue={    adjust9}         id='donation9'  ref={adjust9} onChange={e=>adjust_fun(e,9)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={     gross9}         id='gross9'   ref={gross9}            readOnly /></td>
                        <td><input type="text" defaultValue={      ptax9}         id='profession9'    ref={ptax9}           readOnly /></td>
                        <td><input type="text" defaultValue={      aupf9}         id='aupf9'    ref={aupf9}   onChange={e=>aupf_fun(e,9)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={        sf9}         id='sf9'      ref={sf9}     onChange={e=>sf_fun(e,9)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={    income9}         id='income_tax9'  ref={income9} onChange={e=>income_fun(e,9)}  onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={    netsal9}         id='net_salary9'  ref={netsal9}             readOnly /></td>
                    
                    </tr>
                    <tr className='table_row_bg'>
                        <th>DEC {response.financial_year==="2024-25" ? "2024" :"2023"}</th>
                        <td><input type="text" defaultValue={      rate10}      id='rate10'    ref={rate10}    onChange={e=>da_Rate(e,10)}   onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={     basic10}      id='basic10'   ref={basic10}      onChange={e=>basic(e,10)}  onKeyPress={onKeyPressEvent}     /></td>
                        <td><input type="text" defaultValue={        da10} id='da10'      ref={da10}              readOnly   /></td>
                        <td><input type="text" defaultValue={       hra10}        id='hra10'     ref={hra10}    onChange={e=>hra_fun(e,10)}  onKeyPress={onKeyPressEvent}  /></td>
                        <td><input type="text" defaultValue={        ma10}         id='ma10'      ref={ma10}     onChange={e=>ma_fun(e,10)}  onKeyPress={onKeyPressEvent}   /></td>
                        <td><input type="text" defaultValue={    adjust10}         id='donation10'  ref={adjust10} onChange={e=>adjust_fun(e,10)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={     gross10}         id='gross10'   ref={gross10}            readOnly /></td>
                        <td><input type="text" defaultValue={      ptax10}         id='profession10'    ref={ptax10}           readOnly /></td>
                        <td><input type="text" defaultValue={      aupf10}         id='aupf10'    ref={aupf10}   onChange={e=>aupf_fun(e,10)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={        sf10}         id='sf10'      ref={sf10}     onChange={e=>sf_fun(e,10)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={    income10}         id='income_tax10'  ref={income10} onChange={e=>income_fun(e,10)}  onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={    netsal10}         id='net_salary10'  ref={netsal10}             readOnly /></td>
                    
                    </tr>
                    <tr>
                        <th>JAN {response.financial_year==="2024-25" ? "2025" :"2024"}</th>
                        <td><input type="text" defaultValue={      rate11}      id='rate11'    ref={rate11}    onChange={e=>da_Rate(e,11)}   onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={     basic11}      id='basic11'   ref={basic11}      onChange={e=>basic(e,11)}  onKeyPress={onKeyPressEvent}     /></td>
                        <td><input type="text" defaultValue={        da11} id='da11'      ref={da11}              readOnly   /></td>
                        <td><input type="text" defaultValue={       hra11}        id='hra11'     ref={hra11}    onChange={e=>hra_fun(e,11)}  onKeyPress={onKeyPressEvent}  /></td>
                        <td><input type="text" defaultValue={        ma11}         id='ma11'      ref={ma11}     onChange={e=>ma_fun(e,11)}  onKeyPress={onKeyPressEvent}   /></td>
                        <td><input type="text" defaultValue={    adjust11}         id='donation11'  ref={adjust11} onChange={e=>adjust_fun(e,11)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={     gross11}         id='gross11'   ref={gross11}            readOnly /></td>
                        <td><input type="text" defaultValue={      ptax11}         id='profession11'    ref={ptax11}           readOnly /></td>
                        <td><input type="text" defaultValue={      aupf11}         id='aupf11'    ref={aupf11}   onChange={e=>aupf_fun(e,11)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={        sf11}         id='sf11'      ref={sf11}     onChange={e=>sf_fun(e,11)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={    income11}         id='income_tax11'  ref={income11} onChange={e=>income_fun(e,11)}  onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={    netsal11}         id='net_salary11'  ref={netsal11}             readOnly /></td>
                    
                    </tr>
                    <tr className='table_row_bg'>
                        <th>FEB {response.financial_year==="2024-25" ? "2025" :"2024"}</th>
                        <td><input type="text" defaultValue={      rate12}      id='rate12'    ref={rate12}    onChange={e=>da_Rate(e,12)}   onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={     basic12}      id='basic12'   ref={basic12}      onChange={e=>basic(e,12)}  onKeyPress={onKeyPressEvent}     /></td>
                        <td><input type="text" defaultValue={        da12} id='da12'      ref={da12}              readOnly   /></td>
                        <td><input type="text" defaultValue={       hra12}        id='hra12'     ref={hra12}    onChange={e=>hra_fun(e,12)}  onKeyPress={onKeyPressEvent}  /></td>
                        <td><input type="text" defaultValue={        ma12}         id='ma12'      ref={ma12}     onChange={e=>ma_fun(e,12)}  onKeyPress={onKeyPressEvent}   /></td>
                        <td><input type="text" defaultValue={    adjust12}         id='donation12'  ref={adjust12} onChange={e=>adjust_fun(e,12)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={     gross12}         id='gross12'   ref={gross12}            readOnly /></td>
                        <td><input type="text" defaultValue={      ptax12}         id='profession12'    ref={ptax12}           readOnly /></td>
                        <td><input type="text" defaultValue={      aupf12}         id='aupf12'    ref={aupf12}   onChange={e=>aupf_fun(e,12)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={        sf12}         id='sf12'      ref={sf12}     onChange={e=>sf_fun(e,12)}  onKeyPress={onKeyPressEvent}/></td>
                        <td><input type="text" defaultValue={    income12}         id='income_tax12'  ref={income12} onChange={e=>income_fun(e,12)}  onKeyPress={onKeyPressEvent} /></td>
                        <td><input type="text" defaultValue={    netsal12}         id='net_salary12'  ref={netsal12}             readOnly /></td>
                    
                    </tr>
                    <tr className='table_bg'>
                        <th> Total</th>
                        <td><input type="text" defaultValue={      rate13}      id='rate13' readOnly ref={rate13} /></td>
                        <td><input type="text" defaultValue={     basic13}      id='basic13' readOnly ref={basic13}    /></td>
                        <td><input type="text" defaultValue={        da13}     id='da13' readOnly ref={da13}  /></td>
                        <td><input type="text" defaultValue={       hra13}        id='hra13' readOnly  ref={hra13}  /></td>
                        <td><input type="text" defaultValue={        ma13}         id='ma13' readOnly  ref={ma13}  /></td>
                        <td><input type="text" defaultValue={    adjust13}         id='donation13' readOnly ref={adjust13} /></td>
                        <td><input type="text" defaultValue={     gross13}         id='gross13' readOnly ref={gross13} /></td>
                        <td><input type="text" defaultValue={      ptax13}         id='profession13' readOnly ref={ptax13} /></td>
                        <td><input type="text" defaultValue={      aupf13}         id='aupf13' readOnly ref={aupf13} /></td>
                        <td><input type="text" defaultValue={        sf13}         id='sf13' readOnly ref={sf13} /></td>
                        <td><input type="text" defaultValue={    income13}         id='income_tax13' readOnly ref={income13} /></td>
                        <td><input type="text" defaultValue={    netsal13}         id='net_salary13' readOnly ref={netsal13} /></td>
                    </tr>
                </tbody>
            </table>
        </div>

    <div className="sal_footer">
        <div className="sal_note">
            <span>Note:</span>
            <ol>
                <li>Enter the amount for March {response.financial_year==="2024-25" ? "2024" :"2023"}  </li>
                <li>In Adjustment column enter the extra drawal amount, if any.</li>
            </ol>

        <div className="arrear_opt">
         <TbPointFilled/>Have you received Arrear Salary ?<select name="" id="arrear_opt" ref={having_arrear} onChange={(e)=>AtHandler(e.target.value)}>
            <option value="Yes" selected={"Yes"===response.having_arrear_s}>Yes</option>
            <option value="No" selected={"No"===response.having_arrear_s}>No</option>
          </select>
        </div>

        </div>
        <div  className="sal_arr" id='arrear_table'>
            <div className="sal_table">
            <table>
                <tr className='arr_title table_bg'>
                    <th colSpan={2}>Arrear Salary</th>
                </tr>
                <tr>
                    <td className='td'>Gross Arrear Salary</td>
                    <td><input type="text" onChange={net_arrear_fun} id='arrear_salary'  onKeyPress={onKeyPressEvent} ref={gas} defaultValue={gas} /></td>
                </tr>
                <tr>
                    <td className='td'>Less: Profession Tax</td>
                    <td><input type="text" onChange={net_arrear_fun} onKeyPress={onKeyPressEvent} id="profession_tax" ref={lpt} defaultValue={lpt} /></td>
                </tr>
                <tr>
                    <td className='td'>Less: AUPF</td>
                    <td><input type="text" onChange={net_arrear_fun} onKeyPress={onKeyPressEvent} id='less_aupf' ref={laupf} defaultValue={laupf} /></td>
                </tr>
                <tr>
                    <td className='td'>Less: TDS</td>
                    <td><input type="text" onChange={net_arrear_fun} onKeyPress={onKeyPressEvent}  id='less_tds' ref={ltds} defaultValue={ltds} /></td>
                </tr>
                <tr className='table_bg'>
                    <th className='td'>Net Arrear Salary</th>
                    <td><input type="text" onChange={net_arrear_fun} onKeyPress={onKeyPressEvent} readOnly id='net_arrear_salary' ref={nas} defaultValue={nas} /></td>
                </tr>
            </table>
            </div>
        </div>
    </div>
    


    <div className="btns ">
        {/* <Link to={`/form12b/233asdfa`} className='btn prev'  >Back</Link> */}
        <button className='btn next' onClick={NextHandler} >Next</button>
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
      </>
    }

    </>
  }


    </div>
      
 



    </Sidebar>
    
    
    </>
  )
}

export default Salary