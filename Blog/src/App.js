import React, { Component } from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Navbar from './components/Navbar';
import ArticlePage from './pages/ArticlePage';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Notfound from './pages/Notfound';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          
        <Navbar></Navbar>
        <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/articles" component={Articles} exact/>
        <Route path="/articles/:nom" component={ArticlePage} exact/>
        <Route component={Notfound}></Route>
        </Switch>
        
        </Router>
        
      </div>
    )
  }
}
