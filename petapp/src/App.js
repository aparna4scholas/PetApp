import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar.js';
import Adopt from './components/Adopt.js';
import Volunteer from './components/Volunteer.js';
import Home from './components/Home.js';
import MyCart from './components/MyCart.js';


import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import { render } from 'react-dom';

class App extends Component {


  render() {
    return (  
     <Router>
      <div className="App">
       
          <Navbar />
          <Switch>
          <Route path="/Home"  component={Home} />  
          <Route path="/Adopt" component={Adopt} /> 
          <Route path="/Volunteer" component={Volunteer} /> 
          <Route path="/MyCart" component={MyCart} /> 
      
          </Switch>
        </div> 
      </Router>
      
    );
  }
}
  
  




export default App;