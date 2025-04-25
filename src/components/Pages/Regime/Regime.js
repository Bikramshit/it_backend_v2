import React, { useEffect } from 'react'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import AuthHeader from '../../Layouts/Header/AuthHeader'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { GetSingleResponse, RegimeHandler } from '../../../Redux/Actions/ResponseAction';
import Loader from '../../Layouts/Loader/Loader';
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
    "title":"Feeback",
     "value":"feedback",
    "disable":false
  },
  {
    "title":"Preview",
     "value":"preview",
    "disable":false
  },
  
]


function Regime() {
  const {loading, response} = useSelector(state=>state.response);
  const {user} = useSelector(state=>state.user)
  // const {user, loading, message, error} = useSelector(state=>state.user);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(GetSingleResponse(params.id))
   }, [dispatch, params.id]);


  const HandlerSubmit =async(currentState)=>{
    const id = params.id;
    const res = await dispatch(RegimeHandler(id, currentState));
    return res;
  }

   const PreviousHandler = async()=>{
    const res = await HandlerSubmit("it");
    if(res===true){
      navigate(`/it/${params.id}`)
    }
   }

   const NextHandler = async()=>{
    const res = await HandlerSubmit("feedback");
    if(res===true){
      navigate(`/feedback/${params.id}`)
    }
   }

   const SelectHandler = async(e)=>{
    console.log(e);
    const res = await HandlerSubmit(e);
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
  return (
   <>
   
    {
      loading ? <Loader/> : <> 
         <Sidebar>
        <AuthHeader  />

        <div className="salary">
          <div className="regime">
            <div className="regime_child">
            <h6>Old Tax Regime</h6>
              <span>As per budget 2019</span>
              <p>For <b>individual</b> </p>

              <table>
                <tr className='table_bg'>
                  <th className='tr'>Income Tax Slab</th>
                  <th className='tr'>For Individual Below the Age of 60 Years</th>
                </tr>
                <tr>
                  <td>0 to 2,50,000</td>
                  <td>Nill</td>
                </tr>
                <tr className='table_row_bg'> 
                  <td>2,50,000 to 5,00,000</td>
                  <td>5% of total income exceeding 2,50,000</td>
                </tr>
                <tr>
                  <td>5,00,000 to 10,00,0000</td>
                  <td>12,500 + 20% of total income exceeding 5,00,000</td>
                </tr>
                <tr className='table_row_bg'>
                  <td>Above 10,00,000</td>
                  <td>1,12,500 + 30% of total income exceeding 10,00,000</td>
                </tr>
              </table>

            <p>For Senior Citizen between the age of 60 years to 80 years old</p>
              <table>
                <tr className='table_bg'>
                  <th className='tr'>Income Tax Slab</th>
                  <th className='tr'>Senior Citizens (between 60 years – 80 years)</th>
                </tr>
                <tr>
                  <td>Up to 3,00,000</td>
                  <td>Nil</td>
                </tr>
                <tr className='table_row_bg'>
                  <td>3,00,001 to 5,00,000</td>
                  <td>5% of income exceeding 3,00,0000</td>
                </tr>
                <tr>
                  <td>5,00,001 to 10,00,000</td>
                  <td>5,00,001 to 10,00,000</td>
                </tr>
                <tr className='table_row_bg'>
                  <td>Above 10,00,000</td>
                  <td>1,10,100 + 30% of total income exceeding 10,00,000</td>
                </tr>
              </table>
<p>For <b>Super Senior Citizens</b> above the age of 80 years
</p>
              <table>
                <tr  className='table_bg'>
                  <th className='tr'>Income Tax Slab</th>
                  <th className='tr'>Very Senior Citizens of and above 80 years of age</th>
                </tr>
                <tr>
                  <td>Up to 5,00,000</td>
                  <td>Nill</td>
                </tr>
                <tr className='table_row_bg'>
                  <td>5,00,001 to 10,00,000</td>
                  <td>20% of income exceeding 5,00,000</td>
                </tr>
                <tr>
                  <td>Above 10,00,000</td>
                  <td>1,00,000 + 30% total income exceeding 10,00,000</td>
                </tr>
              </table>
            </div>
            <div className="regime_child">
              <h6>New Tax Regime</h6>
              <span>As per budget 2024</span>
              <p>For both <b>individual</b> & <b>Sr. Citizen</b></p>
              <table>
                <tr className='table_bg'>
                  <th className='tr'>Income Tax Slab</th>
                  <th className='tr'>For both individual & Sr. Citizen</th>
                </tr>
                <tr>
                  <td>0 to 3,00,000</td>
                  <td>Nill</td>
                </tr>
                <tr className='table_row_bg'>
                  <td>Rs 3,00,000 to Rs 7,00,000</td>
                  <td>5% on income which exceeds Rs 3,00,000 </td>
                </tr>
                <tr>
                  <td>Rs 7,00,000 to Rs 10,00,000</td>
                  <td>Rs. 20,000 + 10% on income more than Rs 7,00,000</td>
                </tr>
                <tr className='table_row_bg'>
                  <td>Rs 10,00,000 to Rs 12,00,000</td>
                  <td>Rs. 50,000 + 15% on income more than Rs 10,00,000</td>
                </tr>
                <tr>
                  <td>Rs 12,00,000 to Rs 15,00,000</td>
                  <td>Rs. 80,000 + 20% on income more than Rs 12,00,000</td>
                </tr>
                <tr className='table_row_bg'>
                  <td>Above Rs 15,00,000</td>
                  <td>Rs. 1,40,000 + 30% on income more than Rs 15,00,000</td>
                </tr>
                
              </table>
            </div>
          </div>


          <div className="btns chapt_btn">
        <div className='nepr'>
        <button onClick={PreviousHandler} className='btn prev'>Back</button>
        <button onClick={NextHandler} className='btn next'>Next</button>
        </div>
        <select name="" id=""  onChange={e=>SelectHandler(e.target.value)} >
           {
            RouteList.map((list)=>(
              <option value={list.value} selected={list.value===response.currentState} disabled={list.disable}>{list.title}</option>
            ))
           }

        </select>
    </div>


        </div>


 </Sidebar>
      
      </>
    }
   
   
   
   </>
  )
}

export default Regime