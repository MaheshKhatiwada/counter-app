import React, { Component } from 'react';

class NavBar extends Component {
  
  render() { 
    return ( 
      <nav class="navbar navbar-light bg-light">
       <a class="navbar-brand" href="#">Navbar
        <span className="badge badge-pill badge-secondary badge-sm m-2">{this.props.totalCounts}</span>
        </a>
      </nav>
     );
  }
}
 
export default NavBar;
