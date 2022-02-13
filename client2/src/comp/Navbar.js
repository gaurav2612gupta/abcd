import React from 'react';

import './index.css';
import './images/bg.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return <div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <a className="logo navbar-brand" href="/">EZPoll</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/create" className='navLinks'><li className="nav-link text-dark">Create a Poll</li></Link>
            <Link to="/how" className='navLinks'><li className="nav-link text-dark">How it Works</li></Link>
            <Link to="/about" className='navLinks'><li className="nav-link text-dark">About Us</li></Link>
          </ul>
        </div>
        <div class="d-flex justify-content-end signBox">
            <Link to="/signin" className='signLink mx-3'><div className="text-dark">Signin</div></Link>
            <Link to="/signup" className='signLink signUpLink mx-3'><div className="">Signup</div></Link>
          {/* <div class="signLink mx-3">Signin</div>
          <div class="signLink signUpLink mx-3">Signup</div> */}
        </div>
      </div>
    </nav>


  </div>;
}
