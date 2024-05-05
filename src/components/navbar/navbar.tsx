import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const logo = ("../../app/images/logo/lil-bits.svg");
  return (
    <nav className="nav">
      <Link 
        to="/" 
        className="site-title"
      >
        <svg>
          <img src={logo} alt="Image" />
        </svg>
        
      </Link>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/food">Food</Link></li>
        <li><Link to="/drink">Drinks</Link></li>
        <li><Link to="/date">Date</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
