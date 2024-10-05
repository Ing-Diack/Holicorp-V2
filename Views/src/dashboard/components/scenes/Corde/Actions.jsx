import React, { useState, useEffect, useContext } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import Alert from "@mui/material/Alert";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import Popover from "react-bootstrap/Popover";
import {
  hostUrl,
  DeleteRequest,
  PostRequest,
  getRequest,
  UpdateRequest,
} from "../../../../utils/Request_Http/Resquest";
import { Loader } from "../../../../utils/Loader/Loader";
import { AuthContext } from "../../../../utils/Context/AuthContext";

const Actions = ({ params }) => {
  const deleteSouscriptionById = async (id) => {
    const response = await DeleteRequest(
      `${hostUrl}/souscription/supprimer/${id}`
    );
    if (response.error) {
      console.log(response.message);
    } else {
      console.log(response);
    }
  };
  const { user } = useContext(AuthContext);
  const [dataCohorte, setDataCohorte] = useState([]);
  useEffect(() => {
    const getdataCohorte = async () => {
      const responseCohorte = await getRequest(`${hostUrl}/cohorte/all`);
      setDataCohorte(responseCohorte);
    };

    getdataCohorte();
  }, []);
  const [comments, setComments] = useState({
    ID_Expediteur: `${user.id}`,
    ID_Destinateur: `${params.row.ID_CEO}`,
    message: "",
    statut: "non_lu",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [typeAlert, setTypeAlert] = useState("");
  const [message, setMessage] = useState(null);

  const handleOnChangeComments = (e) => {
    setComments({ ...comments, [e.target.name]: e.target.value });
  };

  const handleOnSubmitComments = async (ID, ID_Destinateur) => {
    if (comments !== " ") {
      console.log(comments);
      setIsLoading(true);
      const response = await PostRequest(
        `${hostUrl}/message`,
        JSON.stringify({ comments })
      );
      setIsLoading(false);
      if (response.error) {
        setTypeAlert("error");
        setMessage("Oups il veuillez verifier votre connexion");
      } else {
        deleteSouscriptionById(params.row.id);
        setTypeAlert("success");
        setMessage("votre message  a été envoyé avec succes");
      }
    } else {
      setTypeAlert("error");
      setMessage("veuillez saisir le message à envoyer");
    }
  };

  return (
    <Box>
      <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
          <Popover id={`popover-positioned-bottom`}>
            <Popover.Header as="h3">Commentaire</Popover.Header>
            <Popover.Body>
              <div class="form-floating">
                <textarea
                  class="form-control"
                  name="message"
                  value={comments.message}
                  onChange={handleOnChangeComments}
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>
              <div className="pt-1">
                {isLoading ? (
                  <Loader />
                ) : (
                  <button
                    onClick={() => handleOnSubmitComments(params.row.ID_CEO)}
                    className="btn btn-danger btn-sm p-1 mt-3 text-center fw-bold "
                  >
                    Envoyer
                  </button>
                )}
              </div>

              <div>
                <Alert severity={typeAlert}> {message} </Alert>
              </div>
            </Popover.Body>
          </Popover>
        }
      >
        <Tooltip title="Ejecter">
          <IconButton>
            <HighlightOffIcon style={{ color: "red" }} />
          </IconButton>
        </Tooltip>
      </OverlayTrigger>
    </Box>
  );
};

export default Actions;
