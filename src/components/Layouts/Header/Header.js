import React from 'react';
import {Link} from "react-router-dom"

function Header() {
  return (
    <>
    
    <header>
      <Link to={'/'}>
      <div className="logo">
        <img src="https://res.cloudinary.com/dhtlzxed4/image/upload/v1691233087/Aliah_University_Logo_ytk0g6.png" alt="Aliah University Logo" />
        <span><Link to={'/'}> <img src="https://res.cloudinary.com/djfgnq8uw/image/upload/v1702645845/asyobzunqv1ehqschapm.png" alt="Aliah university text" /> </Link></span>
      </div>
      </Link>
      <div className="links">
        <div className="income_tax_c">Office of the Finance Officer</div>
        
      </div>
    </header>
    
    
    </>
  )
}

export default Header