import React from 'react';
import './style.css';
import TitlePage from './TitlePage';
import { useParams } from 'react-router-dom';

function Profils() {
  return (
    <section id='main' className='main'>
      <TitlePage page="Profils" />
      <h1> je suis la partie Profils : </h1>
    </section>
  )
}

export default Profils;
