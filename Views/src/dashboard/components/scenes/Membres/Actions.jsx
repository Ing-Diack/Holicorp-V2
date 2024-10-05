import { Box, IconButton, Tooltip } from "@mui/material";
import { Edit } from "@mui/icons-material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  hostUrl,
  DeleteRequest,
} from "../../../../utils/Request_Http/Resquest";

const Actions = ({ params }) => {
  const deleteRoom = async (room) => {
    const response = await DeleteRequest(
      `${hostUrl}/utilisateur/supprimer/${room.id}`
    );
    if (response.error) {
      console.log(response.message);
    } else {
      console.log(response);
      console.log(room.id);
    }
  };
  return (
    <Box>
      <Tooltip title="Modifier">
        <IconButton onClick={() => {}}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Supprimer">
        <IconButton onClick={() => deleteRoom(params.row)}>
          <DeleteForeverIcon style={{ color: "red" }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Actions;
