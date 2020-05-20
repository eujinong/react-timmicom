import React from 'react';
import design from '../../images/design.svg';
import project from '../../images/project.svg';
import engineering from '../../images/engineering.svg';

class Services extends React.Component {
  render() {
    return (
      <div className="section-services py-7 py-md-12">
        <div className="container">
          <div className="row d-flex flex-wrap-reverse ">
            <div className="col-md-6 d-flex flex-wrap px-md-10 d-inline justify-content-between" >
              <div className="large-icon px-md-3 pl-md-5 d-inline">
                <div dangerouslySetInnerHTML={{ __html: design }}></div>
                <p className="mt-3 text-danger text-center">Design</p>
              </div>
              <div className="large-icon px-md-3 pl-md-5 pt-lg-10">
                <div className="mt-lg-10" dangerouslySetInnerHTML={{ __html: project }} ></div>
                <p className="mt-3 text-pink text-center mb-0">Project</p>
                <p className="text-pink text-center mb-lg-0">management</p>
              </div>
              <div className="large-icon end-icon px-md-3 pl-md-5 mr-4" >
                <div dangerouslySetInnerHTML={{ __html: engineering }}></div>
                <p className="mt-3 text-indigo text-center mb-0">Expertise /</p>
                <p className="text-indigo text-center">Consulting</p>
              </div>
              <div className="d-block d-md-none mt-2">
                <a className="link" href="#">Get in touch</a>
              </div>
            </div>
            <div className="col-md-6 align-items-center d-flex">
              <div className="text-dark pr-md-10">
                <h4>Services overview</h4>
                <p className="mb-5">Our designers have a wide range of experience, and are skilled in Internal and External Design, including Legacy Wideband, Copper, Fibre, SDH and Packet technologies, and solidly supported by five former Telstra staff who held senior roles in Design, Project Management, and Engineering.</p>
                <div className="d-none d-md-inline">
                  <a className="link" onClick={this.props.onContactClick}>
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Services.defaultProps = {
  onContactClick: () => {}
};

export default Services;
