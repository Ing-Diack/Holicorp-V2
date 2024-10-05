import React, { useEffect, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import TitlePage from "../TitlePage";
import creerCohorte from "./../../../../assets/img/slide/creerCohorte.png";
import listeCohorte from "./../../../../assets/img/slide/listeCohorte.png";
import { hostUrl, getRequest } from "../../../../utils/Request_Http/Resquest";
import { AuthContext } from "../../../../utils/Context/AuthContext";

function Corde() {
  return (
    <>
      <section id="main" className="portfolio section-bg vh-100 main">
        <TitlePage page="Cohorte" />
        <div className="container mt-5">
          <div className="row portfolio-container">
            <div className="col-md-6 portfolio-item filter-app mb-md-0 mb-3">
              <div className="portfolio-wrap ">
                <Link
                  to="/dashboard/incubateur/corde/creation"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Nouveau"
                >
                  <img
                    src={creerCohorte}
                    className=" w-100"
                    alt=""
                    height={250}
                  />
                </Link>
              </div>
            </div>

            <div className="col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <Link
                  to="/dashboard/incubateur/corde/listes"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Liste"
                >
                  <img
                    src={listeCohorte}
                    className="w-100"
                    alt=""
                    height={250}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default Corde;
