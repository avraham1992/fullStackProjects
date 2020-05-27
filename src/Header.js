import React from 'react';
import './App.css'
import Section from "./MainSection";
import Aboutme from "./Aboutme";
import Newpost from "./Newpost";
import Sidebar from "./Sidebar";
import {Post, posts} from './posts';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
var Header = () => {
    return (
        <Router>
            <div>
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

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <Aboutme />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/newPost">
                        <Newpost />
                    </Route>
                    <Route path="/login">
                        <Home />
                    </Route>
                    <Route path="/postOne">
                        <Post post={posts[0]} />
                    </Route>
                    <Route path="/postTwo">
                        <Post post={posts[1]} />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
    <div>
        <h2>Home</h2>;
        <Section/>
        <Sidebar/>
    </div>
    );
}

function About() {
    return <h2>About</h2>;
}


export default Header