import './App.css'
import React from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';


export default class Posts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            response: false,
        };
    }

    componentDidMount() {
        const url = "/posts";
        console.log("in componentDidMount()")
        axios.get(url)
            .then((res) => {
                if (res.status === 200) {
                    this.setState({
                        data: res.data,
                        response: true,
                    })
                }
                console.log(res.data)
            })
            .catch((err) => {
                console.log("from posts.js line 34:");
                console.log(err);
            })
    }
    render() {
        const {data, response} = this.state;
        return(
            <div>
            {response &&
                data.map((post)=>{
                    return <Post
                         title={post.title}
                         content={post.content}
                         published={post.published}
                         author={post.author}
                         id={post.id}
                         image={post.image}
                />
            })}
                {!response &&
                    <div>
                    <h1>Loading</h1>
                    </div>
                }
            </div>
        )
    }
}
var Post = (props) => {
    return (
        <div className="blogPosts">
            <img width="90" height="90" className="image" src={props.image}/>
            <label className="post-title">
                <Link to={location =>`post/${props.id}`}>{props.title}</Link>
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
