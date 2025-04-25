import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../../../Layouts/Sidebar/Sidebar'
import AuthHeader from '../../../Layouts/Header/AuthHeader'
import Loader from '../../../Layouts/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllExtraByForm, deleteExtraMonths, getExtraMonthsByMonth } from '../../../../Redux/Actions/ExtraMonthAction';
import { useParams } from 'react-router-dom';
import {RiFileExcel2Fill, RiDeleteBin5Fill} from "react-icons/ri"
import Price from '../../../Layouts/Price/Price';
// import { useDownloadExcel} from "react-export-table-to-excel"
import { useDownloadExcel } from 'react-export-table-to-excel';
import {BsFillInfoCircleFill} from "react-icons/bs"
import { Link } from 'react-router-dom';
import ExportCSV from './ExtraMonthLayout';

const Months = ["January", "February",  "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function AllExtraMonths() {
  const {loading, ExtraMonths} = useSelector(state=>state.extramonth);
    const dispatch = useDispatch();
    const [month, setMonth] = useState("All Months");
    const [deletingId, setDeletingId] = useState(null)
    const params= useParams();
    useEffect(()=>{
      dispatch(GetAllExtraByForm(params.id));
    }, []);

    const MonthHandler = async(mon)=>{
      setMonth(mon);
      console.log("Month", mon);
      if(mon===""){
        dispatch(GetAllExtraByForm(params.id));
        return;
      }
      await dispatch(getExtraMonthsByMonth(params.id, mon));
    }
    
    const getDate =(yourDate)=> {
      if(yourDate===undefined) return;
      yourDate = new Date(yourDate);
      const offset = yourDate.getTimezoneOffset();
      yourDate = new Date(yourDate.getTime() - (offset*60*1000))
      return yourDate.toISOString().split('T')[0]
    }

    const tableRef = useRef(null);
    console.log(tableRef.current);
    const { onDownload } = useDownloadExcel({
     
        currentTableRef: tableRef.current,
        filename: `Extra Month ${month}`,
        sheet: 'Data'
    },
    console.log(ExtraMonths)
    )

    const DeleteHandler =async()=>{
     await dispatch(deleteExtraMonths(deletingId));
     await dispatch(GetAllExtraByForm(params.id));
      setMonth('');
    }
    const openModal =(id)=> { 
      setDeletingId(id);     
      const modal = document.getElementById("modal");
      modal.style.display = "block";
    }
    const closeModal =()=> {
      const modal = document.getElementById("modal");
      modal.style.display = "none";
    }
  let wscols = [];
   useEffect(()=>{
    if(ExtraMonths!==undefined){
       wscols = [
        {
          wch: Math.max(...ExtraMonths?.map((extramonth) => extramonth.Name.length))
        },
        { wch: Math.max(...ExtraMonths?.map((extramonth) => extramonth.Value.length)) },
        { wch: Math.max(...ExtraMonths?.map((extramonth) => extramonth.Month.length)) },
        { wch: Math.max(...ExtraMonths?.map((extramonth) => extramonth.createdAt.length)) },
       
      ];
    }
   },[dispatch]);

   const OriginalExtra =(extramonth)=>{
    if(extramonth===undefined || extramonth.length===0){
      return;
    }
    let result = [];
    for(let i=0; i<extramonth.length; i++){
      const temp = {
        id:i+1,
        Name:extramonth[i].user.name,
        Month: extramonth[i].month,
        Value: extramonth[i].value,
        
      }
      result.push(temp);
    }
    return result;
   }
  return (
    <>
     <Sidebar>
        <AuthHeader/>
        {
          loading ? <Loader/> : <> 
          <div className="salary">
            <div className="select_container">
              <div>
          <label htmlFor="">Select your month: </label>
          <select name="" id="" onChange={e=>MonthHandler(e.target.value)}>
            <option value="">All Months</option>
            {
              Months.map((mon, i)=>(
                <option value={mon} key={i} selected={mon===month}>{mon}</option>
              ))
            }
          </select>
          <div>
          </div>
          </div>
          <ExportCSV
            csvData={OriginalExtra(ExtraMonths)}
            fileName={`It Changes ${month}`}
            wscols={wscols}
          />
           
          </div>
          <table className='extra_table' ref={tableRef}>
            {
              (ExtraMonths && ExtraMonths.length!==0) && <tr>
              <th className='sl_no'>Sl. No</th>
              <th className='ext_name'>Name</th>
              {/* <th className='ext_name'>Department</th> */}
              <th>Value (Rs.)</th>
              <th>Months</th>
              <th>Added On</th>
              <th className='text-center'>View</th>
              <th className='text-center'>Delete</th>
            </tr>
            }
            {
              ExtraMonths && ExtraMonths.map((extramonth, i)=>(
                <tr className={i%2==0 ? 'tr_cl' : 'tr_cl2'}>
                  <td className='sl_no'>{i+1}</td>
                  <td className='ext_name'>{extramonth.user.name}</td>
                  {/* <td className='ext_name'>{extramonth.user.depertment}</td> */}
                  {/* <td> <Price number={extramonth.value} />/-</td> */}
                  <td>{extramonth.value}</td>
                  <td>{extramonth.month}</td>
                  <td>{getDate(extramonth.createdAt)}</td>
                  <td className='text-center'><Link to={`/response/${extramonth.responseId}`}><BsFillInfoCircleFill/></Link></td>
                  <td className='text-center operations'><button className='delt' onClick={()=>openModal(extramonth._id)}><RiDeleteBin5Fill/></button></td>


                </tr>
              ))
            }

          </table>

            {
              (!ExtraMonths || ExtraMonths.length===0) &&  <h4>No Data Found</h4> 
            }




          </div>

          <div id="modal" class="modal">
  <div class="modal-content">
    <h5 className='mt-2'>Deleting User</h5>
    <p className='mt-1'>Are you sure you want to the data of this user?</p>


    <div className="modal-footerr">
    <button onClick={closeModal} className='cancell'>No</button>
    <button className='createe' onClick={DeleteHandler} >Yes</button>
    </div>
  </div>
</div>
          </>

        }
    </Sidebar>
    
    </>
  )
}

export default AllExtraMonths