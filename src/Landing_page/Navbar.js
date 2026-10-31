
import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav style={{backgroundColor:"#FFF"}}  className="navbar border-bottom navbar-expand-md ">
      <div className="container ">

    
        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/logo.svg"
            alt="Logo"
            style={{width:"25%"}} 
          />
        </Link>

       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      
        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >

          <form className="d-flex" role="search">
          
          <ul className="navbar-nav me-auto mb-2 mb-md-0">

            <li className="nav-item">
              <Link className="nav-link active" to="/SignUp">
                SignUp
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/About">
               About
              </Link>
            </li>
  <li className="nav-item">
              <Link className="nav-link active" to="/Product">
                Product
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link active" to="/Pricing">
                Pricing
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link active" to="/Support">
                Support
              </Link>
            </li>


          </ul>




          </form>

        </div>
      </div>
    </nav>
  );
}

