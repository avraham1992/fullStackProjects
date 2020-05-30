import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Section from './MainSection.js';
import SinglePost from './SinglePost';
import {
    BrowserRouter,
    Switch,
    useParams,
    Route} from 'react-router-dom';
import Aboutme from "./Aboutme";
import Newpost from "./Newpost";
import {Post, posts} from "./posts";

function App() {
  return (
      <BrowserRouter>
        <Header/>

          <Switch>
              <Route path="/about" component={Aboutme}/>
              <Route path="/home" component={Home}/>
              <Route path="/newPost" component={Newpost}/>
              <Route path="/post/:id" component={SinglePost}/>
              <Route path="/" component={Home}/>
          </Switch>
      </BrowserRouter>
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

export default App;