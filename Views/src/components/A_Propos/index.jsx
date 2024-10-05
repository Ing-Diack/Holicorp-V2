import React from 'react';
import about from './../../assets/img/about.jpeg';

function A_propos() {
  return (
    <section id="about" className="about">
    <div className="container">

      <div className="section-title">
        <h2>A PROPOS</h2>
        <p>Créé en 2022, HoliHub se veut être la plateforme de
           référence des incubateurs d'Afrique et du monde.
            Il met à la disposition de toutes organisations voulant
             dématérialiser son incubateur, tout en offrant à la base
              un espace de formation, de travail et démarrage pour les
               entrepreneurs. Conçu pour faciliter l'action, la promotion 
               et l'intelligence collective, il offre tout l'écosystème 
               nécessaire afin de mener à leur réalisation les diverses 
               idées d’affaires liées au développement et à la vulgarisation de 
               l'entrepreneuriat. </p>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <img src={about} className="img-fluid" alt=""/>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 content">
          <div className="skills-content">

            <div className="progress">
              <span className="skill">INCUBATEURS VIRTUEL <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{width:'100%'}}  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">PROGRAMME D'INCUBATION <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{width:'90%'}} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">MISE EN RELATIONS ENTREPRENEURIALE <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{width:'75%'}}  role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CLOUD MEET WORD <i className="val">55%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{width:'55%'}}  role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  </section>

  )
}

export default A_propos;
