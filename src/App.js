import React, {Suspense, lazy, useEffect} from 'react';
import './App.css';
import {Routes, Route, Router} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { loadUser } from './Redux/Actions/UserAction';
import {toast, Toaster} from "react-hot-toast";
import {ProtectedRoute} from "protected-route-react"
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Login/Register';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Chapter from './components/Pages/Chapter/Chapter';
import Feedback from './components/Pages/Feedback/Feedback';
import Form12B from './components/Pages/Form12B/Form12B';
import IT from './components/Pages/IT/IT';
import Letter from './components/Pages/Letter/Letter';
import Pension from './components/Pages/Pension/Pension';
import Preview from './components/Pages/Preview/Preview';
import Regime from './components/Pages/Regime/Regime';
import Response from './components/Pages/Response/Responses';
import ResponseDetails from './components/Pages/Response/ResponseDetails';
import Salary from './components/Pages/Salary/Salary';
import CreateForm from './components/Pages/Admin/Form/CreateForm';
import UpdateForm from './components/Pages/Admin/Form/UpdateForm';
import Loader from './components/Layouts/Loader/Loader';
import Hra from './components/Pages/hra/hra';
import Profile from './components/Pages/Profile/Profile';
// import UpdateProfile from './components/Pages/Profile/UpdateProfile';
// import UpdateUser from './components/Pages/Admin/User/UpdateUser';
import UpdateUser from "./components/Pages/Admin/User/UpdateUser"
import Forms from "./components/Pages/Admin/Form/Form"
import FormDetails from './components/Pages/Admin/Form/FormDetails';
import Pdf from './components/Layouts/Pdf/Pdf';
import CreateUser from './components/Pages/Admin/User/CreateUser';
import UserDetails from "./components/Pages/Admin/User/UserDetails";
// import UpdateUser from "./components/Pages/Admin/User/UpdateUser"
import Users from './components/Pages/Admin/User/Users';
import Submit from './components/Layouts/Submit/Submit';
import ChangePassword from './components/Pages/Profile/ChangePassword';
import Verify from './components/Pages/Login/Verify';
import Notification from './components/Pages/Admin/Notification/Notification';
import DocUpdate from './components/Pages/DocumentUpdate/DocUpdate';
import Error from './components/Pages/Error/Error';
import ForgetPassword from './components/Pages/Login/ForgetPassword';
import FindAccount from './components/Pages/Login/FindAccount';
import AllForm from './components/Pages/Admin/ExtraMonth/AllForm';
import UpdateExtraMonth from './components/Pages/Admin/ExtraMonth/UpdateExtraMonth';
import AllExtraMonths from './components/Pages/Admin/ExtraMonth/AllExtraMonths';

function App() {
  const {user, loading, message, error, isAuthenticated} = useSelector(state=>state.user);
  // console.log(user.role);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch]);
  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type:"clearError"})
    }
    if(message){
      toast.success(message);
      dispatch({type:"clearMessage"})
    }
  }, [dispatch, error, message]);



  return (
   <>

      {/* {
        loading ? <Loader/> :
        <>
        <React.Fragment>
  
      

  <Routes>

<Route path='/' element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect='/login' ><Dashboard/></ProtectedRoute>} />
<Route path='/dashboard' element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect='/login' ><Dashboard/></ProtectedRoute>} />
<Route path='form12b/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Form12B/></ProtectedRoute>} />
<Route path='/salary/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Salary/></ProtectedRoute>} />
<Route path='/it/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><IT/></ProtectedRoute>} />
<Route path='/pension/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Pension/></ProtectedRoute>} />
<Route path='/letter/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Letter/></ProtectedRoute>} />
<Route path='/preview/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Preview/></ProtectedRoute>} />
<Route path='/Regime/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Regime/></ProtectedRoute>} />
<Route path='/chapter/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Chapter/></ProtectedRoute>} />
<Route path='/feedback/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Feedback/></ProtectedRoute>} />
<Route path='/hra/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Hra/></ProtectedRoute>} />
<Route path='/responses/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Response/></ProtectedRoute>} />
<Route path='/profile' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Profile/></ProtectedRoute>} /> 
<Route path='/updateprofile' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><UpdateProfile/></ProtectedRoute>} /> 

      <Route path='/form/new' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><CreateForm/></ProtectedRoute>} />
      <Route path='/form/update/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><UpdateForm/></ProtectedRoute>} />
      <Route path='/forms' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Forms/></ProtectedRoute>} />

      <Route path='/login' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/"><Login/></ProtectedRoute>} />
 

     


</Routes>

<Toaster/>



</React.Fragment>
        </>
      } */}



{
      loading ? <Loader/> : <>

      
      
     {
      isAuthenticated ? <>

<Routes>             

        <Route path='/' element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect='/login' ><Dashboard/></ProtectedRoute>} />
<Route path='/dashboard' element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect='/login' ><Dashboard/></ProtectedRoute>} />
<Route path='/responses' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Response/></ProtectedRoute>} />
<Route path='/response/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><ResponseDetails/></ProtectedRoute>} />

