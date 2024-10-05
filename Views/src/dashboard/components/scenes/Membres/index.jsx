import React, { useState, useEffect, useContext } from "react";
import "./membre.css";
import Box from "@mui/material/Box";
import PeopleIcon from "@mui/icons-material/People";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AjouterMembre from "./AjouterMembre";
import { AuthContext } from "../../../../utils/Context/AuthContext";
import { hostUrl, getRequest } from "../../../../utils/Request_Http/Resquest";
import TitlePage from "./../TitlePage";
import Listes from "./Listes";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

function Membres() {
  const { user } = useContext(AuthContext);
  const [dataUtilisateur, setDataUtilisateur] = useState([]);
  const getUtilisateurs = async () => {
    const response = await getRequest(
      `${hostUrl}/utilisateur/AllUtilisateurForThisId/${user.id}`
    );
    setDataUtilisateur(response);
  };
  useEffect(() => {
    getUtilisateurs();
  }, []);
  const Card = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <div className="card--container">
        <div className="card">
          <div className="card--cover">
            <PeopleIcon />
          </div>
          <div className="card--title">
            <Button varriant="primary" onClick={() => getUtilisateurs()}>
              MEMBRES
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="card--cover">
            <PersonAddIcon />
          </div>
          <div className="card--title">
            <Button varriant="primary" onClick={handleOpen}>
              AJOUTER
            </Button>
          </div>
        </div>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <AjouterMembre />
            </Box>
          </Modal>
        </div>
      </div>
    );
  };

  return (
    <section id="main" className="main">
      <TitlePage page="Membres" />
      <Card />
      <Listes data={dataUtilisateur} />
    </section>
  );
}

export default Membres;
