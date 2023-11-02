import React from 'react'
import AuthHeader from '../../Layouts/Header/AuthHeader'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import FormContainer from '../../Layouts/FormContainer/FormContainer'
import Loader from '../../Layouts/Loader/Loader';
import { useSelector } from 'react-redux';
function Dashboard() {
  const {user, loading, message, error} = useSelector(state=>state.user);
  return (
    <>
    
   {
    loading ? <Loader/> :
    <>

<Sidebar>
  <AuthHeader  />

  <FormContainer/>


  </Sidebar>
    </>
   }
  
    
    
    </>
  )
}

export default Dashboard