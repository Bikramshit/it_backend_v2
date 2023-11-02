import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../../Layouts/Sidebar/Sidebar';
import AuthHeader from '../../../Layouts/Header/AuthHeader';
import Loader from '../../../Layouts/Loader/Loader';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../../../Redux/Actions/UserAction';
import {IoAddCircleOutline} from "react-icons/io5"
function User() {
  const {loading, users} = useSelector(state=>state.admin);
  const dispatch = useDispatch();
  useEffect(()=>{
       dispatch(getAllUsers());
   
   }, [dispatch]);
   const getDate =(yourDate)=> {
    yourDate = new Date(yourDate);
    const offset = yourDate.getTimezoneOffset();
    yourDate = new Date(yourDate.getTime() - (offset*60*1000))
    return yourDate.toISOString().split('T')[0]
  }
  console.log(users);
  return (
   <>
   
   <Sidebar>
      <AuthHeader />
        {
          loading ? <Loader/> :
          <>
          
          <div className="create_section">
            <span></span>
            <Link to={'/user/new'}>            
            <button>Create <span><IoAddCircleOutline/></span></button>
            </Link>


          </div>
       {
        users===undefined ? <Loader/> :    <div className='it_container' style={{marginTop:"1rem"}}>

        <h6>All Users</h6>
    
        <div className="table_div">
        <table id='response'>
          <tr className='table_bg'>
            <th>Sl. No</th>
            <th>Name</th>
            <th>Department</th>
            <th>PAN</th>
            <th>Aadhaar</th>
            <th>Email</th>
            <th>Mobile No</th>

          </tr>
          {
            users.map((user, index)=>(
              <tr className={(index+1)%2===0 ? 'table_row_bg' : ''}>
                <td><Link to={`/user/${user._id}`}> {index+1} </Link></td>
                <td><Link to={`/user/${user._id}`}> {user.name} </Link></td>
                <td><Link to={`/user/${user._id}`}> {user.department} </Link></td>
                <td><Link to={`/user/${user._id}`}> {user.pan} </Link></td>
                {/* <td><Link to={`/user/${user._id}`}> {getDate(response.createdAt)} </Link></td> */}
                <td><Link to={`/user/${user._id}`}> {user.aadhaar} </Link></td>
                <td><Link to={`/user/${user._id}`}> {user.email} </Link></td>
                <td><Link to={`/user/${user._id}`}> {user.phone} </Link></td>
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

export default User