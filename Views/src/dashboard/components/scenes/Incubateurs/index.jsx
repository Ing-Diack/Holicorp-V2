import React, { useState, useEffect } from 'react';
import TitlePage from '../TitlePage';
import { getRequest, hostUrl } from '../../../../utils/Request_Http/Resquest';

import WrapIncub from './WrapIncub';


function Incubateurs() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getDataIncubateur = async () => {
            const response = await getRequest(`${hostUrl}/utilisateur/all`);
            setData(response)
        }
        getDataIncubateur();
    }, [])
    return (
        <section id='main' className='main'>
            <div className='container'>
                <div className='row'>
                    {data.map(element => {
                        if (element.role === "incubateur") {
                            return <WrapIncub key={`id${element.id}`} data={element} />
                        }
                    })
                    }
                </div>
            </div>
        </section>

    )

}

export default Incubateurs
