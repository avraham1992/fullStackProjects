import React from 'react';
import './App.css'
import Posts from "./posts";
var Newpost = () => {
    return (
        <div>
            <h1>create new post</h1>
            <input className="createpost" placeholder={"post title goes here.."}/>
            <br/>
            <input className="createpostbady" placeholder={"post content goes here.."}/>
            <br/>
            <button>save post</button>
        </div>
    )
}

export default Newpost