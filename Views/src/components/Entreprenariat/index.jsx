import React, { useEffect, useState } from 'react';
import Portfolio from './Portfolio';
import entrep1 from "../../assets/img/entreprenariat/entrep1.jpg";
import impactHob from "../../assets/img/entreprenariat/impactHob.png";
import holijob from "../../assets/img/entreprenariat/holijob.png";
import { getRequest, hostUrl } from '../../utils/Request_Http/Resquest';
function Entreprenariat({ data }) {

    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Entreprenariat Center</h2>
                </div>
                <div className="row portfolio-container">
                    {data.map(element => <Portfolio key={element.id} name={element.nom} id={element.id} />)}

                </div>

            </div>
        </section>
    )
}

export default Entreprenariat;
