import React from 'react';
import { Link } from 'react-router-dom';
const URL = process.env.PUBLIC_URL;

function NavBar () {
    return(
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
          <Link className='navbar-brand' to={URL + '/'}>Charlie</Link>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse flex-row-reverse align-content-sm-center' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to={URL + '/'}>Home <span className='sr-only'>(current)</span></Link>
              </li>
              <li className='nav-item'>
                  <Link className='nav-link' to={URL + '/portfolio'}>Portfolio</Link>
                </li>
            </ul>
          </div>
        </nav>
      );
};
export default NavBar;