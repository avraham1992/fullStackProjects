import React from 'react';
import './App.css'
import axios from 'axios';

export default class Newpost extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            published: "",
            author: "",
            image: "",
            resp: false,
        };
    }

    changeTitle = (e)=>{
        this.setState({
            title: e.target.value
        })
    }
    changeContent = (e)=>{
        this.setState({
            content: e.target.value
        })
    }
    changePublished = (e)=>{
        this.setState({
            published: e.target.value
        })
    }
    changeAuthor = (e)=>{
        this.setState({
            author: e.target.value
        })
    }
    changeImage = (e)=>{
        this.setState({
            image: e.target.value
        })
    }


    handleNewPost = ()=>{
        var data={
            title: this.state.title,
            content: this.state.content,
            published: this.state.published,
            author: this.state.author,
            image: this.state.image,
        }
        console.log(data);
        const url = "/posts";
        axios.post(url, data)
            .then((res) => {
                if (res.status === 200) {
                    this.setState({
                        response: true,
                    })
                }
                console.log(res)
                this.props.history.push("/")
            })
            .catch((err) => {
                console.log("from Newpost.js line 64:");
                console.log(err);
            })
    }


    render() {
        return (
            <div>
                <h1>create new post</h1>
                <input
                    name="title"
                    className="createpost"
                    onChange={this.changeTitle}
                    placeholder={"post title goes here.."}/>
                <br/>
                <input
                    name="content"
                    className="content"
                    onChange={this.changeContent}
                    placeholder={"post content goes here.."}/>
                <br/>
                <input
                    name="publised"
                    className=""
                    onChange={this.changePublished}
                    placeholder={"post published by ?"}/>
                <br/>
                <input name="author"
                       className=""
                       onChange={this.changeAuthor}
                       placeholder={"published identity "}/>
                <br/>
                <input name="image"
                       className=""
                       onChange={this.changeImage}
                       placeholder={"image here "}/>
                <button onClick={this.handleNewPost}>save post</button>
            </div>
        )
    }

}
