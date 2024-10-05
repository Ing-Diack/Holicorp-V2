import React, { useContext } from 'react'
import './logo.css';
import logo from './../../../../assets/img/icone.jpeg';
import { AuthContext } from '../../../../utils/Context/AuthContext';
import MenuIcon from '@mui/icons-material/Menu';

function Logo() {
  const handleToggleSideBar = () => {
    document.body.classList.toggle('toggle-sidebar')
  };
  const { user } = useContext(AuthContext);
  console.log(user)
  return (

    <div className='d-flex align-items-center justify-content-between'>
      <a href='' className='logo d-flex align-items-center'>
        {/** img src  */}
        <span className='d-none d-lg-block'>
          <img src={logo} alt='logo' />
          <span className='text-uppercase fs-6'> {user.role} {user.nom}</span>
        </span>
      </a>
      <MenuIcon style={{ cursor: "pointer", fontSize: "30px" }} onClick={handleToggleSideBar} />


    </div>
  )
}

export default Logo;
