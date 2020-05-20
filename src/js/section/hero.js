import React from 'react';
import mail from '../../images/mail.svg';
import close from '../../images/close.svg';
import Button from '../components/button';


class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  handleVideoPlay() {
    const video = this.videoRef.current;
    video.currentTime = 5.5;
    video.play();
  }

  render() {
    return (
      <div className="section-hero">
        <div className="hero-header d-flex justify-content-between">
          <a className="hero-logo mt-5" href="/"><img src={require('../../images/logo.png')} alt="Timmicom" /></a>
          <Button onClick={this.props.onContactClick}>
            <span className="d-none d-md-block">Get in touch</span>
            <span className="d-block d-md-none">
              <span className="mail" dangerouslySetInnerHTML={{ __html: mail }} />
              <span className="cross" dangerouslySetInnerHTML={{ __html: close }} />
            </span>
          </Button>
        </div>
        <div className="hero-video text-center">
          <video playsInline autoPlay muted ref={this.videoRef} onEnded={this.handleVideoPlay.bind(this)}>
            <source src={require('../../videos/hero.mp4')} type="video/mp4" />
            <source src={require('../../videos/hero.webm')} type="video/webm" />
          </video>
        </div>
      </div>
    );
  }
}

Hero.defaultProps = {
  onContactClick: () => {}
};

export default Hero;
