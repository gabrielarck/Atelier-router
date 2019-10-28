import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


function Header(){
    return (
    <ul className="Navbar">
        <li><Link to="/">Home</Link></li>
        <li>
        <Link to="/HtmlPage">Html</Link>
        </li>
        <li>
        <Link to="/CssPage">Css</Link>
        </li>
        <li>
        <Link to="/JsPage">Js</Link>
        </li>
    </ul>
    )}









export default Header;