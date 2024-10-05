import React, { useContext, useEffect, useState } from "react";
import MessageIcon from "@mui/icons-material/Message";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import {
  hostUrl,
  getRequest,
  PostRequest,
} from "../../../../utils/Request_Http/Resquest";
import { AuthContext } from "../../../../utils/Context/AuthContext";

function NavMessage() {
  const { user, logoutUser } = useContext(AuthContext);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  useEffect(() => {
    const getMessages = async () => {
      const response = await PostRequest(`${hostUrl}/message`);
      setMessages(response);
    };
    getMessages();
  }, []);
  console.log(messages);
  return (
    /*
        <li className='nav-item dropdown'>
            <a className='nav-link nav-icon' href='#' data-bs-toggle="dropdown">
                <MessageIcon />
                <span className='badge bg-success badge-number'>3</span>
            </a>
            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
                <li className='dropdown-header'>
                    Vous avez 2 messages
                    <a href='#'>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>

                <li className='message-item'>

                    <i className='bi bi-messenger'></i>
                    <div>
                        <h4> Message</h4>
                        <p>Nous vous informons</p>
                        <p> 30min</p>
                    </div>
                </li>
                <li className='message-item'>
                    <a href='#'> Tous les messages</a>
                </li>
            </ul>
       </li>
*/
    <Box sx={{ flexGrow: 0, marginRight: "10px" }}>
      <Tooltip title="Parametres">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <MessageIcon />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {/*messages.map(element=>{
                    if(element.ID_Destinateur){
                        return(
                    <MenuItem key="Profile" onClick={handleCloseUserMenu}>
                    <i className='bi bi-messenger'></i>
                    <div>
                        <h6> Message</h6>
                        <p>{element.message}</p>
                        <p> 30min</p>
                    </div>
                    </MenuItem>
                        )
                    }
                })*/}

        <hr className="dropdown-divider" />
        <MenuItem key="Compte" onClick={handleCloseUserMenu}>
          <i className="bi bi-messenger"></i>
          <div>
            <h6> Message</h6>
            <p>Nous vous informons</p>
            <p> 30min</p>
          </div>
        </MenuItem>
        <MenuItem key="Deconnexion">
          <i className="bi bi-messenger"></i>
          <div>
            <h6> Message</h6>
            <p>Nous vous informons</p>
            <p> 30min</p>
          </div>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default NavMessage;
