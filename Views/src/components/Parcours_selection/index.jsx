import React from 'react';
import infox_box from './../../assets/img/info-box.jpeg';

function Parcousr_Selection() {
  return (
    <section className="info-box py-0">
    <div className="container-fluid">

      <div className="row">

        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

          <div className="content">
            <h3><strong>Parcours de sélection</strong></h3>
            <p>
              Un parcours simple et innovant adapté à 
              tous les entrepreneurs du 21ème siècle
            </p>
          </div>

          <div className="accordion-list">
            <ul>
              <li>
                <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> Candidatures<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                  <p>
                    Réception de la candidature
                  </p>
                </div>
              </li>

              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span>Qualification <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                  <p> 
                    Evaluation des inscrits et Mindset entrepreneur
                  </p>
                </div>
              </li>

              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Lancement<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                  <p>  Début de ta plus grande expérience entrepreneuriale</p>
                </div>
              </li>

            </ul>
          </div>

        </div>

        <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage:`url(${infox_box})`}}>&nbsp;</div>
      </div>

    </div>
  </section>
  )
}

export default Parcousr_Selection;
