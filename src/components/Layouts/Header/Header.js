import React from 'react';
import {Link} from "react-router-dom"

function Header() {
  return (
    <>
    
    <header>
      <Link to={'/'}>
      <div className="logo">
        <img src="https://res.cloudinary.com/dhtlzxed4/image/upload/v1691233087/Aliah_University_Logo_ytk0g6.png" alt="" />
        <span><Link to={'/'}>Aliah University</Link></span>
      </div>
      </Link>
      <div className="links">
        <div className="income_tax_c">Income Tax Computation</div>
        
      </div>
    </header>
    
    
    </>
  )
}

export default Header