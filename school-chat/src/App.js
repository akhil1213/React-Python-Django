import React from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './components/Feed';
import Signup from './components/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
function App() {
  return ( 
    <Router>
      <div className="App">
        <Nav/>
        <Route path="/" exact component={Feed}/>
        <Route path="/signup" component={Signup}/>
      </div>
    </Router>
  );//use exact /signup doesnt bring along feed component
}


export default App;
