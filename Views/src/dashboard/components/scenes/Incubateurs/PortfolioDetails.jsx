import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import image1 from '../../../../assets/img/entreprenariat/holijob.png';
import { Button } from '@mui/material';
import { Alert } from "@mui/material";
import { AuthContext } from '../../../../utils/Context/AuthContext';
import { PostRequest, getRequest, hostUrl } from '../../../../utils/Request_Http/Resquest';
import { Loader } from '../../../../utils/Loader/Loader';

function PortfolioDetails({ data }) {
  const { user } = useContext(AuthContext);
  const [IsDisabled, setIsDisabled] = useState(false)
  const [Data, setData] = useState({
    ID_CEO: `${user.id}`,
    nom: `${user.nom}`,
    ceoEmail: `${user.email}`,
    incubateurID: `${data.id}`,
    incubateurEmail: `${data.email}`
  });
  console.log("voici email de l'utilisateur", user.email);
  const [isLoading, setIsLoading] = useState(false)
  const [typeAlert, setTypeAlert] = useState("");
  const [message, setMessage] = useState(null);
  const [dataIncubateur, setDataIncubateur] = useState({});

  useEffect(() => {
    const getdataIncubateur = async () => {
      const responseIncubateur = await getRequest(`${hostUrl}/utilisateur/${data.id}`);
      setDataIncubateur(responseIncubateur);
    }
    getdataIncubateur();
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await PostRequest(`${hostUrl}/souscription`, JSON.stringify(Data));
    setIsLoading(false);
    if (response.error) {
      console.log(response)
      setTypeAlert("error");
      setMessage(`${response.message}`);
    } else {
      setTypeAlert("success");
      setIsDisabled(true)
      setMessage(`Vous êtes bien souscrit au l'incubateur ${user.nom}`);
    }

  }
  return (

    <main >

      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>  Details {data.nom} {data.id}</h2>
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

            <div class="col-lg-6">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img src={image1} alt="" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-6">
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

                <div className="pt-1">


                </div>


                <div className='mt-4 text-center'>
                  {isLoading ? (<Loader />) : (

                    <Button disabled={IsDisabled} onClick={handleOnSubmit} className='text-center' variant="contained" color="success">
                      Souscrire
                    </Button>
                  )}
                </div>
                <div className='pt-1'>
                  <Alert severity={typeAlert}> {message} </Alert>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>


  )
}

export default PortfolioDetails;
