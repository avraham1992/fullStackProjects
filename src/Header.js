import React from 'react';
import './App.css'
import Section from "./MainSection";

import Sidebar from "./Sidebar";
import {Post} from './posts';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
var Header = () => {
    return (
        <nav>
            <ul className="topnav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <span> | </span>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <span> | </span>
                <li>
                    <Link to="/newPost">New Post</Link>
                </li>
                <span> | </span>
                <li className="login">
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

function About() {
    return <h2>About</h2>;
}


export default Header