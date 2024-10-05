import React from 'react';
import { Link } from 'react-router-dom';


function Portfolio({ name, src, id }) {
    return (

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
                <img src={src} className="img-fluid" alt="" />
                <div className="portfolio-info">
                    <h4>{name}</h4>
                </div>
                <div className="portfolio-links">
                    <a href={src} data-gallery="portfolioGallery" className="portfolio-lightbox" title={`${name}`}><i className="bx bx-plus"></i></a>
                    <Link to={`/incubateurDetails/${id}`} title="More Details"><i className="bx bx-link"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
