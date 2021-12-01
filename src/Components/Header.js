import React from 'react';
import {Route , Link , Switch , BrowserRouter as Router} from 'react-router-dom';
import {
    Navbar
} from 'reactstrap';
import { FaCodepen} from "react-icons/fa"
import { SiHomeassistantcommunitystore } from 'react-icons/si'

 

function Header() {

    return (
   
        <Navbar
        color="secondary"
        expand="lg"
        fixed="top"              
    >
         {/* Left  */}

         <div className="d-flex flex-row">
           <span className="">
               <FaCodepen size='40px'  />
           </span>
           <Link to="/home" className="fs-3 text-decoration-none p-2  cursor-pointer" >Geeksynergy</Link>
         </div>

         {/* Right  */}

         <div  style={{"float" : "right"}} className="d-flex flex-row displaycontent" >
               
            <button type="button" className="btn p-2" >
               <Link to="/signup" className="text-decoration-none text-warning " >Sign-Up</Link>
             </button>      
            <button className="btn px-4">
               <Link to="/login" className="text-decoration-none text-warning">Login</Link>
            </button>
            <button className="btn btn-dark ">
               <Link to="/company-info" className="text-decoration-none">Company Info</Link>
            </button>

         </div>
                     
    </Navbar>
    )
}

export default Header