<Route path='/profile' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Profile/></ProtectedRoute>} /> 
<Route path='/pdf/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Pdf/></ProtectedRoute>} /> 
 <Route path='changepassword' element={<ChangePassword/>} />  
       
 <Route path='/form12b/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Form12B/></ProtectedRoute>} />
<Route path='/salary/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Salary/></ProtectedRoute>} />
<Route path='/it/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><IT/></ProtectedRoute>} />
<Route path='/pension/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Pension/></ProtectedRoute>} />
<Route path='/letter/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Letter/></ProtectedRoute>} />
<Route path='/preview/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Preview/></ProtectedRoute>} />
<Route path='/Regime/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Regime/></ProtectedRoute>} />
<Route path='/chapter/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Chapter/></ProtectedRoute>} />
<Route path='/feedback/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Feedback/></ProtectedRoute>} />
<Route path='/hra/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Hra/></ProtectedRoute>} />
<Route path="/document/upload/:id" element={<DocUpdate/>} />

    
    {
      user.role==="user" ? <>
     
   

<Route path='/submitted/:id' element={<Submit/>} /> 
<Route path='/error' element={<Error/>} />
<Route path='/*' element={<ProtectedRoute redirect="/error"><Error/></ProtectedRoute>} />
    
   </> : <>

   <Route path='/update/user/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><UpdateUser/></ProtectedRoute>} /> 

      <Route path='/form/new' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><CreateForm/></ProtectedRoute>} />
      <Route path='/form/update/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><UpdateForm/></ProtectedRoute>} />
      <Route path='/forms' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><Forms/></ProtectedRoute>} />
      <Route path='form/:id' element={<FormDetails/>} />
      <Route path='/users' element={<Users/>} />
      <Route path='/user/new' element={<CreateUser/>} />
      <Route path='/user/update/:id' element={<UpdateUser/>}/>
      <Route path='/user/:id' element={<UserDetails/>} />
      <Route path='/notifications' element={<Notification/>} />
      <Route path='/extra-months' element={<ProtectedRoute isAuthenticated={isAuthenticated}><AllForm/></ProtectedRoute>} />
      <Route path='/extra-months/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated}><AllExtraMonths/></ProtectedRoute>} />
      <Route path='/extra-months/update/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated}><UpdateExtraMonth/></ProtectedRoute>} />
      <Route path='/error' element={<Error/>} />
{/* <Route path='/*' element={<ProtectedRoute redirect="/error"><Error/></ProtectedRoute>} /> */}
    
     </>
    }


</Routes>
      
      
       </> : <>

    

        <Routes>

        <Route path='/' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/"><Login/></ProtectedRoute>} />
        <Route path='/verify/:id' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/"><Verify/></ProtectedRoute>} />
        <Route path='/resetpassword/token/:id' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/"><ForgetPassword/></ProtectedRoute>} />
        <Route path='/forgot-password' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/"><FindAccount/></ProtectedRoute>} />
        <Route path='/error' element={<Error/>} />
        <Route path='/*' element={<ProtectedRoute redirect="/error"><Error/></ProtectedRoute>} />


        </Routes>
  
       
    
       
        </>
        
     }
   
 
     
    <Toaster/>
     
     </> 
  }


   </>
  );
}

export default App;
