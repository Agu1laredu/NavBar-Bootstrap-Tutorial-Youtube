import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ textAlign: "justify", fontWeight: 800, fontFamily: "Lobster" }}
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{
            textAlign: "justify",
            fontWeight: 800,
            fontFamily: "Lobster",
          }}
        >
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ textAlign: "justify", fontWeight: 800, fontFamily: "Lobster" }}
      >
        {props.content.map((item, index) => (
          <li key={index.id} style={{ margin: "20px 0" }}>
            {item}
          </li>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
