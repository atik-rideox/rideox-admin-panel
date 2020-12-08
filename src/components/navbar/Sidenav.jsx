import React, { Component } from 'react';
import './Sidenav.css'
import Navbarcomponent from '../navbarcomponent/Navbarcomponent'
import Navbartext from '../navbarcomponent/Navbartext'

class Sidenave extends Component {


  
    render() {
        return (
            <div className="Sidenav"> 
    
              <i className="large material-icons">account_circle</i>
                     
                      <h6>RideOX-Admin</h6>

                      <div className="Sidenav">
                      
                     <Navbarcomponent />
                     <Navbartext />


                    </div>
                    

          </div>
        );
    }
}

export default Sidenave;
