import React from 'react';
import './App.css'
var Header = () => {
    return (
        <header>
            <ul class="topnav">
                <li><a href="#"> Home</a></li>
                <li><a href="#"> About</a></li>
                <li><a  href="#"> Contact</a></li>
                <li className="login"><a href="#">Login</a></li>
            </ul>

        </header>
    )
}
export default Header