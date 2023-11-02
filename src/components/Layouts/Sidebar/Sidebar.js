import React, { useRef, useState } from 'react'
import {FaFileAlt, FaUsers, FaGgCircle} from "react-icons/fa";
import {FiMenu} from "react-icons/fi";
import {BiSolidDashboard} from "react-icons/bi";
import {ImCalculator, ImHistory} from "react-icons/im";
import { NavLink } from 'react-router-dom';
import {AiFillSetting, AiOutlineCalculator}from "react-icons/ai";
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import {BsFillDatabaseFill} from "react-icons/bs"
import {MdNotificationsActive} from "react-icons/md"
const menuItem =[
    {
        path:"/",
        name:"Dashboard",
        icon:<BiSolidDashboard/>
    },
    // {
    //     path:"/calculator",
    //     name:"Calculator",
    //     icon:<AiOutlineCalculator/>
    // },
    {
        path:"/responses",
        name:"History",
        icon:<ImHistory/>
    },
    {
        path:"/setting",
        name:"Setting",
        icon:<AiFillSetting/>
    },
]
const menuItem2 =[
    {
        path:"/",
        name:"Dashboard",
        icon:<BiSolidDashboard/>
    },
    {
        path:"/forms",
        name:"Forms",
        icon:<FaFileAlt/>
    },
    
    {
        path:"/extra-months",
        name:"Extra Months",
        icon:<FaGgCircle/>
    },
    {
        path:"/users",
        name:"All Users",
        icon:<FaUsers/>
    },
    {
        path:"/notifications",
        name:"Notifications",
        icon:<MdNotificationsActive/>
    },
    {
        path:"/responses",
        name:"Responses",
        icon:<BsFillDatabaseFill/>
    },
    {
        path:"/setting",
        name:"Setting",
        icon:<AiFillSetting/>
    },
]

function Sidebar({children}) {

    const {loading, user} = useSelector(state=>state.user);
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);


  return (
    <>
    
    {
        loading ? <Loader/> :
        <>
   <div className="sidebar" style={{width: isOpen ? "200px" : windowSize.current[0]>"768" ? "60px" :"0" }} >
   
   <div className="top_section">
      
       <div style={{marginLeft: isOpen ? windowSize.current[0]>"768" ? "50px" :"0px" : "0px"}} className="bars">
           <FiMenu onClick={toggle} className='toggleicon'/>
       </div>
    
   </div>

{
user.role==="admin" ? <>
  <div className="dash_menu">
{
       menuItem2.map((item, index)=>(
           <NavLink to={item.path} key={index} className="nav_link" activeclassName="active">
               <div className="dash_icon" style={{display: isOpen ? "block" : windowSize.current[0]>"768" ? "block" : "none"}} >{item.icon}</div>
               <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
           </NavLink>
       ))
   }
</div>
</> : <>
<div className="dash_menu">
{
       menuItem.map((item, index)=>(
           <NavLink to={item.path} key={index} className="nav_link" activeclassName="active">
               <div className="dash_icon" style={{display: isOpen ? "block" : windowSize.current[0]>"768" ? "block" : "none"}} >{item.icon}</div>
               <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
           </NavLink>
       ))
   }
</div>

</>
}
</div>
<main style={{ marginLeft: isOpen===false ? windowSize.current[0]>"768" ? "60px" :"0" :'200px' }}>{children}</main>

        </>
    }

    </>
  )
}

export default Sidebar