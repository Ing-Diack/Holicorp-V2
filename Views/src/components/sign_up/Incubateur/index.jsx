import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import signupImage from "./../../../assets/img/signup.jpg";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Alert } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Loader } from "../../../utils/Loader/Loader";
import { AuthContext } from "../../../utils/Context/AuthContext";

function Incubateur() {
  const {
    registerUser,
    updateRegisterInfo,
    updateRegisterImageUrl,
    file,
    registerInfo,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  useEffect(() => {
    updateRegisterInfo({ ...registerInfo, role: "incubateur" });
  }, []);
  return (
    <section className="h-100" style={{ backgroundColor: "#5dc7ce" }}>
      <div className="container  h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0 justify-content-center align-items-center">
                <div className="col-md-4 col-lg-7 d-flex align-items-center">
                  <div className="card-body  text-black">
                    <Box sx={{ "& > :not(style)": { m: 1 } }}>
                      <FormControl variant="filled" sx={{ minWidth: 150 }}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#5dc7ce" }}
                          ></i>
                          <span className="h1 fw-bold mb-0">Holihub Incub</span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Inscrivez-vous
                        </h5>

                        <div className="mb-3">
                          <TextField
                            id="filled-hidden-label-small"
                            label="Nom"
                            name="nom"
                            value={registerInfo.nom}
                            onChange={(e) =>
                              updateRegisterInfo({
                                ...registerInfo,
                                nom: e.target.value,
                              })
                            }
                            required
                            variant="filled"
                            size="small"
                            fullWidth={true}
                          />
                        </div>
                        <div className="mb-3">
                          <TextField
                            id="filled-hidden-label-small"
                            label="Tél"
                            value={registerInfo.tel}
                            onChange={(e) =>
                              updateRegisterInfo({
                                ...registerInfo,
                                tel: e.target.value,
                              })
                            }
                            required
                            variant="filled"
                            size="small"
                            fullWidth={true}
                          />
                        </div>
                        <div className="mb-3">
                          <TextField
                            id="filled-hidden-label-small"
                            label="Email"
                            value={registerInfo.email}
                            onChange={(e) =>
                              updateRegisterInfo({
                                ...registerInfo,
                                email: e.target.value,
                              })
                            }
                            required
                            variant="filled"
                            size="small"
                            fullWidth={true}
                          />
                        </div>
                        <div className="mb-3">
                          <TextField
                            id="filled-hidden-label-small"
                            label="Site web"
                            value={registerInfo.siteWeb}
                            onChange={(e) =>
                              updateRegisterInfo({
                                ...registerInfo,
                                siteWeb: e.target.value,
                              })
                            }
                            required
                            variant="filled"
                            size="small"
                            fullWidth={true}
                          />
                        </div>
                        <FormControl
                          variant="filled"
                          sx={{ minWidth: 130, marginBottom: "10px" }}
                        >
                          <InputLabel id="demo-simple-select-filled-label">
                            Pays
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            size="small"
                            value={registerInfo.pays}
                            onChange={(e) =>
                              updateRegisterInfo({
                                ...registerInfo,
                                pays: e.target.value,
                              })
                            }
                            required
                          >
                            <MenuItem value="">
                              <em>pays</em>
                            </MenuItem>
                            <MenuItem value="MALI">MALI</MenuItem>
                            <MenuItem value="SENEGAL">SENEGAL</MenuItem>
                            <MenuItem value="GUINNEE">GUINNEE</MenuItem>
                          </Select>
                        </FormControl>
                        <div className="mb-3">
                          <TextField
                            id="filled-multiline-static"
                            label="Description"
                            multiline
                            rows={3}
                            value={registerInfo.description}
                            onChange={(e) =>
                              updateRegisterInfo({
                                ...registerInfo,
                                description: e.target.value,
                              })
                            }
                            placeholder="Message"
                            variant="filled"
                            fullWidth={true}
                          />
                        </div>
                        <div className="mb1">
                          <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                            sx={{
                              backgroundColor: "#f0f0f0",
                              color: "#8c8c8c",
                            }}
                          >
                            Inserer Logo
                            <VisuallyHiddenInput
                              name="imageUrl"
                              value={file.file}
                              onChange={(e) =>
                                updateRegisterImageUrl({
                                  ...file,
                                  imageUrl: e.target.value,
                                })
                              }
                              type="file"
                            />
                          </Button>
                        </div>

                        <div className=" row justify-content-between align-items-center pt-1 mb-2">
                          <div className="col-6">
                            <Button
                              disabled={isRegisterLoading}
                              onClick={registerUser}
                              variant="contained"
                              color="success"
                            >
                              {isRegisterLoading
                                ? "Creating your account..."
                                : "Enregistrer"}
                            </Button>
                          </div>
                          <div className="col-6">
                            <Link to="/connexion"> je suis déjà membre</Link>
                          </div>
                        </div>
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

export default Incubateur;
