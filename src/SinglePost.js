import React from 'react';
import {Link, useParams} from "react-router-dom";
import {posts} from './posts';

var SinglePost = () => {
    var {id} = useParams();
    return (
        <div className="blogPosts">
            <img width="90" height="90" className="image" src={posts[id-1].image}/>
            <label className="post-title">
               <h1>{posts[id-1].title}</h1>
            </label>
            <p className="post-content">
                {posts[id-1].content}
            </p>
            <label className="post-footer">
                <p> Published {posts[id-1].published} by {posts[id-1].author}</p>
            </label>
        </div>
    );
}

export default SinglePost;