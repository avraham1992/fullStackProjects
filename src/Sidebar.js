import './App.css'
import React from 'react';

var Sidebar = () =>{
    return (
        <aside className="side-bar">
            <label className="title">Latest</label>
            <ul className="side-bar-list">
                <li>
                    <span>Blog Post #1 </span><a href="#">Here</a>
                </li>
                <li>
                    <span>Blog Post #2 </span><a href="#">Here</a>
                </li>
                <li>
                    <span>Blog Post #3 </span><a href="#">Here</a>
                </li>
            </ul>
            <hr/>
            <label className="title">Popular</label>
            <ul className="side-bar-list">
                <li>
                    <span>Blog Post #1 </span><a href="#">Here</a>
                </li>
                <li>
                    <span>Blog Post #2 </span><a href="#">Here</a>
                </li>
                <li>
                    <span>Blog Post #3 </span><a href="#">Here</a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar