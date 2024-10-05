import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField'
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import Modal from '@mui/material/Modal';
import concept from "../../assets/img/entreprenariat/concep.jpg";
import creaM from "../../assets/img/entreprenariat/creaM.jpg";
import MVP from "../../assets/img/entreprenariat/mvp.png";
import prototype from "../../assets/img/entreprenariat/prototype.jpg";
import { AuthContext } from '../../utils/Context/AuthContext';
import { Loader } from '../../utils/Loader/Loader';
import { PostRequest, hostUrl } from '../../utils/Request_Http/Resquest';

function Onboarding() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);

    const [open4, setOpen4] = React.useState(false);
    const handleOpen4 = () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [isLoading, setIsLoginLoading] = useState(false);
    const [typeAlert, setTypeAlert] = useState("");
    const [message, setMessage] = useState(null);
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const [data, setData] = useState({
        ID_Ceo:`${user.id}`,
        presentationCeo: "",
        ceoEmail: `${user.email}`,
        nom: "",
        siteWeb: "",
        description: "",
        choix: "",
        phaseFinancement: "",
        partenaire: "",
        lienYoutube: ""
    });
    const HandleOnchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    console.log(data)
    const handleOnsubmit = async (e) => {
        e.preventDefault();
        setIsLoginLoading(true);
        const response = await PostRequest(
            `${hostUrl}/startUp`,
            JSON.stringify(data)
        );
        setIsLoginLoading(false);
        if (response.error) {
            setTypeAlert("error");
            setMessage("Oups il veuillez verifier votre connexion");
        } else {
            setTypeAlert("success");
            setMessage("Votre startUp a été enregister avec succes");
            setTimeout(() => {
                navigate(`/dashboard/${user.role}`);
            }, 2000)
        }

    }
    return (
        <section className="h-100" style={{ backgroundColor: '#5dc7ce' }}>
            <div className="container py-1 h-100">
                <div className="row  d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-9">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0 justify-content-center align-items-center">
                                <div className="col-md-12 col-lg-10 d-block align-items-center">
                                    <div className='row'>
                                        <div className="card-body p-4 p-lg-5 text-black col-12">
                                            <h2 className='text-center text-decoration-underline'>
                                                PARCOURS ENTREPRENEUR <br />HOLIHUB
                                            </h2>
                                            <hr />
                                        </div>

                                        <div className='d-flex col-12 '>
                                            <ol className='col-12'>
                                                <li className='mb-5 p-0'>
                                                    <h6 className='mb-4'>Présentez-vous CEO</h6>
                                                    <div className='row'>
                                                        <div className='col-12 align-items-center justify-content-center'>
                                                            <TextField
                                                                id="filled-textarea"
                                                                placeholder="Description"
                                                                multiline
                                                                variant="filled"
                                                                rows={4}
                                                                name="presentationCeo"
                                                                value={data.presentationCeo}
                                                                onChange={HandleOnchange}
                                                                fullWidth={true}
                                                            />
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className='mb-5'>
                                                    <h6 className='mb-4'>
                                                        Expliquez votre idée ou votre démarrage
                                                    </h6>
                                                    <p> Il n’est jamais trop tôt pour commencer avec nous.
                                                        Si vous avez une idée d’entreprise, nous avons simplement
                                                        besoin d’un nom de travail pour votre projet et d’une description
                                                        de votre solution. Plus vous partagerez d’informations, mieux nous
                                                        comprendrons votre vision.</p>
                                                    <div className='row'>
                                                        <div className='col-12 mb-3'>
                                                            <TextField
                                                                id="filled-textarea"
                                                                label="NOM DE LA START-UP OU PROJETS"
                                                                multiline
                                                                variant="filled"
                                                                name="nom"
                                                                value={data.nom}
                                                                onChange={HandleOnchange}
                                                                rows={1}
                                                                fullWidth={true}
                                                            />
                                                        </div>
                                                        <div className='col-12 mb-3'>
                                                            <TextField
                                                                id="filled-textarea"
                                                                label="SITE WEB DE LA START-UP OU PROJETS"
                                                                multiline
                                                                variant="filled"
                                                                name="siteWeb"
                                                                value={data.siteWeb}
                                                                onChange={HandleOnchange}
                                                                rows={1}
                                                                fullWidth={true}
                                                            />
                                                        </div>
                                                        <div className='col-12 '>
                                                            <TextField
                                                                id="filled-textarea"
                                                                label="DESCRIPTION  DE LA START-UP OU PROJETS"
                                                                multiline
                                                                variant="filled"
                                                                name="description"
                                                                value={data.description}
                                                                onChange={HandleOnchange}
                                                                rows={4}
                                                                fullWidth={true}
                                                            />
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className='mb-5'>
                                                    <h6 className='mb-4'>
                                                        Expliquez votre idée ou votre démarrage
                                                    </h6>
                                                    <p>Chaque entreprise se développe à un rythme différent. <br />
                                                        Aidez-nous à comprendre où vous vous trouvez actuellement dans votre parcours.<br />
                                                        Quelle étape de développement décrit le mieux votre démarrage ou projet ?
                                                    </p>

                                                    <div className='row'>
                                                        <div className='col-12 mb-3'>
                                                            <Button onClick={handleOpen1}>
                                                                <img src={concept} alt='' width={100} height={80} />

                                                            </Button>
                                                            <Modal
                                                                open={open1}
                                                                onClose={handleClose1}
                                                                aria-labelledby="parent-modal-title"
                                                                aria-describedby="parent-modal-description"
                                                            >
                                                                <Box sx={{ ...style, width: 400 }}>
                                                                    <h2 id="parent-modal-title" className='text-center'>CONCEPTION DE CONCEPT</h2>
                                                                    <p id="parent-modal-description">
                                                                        La conception de logiciel met en oeuvre
                                                                        tout un ensemble d'activités qui, à partir d'une demande
                                                                        d'informatisation d'un processus (demande qui peut aller
                                                                        de la simple question orale jusqu'au cahier des charges complet),
                                                                        permettant la conception, l'écriture et la mise au point d'un logiciel
                                                                        (et donc de programmes informatiques) jusqu'à sa livraison au demandeur.
                                                                    </p>

                                                                </Box>
                                                            </Modal>

                                                            <Button onClick={handleOpen}>
                                                                <img src={prototype} alt='' width={100} height={80} />
                                                            </Button>
                                                            <Modal
                                                                open={open}
                                                                onClose={handleClose}
                                                                aria-labelledby="parent-modal-title"
                                                                aria-describedby="parent-modal-description"
                                                            >
                                                                <Box sx={{ ...style, width: 400 }}>
                                                                    <h2 id="parent-modal-title" className='text-center'>PROTOTYPE</h2>
                                                                    <p id="parent-modal-description">
                                                                        Le prototypage logiciel (Software Prototyping) se réfère
                                                                        à l'ensemble des activités de fabrication de prototype pour les logiciels
                                                                    </p>

                                                                </Box>
                                                            </Modal>

                                                            <Button onClick={handleOpen2}>
                                                                <img src={MVP} alt='' width={100} height={80} />
                                                            </Button>
                                                            <Modal
                                                                open={open2}
                                                                onClose={handleClose2}
                                                                aria-labelledby="parent-modal-title"
                                                                aria-describedby="parent-modal-description"
                                                            >
                                                                <Box sx={{ ...style, width: 400 }}>
                                                                    <h2 id="parent-modal-title" className='text-center'>MVP SUR LE MARCHÉ</h2>
                                                                    <p id="parent-modal-description">
                                                                        Tout le monde peut lancer un produit sur le marché mais seuls
                                                                        ceux qui créent quelque chose d’unique, d’utile, de personnalisable
                                                                        réussissent à pérenniser leur offre. Pour optimiser les chances de
                                                                        réussite de leurs projets, les startups utilisent le Produit Minimum Viable.
                                                                    </p>

                                                                </Box>
                                                            </Modal>

                                                            <Button onClick={handleOpen3}>
                                                                <img src={creaM} alt='' width={100} height={80} />
                                                            </Button>
                                                            <Modal
                                                                open={open3}
                                                                onClose={handleClose3}
                                                                aria-labelledby="parent-modal-title"
                                                                aria-describedby="parent-modal-description"
                                                            >
                                                                <Box sx={{ ...style, width: 400 }}>
                                                                    <h2 id="parent-modal-title" className='text-center'>CRÉATION D'UN MVP</h2>
                                                                    <p id="parent-modal-description">
                                                                        Au moment ou vous avez une idée de produit ou service,
                                                                        il est temps de passer à la pratique et développer son mvp.
                                                                        Chaque étape doit être définie avec des tâches pertinentes
                                                                        assignés aux membres de l’équipe en fonction des différentes
                                                                        compétences et expertise. Arrêtons-nous maintenant sur chaque étape en détail
                                                                    </p>

                                                                </Box>
                                                            </Modal>

                                                            <Button onClick={handleOpen4}>
                                                                <img src={creaM} alt='' width={100} height={80} />
                                                            </Button>
                                                            <Modal
                                                                open={open4}
                                                                onClose={handleClose4}
                                                                aria-labelledby="parent-modal-title"
                                                                aria-describedby="parent-modal-description"
                                                            >
                                                                <Box sx={{ ...style, width: 400 }}>
                                                                    <h2 id="parent-modal-title" className='text-center'>MARCHÉ ÉTABLI</h2>
                                                                    <p id="parent-modal-description">
                                                                        Marché établi Généralement défini comme un pays dont
                                                                        les marchés financiers et l'économie sont
                                                                        bien développés. Les marchés établis peuvent
                                                                        présenter moins de risques que les marchés émergents
                                                                        ou les marchés frontaliers.
                                                                    </p>

                                                                </Box>
                                                            </Modal>

                                                        </div>
                                                        <div className='col-12 '>
                                                            <FormControl variant="filled" sx={{ marginBottom: "15px" }}>
                                                                <InputLabel id="demo-simple-select-filled-label">Choix</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-filled-label"
                                                                    id="demo-simple-select-filled"
                                                                    type='text'
                                                                    size="small"
                                                                    name="choix"
                                                                    value={data.choix}
                                                                    onChange={HandleOnchange}
                                                                    required
                                                                    sx={{ width: "200px" }}
                                                                >
                                                                    <MenuItem value="">
                                                                        <em>Choix</em>
                                                                    </MenuItem>
                                                                    <MenuItem value="CONCEPTION DE CONCEPT">CONCEPTION DE CONCEPT</MenuItem>
                                                                    <MenuItem value="PROTOTYPE">PROTOTYPE</MenuItem>
                                                                    <MenuItem value="MVP SUR LE MARCHÉ ">MVP SUR LE MARCHÉ </MenuItem>
                                                                    <MenuItem value="CRÉATION D'UN MVP">CRÉATION D'UN MVP </MenuItem>
                                                                    <MenuItem value="MARCHÉ ÉTABLI">MARCHÉ ÉTABLI </MenuItem>
                                                                </Select>
                                                            </FormControl>

                                                        </div>

                                                        <div className='col-12 mb-5'>
                                                            <TextField
                                                                id="filled-textarea"
                                                                label="QUELLE EST LA PHASE DE FINANCEMENT"
                                                                multiline
                                                                variant="filled"
                                                                name="phaseFinancement"
                                                                value={data.phaseFinancement}
                                                                onChange={HandleOnchange}
                                                                rows={1}
                                                                fullWidth={true}
                                                            />
                                                        </div>
                                                        <div className='col-12 mb-5'>
                                                            <p>
                                                                Partagez nous les partenaires  <br />
                                                                essentiels qui participent
                                                                a la réalisation de votre projet
                                                            </p>
                                                            <TextField
                                                                id="filled-textarea"
                                                                label="NOM DU PARTENAIRE"
                                                                multiline
                                                                variant="filled"
                                                                name="partenaire"
                                                                value={data.partenaire}
                                                                onChange={HandleOnchange}
                                                                rows={1}
                                                                fullWidth={true}
                                                            />

                                                        </div>
                                                        <div className='col-12 mb-3'>
                                                            <p>
                                                                Partagez une demonstration de produit <br />
                                                                ou une vidéo de presentation de l'idée
                                                            </p>
                                                            <TextField
                                                                id="filled-textarea"
                                                                label="LIEN YOUTUBE"
                                                                multiline
                                                                variant="filled"
                                                                name="lienYoutube"
                                                                value={data.lienYoutube}
                                                                onChange={HandleOnchange}
                                                                rows={1}
                                                                fullWidth={true}
                                                            />

                                                        </div>
                                                    </div>
                                                </li>

                                                <li className='mb-5'> <h6 className='mb-'> Une dernière chose</h6>
                                                    <p>Avant de terminer, nous aimerions
                                                        comprendre où vous en êtes dans le processus
                                                        de création d’entreprise.</p>
                                                    <div>  <Checkbox {...label} /> Mon entreprise a été constituée en société ou a formé une entité juridique.</div>
                                                    <div>  <Checkbox {...label} /> Mon entreprise n'a pas été constituée en société ou a formé une entité juridique</div>
                                                </li>
                                                <div className='text-center '>
                                                    {isLoading ? (<Loader />) : (
                                                        <Button onClick={handleOnsubmit} variant="contained" color="success">
                                                            Envoyer
                                                        </Button>
                                                    )}

                                                </div>
                                                <div className='pt-1'>
                                                    <Alert severity={typeAlert}> {message} </Alert>
                                                </div>
                                            </ol>
                                        </div>


                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Onboarding;
