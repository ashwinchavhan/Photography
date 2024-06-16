

import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {


    return(
      <header class="container">
      <div class="page-header">
        <div class="logo">
          <a href="#"> R-Tist Studios</a>
    
        </div>
       
    
    
            
             <ul>
            
            <li>
                     <Link to="/" className="active" style={{ "--navAni": 1 }}>
                       Home
                    </Link>
                  </li>
                
                  <li>
                     <Link to="/Gallery" style={{ "--navAni": 2 }}>
                       Gallery
                     </Link>
                   </li>
                   <li>
                     <Link to="/portfolio" style={{ "--navAni": 3 }}>
                       Portfolio
                    </Link>
                  </li>

                  <li>
                  <Link to="/Service" style={{ "--navAni": 4 }}>
                  Services
                  </Link>
                 </li>
              
                  <li>
                    <Link to="/Contact" style={{ "--navAni": 5 }}>
                       Contact
                     </Link>
                   </li>
                </ul>    
    
      </div>
    
      </header>)}
      export default Navbar
    

    //   https://codepen.io/Sharat-Sahoo/pen/qBwmNpj
    // https://codepen.io/mobalti/pen/ExGBdpd