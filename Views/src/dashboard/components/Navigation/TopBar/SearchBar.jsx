import React, { useState } from 'react';
import './searchBar.css';
import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SearchBar() {
  const [open, setOpen] = useState(false);
  return (

    <div className='Header' id='Header'>
      <ul className='nav__list'>
        <li>
          <Link className='nav__link' to="">Tableau Bord</Link>
        </li>
        <li>
          <Link className='dropdown__item' to="">
            WorkSpace
            <ul className='nav__link'>
              <li> <Link to="">parcours</Link> </li>
              <li>  <Link to="">parcours</Link> </li>
              <li>  <Link to="">parcours</Link> </li>

            </ul>
          </Link>
        </li>
      </ul>

    </div>
  )
}

export default SearchBar
