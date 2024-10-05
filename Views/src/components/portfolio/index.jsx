import React from 'react';
import slide1 from './../../assets/img/slide/slide-1.jpeg';
import slide2 from './../../assets/img/slide/slide-2.jpeg';
import slide3 from './../../assets/img/slide/slide-3.jpeg';

function Portfolio() {
  return (
    <section id='hero'>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">

      <div className="carousel-item active" style={{backgroundImage:`url(${slide1})`}}>
        <div className="carousel-container">
        <div className="carousel-content">
          <h2 className="animate__animated animate__fadeInDown">Bienvenue sur<span>HoliHub</span></h2>
          <p className="animate__animated animate__fadeInUp">   
            HoliHub votre portail de l'entrepreneuriat.</p>
          <a href="#about" className="nav-link btn-get-started animate__animated animate__fadeInUp scrollto">Commencer</a>
          </div>
      </div>
      </div>
      <div className="carousel-item" style={{backgroundImage:`url(${slide2})`}}>
        <div className="carousel-container">
              <div className="carousel-content">   
                 <h2 className="animate__animated animate__fadeInDown">Entrepreneur du monde</h2>
                <p className="animate__animated animate__fadeInUp"> Intégré la communauté d'entrepreneur de votre Pays et du Monde.</p>
                <a href="#about" className="nav-link btn-get-started animate__animated animate__fadeInUp scrollto">Commencer</a>
              </div>
            </div>
      </div>
      <div className="carousel-item" style={{backgroundImage:`url(${slide3})`}}>
        <div className="carousel-container">
        <div className="carousel-content">
          <h2 className="animate__animated animate__fadeInDown">
            La mondialisation de vos produits</h2>
          <p className="animate__animated animate__fadeInUp">
            Faite voir votre produit dans le monde entier en intégrant la plus grande communauté d’entrepreneur.</p>
          <a href="#about" className="nav-link btn-get-started animate__animated animate__fadeInUp scrollto">Commencer</a>
        </div>
      </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true">
      <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
      </span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true">
      <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
      </span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </section>
   
      );
  }
export default Portfolio;
