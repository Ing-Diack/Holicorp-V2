import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Box, Tooltip, useTheme } from "@mui/material";
import { tokens } from "./../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import MyStartUp from "./MyStartUp";
import Actions from "./Actions";

function WrapCandidature({ data }) {
  const Team = ({ mockDataTeam }) => {
    const [id, setID] = useState("");
    const [nom, setNom] = useState("");
    const [modalShow, setModalShow] = React.useState(false);
    const handleOnActions = (id, nom) => {
      setModalShow(true);
      setID(id);
      setNom(nom);
    };

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
      { field: "id", headerName: "ID" },
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
        field: "siteWeb",
        headerName: "PME",
        width: 80,
        renderCell: (params) => (
          <Tooltip title="Visitez l'entreprise !">
            {/**<Avatar src={params.row.uPhoto} /> */}
            <a
              onClick={() => handleOnActions(params.row.ID_CEO, params.row.nom)}
            >
              Cliquez-ici
            </a>
          </Tooltip>
        ),
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
            rows={mockDataTeam}
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

  return (
    <div
      className="row justify-content-center mb-2"
      style={{ backgroundColor: "#e4dddd", borderRadius: "5px" }}
    >
      <Team mockDataTeam={data} />
    </div>
  );
}

export default WrapCandidature;
