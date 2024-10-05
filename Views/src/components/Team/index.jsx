import React from 'react';
import team1 from './../../assets/img/team/team-1.jpeg';
import team2 from './../../assets/img/team/team-2.jpeg';
import team3 from './../../assets/img/team/team-3.jpeg';
import team4 from './../../assets/img/team/team-4.jpeg';
function Team() {
  return (
    <section id="team" className="team">
    <div className="container">

      <div className="section-title">
        <h2>LA TEAM</h2>
      </div>

      <div className="row">

        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="member">
            <img src={team1} className="img-fluid" alt=""/>
            <div className="member-info">
              <div className="member-info-content">
                <h4>Samba Togola</h4>
                <span>CEO SOS-Technologie</span>
              </div>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.1s">
          <div className="member">
            <img src={team2} className="img-fluid" alt=""/>
            <div className="member-info">
              <div className="member-info-content">
                <h4>Oumou Diop</h4>
                <span> Community Manager</span>
              </div>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.2s">
          <div className="member">
            <img src={team3} className="img-fluid" alt=""/>
            <div className="member-info">
              <div className="member-info-content">
                <h4>William  </h4>
                <span>Community Manager</span>
              </div>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.3s">
          <div className="member">
            <img src={team4} className="img-fluid" alt=""/>
            <div className="member-info">
              <div className="member-info-content">
                <h4>Kankou Marie Sanogo
                  </h4>
                <span>Développeuse Web</span>
              </div>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}

export default Team;
