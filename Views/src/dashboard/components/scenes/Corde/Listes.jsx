import React, { useState, useContext, useEffect, Fragment } from "react";
import Modal from "react-bootstrap/Modal";
import { Box, Avatar, useTheme } from "@mui/material";
import { tokens } from "./../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import TitlePage from "../TitlePage";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import { getRequest, hostUrl } from "../../../../utils/Request_Http/Resquest";
import { AuthContext } from "../../../../utils/Context/AuthContext";
import avatar from "./../../../../assets/img/userIcon2.png";
import Actions from "./Actions";
import MyStartUp from "./MyStartUp";

function Listes() {
  const { user } = useContext(AuthContext);
  const [dataCohorte, setDataCohorte] = useState([]);
  const [startUpInfos, setStartUpInfos] = useState([]);

  useEffect(() => {
    const getdataCohorte = async () => {
      const responseCohorte = await getRequest(
        `${hostUrl}/cohorte/all/${user.id}`
      );
      setDataCohorte(responseCohorte);

      const startUpInfos = await getRequest(`${hostUrl}/startUp/all`);
      setStartUpInfos(startUpInfos);
    };
    getdataCohorte();
  }, [user]);

  const Team = ({ titre }) => {
    const [dataCohorteMembers, setDataCohorteMembers] = useState([]);
    const [id, setID] = useState("");
    const [nom, setNom] = useState("");
    const [modalShow, setModalShow] = React.useState(false);
    const handleOnActions = (id, nom) => {
      setModalShow(true);
      setID(id);
      setNom(nom);
    };
    useEffect(() => {
      const getdataCohorteMembres = async () => {
        const responseCohorteMembers = await getRequest(
          `${hostUrl}/souscription/all/${titre}`
        );
        setDataCohorteMembers(responseCohorteMembers);
      };
      getdataCohorteMembres();
    }, []);
    console.log("Cohorte Membre", dataCohorteMembers);
    function MyVerticallyCenteredModal(props) {
      const id = props.id;
      const nom = props.nom;
      console.log("ID :", id);
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Entreprise {nom}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MyStartUp id={id} />
          </Modal.Body>
        </Modal>
      );
    }

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
      {
        field: "id",
        headerName: "Avatar",
        width: 60,
        renderCell: (params) => <Avatar src={avatar} />,
        sortable: false,
        filterable: false,
      },
      { field: "ID_CEO", headerName: "ID_CEO" },
      {
        field: "nom",
        headerName: "CEO",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "ceoEmail",
        headerName: "Email",
        flex: 1,
      },
      {
        field: "statut",
        headerName: "Etat",
        flex: 1,
      },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        width: 150,
        renderCell: (params) => <Actions {...{ params }} />,
      },
    ];

    return (
      <Box>
        <Box
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid
            rows={dataCohorteMembers}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          id={id}
          nom={nom}
        />
      </Box>
    );
  };

  console.log(user);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [isLancer, setLancer] = useState(false);
  const [periode, setPeriode] = useState({
    dateDebut: "",
    dateFin: "",
    id: `${user.id}`,
  });
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleOnLance = (e) => {};
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOnPeriode = (e) => {
    setPeriode({ ...periode, [e.target.name]: e.target.value });
  };

  console.log(dataCohorte);

  return (
    <section id="main" className="main">
      <TitlePage page="Creation Cohorte" />
      <div className="container py-1 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div
              className=""
              style={{ borderRadius: "0.5rem", backgroundColor: "#f7e9e9" }}
            >
              <div className="row g-0 justify-content-center align-items-center">
                <div className="col col-lg d-flex align-items-center">
                  <div className="card-body px-3 px-lg-3 text-black">
                    <div>
                      {dataCohorte.map((Element) => {
                        return (
                          <Accordion
                            className="mb-3"
                            key={Element.id}
                            expanded={expanded === `panel${Element.id}`}
                            onChange={handleChange(`panel${Element.id}`)}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1bh-content"
                              id="panel1bh-header"
                              className="justify-content-beetwen"
                            >
                              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                                <Typography sx={{ color: "text.secondary" }}>
                                  <Typography
                                    sx={{ fontStyle: "bold", color: "#000" }}
                                  >
                                    Titre
                                  </Typography>
                                  {Element.titre}
                                </Typography>
                              </Typography>

                              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                                <Typography sx={{ color: "text.secondary" }}>
                                  <Typography
                                    sx={{ fontStyle: "bold", color: "#000" }}
                                  ></Typography>
                                </Typography>
                              </Typography>

                              <Typography sx={{ color: "text.secondary" }}>
                                <Typography
                                  sx={{ fontStyle: "bold", color: "#000" }}
                                >
                                  Times
                                </Typography>
                                {isLancer ? (
                                  <>
                                    <span>Debut:{Element.dateDebut}</span>{" "}
                                    <br />
                                    <span>Fin:{Element.dateFin}</span>
                                  </>
                                ) : (
                                  "00h:00:00"
                                )}
                              </Typography>
                            </AccordionSummary>
                            <Divider></Divider>
                            <AccordionDetails>
                              <Team titre={Element.titre} />
                              <Divider></Divider>
                              <div className="row mt-4 d-flex justify-content-center align-items-center">
                                <div className="col text-center">
                                  <Button
                                    className="mx-4"
                                    size="small"
                                    variant="outlined"
                                  >
                                    Update
                                  </Button>
                                  {isLancer ? (
                                    <Button
                                      className="mx-4"
                                      size="small"
                                      variant="outlined"
                                    >
                                      Annuler
                                    </Button>
                                  ) : (
                                    <Fragment>
                                      <Button
                                        onClick={handleClickOpen}
                                        className="mx-4"
                                        size="small"
                                        variant="outlined"
                                      >
                                        Lancer
                                      </Button>

                                      <Dialog
                                        style={{
                                          backgroundColor: "rgb(0,0,0,0.8)",
                                        }}
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                          component: "form",
                                          onSubmit: (event) => {
                                            event.preventDefault();
                                            const formData = new FormData(
                                              event.currentTarget
                                            );
                                            const formJson = Object.fromEntries(
                                              formData.entries()
                                            );
                                            const email = formJson.email;
                                            console.log(email);
                                            handleClose();
                                          },
                                        }}
                                      >
                                        <DialogTitle>Période</DialogTitle>
                                        <DialogContent>
                                          <DialogContentText>
                                            Veuillez choisir la Période de la
                                            corhorte
                                          </DialogContentText>
                                          <TextField
                                            autoFocus
                                            required
                                            sx={{ margin: "3px" }}
                                            margin="dense"
                                            id="periode"
                                            name="dateDebut"
                                            label="Debut"
                                            type="text"
                                            size="small"
                                            placeholder="jj/mm/aaaa"
                                            variant="standard"
                                            value={periode.dateDebut}
                                            onChange={handleOnPeriode}
                                          />
                                          <TextField
                                            autoFocus
                                            required
                                            sx={{ margin: "3px" }}
                                            margin="dense"
                                            id="periode"
                                            name="dateFin"
                                            label="Fin"
                                            type="text"
                                            size="small"
                                            placeholder="jj/mm/aaaa"
                                            variant="standard"
                                            value={periode.dateFin}
                                            onChange={handleOnPeriode}
                                          />
                                        </DialogContent>
                                        <DialogActions>
                                          <Button onClick={handleClose}>
                                            Annuler
                                          </Button>
                                          <Button
                                            type="submit"
                                            onClick={handleOnLance}
                                          >
                                            Lancer
                                          </Button>
                                        </DialogActions>
                                      </Dialog>
                                    </Fragment>
                                  )}
                                </div>
                              </div>
                            </AccordionDetails>
                          </Accordion>
                        );
                      })}
                    </div>
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

export default Listes;
