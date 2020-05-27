import './App.css'
import React from 'react';
import {Link} from "react-router-dom";
var posts = [
    {
        title: 'Blog post #1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        published: '2 days a go',
        author: 'Royee Shemesh',
        image: 'https://via.placeholder.com/90',
        link: '/postOne'
    },
    {
        title: 'Blog post #2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        published: '2 days a go',
        author: 'Royee Shemesh',
        image: 'https://via.placeholder.com/90',
        link: '/postTwo'
    },
    {
        title: 'Blog post #3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        published: '2 days a go',
        author: 'Royee Shemesh',
        image: 'https://via.placeholder.com/90',
        link: '/postThree'
    },
    {
        title: 'Blog post #4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        published: '2 days a go',
        author: 'Royee Shemesh',
        image: 'https://via.placeholder.com/90',
        link: '/postFour'
    },
    {
        title: 'Blog post #5',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        published: '2 days a go',
        author: 'Royee Shemesh',
        image: 'https://via.placeholder.com/90',
        link: '/postFive'
    },
];

var Post = (props) => {
    return (
        <div className="blogPosts">
            <img width="90" height="90" className="image" src="props.image"/>
            <label className="post-title">
                <Link to={props.link}>{props.title}</Link>
            </label>
            <p className="post-content">
                {props.content}
            </p>
            <label className="post-footer">
                <p> Published {props.published} by {props.author}</p>
            </label>
        </div>
    );
}

var Posts = () =>{
    return posts.map((post)=>{
        return <Post
            title={post.title}
            content={post.content}
            published={post.published}
            author={post.author}
        />
    })
}
export default Posts;
export {posts, Post};