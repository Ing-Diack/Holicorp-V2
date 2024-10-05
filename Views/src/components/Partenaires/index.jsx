import React from 'react'

function Partenaires() {
  return (
    <section id="services" className="services mt-5">
      <div className="container">

        <div className="section-title">
          <h2>NOS PARTENAIRES</h2>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title"> 10 000 Codeurs</h4>
              <p className="description">
                L'association 10000 Codeurs accompagne "en 3 étapes"
                jeunes sans emploi et adultes en reconversion vers les
                métiers du Numérique.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4 className="title"><a href=""> Frtn Technologie</a></h4>
              <p className="description">
                FRTN Technologies est un incubateur/accélérateur
                de Startups présent dans 40 pays et qui a aidé plus de
                5 000 entrepreneurs et porteurs de projets .</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4 className="title"><a href="#">Holilearn</a></h4>
              <p className="description">
                Le HUB de référence pour les innovateurs du
                nouveau monde, la dématérialisation sans limite.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4 className="title"><a href="">Esgic Hub</a></h4>
              <p className="description">
                Un HUB pour la réalisation des jeunes élites de ESGIC
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Partenaires;
