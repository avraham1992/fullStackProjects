import React from 'react';
import Posts from './posts'
import './App.css'
var MainSection = () => {
    return (
        <section className="posts">
            <label className="title">This is my blog</label>
            <div id="posts-root" className="posts-list">
                <Posts/>
            </div>
        </section>
    )
}

export default MainSection