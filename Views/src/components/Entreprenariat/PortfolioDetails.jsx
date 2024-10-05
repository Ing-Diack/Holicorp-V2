
import React, { useState } from 'react';
import { useEffect, useContext } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from "axios"
import { hostUrl, getRequest } from '../../utils/Request_Http/Resquest';
import { useParams } from 'react-router-dom';


function PortfolioDetails() {
    const [data, setData] = useState({});
    const [url, setUrl] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const getData = async () => {
            const response = await getRequest(`${hostUrl}/startUp/${id}`);
            setData(response);
            const link = response.lienYoutube;

            const urlYoutube = link.replace('watch?v=', 'embed/');
            setUrl(urlYoutube)
        }
        getData();
    }, [])

    return (


        <main >

            <section className="breadcrumbs">
                <div className="container">

                    <div className="d-block  align-items-center">
                        <h2> {data.nom} </h2>
                        <p> Notre Equipe examine les informations ci-dessous
                            pour déterminer l'éligibilité à d'autres avantages et vous faire
                            correspondre à des programmes personnalisés.
                        </p>
                    </div>

                </div>
            </section>


            <section id="portfolio-details" className="portfolio-details">
                <div className="container">

                    <div className="row d-flex gy-4 justify-content-between align-content-center">

                        <div class="col-lg-5">
                            <div className='row d-flex justify-content-between align-content-center'>
                                <div className='col-8 mb-2'>
                                    <h5> Informations sur l'entreprise</h5>
                                    <span className=''> Partagé avec les experts sollicités</span>

                                </div>
                                <div className='col-4'> <EditIcon /></div>
                                <hr />
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <p style={{ fontSize: "14px" }}>
                                        {data.description}
                                    </p>
                                </div>
                                <div className='col-12 d-block'>
                                    <p className='mb-3'>
                                        <InsertLinkIcon />
                                        <a href={data.siteWeb}> veuillez cliquer ici</a></p>
                                    <p className='mb-3'>
                                        <LocationOnIcon />
                                        Pays: Mali</p>

                                </div>
                                <hr />
                            </div>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-6 p-3'>
                                    <h6>Phase de développement</h6>
                                    <span style={{ fontSize: "15px" }}> {data.choix}</span>
                                </div>
                                <div className='col-6 p-3'>
                                    <h6>Équipe de Financement</h6>
                                    <span style={{ fontSize: "15px" }}> {data.phaseFinancement} /
                                        auto-financement
                                    </span>
                                </div>
                                <div className='col-6 p-3'>
                                    <h6>Modèle métier</h6>
                                    <span style={{ fontSize: "15px" }}> B2C</span></div>
                                <div className='col-6 p-3'>
                                    <h6>Secteur</h6>
                                    <span style={{ fontSize: "15px" }}> Horizontal (Inter-secteurs d'activité )</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className='row d-flex justify-content-between align-content-center'>
                                <div className='col-8 mb-2'>
                                    <h5> Votre vidéo de démonstration</h5>
                                    <span className=''> Partagé avec les experts sollicités</span>
                                </div>
                                <div className='col-4 '>
                                    <EditIcon />
                                </div>
                                <hr />
                            </div>
                            <div>
                                <iframe width="560" height="315"
                                    src={url}
                                    title="YouTube video player" frameborder="0" allow="accelerometer; 
                              autoplay; clipboard-write; encrypted-media; gyroscope;
                               picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>


    )
}

export default PortfolioDetails;
