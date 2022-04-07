import { Link } from 'react-router-dom';

import React from 'react';

import Logo from '../Logo/Logo';

import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <ul className='navbar'>
            <Link to='/' className='Link'><Logo /></Link>
            <Link to='/' className='Link'>Home</Link>
            <Link to='/about' className='Link'>About</Link>
            <Link to='/about' className='Link'>Contact</Link>
            <Link to='/detail/:id' className='Link'>Granos</Link>
            <Link to='/about' className='Link'>Frutos Secos</Link>
            <Link to='/about' className='Link'>Mieles</Link>
        </ul>
    </nav>
  )
}

export default NavBar;
