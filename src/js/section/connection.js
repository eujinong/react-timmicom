import React from 'react';
import Button from '../components/button';

const Mission = props => (
  <div className="section-connection bg-secondary py-6 py-md-10">
    <div className="container">
      <div className="d-flex justify-content-center">
        <Button className="btn btn-lg" onClick={props.onContactClick}>
          Let's get connected&nbsp;&nbsp;&nbsp;→
        </Button>
      </div>
    </div>
  </div>
);

Mission.defaultProps = {
  onContactClick: () => {}
};

export default Mission;
