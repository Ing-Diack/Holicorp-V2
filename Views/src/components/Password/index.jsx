import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AuthContext } from "../../utils/Context/AuthContext";
import { hostUrl, PostRequest } from "../../utils/Request_Http/Resquest";
import { Loader } from "../../utils/Loader/Loader";

function Password() {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [typeAlert, setTypeAlert] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const [data, setData] = useState({
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const handleOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleOnsubmit = async (e) => {
    if (data.password !== "") {
      e.preventDefault();
      setIsLoading(true);
      const email = user.email;
      const password = data.password;
      const response = await PostRequest(
        `${hostUrl}/utilisateur/definedPassword`,
        JSON.stringify({ email, password })
      );
      setIsLoading(false);
      if (response.error) {
        setTypeAlert("error");
        setMessage("Oups il veuillez verifier votre connexion");
      } else {
        setTypeAlert("success");
        setMessage("votre mot de passe a été modifié avec succes");
        setTimeout(() => {
          navigate("/connexion");
        }, 2000);
      }
    } else {
      setTypeAlert("error");
      setMessage("veuillez remplir tous les champs");
    }
  };
  return (
    <section className="vh-100" style={{ backgroundColor: "#5dc7ce" }}>
      <div className="container py-1 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0 justify-content-center align-items-center align-content-center">
                <div className="col-md-4 col-lg-7 d-flex align-items-center m-auto">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <Alert severity="success">
                      Email successfuly verified, redirection .....
                    </Alert>

                    <Box sx={{ "& > :not(style)": { m: 1 }, width: "500PX" }}>
                      <FormControl variant="filled" fullWidth={true}>
                        <div className="d-flex align-items-center mb-1 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#5dc7ce" }}
                          ></i>
                          <span className="h2 fw-bold mb-0">
                            Holihub Password
                          </span>
                        </div>

                        <h6
                          className="fw-normal mb-1 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Definissez votre mot de passe
                        </h6>
                        <FormControl
                          variant="filled"
                          sx={{ minWidth: 130, marginBottom: "15px" }}
                        >
                          <InputLabel htmlFor="filled-adornment-password">
                            Password
                          </InputLabel>
                          <FilledInput
                            id="filled-adornment-password"
                            size="small"
                            name="password"
                            value={data.password}
                            onChange={handleOnchange}
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>

                        <FormControl
                          variant="filled"
                          sx={{ minWidth: 130, marginBottom: "15px" }}
                        >
                          <InputLabel htmlFor="filled-adornment-password">
                            Confirm Password
                          </InputLabel>
                          <FilledInput
                            id="filled-adornment-password"
                            size="small"
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>

                        <div className="pt-1">
                          {isLoading ? (
                            <Loader />
                          ) : (
                            <Button
                              onClick={handleOnsubmit}
                              variant="contained"
                              color="success"
                            >
                              Valider
                            </Button>
                          )}
                        </div>

                        <div className="pt-1">
                          <Alert severity={typeAlert}> {message} </Alert>
                        </div>
                      </FormControl>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Password;
