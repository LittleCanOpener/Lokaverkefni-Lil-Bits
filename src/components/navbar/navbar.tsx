import React from 'react';
import { Link } from 'react-router-dom';
import LogoSVG from '../logo/logo';

const Navbar = () => {
  return (
    <nav className='bg-[#3E6053] text-[#e2e299] font-serif'>
      <div className='flex flex-wrap items-center justify-center'>
        <Link
          className='p-4'
          to="/"
        >
          <span className='p-4'>
            <LogoSVG />
          </span>
        </Link>
        <div className='flex flex-wrap justify-between content-between'>
          <ul className="font-large text-4xl flex flex-row p-4">
            <li className='block py-2 px-3 rounded hover:bg-[#C16757] md:border-0 transition duration-200'>
              <Link to="/">Home</Link>
            </li>
            <li className='block py-2 px-3 rounded hover:bg-[#C16757] md:border-0 transition duration-200'>
              <Link to="/food">Food</Link>
            </li>
            <li className='block py-2 px-3 rounded hover:bg-[#C16757] md:border-0 transition duration-200'>
              <Link to="/drink">Drinks</Link>
            </li>
            <li className='block py-2 px-3 rounded hover:bg-[#C16757] md:border-0 transition duration-200'>
              <Link to="/date">Date</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
