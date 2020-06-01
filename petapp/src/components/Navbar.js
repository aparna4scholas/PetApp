import React from 'react';
import { Link } from 'react-router-dom';


function Navbar () {
    const navStyle = {
        color: 'white'
    };

return(

  
  <nav>
   <h1>  Shelter </h1>
   <ul className="navbar_link">
       <Link style={navStyle} to='/Home'>
       <li> Home</li>
       </Link>
       <Link  style={navStyle} to='/Breedpets'>
       <li> Breedpets</li>
       </Link>
       <Link style={navStyle} to='HealthTips'>
       <li> HealthTips</li>
       </Link >
        </ul>
</nav>
 

)
}

export default Navbar;