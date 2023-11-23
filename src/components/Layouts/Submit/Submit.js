import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { GetSingleResponse } from '../../../Redux/Actions/ResponseAction';
import { Link } from 'react-router-dom';
import AuthHeader from '../../Layouts/Header/AuthHeader'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
function Submit() {

  const {loading, response} = useSelector(state=>state.response)
  const disptach = useDispatch();
  const params = useParams();
  useEffect(()=>{
    console.log(params.id);
    disptach(GetSingleResponse(params.id));
  }, [disptach]);

  console.log(response);
  return (
    <>
    
 {
    loading ? <Loader/> : <>

      {
        response===undefined ? <Loader/> : <>

<Sidebar>
  <AuthHeader  />
          {
            response.submitStatus==="Yes" ? <>

            
<div className="sub_container">
   Your Form is already submitted. <br /> You can check status in history section <br />

            
    </div>



            </> : "Page Not Found"
          }
          </Sidebar>

        </>
      }


    </>
 }
    
    </>
  )
}

export default Submit