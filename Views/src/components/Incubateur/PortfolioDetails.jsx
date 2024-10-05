import React from 'react';
import { useEffect, useState } from 'react';
import image1 from '../../assets/img/portfolio/p1.jpg';
import image2 from '../../assets/img/portfolio/portfolio-2.jpg';
import image3 from '../../assets/img/portfolio/portfolio-3.jpg'
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getRequest, hostUrl } from '../../utils/Request_Http/Resquest';


function PortfolioDetails() {
  const { id } = useParams()
  const [dataIncubateur, setDataIncubateur] = useState({});

  useEffect(() => {
    const getdataIncubateur = async () => {
      const responseIncubateur = await getRequest(`${hostUrl}/utilisateur/${id}`);
      console.log(responseIncubateur)
      setDataIncubateur(responseIncubateur);
      console.log(dataIncubateur)
    }
    getdataIncubateur();
  }, [])

  return (


    <main >

      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>Incubateur  Details {id}</h2>
            <ol>
              <li><a href="/">Accueil</a></li>
              <li>Incubateur Details</li>
            </ol>
          </div>

        </div>
      </section>


      <section id="portfolio-details" className="portfolio-details">
        <div className="container">

          <div className="row gy-4">

            <div class="col-lg-8">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img src={image1} alt="" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Informations</h3>
                <ul>
                  <li><strong>Nom</strong>: {dataIncubateur.nom} </li>
                  <li><strong>Promoteur</strong>: ASU Company</li>
                  <li><strong>Pays</strong>:{dataIncubateur.pays}</li>
                  <li><strong>Tel</strong>: {dataIncubateur.tel} </li>
                  <li><strong>Email</strong>: {dataIncubateur.email} </li>
                  <li><strong>Site Web</strong>: <a href={dataIncubateur.siteWeb}>site officiel</a></li>

                </ul>
                <div className='mt-4 text-center'>
                  <Button className='text-center' variant="contained" color="success">
                    Pré-inscription
                  </Button>
                </div>

              </div>
              <div className="portfolio-description">
                <h2>Descprtion</h2>
                <p>
                  {dataIncubateur.description}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>


  )
}

export default PortfolioDetails;
