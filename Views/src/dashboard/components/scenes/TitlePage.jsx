import React from 'react';
import './TitlePage.css';


function TitlePage({page}) {

  return (
    <div className='pagetitle section' >
        <h1>{page}</h1>
        <nav>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                    <a> <i className='bi bi-house-door'></i></a>
                </li>
                <li className='breadcrumb-item active'>{page}</li>

            </ol>
        </nav>
      
    </div>
  )
}

export default TitlePage;
