import React from 'react'

function Footer() {
  return (
    <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-info">
            <h3>Holihub</h3>
            <p>
            Badalabougou
            Bamako, Mali<br/><br/>
              <strong>Télephone:</strong> +223 72 23 49 31 <br/>
              <strong>Email:</strong>contact@holilearn.pro<br/>
            </p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Liens utiles</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#hero">Accueil</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#about">A Propos</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#portfolio">Portfolio</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Nos services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Programme d'Incubation</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Programme d'Incubation</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Mise en relations entrepreneuriale</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Labellisation</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Cloud Meet Word</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Bibliothèque (ressource)</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Rester informé de nos actualité a travers notre Newsletter</p>
            <form action="" method="post">
              <input type="email" name="email"/>
              <input type="submit" value="Subscribe"/>
            </form>

          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Shuffle</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer;
