import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../../../utils/Context/AuthContext';
import userLogo from './../../../assets/img/user.png';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Alert } from "@mui/material";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Loader } from '../../../utils/Loader/Loader';
import { hostUrl, PostRequest } from '../../../utils/Request_Http/Resquest';

import './style.css'
import { useParams, useNavigate, Link } from 'react-router-dom'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};
function ProfileIncubateur() {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState(
        {
            nom: "",
            email: "",
            tel: "",
            siteWeb: "",
            pays: "",
            description: ""
        });
    const { id } = useParams();
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isLoading, setIsLoading] = useState(false);
    const [typeAlert, setTypeAlert] = useState("");
    const [message, setMessage] = useState(null);


    const handleOnChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }
    const handleOnModifyValueValide = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const id = user.id;
        const response = await PostRequest(`${hostUrl}/utilisateur/updateUtilisateur`, JSON.stringify({ id, userData }));
        setIsLoading(false);
        if (response.error) {
            setTypeAlert("error");
            setMessage("Oups il veuillez verifier votre connexion");
        } else {
            setTypeAlert("success");
            setMessage("votre mot de passe a été modifié avec succes");
        }


    }
    console.log(userData);

    return (
        <section id='main' className='main'>
            <div className='container'>
                <div className='row mb-md-3 justify-content-center align-content-center align-items-center'>
                    <div className='col-2'>
                        <img src={userLogo} alt='' className='' width={50} height={50} /> <br />
                        <span>Mon Profil</span>
                    </div>
                    <div className='col-4 text-center'>
                        <span className='fs-5'>Qui êtes vous ?</span> <br />
                        <span style={{fontSize:"11px"}}>{user.description}</span>
                    </div>
                    <div className='col-4'>
                        <span className='fw-bold fs-5'>{user.role} : {user.nom}</span>
                    </div>

                </div>
                <div className='row justify-content-center align-content-center  align-items-center'>
                    <div class="mb-1 row justify-content-center  align-items-center">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Nom:</label>
                        <div class="col-sm-6" style={{ border: "1px solid white", backgroundColor: "#fdfafa" }}>
                            <li className='nav-link py-1' >{user.nom}</li>
                        </div>
                        <div className='col-md-2'></div>
                    </div>
                    <div class="mb-1 row justify-content-center align-items-center">
                        <label for="inputPassword" class="col-sm-2 col-form-label"> Téléphone:</label>
                        <div class="col-sm-6" style={{ border: "1px solid white", backgroundColor: "#fdfafa" }}>
                            <li className='nav-link py-1' >{user.tel}</li>
                        </div>
                        <div className='col-2'></div>
                    </div>
                    <div class="mb-1 row justify-content-center align-items-center" >
                        <label for="inputPassword" class="col-sm-2 col-form-label"> Email :</label>
                        <div class="col-sm-6 py-1" style={{ border: "1px solid white", backgroundColor: "#fdfafa" }}>
                            <li className='nav-link' >{user.email}</li>
                        </div>
                        <div className='col-2'></div>
                    </div>
                    <div class="mb-1 row justify-content-center align-items-center">
                        <label for="inputPassword" class="col-sm-2 col-form-label"> site Web:</label>
                        <div class="col-sm-6" style={{ border: "1px solid white", backgroundColor: "#fdfafa" }}>
                            <li className='nav-link py-1 '><a href={`${user.siteWeb}`} target="_blank" >{user.siteWeb}</a></li>
                        </div>
                        <div className='col-2'></div>
                    </div>
                    <div class="mb-1 row justify-content-center align-items-center">
                        <label for="inputPassword" class="col-sm-2 col-form-label"> Pays :</label>
                        <div class="col-sm-6" style={{ border: "1px solid white", backgroundColor: "#fdfafa" }}>
                            <li className='nav-link py-1  ' > {user.pays}</li>
                        </div>
                        <div className='col-2'></div>
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
                            <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center', marginBottom: '5px' }}>
                                Modification des Infos
                            </Typography>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Nom:</label>
                                <div class="col-sm-10">
                                    <input type="text" value={userData.nom} onChange={handleOnChange} name='nom' class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Email :</label>
                                <div class="col-sm-10">
                                    <input type="text" name='email' value={userData.email} onChange={handleOnChange} class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Téléphone:</label>
                                <div class="col-sm-10">
                                    <input type="text" name='tel' value={userData.tel} onChange={handleOnChange} class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">site Web :</label>
                                <div class="col-sm-10">
                                    <input type="text" name='siteWeb' value={userData.siteWeb} onChange={handleOnChange} class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Pays:</label>
                                <div class="col-sm-10">
                                    <input type="text" name="pays" value={userData.pays} onChange={handleOnChange} class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Description:</label>
                                <div class="col-sm-10">
                                    <textarea type="text" name='description' value={userData.description} onChange={handleOnChange} class="form-control" id="inputPassword" ></textarea>
                                </div>
                            </div>
                            <div className='row align-content-center justify-content-center'>
                                {isLoading ? (<Loader />) : (
                                    <Button varriant="primary" onClick={handleOnModifyValueValide} >Valider</Button>
                                )}

                            </div>
                            <span> <Alert severity={typeAlert}> {message} </Alert></span>
                        </Box>
                    </Modal>
                </div>
                <div className='row align-content-center justify-content-center'>
                    <div className='col-2'>
                        <Button varriant="primary" onClick={handleOpen}>Modifier</Button>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div class="mb-1 row justify-content-center align-items-center">
                        <label for="inputPassword" class="col-sm-3 col-form-label"> Mot de passe Actuel:</label>
                        <div class="col-sm-5" >
                            <input type="password" name='tel' value={userData.tel} onChange={handleOnChange} class="form-control" id="inputPassword" />
                        </div>
                        <div className='col-2'></div>
                    </div>
                    <div class="mb-1 row justify-content-center align-items-center">
                        <label for="inputPassword" class="col-sm-3 col-form-label"> Nouveau mot de passe:</label>
                        <div class="col-sm-5" >
                            <input type="password" name='tel' value={userData.tel} onChange={handleOnChange} class="form-control" id="inputPassword" />
                        </div>
                        <div className='col-2'></div>
                    </div>
                    <div className='row align-content-center justify-content-center'>
                        <div className='col-2'>
                            <Button varriant="primary" onClick={handleOpen}>Modifier</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileIncubateur;
