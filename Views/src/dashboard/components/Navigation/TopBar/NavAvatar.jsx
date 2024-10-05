import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthContext } from '../../../../utils/Context/AuthContext';
import { Link } from 'react-router-dom';

function NavAvatar() {
  const { user, logoutUser } = useContext(AuthContext);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (

    <Box sx={{ flexGrow: 0, marginRight: "10px" }}>
      <Tooltip title="Parametres">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >

        <MenuItem key="Profile" onClick={handleCloseUserMenu}>
          {user.role === "ceo" ? (<Link to={`/dashboard/ceo/profile/${user.id}`} className='nav-link text-center'>Profile</Link>)
            : (<Link to={`/dashboard/incubateur/profile/${user.id}`} className='nav-link text-center'>Profile</Link>)}

        </MenuItem>
        <MenuItem key="Compte" onClick={handleCloseUserMenu}>
          {user.role === "ceo" ? (<Link to={`/dashboard/ceo/compte/${user.id}`} className='nav-link text-center'>Compte</Link>)
            : (<Link to={`/dashboard/incubateur/compte/${user.id}`} className='nav-link text-center'>Compte</Link>)}

        </MenuItem>
        <MenuItem key="Deconnexion" onClick={logoutUser}>
          <Typography textAlign="center">Deconnexion</Typography>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default NavAvatar;
