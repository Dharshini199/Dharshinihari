import React from'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return(
       <nav>
            <ul className="navbar">
                <li className="element">
                    <Link to="/home"> Home</Link></li>
                    <li className="element">
                         <Link to="/About">About</Link></li>
                    <li className="element">
                         <Link to="/Services">Services</Link></li>
                    <li className="element">
                         <Link to="/Contacts">Contacts</Link></li>
                         <li className="element">
                         <Link to="/todos">todos</Link></li>
            </ul>
       </nav>
    )
}
export default Navbar;