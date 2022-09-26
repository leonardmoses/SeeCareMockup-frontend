import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../styles/Navbar.scss"

const Navbar = () => {
    return ( 
        <nav className="Nav">
            <div className="Logo"></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/students">Fellowship Portal</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;