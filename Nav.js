import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import Features from './Features';
import Home from './home';
function Nav (){
   return(
    <nav className="navbar">
        <Link to="/features" >< Features /></Link>
        <Link to="/contact" >  < Contact /></Link>
        <Link to="/" >  < Home /></Link>
    </nav>

   )

}
export default Nav ;