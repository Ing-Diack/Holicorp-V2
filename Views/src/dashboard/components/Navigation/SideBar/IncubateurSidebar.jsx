import React, { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Collapse } from "react-bootstrap";
import "./sidebar.css";
import { AuthContext } from "../../../../utils/Context/AuthContext";

function IncubateurSidebar() {
  const [open, setOpen] = useState(false);
  const [openParcours1, setOpenParcours1] = useState(false);
  const [openParcours2, setOpenParcours2] = useState(false);
  const [openParcours3, setOpenParcours3] = useState(false);

  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(user.status);

  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/incubateur/tableau">
              <i className="bi bi-grid"></i>
              <span>Tableau de bord</span>
            </Link>
          </li>
          <li className="nav-item">
            <a
              onClick={() => setOpen(!open)}
              className="nav-link collapsed"
              href="#"
            >
              <i className="bi bi-person-workspace"></i>
              <span>Programmes</span>
              {open ? (
                <ArrowDropUpIcon className="ms-auto" />
              ) : (
                <ArrowDropDownIcon className="ms-auto" />
              )}
            </a>
            <Collapse in={open}>
              <ul className="nav-content">
                <li className="mb-1">
                  <a
                    onClick={() => setOpenParcours1(!openParcours1)}
                    className="nav-link collapsed"
                    href="#"
                  >
                    <i className="bi bi-person-workspace"></i>
                    <span>Programme 1</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
                  </a>
                  <Collapse in={openParcours1}>
                    <ul className="nav-content">
                      <li>
                        <Link to="/dashboard/incubateur/challenges">
                          <i className="bi bi-circle"></i>
                          <span>Challenges</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/dashboard/incubateur/cours">
                          <i className="bi bi-circle"></i>
                          <span>Cours</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/dashboard/incubateur/exercices">
                          <i className="bi bi-circle"></i>
                          <span>Exercices</span>
                        </Link>
                      </li>
                    </ul>
                  </Collapse>
                </li>

                <li className="mb-1">
                  <a
                    onClick={() => setOpenParcours2(!openParcours2)}
                    className="nav-link collapsed"
                    href="#"
                  >
                    <i className="bi bi-person-workspace"></i>
                    <span>Programme 2</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
                  </a>
                  <Collapse in={openParcours2}>
                    <ul className="nav-content">
                      <li>
                        <Link to="/dashboard/incubateur/challenges">
                          <i className="bi bi-circle"></i>
                          <span>Challenges</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/dashboard/incubateur/cours">
                          <i className="bi bi-circle"></i>
                          <span>Cours</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/dashboard/incubateur/exercices">
                          <i className="bi bi-circle"></i>
                          <span>Exercices</span>
                        </Link>
                      </li>
                    </ul>
                  </Collapse>
                </li>

                <li className="mb-1">
                  <a
                    onClick={() => setOpenParcours3(!openParcours3)}
                    className="nav-link collapsed"
                    href="#"
                  >
                    <i className="bi bi-person-workspace"></i>
                    <span>Programme 3</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
                  </a>
                  <Collapse in={openParcours3}>
                    <ul className="nav-content">
                      <li>
                        <Link to="/dashboard/incubateur/challenges">
                          <i className="bi bi-circle"></i>
                          <span>Challenges</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/dashboard/incubateur/cours">
                          <i className="bi bi-circle"></i>
                          <span>Cours</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/dashboard/incubateur/exercices">
                          <i className="bi bi-circle"></i>
                          <span>Exercices</span>
                        </Link>
                      </li>
                    </ul>
                  </Collapse>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/incubateur/corde">
              <i className="bi bi-grid"></i>
              <span>Cohorte</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/incubateur/candidatures">
              <i className="bi bi-grid"></i>
              <span>Candidatures</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link  align-items-center"
              to="/dashboard/incubateur/membres"
            >
              <PeopleOutlineIcon />
              <span className="mx-2">Membres</span>
            </Link>
          </li>
        </ul>
      </aside>
      <Outlet />
    </>
  );
}

export default IncubateurSidebar;
