import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import image from './../../assets/img/portfolio/p2.png';


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
                    <Link to={`/entreprenariatDetails/${id}`} title="More Details"><i className="bx bx-link"></i></Link>
                </div>
            </div>
        </div>
    )
}
Portfolio.propTypes = {
    name: PropTypes.string,
    src: PropTypes.string
}
Portfolio.defaultProps = {
    src: `${image}`
}

export default Portfolio;
