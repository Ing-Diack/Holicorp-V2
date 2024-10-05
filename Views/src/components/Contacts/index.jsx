import React from 'react'

function Contacts() {
  return (
    <section id="contact" className="contact section-bg">

    <div className="container">
      <div className="section-title">
        <h2>CONTACTEZ_NOUS</h2>
      </div>
    </div>

    <div className="container-fluid">

      <div className="row">

        <div className="col-lg-6 d-flex align-items-stretch infos">

          <div className="row">

            <div className="col-lg-6 info d-flex flex-column align-items-stretch">
              <i className="bx bx-map"></i>
              <h4>Adresse</h4>
             
              <p>J292+C9P,<br/> Bamako, Mali </p>
            </div>
            <div className="col-lg-6 info info-bg d-flex flex-column align-items-stretch">
              <i className="bx bx-phone"></i>
              <h4>APPELEZ-NOUS</h4>
             
              <p> +223 72 23 49 31</p>
            </div>
            <div className="col-lg-6 info info-bg d-flex flex-column align-items-stretch">
              <i className="bx bx-envelope"></i>
              <h4>EMAIL</h4>
              <p>
                contact@holilearn.pro</p>
            </div>
            <div className="col-lg-6 info d-flex flex-column align-items-stretch">
              <i className="bx bx-time-five"></i>
              <h4>HEURES D'OUVERTURE</h4>
              <p>
                Lundi - Vendredi: 9h à 17h</p>
            </div>
          </div>

        </div>

        <div className="col-lg-6 d-flex align-items-stretch contact-form-wrap">
          <form action="" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="name">Votre nom</label>
                <input type="text" name="name" className="form-control" id="name" placeholder="Votre Name" required/>
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <label htmlFor="email">votre Email</label>
                <input type="email" className="form-control" name="email" id="email" placeholder="Votre Email" required/>
              </div>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="subject">Objet</label>
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Objet" required/>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" name="message" rows="8" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Envoyer</button></div>
          </form>
        </div>

      </div>

    </div>
  </section>
  )
}

export default Contacts;
