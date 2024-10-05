import React from 'react';
import holijob from '../../../../assets/img/entreprenariat/holijob.png'
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal';
import PortfolioDetails from './PortfolioDetails';


function WrapIncub({ data }) {
    const WrapDiv = styled.div`
    backgroundColor:"red",
    border:"2px",

    
    `
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Details {data.nom}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PortfolioDetails data={data} />
                </Modal.Body>

            </Modal>
        );
    }
    const [modalShow, setModalShow] = React.useState(false);
    return (

        <WrapDiv className='col-md-4 p-2 text-center bg-body-secondary'>

            <img src={holijob} alt='image' className="img-fluid rounded-5 mb-2" />
            <Button variant="primary" onClick={() => setModalShow(true)}>
                souscrire
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </WrapDiv>

    )
}

export default WrapIncub;
