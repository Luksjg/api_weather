import React from 'react';
import Logo from '../logo.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className='nav'>
      <img src={Logo} alt="Logo" id='logo'/>
      <span id='titulo'> Homework weather app </span>
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;
