import React from 'react';


class Getting extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  handleVideoPlay() {
    const video = this.videoRef.current;
    video.currentTime = 9.5;
    video.play();
  }

  render() {
    return (
      <div className="section-getting py-3">
        <div className="container">
          <div className="row d-flex flex-wrap-reverse align-items-center">
            <div className="col-lg-4 py-md-10">
              <div className="py-6 py-md-10 text-white" style={{ maxWidth: '401px' }}>
                <h4 className="">Getting it right</h4>
                <p className="mb-0">
                  timmicom consistently delivers a
                  {' '}
                  <b className="text-info">less than 5% </b>
                  error rate, which is
                  {' '}
                  <b className="text-danger">15% better</b>
                  {' '}
                  than industry average. We believe in working smarter and harder to create the most optimised and efficient outcomes.
                </p>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-center">
              <div className="getting-video">
                <video playsInline autoPlay muted ref={this.videoRef} onEnded={this.handleVideoPlay.bind(this)}>
                  <source src={require('../../videos/graph.mp4')} type="video/mp4" />
                  <source src={require('../../videos/graph.webm')} type="video/webm" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Getting;
