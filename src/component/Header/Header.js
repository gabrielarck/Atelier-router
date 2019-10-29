import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


function Header(){
    return (
    <ul className="Navbar">
        <li>
            <NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li>
            <NavLink activeClassName="active" to="/HtmlPage">Html</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" to="/CssPage">Css</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" to="/JsPage">Js</NavLink>
        </li>
    </ul>
    )}









export default Header;