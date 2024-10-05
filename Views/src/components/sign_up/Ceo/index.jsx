import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import signupImage from "./../../../assets/img/CEO.jpeg";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

import { Alert } from "@mui/material";
import axios from "axios";
import Stack from "@mui/material/Stack";
import { AuthContext } from "../../../utils/Context/AuthContext";
import { Loader } from "../../../utils/Loader/Loader";

function Ceo() {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);
  console.log(registerInfo);
  useEffect(() => {
    updateRegisterInfo({ ...registerInfo, role: "ceo" });
  }, []);
  return (
    <section className="h-100" style={{ backgroundColor: "#5dc7ce" }}>
      <div className="container  h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div
              className="card"
              style={{ borderRadius: "1rem", width: "100%" }}
            >
              <div className="row g-0 justify-content-center align-items-center">
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body text-black">
                    <Box sx={{ "& > :not(style)": { m: 1 } }}>
                      <FormControl variant="filled" fullWidth={true}>
                        <div className="d-flex align-items-center mb-1 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#5dc7ce" }}
                          ></i>
                          <span className="h5 fw-bold mb-0">Holihub CEO</span>
                        </div>

                        <h5
                          className="fw-normal mb-1 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Inscrivez-vous
                        </h5>

                        <div className="mb-3">
                          <TextField
                            id="filled-hidden-label-small"
                            label="Nom"
                            variant="filled"
                            type="text"
                            required
                            size="small"
                            fullWidth={true}
                            value={registerInfo.nom}
                            onChange={(e) =>
                              updateRegisterInfo({
                                ...registerInfo,
                                nom: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="mb-3">
                          <TextField
                            id="filled-hidden-label-small"
                            label="Prénom"
                            type="text"
                            variant="filled"
                            required
                            size="small"
                            fullWidth={true}
                            value={registerInfo.prenom}
                            onChange={(e) =>
                              updateRegisterInfo({
                                ...registerInfo,
                                prenom: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <TextField
                            id="filled-hidden-label-small"
                            label="Tel"
                            name="tel"
                            type="text"
                            variant="filled"
                            size="small"
                            fullWidth={true}
                            required
                            value={registerInfo.tel}
                            onChange={(e) =>
                              updateRegisterInfo({
                                ...registerInfo,
                                tel: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <TextField
                            id="filled-hidden-label-small"
                            label="Email"
                            name="email"
                            type="email"
                            variant="filled"
                            size="small"
                            fullWidth={true}
                            required
                            value={registerInfo.email}
                            onChange={(e) =>
                              updateRegisterInfo({
                                ...registerInfo,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>

                        <FormControl
                          variant="filled"
                          sx={{ marginBottom: "15px" }}
                        >
                          <InputLabel id="demo-simple-select-filled-label">
                            Pays
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            type="text"
                            size="small"
                            required
                            value={registerInfo.pays}
                            onChange={(e) =>
                              updateRegisterInfo({
                                ...registerInfo,
                                pays: e.target.value,
                              })
                            }
                          >
                            <MenuItem value="">
                              <em>Pays</em>
                            </MenuItem>
                            <MenuItem value="MALI">MALI</MenuItem>
                            <MenuItem value="SENEGAL">SENEGAL</MenuItem>
                            <MenuItem value="GUINNEE">GUINNEE</MenuItem>
                          </Select>
                        </FormControl>

                        <FormControl
                          variant="filled"
                          sx={{ marginBottom: "15px" }}
                        >
                          <InputLabel id="demo-simple-select-filled-label">
                            Incubateur
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            type="text"
                            size="small"
                            required
                            value={registerInfo.incubateur}
                            onChange={(e) =>
                              updateRegisterInfo({
                                ...registerInfo,
                                incubateur: e.target.value,
                              })
                            }
                          >
                            <MenuItem value="">
                              <em>Incub</em>
                            </MenuItem>
                            <MenuItem value="Incubateur1">Incubateur1</MenuItem>
                            <MenuItem value="Incubateur2">Incubateur2</MenuItem>
                            <MenuItem value="Incubateur3">Incubateur3</MenuItem>
                          </Select>
                        </FormControl>

                        <div className="pt-1">
                          <div className=" row pt-1 justify-content-between">
                            <div className="col-6">
                              <Button
                                disabled={isRegisterLoading}
                                onClick={registerUser}
                                variant="contained"
                                color="success"
                              >
                                {isRegisterLoading ? <Loader /> : "Enregistrer"}
                              </Button>
                            </div>
                            <div className="col-6">
                              <Link to="/connexion"> Je suis déja membre</Link>
                            </div>
                          </div>
                        </div>
                        <div className="pt-1"></div>
                      </FormControl>
                    </Box>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={signupImage}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ceo;
