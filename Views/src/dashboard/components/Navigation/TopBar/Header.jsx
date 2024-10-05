import React from 'react';
import './header.css';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Nav from './Nav';


function Header() {

  return (
    <header id='Header' className='header fixed-top d-flex align-items-center justify-content-between'>
      {/* Logo */}
      <Logo />
      {/** search bar <SearchBar />*/}
      {/** {nav} */}
      <Nav />
    </header>
  )
}

export default Header;
