
import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { getRequest, hostUrl } from '../../../../utils/Request_Http/Resquest';
import './../style.css';
import { AuthContext } from '../../../../utils/Context/AuthContext'

function MyStartUp() {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [dataStartUp, setDataStartUp] = useState({});
    const [urlStartUp, setUrlStartup] = useState("");

    useEffect(() => {
        const getMystartUp = async () => {
            const responseStartUp = await getRequest(`${hostUrl}/startUp/${user.id}`);
            console.log(responseStartUp);
            setDataStartUp(responseStartUp);
            const link = responseStartUp.lienYoutube;
            const urlYoutube = link.replace('watch?v=', 'embed/');
            setUrlStartup(urlYoutube);
            console.log(dataStartUp)
            console.log(urlStartUp)
        };
        getMystartUp();
    }, [])
    return (
        <section className="main " id='main'>
            <section className="breadcrumbs">
                <div className="container">

                    <div className="d-block  align-items-center">
                        <h2>{dataStartUp.nom} </h2>
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
                                        {dataStartUp.description}
                                    </p>
                                </div>
                                <div className='col-12 d-block'>
                                    <p className='mb-3'>
                                        <InsertLinkIcon />
                                        <a href={dataStartUp.siteWeb}> site officiel</a></p>
                                    <p className='mb-3'>
                                        <LocationOnIcon />
                                        Pays: {dataStartUp.pays} </p>

                                </div>
                                <hr />
                            </div>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-6 p-3'>
                                    <h6>Phase de développement</h6>
                                    <span style={{ fontSize: "15px" }}> {dataStartUp.choix} </span>
                                </div>
                                <div className='col-6 p-3'>
                                    <h6>Équipe de Financement</h6>
                                    <span style={{ fontSize: "15px" }}>{dataStartUp.phaseFinancement} /
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
                            <div className='row'>
                                <iframe width="560" height="315"
                                    src={urlStartUp}
                                    title="YouTube video player" frameBorder="0" allow="accelerometer;
                               autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
                               web-share" allowFullScreen>
                                </iframe>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </section>
    )
}

export default MyStartUp;
