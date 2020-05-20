import React from 'react';
import {
  Hero, Mission, Getting, Service, Founders, Connection, Footer, ContactModal, PrivacyModal
} from '../section';
import ThankyouModal from '../section/thankyou-modal';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isContactModalOpen: false,
      isPrivacyModalOpen: false,
      isThankyouModalOpen: false
    };

    if (window.location.hash && window.location.hash === '#thanks') {
      this.state.isThankyouModalOpen = true;
    }
  }

  handleContactSubmit(values) {
    console.log(values);
  }

  handleContactModalToggle() {
    this.setState({
      isContactModalOpen: !(this.state.isContactModalOpen)
    });
  }

  handlePrivacyClick(event) {
    event.preventDefault();
    this.setState({
      isPrivacyModalOpen: true
    });
  }

  handlePrivacyModalToggle() {
    this.setState({
      isPrivacyModalOpen: !(this.state.isPrivacyModalOpen)
    });
  }

  handleThankyouModalToggle() {
    this.setState({
      isThankyouModalOpen: !(this.state.isThankyouModalOpen)
    });
  }

  render() {
    const {
      state
    } = this;

    return (
      <div>
        <Hero onContactClick={this.handleContactModalToggle.bind(this)} />
        <Mission />
        <Getting />
        <Service onContactClick={this.handleContactModalToggle.bind(this)} />
        <Founders />
        <Connection onContactClick={this.handleContactModalToggle.bind(this)} />
        <ContactModal
          isOpen={state.isContactModalOpen}
          onToggle={this.handleContactModalToggle.bind(this)}
          onSubmit={this.handleContactSubmit.bind(this)}
        />
        <ThankyouModal
          isOpen={state.isThankyouModalOpen}
          onToggle={this.handleThankyouModalToggle.bind(this)}
        />
        <PrivacyModal
          isOpen={state.isPrivacyModalOpen}
          onToggle={this.handlePrivacyModalToggle.bind(this)}
        />
        <Footer onPrivacyClick={this.handlePrivacyClick.bind(this)} />
      </div>
    );
  }
}
