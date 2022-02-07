import React,{useRef} from 'react'
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
import Home from './Home';


import Footer from './Footer';

function Navbar() {
  const inputEl = useRef("")
  const getSearchterm =() =>{
   var val = inputEl.current.value;
  };
  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-black p-0">
            <div className="container">
                <a className="navbar-brand"><img className ="logosize" src ={logo} alt ="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav auto mb-2 mb-lg-0 text-white">
                    <i className="fa fa-bars mx-2" >Menu</i>    
                    </ul>
                    <form className="d-flex   navbar-nav auto mb-2 mb-lg-0">
                        <input className="form-group col-lg-12" ref = {inputEl}  type="search" placeholder="Search"  aria-label="Search"/>
                        <button className="btn btn-dark"  type="submit"><i className="fa fa-search me-1" onClick={getSearchterm}></i></button>
                    </form>
                    
                </div>
                <ul className="navbar-nav auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to ={{pathname :`/Sign`}}>  <button className="btn btn-dark" type="submit"><i className="fa fa-sign-in mx-2">Sign-in</i></button></Link>
                        </li>
                    </ul>
            </div>
        </nav>
        <Home/>
      <Footer></Footer>
    </div>
    
  )
}

export default Navbar;
