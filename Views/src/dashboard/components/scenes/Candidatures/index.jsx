import React, { useState, useContext, useEffect, Fragment } from "react";
import "./../style.css";
import Button from "react-bootstrap/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Popover from "react-bootstrap/Popover";
import TitlePage from "../TitlePage";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { getRequest, hostUrl } from "../../../../utils/Request_Http/Resquest";
import { AuthContext } from "../../../../utils/Context/AuthContext";
import WrapCandidature from "./WrapCandidature";

function Candidatures() {
  const { user } = useContext(AuthContext);
  const [dataCohorte, setDataCohorte] = useState([]);
  const [dataCohorteMembers, setDataCohorteMembers] = useState([]);
  const [startUpInfos, setStartUpInfos] = useState([]);

  useEffect(() => {
    const getdataCohorte = async () => {
      const responseCohorte = await getRequest(`${hostUrl}/cohorte/all`);
      setDataCohorte(responseCohorte);
      const startUpInfos = await getRequest(`${hostUrl}/startUp/all`);
      setStartUpInfos(startUpInfos);
      const responseCohorteMembers = await getRequest(
        `${hostUrl}/souscription/AttenteValid`
      );
      setDataCohorteMembers(responseCohorteMembers);
    };
    getdataCohorte();
  }, []);
  console.log(dataCohorteMembers);
  return (
    <section id="main" className="main">
      <TitlePage page="Candidatures" />
      <div className="container">
        <WrapCandidature data={dataCohorteMembers} />
      </div>
    </section>
  );
}

export default Candidatures;
