import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Layouts/Sidebar/Sidebar'
import AuthHeader from '../../../Layouts/Header/AuthHeader'
import { useDispatch, useSelector } from 'react-redux';
import { getAllForm } from '../../../../Redux/Actions/FormAction';
import Loader from '../../../Layouts/Loader/Loader';
import { Link } from 'react-router-dom';

function AllForm() {
    const {loading, forms} = useSelector(state=>state.form);
    const dispatch = useDispatch();
    const [fy, setFy] = useState('');

    useEffect(()=>{
      dispatch(getAllForm());
    }, [dispatch]);


  return (
    <>
    <Sidebar>
        <AuthHeader/>

        {
            loading ? <Loader/> : <> 
        <div className="it_container">

        <div className="extra_m">
            <label htmlFor="">
                Select Financial Year
            </label>
        <select name="" id="" onChange={e=>setFy(e.target.value)}>

            <option value="" >Select--</option>
            {
                forms.map((form, i)=> 
                
                <option value={form._id} key={i}>{form.financial_year}</option>
                
                )
            }
        </select>
        <Link to={`/extra-months/${fy}`}>Continue</Link>
    </div>
    </div>
            
            
            </>
        }
        

    </Sidebar>
    
    
    </>
  )
}

export default AllForm