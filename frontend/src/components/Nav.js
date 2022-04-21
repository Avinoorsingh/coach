import React from "react";
import { Link } from "react-router-dom";

const Nav=()=>{
    return(
        <div>
           <ul className="nav-ul" style={{padding:"5px",margin:0,backgroundColor:"lightgreen"}}>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/login">Account</Link></li>
           </ul>
        </div>
    )
}

export default Nav;