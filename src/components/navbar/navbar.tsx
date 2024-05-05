import LogoSVG from '@/app/images/logo/logo';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link
        to="/"
        className="site-title"
      >
        <LogoSVG />
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
