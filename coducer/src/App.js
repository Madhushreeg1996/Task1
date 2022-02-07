//import logo from './logo.svg';'
//import React,{useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Sign from './Component/LoginForm';
function App() {

  
 
  return (

    <div className="App">
    <Router>
      <Switch>
      <Route exact path ="/"  render={(props) =>(<Navbar {...props}/>)}/>
      <Route exact path ="/Sign"  render={(props) =>(<Sign {...props} />)}/>
      </Switch>
    </Router> 
   
    </div>
  );
}

export default App;
