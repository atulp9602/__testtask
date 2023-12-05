import React from "react";
import Modal from "react-bootstrap/Modal";

const ProductModal = (props) => {
  const { isOpen, closeModal, product } = props;
  const { title, description, image } = product;

  return (
    <Modal
      show={isOpen}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="border-0">
          Product description
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="card mb-3 w-100 h-100 p-2 border-0">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
