import React, { useState, useContext } from "react";
import TitlePage from "../TitlePage";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Alert from "@mui/material/Alert";
import { PostRequest, hostUrl } from "../../../../utils/Request_Http/Resquest";
import { Loader } from "../../../../utils/Loader/Loader";
import { AuthContext } from "../../../../utils/Context/AuthContext";

function Creation() {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [Data, setData] = useState({
    idPro: `${user.id}`,
    nomPro: `${user.nom}`,
    titre: "",
    description: "",
    programme: "",
    ETAT: "",
    NB_PARTICIPANT: "",
    NB_INSCRIPTION: "",
    dateDebut: null,
    dateFin: null,
  });
  console.log(Data);
  const [isLoading, setIsLoading] = useState(false);
  const [typeAlert, setTypeAlert] = useState("");
  const [message, setMessage] = useState(null);

  const handleOnSubmitCohorte = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await PostRequest(
      `${hostUrl}/cohorte`,
      JSON.stringify(Data)
    );
    setIsLoading(false);
    console.log(response);
    if (response.error) {
      setTypeAlert("error");
      setMessage("Oups il veuillez verifier votre connexion");
    } else {
      setTypeAlert("success");
      setMessage(`Votre Cohorte "${Data.titre}" a été crée avec succes`);
    }
  };

  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };
  return (
    <section id="main" className="main">
      <TitlePage page="Creation Cohorte" />
      <div className="container py-1 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div
              className="card"
              style={{ borderRadius: "1rem", backgroundColor: "#e4dddd" }}
            >
              <div className="row g-0 justify-content-center align-items-center">
                <div className="col col-lg d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <Box sx={{ "& > :not(style)": { m: 1 }, width: "500px" }}>
                      <div className="mb-3">
                        <TextField
                          id="filled-multiline-static"
                          label="Titre"
                          multiline
                          name="titre"
                          rows={1}
                          value={Data.titre}
                          onChange={handleChange}
                          variant="filled"
                          fullWidth
                          sx={{ backgroundColor: "#fff" }}
                        />
                      </div>
                      <div className="mb-3">
                        <TextField
                          id="filled-multiline-static"
                          label="Description"
                          multiline
                          name="description"
                          rows={2}
                          value={Data.description}
                          onChange={handleChange}
                          variant="filled"
                          fullWidth
                          sx={{ backgroundColor: "#fff" }}
                        />
                      </div>
                      <div className="row">
                        <div className="col-8">
                          {/*<InputLabel id="demo-simple-select-standard-label">
                              Programmes
                            </InputLabel>*/}
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={Data.programme}
                            name="programme"
                            fullWidth
                            onChange={handleChange}
                            sx={{ backgroundColor: "#fff" }}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value="parcours 1">Programme 1</MenuItem>
                            <MenuItem value="parcours 2">Programme 2</MenuItem>
                            <MenuItem value="parcours 3">Programme 3</MenuItem>
                          </Select>
                        </div>
                        <div className="col-4">
                          {/* <InputLabel id="demo-simple-select-standard-label2"></InputLabel>*/}
                          <Select
                            labelId="demo-simple-select-standard-label2"
                            id="demo-simple-select-standard"
                            value={Data.NB_PARTICIPANT}
                            name="NB_PARTICIPANT"
                            fullWidth
                            onChange={handleChange}
                            sx={{ backgroundColor: "#fff" }}
                          >
                            <MenuItem value="">
                              <em>Nombre Participant</em>
                            </MenuItem>
                            <MenuItem value="10">10</MenuItem>
                            <MenuItem value="20">20</MenuItem>
                            <MenuItem value="30">30</MenuItem>
                            <MenuItem value="40">40</MenuItem>
                            <MenuItem value="50">50</MenuItem>
                            <MenuItem value="60">60</MenuItem>
                          </Select>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        {isLoading ? (
                          <Loader />
                        ) : (
                          <Button
                            onClick={handleOnSubmitCohorte}
                            className="text-center"
                            variant="contained"
                            color="success"
                          >
                            Envoyer
                          </Button>
                        )}
                      </div>
                      <div className="pt-1">
                        <Alert severity={typeAlert}> {message} </Alert>
                      </div>
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

export default Creation;
