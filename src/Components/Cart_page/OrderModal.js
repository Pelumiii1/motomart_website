import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import place_order_text from "../../Assets/img/place_order_text.png";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function OrderModal(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const checkValidity = () => {
    if (validated === false) {
      return props.show;
    } else {
      return props.onHide;
    }
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal_wrapper"
      >
        <Modal.Header closeButton style={{ borderBottom: "none" }}>
          <div>
            <img src={place_order_text} alt="" height={60} />
          </div>
        </Modal.Header>

        <div className="my-4" style={{ borderBottom: "1px solid white" }}>
          <div
            className="bg-white"
            style={{
              width: "fit-content",
              padding: "0.1rem 2rem",
            }}
          >
            <p className="text-uppercase text-dark">
              fill in your order details
            </p>
          </div>
        </div>
        <div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="mb-3"
              >
                <Form.Label className="text-white form_font">Name *</Form.Label>
                <Form.Control required type="text" className="form-control" />
                <Form.Control.Feedback>
                  Please enter a name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label className="text-white form_font">Mail</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label className="text-white form_font">
                  Phone Number *
                </Form.Label>
                <Form.Control required type="text" />
                <Form.Control.Feedback>
                  Please enter a phone number
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label className="text-white form_font">
                  Address *
                </Form.Label>
                <Form.Control required type="text" />
                <Form.Control.Feedback>
                  Please enter an address
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label className="text-white form_font">City *</Form.Label>
                <Form.Control required type="text" />
                <Form.Control.Feedback>
                  Please enter a city
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom06">
                <Form.Label className="text-white form_font">
                  State *
                </Form.Label>
                <Form.Control required type="text" />
                <Form.Control.Feedback>
                  Please enter a state
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div className="d-flex justify-content-end">
              <Button
                type="submit"
                className=" btn my-4 btn_in_shopping_cart text-white text-uppercase"
                style={{
                  padding: "0.5rem 1.3rem",
                  border: "0.6px solid white",
                  fontSize: "1.5rem",
                }}
                onClick={() => checkValidity()}
              >
                Send order
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
}

export default OrderModal;
