import React from 'react';
import { Link } from 'react-router-dom';


function Navbar () {
    const navStyle = {
        color: 'white'
    };

return(

  
  <nav>
   <h1 font="bold">  Shelter </h1>
   <ul className="navbar_link">
       <Link style={navStyle} to='/Home'>
       <li> Home</li>
       </Link>
       <Link  style={navStyle} to='/Adopt'>
       <li> Adopt</li>
       </Link>
       <Link style={navStyle} to='Volunteer'>
       <li> Volunteer</li>
       </Link >
       <Link style={navStyle} to='MyCart'>
       <li> MyCart</li>
       </Link >
        </ul>
</nav>
 

)
}

export default Navbar;