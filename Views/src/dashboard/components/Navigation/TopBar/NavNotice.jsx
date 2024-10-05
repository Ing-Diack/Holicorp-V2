import React from 'react';
import { Link } from 'react-router-dom';

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function NavNotice() {
    return (
        <li key="0" className='nav-item dropdown'>
            <Link className='nav-link nav-icon' data-bs-toggle="dropdown">
                <NotificationsActiveIcon />
                <span className='badge bg-primary badge-number'>4</span>
            </Link>
            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>

                <li key="1" className='dropdown-header'>
                    Vous avez 4 nouvelles notifications
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='notification-item'>
                    <i className='bi bi-exclamation-circle text-danger'></i>
                    <div>
                        <h6> Notifications</h6>
                        <p> Nous vous notificions que</p>
                        <p> 30min</p>
                    </div>
                </li>
                <li className='notification-item'>
                    <a href='#'> Voir tous les notifications</a>
                </li>

            </ul>

        </li>
    )
}

export default NavNotice;
