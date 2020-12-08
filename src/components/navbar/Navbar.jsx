import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className='nav'>
            <div class="nav-wrapper">
           
              <ul id="nav-mobile" class="right hide-on-med-and-down">
               
                <li><a href="#">Login in</a></li>
                <li><a >About</a></li>
                
              </ul>
            </div>
          </nav>
                
        );
    }
}

export default Navbar;
