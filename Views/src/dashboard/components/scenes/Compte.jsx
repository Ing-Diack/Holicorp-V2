import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../utils/Context/AuthContext';
import './style.css';

function Compte() {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <section id='main' className='main'>
            <div className='container'>
                <div className='row'>
                    bonjour je suis compte  {id}
                </div>
            </div>
        </section>
    )
}

export default Compte
