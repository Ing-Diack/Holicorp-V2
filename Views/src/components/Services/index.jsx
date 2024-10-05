import React from 'react'

function Services() {
  return (
    <section id="services" className="services">
    <div className="container">

      <div className="section-title">
        <h2>NOS SERVICES</h2>
      </div>

      <div className="row">
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box">
            <div className="icon"><i className="bx bxl-dribbble"></i></div>
            <h4 className="title"> Incubateurs virtuel</h4>
            <p className="description">
              Un incubateur virtuel de start-up peut 
              fournir aux entrepreneurs les ressources
               dont ils ont besoin pour faire décoller leur entreprise.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-file"></i></div>
            <h4 className="title"><a href=""> Programme d'Incubation</a></h4>
            <p className="description">
             Le programme d'incubation est une initiative qui 
             a pour objectif le renforcement et l'accélération 
             du processus de création d'entreprises innovantes 
             ou à haute valeur ajoutée .</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-tachometer"></i></div>
            <h4 className="title"><a href="#">Mise en relations entrepreneuriale</a></h4>
            <p className="description"> le text manquant</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-world"></i></div>
            <h4 className="title"><a href="">Labellisation</a></h4>
            <p className="description"> Le text manquant</p>
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}

export default Services
