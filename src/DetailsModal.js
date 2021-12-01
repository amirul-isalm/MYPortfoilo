import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {  Col, Container, Modal, Row } from 'react-bootstrap';
import "./Modal.css"

const DetailsModal = ({ show, setShow, myProject }) => {
    console.log(myProject)
    const { name ,livesite,clientCode,photo1,photo2,photo3,discription,photo4,tecnology} = myProject;
  return (
    <Modal
      show={show}
      fullscreen={true}
      onHide={() => setShow(false)}
      dialogClassName="modalWidh"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header
        className="bg-dark text-info"
        closeVariant="white"
        closeButton
      >
        <Modal.Title
          className="fw-bold "
          id="example-custom-modal-styling-title"
        >
          {name}
          <br />

          <p> Technology Use: {tecnology}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <Container>
          <Row>
            <Col sm>
              <Row className="imgRow">
                {" "}
                <img
                  className="img-fluid descriptionImage mb-2 rounded-3"
                  src={photo1}
                  alt=""
                />{" "}
              </Row>
              <Row className="imgRow">
                {" "}
                <img
                  className="img-fluid descriptionImage rounded-3"
                  src={photo4}
                  alt=""
                />{" "}
              </Row>
            </Col>
            <Col sm>
              <Row className="imgRow">
                <img
                  className="img-fluid descriptionImage mb-3 rounded-3"
                  src={photo2}
                  alt=""
                />
              </Row>
              <Row className="imgRow">
                <img
                  className="img-fluid descriptionImage rounded-3"
                  src={photo3}
                  alt=""
                />
              </Row>
            </Col>
          </Row>
          <div className="text-center my-3">
            <a target="_blank" href={livesite}>
              <button className="about btn pointer my-2">
                Preview <FontAwesomeIcon icon={faDesktop} />
              </button>
            </a>
            <a target="_blank" href={clientCode}>
              <button className="about btn pointer my-2">
                Code <FontAwesomeIcon icon={faGithub} />
              </button>
            </a>
          </div>
        </Container>
<h3>Description</h3>
        <p>{discription}</p>
      </Modal.Body>
    </Modal>
  );
};

export default DetailsModal;