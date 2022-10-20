import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ButtonToModal() {
  const [show, setShow] = useState(false);
  const onHide = () => {
    setShow(false);
  };

  return (
    <div className="container-fluid button_wrapper my-4">
      <div className="d-flex justify-content-end">
        <Button
          style={{
            padding: "0.5rem 1rem",
            border: "1px solid white",
            borderRadius: "none",
            fontSize: "1.5rem",
          }}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
}

export default ButtonToModal;
