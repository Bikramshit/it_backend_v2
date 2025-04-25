import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import AuthHeader from '../../Layouts/Header/AuthHeader'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Layouts/Loader/Loader';
import { GetSingleResponse, HraHandler } from '../../../Redux/Actions/ResponseAction';
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

function Hra() {
  const {user, message, error} = useSelector(state=>state.user);
  const {loading, response} = useSelector(state=>state.response);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const [lr1, setlr1] = useState(null)
  const [lr2, setlr2] = useState(null)
  const [lr3, setlr3] = useState(null)
  const [lr4, setlr4] = useState(null)

  useEffect(()=>{
    dispatch(GetSingleResponse(params.id))
   }, [dispatch, params.id]);
    // basic_s13,name, da_s13,hra_s13, basic_f13, da_f13, hra_f13 
    // const basic_s13=0, name=0, da_s13=0, hra_s13=0, basic_f13=0, da_f13=0, hra_f13=0;
   const  name1 = useRef('');
   const  name2 = useRef('');
   const  name3 = useRef('');
   const  name4 = useRef('');
   const  pan1  = useRef('');
   const  pan2  = useRef('');
   const  pan3  = useRef('');
   const  pan4  = useRef('');
   const  arp= useRef(0);
   const  arp2= useRef(0);
   const  tenof= useRef(0);
   const  tenof2= useRef(0);
   const living_met= useRef(0);
   const living_met2= useRef(0);
   const non_living_met= useRef(0);
   const non_living_met2= useRef(0);
   const actual_hra= useRef(0);
   const actual_hra2= useRef(0);
   const hra_exempt= useRef(0);
   const hra_exempt2= useRef(0);
   const rent_pay= useRef(0);
   const metro_city= useRef('');
   const metro_city2= useRef('');
   const  nol= useRef(0);
   const count= useRef(0);


   useEffect(()=>{
    if(response!==undefined && response!==null){
      arp.current.value = response.rent_e;
      arp2.current.value = response.rent_n;
      tenof.current.value =response.r_ten_e;
      tenof2.current.value = response.r_ten_n;
      living_met.current.value = response.living_m_e;
      living_met2.current.value = response.living_m_n;
      non_living_met.current.value = response.non_living_m_e;
      non_living_met2.current.value = response.non_living_m_n;
      actual_hra.current.value = response.actual_hra_e;
      actual_hra2.current.value = response.actual_hra_n;
      hra_exempt.current.value = response.hra_exempt_e;
      hra_exempt2.current.value = response.hra_exempt_n;
      rent_pay.current.value = response.exceed_lakh;
      metro_city.current.value = response.live_in_e ;
      metro_city2.current.value = response.live_in_n ;
      nol.current.value = response.nol;
      count.current.value = response.count;
      name1.current.value = response.name1;
      name2.current.value = response.name2;
      name3.current.value = response.name3;
      name4.current.value = response.name4;
      pan1 .current.value = response.pan1;
      pan2 .current.value = response.pan2;
      pan3 .current.value = response.pan3;
      pan4 .current.value = response.pan4;      
      
    }
   }, [response])



   const SubmitHandler =async(currentState)=>{
    const id = params.id;
    // const currentState="it"
    const res = await dispatch(HraHandler(
      id, currentState,
      arp.current.value,
      arp2.current.value,
      tenof.current.value,
      tenof2.current.value,
      living_met.current.value,
      living_met2.current.value,
      non_living_met.current.value,
      non_living_met2.current.value,
      actual_hra.current.value,
      actual_hra2.current.value,
      hra_exempt.current.value,
      hra_exempt2.current.value,
      metro_city.current.value,
      metro_city2.current.value,
      rent_pay.current.value,
      pan1.current.value,
      pan2.current.value,
      pan3.current.value,
      pan4.current.value,    
      name1.current.value,
      name2.current.value,
      name3.current.value,
      name4.current.value,  
      count.current.value,
      nol.current.value,


    ));

    return res;
   }

   const PreviousHandler = async()=>{
    var arp = document.getElementById('arp').value || 0;
        var rp = document.getElementById('rp').value || 0;
        var rent = parseInt(arp) + parseInt(rp);


    if(rent>100000){
      if(name1.length!==0 && pan1.length!==10){
        toast.error("Please enter a valid landlord (s) details");
        // toast.error(count)
        return;
      }
    }
    const res = await SubmitHandler("chapter");
    console.log(res);
    if(res===true){
      navigate(`/chapter/${params.id}`)
    }
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

 
   const NextHandler = async()=>{
    
      var arp = document.getElementById('arp').value || 0;
        var rp = document.getElementById('rp').value || 0;
        var rent = parseInt(arp) + parseInt(rp);

    console.log(name1.current.value);
    console.log(pan1.current.value);
    if(rent>100000){
      if(name1?.current?.value?.length===0 || pan1?.current?.value?.length!==10){
        toast.error("Please enter a valid landlord (s) details");
        // toast.error(count)
        return;
      }
    }

    const res = await SubmitHandler("it");
    if(res===true){
      navigate(`/it/${params.id}`)
    }
   }
   const SelectHandler = async(e)=>{
    console.log(e);
    const res = await SubmitHandler(e);
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
  
    const panValidation1 =()=> {
        var panPattern = /([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}$/;
        var pan = document.getElementById('pan1').value;
        var sign = document.getElementById('sign1');
  
        if(pan.match(panPattern)){
          sign.innerHTML = "";
          sign.classList.remove('text-danger');
          sign.style.color='green';
        }
        else {
          sign.innerHTML = " Not a valid pan number";
          sign.classList.add('text-danger');
        }
  
  
       }
       
       const panValidation2 =()=> {
        var panPattern = /([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}$/;
        var pan = document.getElementById('pan2').value;
        var sign = document.getElementById('sign2');
  
        if(pan.match(panPattern)){
          sign.innerHTML = " ";
          sign.classList.remove('text-danger');
          sign.style.color='green';
        }
        else {
          sign.innerHTML = " Not a valid pan number";
          sign.classList.add('text-danger');
        }
  
  
       }
       
       const panValidation3 =()=> {
        var panPattern = /([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}$/;
        var pan = document.getElementById('pan3').value;
        var sign = document.getElementById('sign3');
  
        if(pan.match(panPattern)){
          sign.innerHTML = "";
          sign.classList.remove('text-danger');
          sign.style.color='green';
        }
        else {
          sign.innerHTML = "  Not a valid pan number";
          sign.classList.add('text-danger');
        }
  
  
       }
       
       const panValidation4 =()=> {
        var panPattern = /([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}$/;
        var pan = document.getElementById('pan4').value;
        var sign = document.getElementById('sign4');
  
        if(pan.match(panPattern)){
          sign.innerHTML = "";
          sign.classList.remove('text-danger');
          sign.style.color='green';
        }
        else {
          sign.innerHTML = "Not a valid pan number";
          sign.classList.add('text-danger');
        }
  
  
       }


       const Exceed =()=> {
        var exceed = document.getElementById('exceed');
        var arp = document.getElementById('arp').value || 0;
        var rp = document.getElementById('rp').value || 0;
        var rent = parseInt(arp) + parseInt(rp);
        var count = document.getElementById('count').value || 0;
        count=parseInt(count);
        let nol;
        if(exceed.value=='Yes'){
          nol=count+1;
        }
        else {
          nol=0;
        }


        if(rent>100000){
          exceed.value = "Yes";
          document.getElementById('l1').style.display='inline-table';
          document.getElementById('l1').style.width='100%';
          // document.getElementById('l1').style.width="100%";
          document.getElementById('addrow').style.display='block';
          document.getElementById('ins').style.display='block';
          if(nol==2){
            document.getElementById('l1').style.display='inline-table';
           document.getElementById('l2').style.display='inline-table';
           document.getElementById('l1').style.width='100%';
           document.getElementById('l2').style.width='100%';

           document.getElementById('remove').style.display='inline';
           document.getElementById('add').style.display='inline';

          }
          if(nol==3){
            document.getElementById('l1').style.display='inline-table';
            document.getElementById('l2').style.display='inline-table';
            document.getElementById('l3').style.display='inline-table';
            document.getElementById('l1').style.width='100%';
            document.getElementById('l2').style.width='100%';
            document.getElementById('l3').style.width='100%';

            document.getElementById('remove').style.display='inline';
            document.getElementById('add').style.display='inline';

          }
          if(nol==4){
            document.getElementById('l1').style.display='inline-table';
            document.getElementById('l2').style.display='inline-table';
            document.getElementById('l3').style.display='inline-table';
            document.getElementById('l4').style.display='inline-table';
            document.getElementById('l1').style.width='100%';
            document.getElementById('l2').style.width='100%';
            document.getElementById('l3').style.width='100%';
            document.getElementById('l4').style.width='100%';

            document.getElementById('remove').style.display='inline';
            document.getElementById('add').style.display='none';
          }
         
        }
        else { 
          exceed.value = "No";
          document.getElementById('l1').style.display='none';
          document.getElementById('l2').style.display='none';
          document.getElementById('l3').style.display='none';
          document.getElementById('l4').style.display='none';
          document.getElementById('addrow').style.display='none';
          document.getElementById('ins').style.display='none';         
          
        }
         
     
      }   
       const Existing_Emp =()=> {
        var total_basic = parseInt(response.basic_s13) || 0; 

        var total_da = parseInt(response.da_s13) || 0;
       var hra_s = parseInt(response.hra_s13) || 0;

        var arp = document.getElementById('arp').value || 0;
        arp = parseInt(arp) || 0;
        document.getElementById('arp').value = arp;
        var temp =Math.round((total_basic + total_da)*10/100);
        var tenOfSalary = parseInt(arp) - parseInt(temp);
        if(arp>0){
          tenOfSalary = Math.round(tenOfSalary);
        document.getElementById('tenOfSalary').value = tenOfSalary;
        }
        else {
        document.getElementById('tenOfSalary').value = 0;

        }
          

        if(arp>0){
          var actual_hra = parseInt(hra_s);
        }
        else {
          actual_hra = 0;
        }

        document.getElementById('actual_hra').value = actual_hra;


      Exceed();
      }

      const living_metro =()=> {
        var total_basic = parseInt(response.basic_s13) || 0; 
        var total_da = parseInt(response.da_s13) || 0;

        var selectedValue = document.getElementById("list").value;
        var temp = parseInt(total_basic) + parseInt(total_da);
        var selectedValue = document.getElementById("list").value;
        var actual_hra = document.getElementById('actual_hra').value || 0;
        var tenOfSalary = document.getElementById('tenOfSalary').value || 0;
        if(selectedValue==="Yes"){
           var tem = (temp*50)/100;
           tem = Math.round(tem);
           var minn = Math.min(tem,actual_hra,tenOfSalary);
           var minnn = Math.max(minn,0);
           document.getElementById('hra_exemption').value = minnn;
           document.getElementById('living_metro').value = tem;
          document.getElementById('non_living_metro').value = 0;


        }
        if(selectedValue==="No"){
          var tem2 = (temp*40)/100;
          tem = Math.round(tem2);
          var minn2 = Math.min(tem2, actual_hra, tenOfSalary);
          var minnn2 = Math.max(minn2, 0);
          document.getElementById('hra_exemption').value = minnn2;
           document.getElementById('living_metro').value = 0;
           document.getElementById('non_living_metro').value = tem2;

       }
       if(selectedValue==="select"){
        document.getElementById('hra_exemption').value = 0;
        document.getElementById('living_metro').value = 0;
       document.getElementById('non_living_metro').value = 0;
       document.getElementById('tenOfSalary').value = 0;
        document.getElementById("actual_hra").value =0;

       }

       
      }

      const newEmp =()=> {
        var total_basic2 =parseInt(response.basic_f13) || 0;
        var total_da2 =parseInt(response.da_f13) || 0;
        var hra_f = parseInt(response.hra_f13) || 0;

        var arp = document.getElementById('rp').value || 0;
        arp = parseInt(arp) || 0;
        document.getElementById('rp').value = arp;
        var temp =Math.round( (total_basic2 + total_da2)*10/100);
        var tenOfSalary = parseInt(arp) - parseInt(temp);
           
        document.getElementById('tenOfSalary2').value = tenOfSalary;
        var actual_hra;
        if(arp>0){
          actual_hra = parseInt(hra_f);
        }
        else {
           actual_hra = 0  ;

        }
        document.getElementById('actual_hra2').value = actual_hra;

        Exceed()
      }

      const living_metro2 =()=> {
        var total_basic2 = parseInt(response.basic_f13);
        var total_da2 = parseInt(response.da_f13);
        var selectedValue = document.getElementById("list2").value;
        var temp = parseInt(total_basic2) + parseInt(total_da2);
        var actual_hra = document.getElementById('actual_hra2').value || 0;
        var tenOfSalary = document.getElementById('tenOfSalary2').value || 0;
        if(selectedValue==="Yes"){
           var tem = temp*50/100;
           tem = Math.round(tem);
           var minn = Math.min(tem,actual_hra,tenOfSalary);
           var minnn = Math.max(minn,0);
           document.getElementById('hra_exemption2').value = minnn;
           document.getElementById('living_metro2').value = tem;
          document.getElementById('non_living_metro2').value = 0;


        }
        if(selectedValue==="No"){
          var tem2 = temp*40/100;
          tem = Math.round(tem2);
          var minn2 = Math.min(tem, actual_hra, tenOfSalary);
          var minnn2 = Math.max(minn2, 0);
          document.getElementById('hra_exemption2').value = minnn2;
           document.getElementById('living_metro2').value = 0;
           document.getElementById('non_living_metro2').value = tem;

       }
       if(selectedValue==="select"){
        document.getElementById('hra_exemption2').value = 0;
        document.getElementById('living_metro2').value = 0;
       document.getElementById('non_living_metro2').value = 0;
       document.getElementById('tenOfSalary2').value = 0;
        document.getElementById('actual_hra2').value = 0;

       }

       
      }


useEffect(()=>{
  if(response!==undefined){
    Existing_Emp();
    Exceed();
  }
},[response])

      
  const transform =()=> {
    var e = document.getElementById('pan1').value; 
     
    var x = e.toUpperCase();
    document.getElementById('pan1').value = x;
    
}
const transform2 = ()=> {
var e = document.getElementById('pan2').value;
var x = e.toUpperCase();
    document.getElementById('pan2').value = x;
}
const transform3 = ()=> {
var e = document.getElementById('pan3').value;
var x = e.toUpperCase();
    document.getElementById('pan3').value = x;
}
const transform4 = ()=> {
var e = document.getElementById('pan4').value;
var x = e.toUpperCase();
    document.getElementById('pan4').value = x;
}



  const addRow=()=> {
    let l1 = document.getElementById('l1');
    let l2 = document.getElementById('l2');
    let l3 = document.getElementById('l3');
    let l4 = document.getElementById('l4');     
    let count = document.getElementById('count').value || 0;
    count=parseInt(count);
        if(count<0){
          count=0;
        }
        if(count>=0){
          document.getElementById('remove').style.display='inline';
        }
        var exceed = document.getElementById('exceed').value;
        let inr = 0;
        if(exceed==='Yes'){
          // eslint-disable-next-line default-case
          switch(count){
            case 0: 
              l2.style.display='inline-table';
              l2.style.width="100%";
              // document.getElementById('file2').style.display="block";
              inr++;
              break;
            
            case 1:
              l3.style.display='inline-table';
              l3.style.width="100%";
              // document.getElementById('file3').style.display="block";
              inr++;
              break;

            case 2:
              l4.style.display='inline-table';
              l4.style.width="100%";
              // document.getElementById('file4').style.display="block";
              inr++;
              break;  
          }
        }

        count+=inr;
        document.getElementById('count').value=count;
  }

  const removeRow=()=>{
    let count = document.getElementById('count').value || 0;
    count=parseInt(count);
    if(count===1){
      document.getElementById('remove').style.display='none';
    }
    var exceed = document.getElementById('exceed').value;
    let l1 = document.getElementById('l1');
    let l2 = document.getElementById('l2');
    let l3 = document.getElementById('l3');
    let l4 = document.getElementById('l4');     
    let inr = 0;
        if(exceed==='Yes'){
          // eslint-disable-next-line default-case
          switch(count){
            case 1: 
              l2.style.display='none';
              // document.getElementById('file2').style.display="none";

              inr++;
              break;
            
            case 2:
              l3.style.display='none';
              // document.getElementById('file3').style.display="none";

              inr++;
              break;

            case 3:
              l4.style.display='none';
              // document.getElementById('file4').style.display="none";

              inr++;
              break;  
          }
        }

        count-=inr;
    
      document.getElementById('count').value=count;
  }

  const n1=()=>{
    document.getElementById('name1').style.borderColor='';
  }
  const n2=()=>{
    document.getElementById('name2').style.borderColor='';
  }
  const n4=()=>{
    document.getElementById('name4').style.borderColor='';
  }
  const n3=()=>{
    document.getElementById('name3').style.borderColor='';
  }
  const p1=()=>{
    document.getElementById('pan1').style.borderColor='';
  }
  const p2=()=>{
    document.getElementById('pan2').style.borderColor='';
  }
  const p3=()=>{
    document.getElementById('pan3').style.borderColor='';
  }
  const p4=()=>{
    document.getElementById('pan4').style.borderColor='';
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
        <AuthHeader  user={user} />

    {
       loading ? <Loader/> :
       <>
       
      {
        response===undefined ? <Loader/> : <>
        
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
                        <td>Rent Paid</td>
                        <td><input type="text" name="" id="arp" ref={arp} defaultValue={arp} onChange={Existing_Emp} onBlur={Exceed}  onKeyPress={onKeyPressEvent}  onKeyUp={living_metro} /></td>
                    </tr>
                    <tr>
                        <td>1. Rent Paid - 10% of Salary</td>
                        <td><input type="text" name="" id="tenOfSalary" ref={tenof} defaultValue={tenof} readOnly  /></td>
                    </tr>
                    <tr className='table_row_bg'>
                        <td>2. (i) 50% of (BP+DA) for those living in metro cities</td>
                        <td><input type="text" name=""  id="living_metro" readOnly ref={living_met} defaultValue={living_met} /></td>
                    </tr>
                    <tr>
                        <td> (ii) 40% of (BP+DA) for those living in non-metro cities</td>
                        <td className='chapt_in'><input type="text" name="" id="non_living_metro" readOnly ref={non_living_met} defaultValue={non_living_met} /></td>
                    </tr>
                    <tr className='table_row_bg'>
                        <td>3. Actual HRA Received1.Rent Paid - 10% of Salary</td>
                        <td><input type="text" name="" id="actual_hra" ref={actual_hra} readOnly defaultValue={actual_hra} /></td>
                    </tr>
                    <tr>
                        <td>HRA Exempt u/s 10 (13A)</td>
                        <td><input type="text" name="" ref={hra_exempt} readOnly id="hra_exemption" defaultValue={hra_exempt} /></td>
                    </tr>
                    <tr className='table_row_bg'>
                        <td>Do you live in Delhi, Mumbai, Kolkata or channai?</td>
                        <td> <select name="" onChange={living_metro} ref={metro_city}  defaultValue={metro_city} id="list">
                            <option value="Select--">Select--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select> </td>
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
                        <td>Rent Paid</td>
                        <td><input type="text" name=""  id="rp" onChange={newEmp} onKeyUp={Exceed} onBlur={living_metro2} ref={arp2} defaultValue={arp2} /></td>
                    </tr>
                    <tr>
                        <td>1. Rent Paid - 10% of Salary</td>
                        <td><input type="text" name="" id="tenOfSalary2" readOnly  ref={tenof2} defaultValue={tenof2} /></td>
                    </tr>
                    <tr className='table_row_bg'>
                        <td>2. (i) 50% of (BP+DA) for those living in metro cities</td>
                        <td><input type="text" name="" id="living_metro2" ref={living_met2} readOnly defaultValue={living_met2} /></td>
                    </tr>
                    <tr>
                        <td> (ii) 40% of (BP+DA) for those living in non-metro cities</td>
                        <td className='chapt_in'><input type="text" name="" id="non_living_metro2" ref={non_living_met2} defaultValue={non_living_met2} readOnly /></td>
                    </tr>
                    <tr className='table_row_bg'>
                        <td>3. Actual HRA Received Rent Paid - 10% of Salary</td>
                        <td><input type="text" name=""  id="actual_hra2" readOnly ref={actual_hra2} defaultValue={actual_hra2} /></td>
                    </tr>
                    <tr>
                        <td>HRA Exempt u/s 10 (13A)</td>
                        <td><input type="text" name="" id="hra_exemption2" readOnly ref={hra_exempt2} defaultValue={hra_exempt2} /></td>
                    </tr>
                    <tr className='table_row_bg'>
                        <td>Do you live in Delhi, Mumbai, Kolkata or channai?</td>
                        <td> <select name=""  onChange={living_metro2} ref={metro_city2} defaultValue={metro_city2}  id="list2">
                            <option value="Select--">Select--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select> </td>
                    </tr>


                </table>
            </div>
        </div>

<div className="one_lk">
        <table className=''>
            <tr className='table_bg'>
                <th>Whether aggregate rent payment exceeds rupees one lakh</th>
                <td><select name="" ref={rent_pay} id="exceed" defaultValue={rent_pay} >
                    <option value="No" selected>No</option>
                    <option value="Yes">Yes</option>
                    </select></td>
            </tr>

            
        </table>


    </div>

    <div className="landlord"  >
      <div id="ins">
    <span>Please fill the landord(s) details :</span>
    <select name=""   ref={nol} defaultValue={nol}  id="nol" style={{display:"none"}}>
    <option value="">Select--</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
  </div>
    <table>

        <tr  className='table_row_bg' id="l1" style={{display:"none"}} >
            <td>PAN of Landord 1 <span id="sign1"></span></td>
            <td><input type="text" name="" ref={pan1} onFocus={p1} id='pan1' placeholder="XXXXX1234X" onKeyUp={panValidation1} onChange={transform} defaultValue={pan1} /></td>
            <td>Name of Landord 1</td>
            <td><input type="text" name="" id="name1" ref={name1}  onFocus={n1} defaultValue={name1} /></td>
        </tr>
        <tr id='l2' style={{display:"none"}}>
            <td>PAN of Landord 2</td>
            <td><input type="text" name="" onFocus={p2} ref={pan2} id='pan2' placeholder="XXXXX1234X" onKeyUp={panValidation2} onChange={transform2} defaultValue={pan2} /></td>
            <td>Name of Landord 2</td>
            <td><input type="text" name=""onFocus={n2} id="name2" ref={name2} defaultValue={name2} /></td>
        </tr>
        <tr className='table_row_bg' id='l3' style={{display:"none"}}>
            <td>PAN of Landord 3</td>
            <td><input type="text" name="" ref={pan3} id='pan3' placeholder="XXXXX1234X"  onFocus={p3} onKeyUp={panValidation3} onChange={transform3} defaultValue={pan3} /></td>
            <td>Name of Landord 3</td>
            <td><input type="text" name=""  onFocus={n3}  id="name3" ref={name3} defaultValue={name3} /></td>
        </tr>
        <tr  id="l4" style={{display:"none"}}>
            <td>PAN of Landord 4</td>
            <td><input type="text" name=""ref={pan4} id='pan4' placeholder="XXXXX1234X"  onFocus={p4} onKeyUp={panValidation4} onChange={transform4} defaultValue={pan4} /></td>
            <td>Name of Landord 4</td>
            <td><input type="text" name="" id="name4" ref={name4} defaultValue={name4} onFocus={n4}  /></td>
        </tr>
    </table>

    <div id="addrow" style={{display:'none'}}>
      
 <button className=" " id='add' onClick={addRow}>Add Row </button>
<button className=" " style={{display:'none'}} id="remove"  onClick={removeRow}>Remove <i class="fa fa-trash" aria-hidden="true"></i></button>


    </div>
    </div>

    <div className="landlord_note">
        <hr />

        <span>Note:</span>
        <ol>
            <li>PAN of landlord(s) is/are must if aggregate rent payment exceeds rupees one lakh.</li>
            <li>Notary Rent Aggrement is must to avail HRA Exemption .</li>
            <li>You cannot claim HRA exemption benefit if the House Property loan taken for the same city.</li>
            <li> In new tax regime, the HRA exemption is not eligible.</li>
        </ol>
    </div>
<p className="d-none"><input type="text" id="count" ref={count}  /></p>


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

export default Hra