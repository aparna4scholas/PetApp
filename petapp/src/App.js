import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar.js';
import Breedpets from './components/Breedpets.js';
import Healthtips from './components/Healthtips.js';
import Home from './components/Home.js';


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
          <Route path="/Breedpets" component={Breedpets} /> 
          <Route path="/Healthtips" component={Healthtips} /> 
      
          </Switch>
        </div> 
      </Router>
      
    );
  }
}
  
  




export default App;