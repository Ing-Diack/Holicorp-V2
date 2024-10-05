import React, { useEffect, useState } from 'react';
import Portfolio from './Portfolio'
import entrep1 from "../../assets/img/entreprenariat/entrep1.jpg";
import impactHob from "../../assets/img/entreprenariat/impactHob.png";
import holijob from "../../assets/img/entreprenariat/holijob.png";


function Incubateurs({ data }) {
  console.log(data)

  return (
    <section id="" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Nos incubateurs</h2>
        </div>
        <div className="row portfolio-container">
          {data.map(element => {
            if (element.role === "incubateur") {
              return <Portfolio key={`id${element.id}`} name={element.nom} id={element.id} src={entrep1} />
            }
          })
          }

        </div>

      </div>
    </section>
  )
}

export default Incubateurs;
