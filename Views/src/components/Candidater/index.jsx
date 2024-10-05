import React from 'react';
import { Link } from 'react-router-dom';
import incubateurImage from "./../../assets/img/incubateur.png";
import usersImage from './../../assets/img/CEO.jpeg';

function SingUp() {
  return (
    <section id="portfolio" className="portfolio section-bg vh-100">
      <div className="container">

        <div className="section-title">
          <h2>CANDIDATURE</h2>

        </div>
        <div className="row portfolio-container">

          <div className="col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={usersImage} className=" w-100" alt="" height={250} />
              <div className="portfolio-info">
                <h4>Ceo</h4>

              </div>
              <div className="portfolio-links">
                <Link to="/candidature/ceo" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></Link>

              </div>
            </div>
          </div>

          <div className="col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={incubateurImage} className="w-100" alt="" height={250} />
              <div className="portfolio-info">
                <h4>Incubateur</h4>
              </div>
              <div className="portfolio-links">
                <Link to="/candidature/incubateur" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Incubateur"><i className="bx bx-plus"></i></Link>

              </div>
            </div>
          </div>


        </div>

      </div>
    </section>
  )
}

export default SingUp;
