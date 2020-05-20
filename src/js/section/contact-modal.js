import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Button from '../components/button';

class ContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  componentWillReceiveProps(props) {
    if (props.isOpen) {
      document.body.classList.add('modal-contact-open');
    } else {
      document.body.classList.remove('modal-contact-open');
    }
  }

  handleChange(name, event) {
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      state,
      props
    } = this;

    props.onSubmit({
      name: state.name,
      email: state.email,
      message: state.message
    });
  }

  render() {
    const {
      state,
      props
    } = this;
    return (
      <Modal isOpen={props.isOpen} toggle={props.onToggle} className="modal-dialog-contact" centered>
        <ModalHeader toggle={props.onToggle}>
          <span className="h3 h1-md">Let’s get connected.</span>
          <div className="font-size-base font-weight-normal">
            Drop us a line and we’ll get back to you shortly.
          </div>
        </ModalHeader>
        <ModalBody>
          <form method="post" action="https://formspree.io/admin@timmicom.net">
            <input type="hidden" name="_cc" value="dev@weareflip.com" />
            <input type="hidden" name="_next" value={`${window.location.href.replace(/\/$/g, '')}/#thanks`} />
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input
                type="name"
                name="name"
                id="name"
                className="form-control"
                value={state.name}
                required
                onChange={this.handleChange.bind(this, 'name')} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                value={state.email}
                required
                onChange={this.handleChange.bind(this, 'email')} />
            </div>
            <div className="form-group">
              <label htmlFor="message">What do you want to tell us?</label>
              <textarea
                name="message"
                id="message"
                className="form-control"
                value={state.message}
                required
                rows="6"
                onChange={this.handleChange.bind(this, 'message')} />
            </div>
            <div>
              <button type="submit" className="btn btn-light" value="Send">
                <div className="btn-outer">
                  <div className="btn-inner">
                    Send →
                  </div>
                </div>
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    );
  }
}

ContactModal.defaultProps = {
  isOpen: true,
  toggle: () => {},
  className: 'modal-contact'
};

export default ContactModal;
