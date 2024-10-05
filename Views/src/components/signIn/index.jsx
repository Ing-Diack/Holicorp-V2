import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import signInImage from "./../../assets/img/signin.jpg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Alert } from "@mui/material";
import Stack from "@mui/material/Stack";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Loader } from "../../utils/Loader/Loader";
import { AuthContext } from "../../utils/Context/AuthContext";

function SignIn() {
  const { loginInfo, updateLoginInfo, loginUser, loginError, isLoginLoading } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <section className="" style={{ backgroundColor: "#5dc7ce", height: "50%" }}>
      <div className="container  h-100v">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0 justify-content-center align-items-center">
                <div className="col-md-6 col-lg-6 d-none d-md-flex justify-content-center align-items-center">
                  <img
                    src={signInImage}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-4 col-lg-6 d-flex align-items-center">
                  <div className="card-body  text-black">
                    <Box sx={{ "& > :not(style)": { m: 1 } }}>
                      <FormControl variant="filled" fullWidth={true}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#5dc7ce" }}
                          ></i>
                          <span className="h1 fw-bold mb-0">Holihub Login</span>
                        </div>

                        <h6
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          connectez-vous à votre compte
                        </h6>

                        <div className="mb-3">
                          <TextField
                            id="filled-hidden-label-small"
                            label="Email"
                            variant="filled"
                            size="small"
                            onChange={(e) =>
                              updateLoginInfo({
                                ...loginInfo,
                                email: e.target.value,
                              })
                            }
                            value={loginInfo.email}
                            fullWidth={true}
                          />
                        </div>
                        <FormControl
                          variant="filled"
                          sx={{ marginBottom: "15px" }}
                        >
                          <InputLabel htmlFor="filled-adornment-password">
                            Mot de passe
                          </InputLabel>
                          <FilledInput
                            id="filled-adornment-password"
                            size="small"
                            onChange={(e) =>
                              updateLoginInfo({
                                ...loginInfo,
                                password: e.target.value,
                              })
                            }
                            value={loginInfo.password}
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
                        <div className=" row pt-1 mb-4 justify-content-between align-items-center">
                          <div className="col-6">
                            {
                              <Button
                                onClick={loginUser}
                                variant="contained"
                                disabled={isLoginLoading}
                                color="success"
                              >
                                {isLoginLoading
                                  ? "Getting you in..."
                                  : "Connexion"}
                              </Button>
                            }
                          </div>
                          <div className="col-6">
                            <Link className="" to="/candidature">
                              {" "}
                              créer un compte
                            </Link>
                          </div>
                        </div>
                        {loginError?.error && (
                          <Stack sx={{ width: "100%" }} spacing={2}>
                            <Alert severity="error">
                              {" "}
                              {loginError?.message}{" "}
                            </Alert>
                          </Stack>
                        )}
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

export default SignIn;
