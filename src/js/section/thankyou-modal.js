import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Button from '../components/button';

class ThankyouModal extends React.Component {
  componentWillReceiveProps(props) {
    if (props.isOpen) {
      document.body.classList.add('modal-contact-open');
    } else {
      document.body.classList.remove('modal-contact-open');
    }
  }

  render() {
    const {
      props
    } = this;
    return (
      <Modal isOpen={props.isOpen} toggle={props.onToggle} className="modal-dialog-contact" centered>
        <ModalHeader toggle={props.onToggle}>
          <span className="h3 h1-md">Thanks for contacting us.</span>
        </ModalHeader>
        <ModalBody>
          <p>
            Someone will get back to you regarding your message shortly.
          </p>

          <div className="text-center">
            <Button onClick={props.onToggle}>
              Close
            </Button>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

ThankyouModal.defaultProps = {
  isOpen: true,
  className: 'modal-contact',
  onToggle: () => {}
};

export default ThankyouModal;
