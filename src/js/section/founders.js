import React from 'react';
import hexagon from '../../images/hexagon.svg';

const Founders = () => (
  <div className="section-founders bg-light py-6 py-md-10">
    <div className="container">
      <h4 className="pt-3 pb-5">Founders</h4>
      <div className="row">
        <div className="col-md-6 pr-md-10">
          <img className="photo mb-8" src={require('./../../images/tim.png')}/>
          <h5>Tim Milfull</h5>
          <p className="py-4 pr-md-4">Tim Milfull has been working in the telecommunications industry since the introduction of fibre optics in the 1980s. After a grounding in large-scale fibre hierarchies, he worked with Telstra International, advising Reliance Telecommunications as they rolled out their 80,000km fibre network across the Indian subcontinent. A decade in higher degree research in the education and creative industries sectors followed, before Tim returned to telecommunications and co-founded timmicom.</p>
          <div className="mb-4">
            <a className="link" href="https://www.linkedin.com/in/tim-milfull-50478324/">Learn more about Tim</a>
          </div>
        </div>
        <div className="col-md-6 pl-md-10">
          <img className="photo mb-8" src={require('./../../images/duncan.png')}/>
          <h5>Duncan Goodridge</h5>
          <p className="py-4">After two decades establishing and nurturing small and medium-sized businesses, and engaging in property development and personal development training, Duncan Goodridge decided to explore entrepreneurial business practices in a Masters Degree through the University of Adelaide. His research there, along with his innovative training methodologies, have been applied directly into the co-founding and ongoing expansion of timmicom.</p>
          <div className="mb-4">
            <a className="link" href="https://www.linkedin.com/in/duncan-goodridge-7a1aa616a/" >Learn more about Duncan</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Founders;
