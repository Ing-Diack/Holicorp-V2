import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  
  return (
    <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <h1 className="text-light"><a href="index.html"><span>Holihub</span></a></h1>
       <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">ACCUEIL</a></li>
          <li><a className="nav-link scrollto" href="#about">A PROPOS</a></li>
          <li><a className="nav-link scrollto" href="#services">SERVICES</a></li>
          <li><a className="nav-link scrollto" href="#portfolio">PORTFOLIO</a></li>
          <li><a className="nav-link scrollto" href="#team">TEAM</a></li>
          <li><Link className="nav-link scrollto" to="candidature">CANDIDATER</Link></li>
          <li><Link className="nav-link scrollto" to="connexion">CONNEXION</Link></li>
          <li><a className="nav-link scrollto" href="#contact">CONTACT</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  )
}

export default Header;
