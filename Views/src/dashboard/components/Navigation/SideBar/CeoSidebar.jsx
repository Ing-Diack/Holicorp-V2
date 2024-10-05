import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import './sidebar.css';

function CeoSidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <aside id='sidebar' className='sidebar'>
                <ul className='sidebar-nav' id='sidebar-nav'>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/dashboard/ceo/mystartup">
                            <i className='bi bi-grid'></i>
                            <span>Ma Start-Up</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/dashboard/ceo/tableau">
                            <i className='bi bi-grid'></i>
                            <span>Tableau de bord</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/dashboard/ceo/Incubateurs">
                            <i className='bi bi-grid'></i>
                            <span>Incubateurs</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <a onClick={() => setOpen(!open)}
                            className="nav-link collapsed"
                            href='#'
                        >
                            <i className="bi bi-person-workspace"></i>
                            <span>Programmes</span>
                            <i className='bi bi-chevron-down ms-auto'></i>
                        </a>
                        <Collapse in={open}>
                            <ul
                                className="nav-content"
                            >
                                <li>
                                    <Link to="/dashboard/ceo/challenges">
                                        <i className='bi bi-circle'></i>
                                        <span>Parcours 1</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/dashboard/ceo/cours">
                                        <i className='bi bi-circle'></i>
                                        <span>Parcours 2</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/dashboard/ceo/exercices">
                                        <i className='bi bi-circle'></i>
                                        <span>Parcours 3</span>
                                    </Link>
                                </li>

                            </ul>
                        </Collapse>

                    </li>

                </ul>
            </aside>
            <Outlet />
        </>

    )
}

export default CeoSidebar;
