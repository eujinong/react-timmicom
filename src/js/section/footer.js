import React from 'react';

import instagram from '../../images/instagram.svg';
import twitter from '../../images/twitter.svg';
import linkedin from '../../images/linkedin.svg';

import weareflip from '../../images/weareflip.svg';

const Footer = props => (
  <div className="site-footer py-6 py-md-8">
    <div className="container">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div>
          <a className="footer-logo" href="/">
            <img src={require('../../images/logo.png')} alt="Timmicom" />
          </a>
        </div>
        <div className="mt-5 d-md-none">
          <ul className="footer-menu">
            <li><a onClick={props.onPrivacyClick} href="/">Your privacy</a></li>
          </ul>
        </div>
        <div className="mt-5 mt-md-0">
          {/*
          <ul className="footer-social-menu">
            <li><a href="https://www.instagram.com" dangerouslySetInnerHTML={{ __html: instagram }} /></li>
            <li><a href="https://twitter.com" dangerouslySetInnerHTML={{ __html: twitter }} /></li>
            <li><a href="https://www.linkedin.com" dangerouslySetInnerHTML={{ __html: linkedin }} /></li>
          </ul>
          */}
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-0 mt-md-2">
        <div className="mt-4">
          <span>&copy;2018 timmicom pty ltd</span>
        </div>
        <div className="d-flex align-items-center mt-2 mt-md-0">
          <div className="d-none d-md-block">
            <ul className="footer-menu">
              <li><a onClick={props.onPrivacyClick} href="/">Your privacy</a></li>
            </ul>
          </div>
          <div>
            <a className="ml-md-3 anim-flip-logo" dangerouslySetInnerHTML={{ __html: weareflip }} href="https://www.weareflip.com" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

Footer.defaultProps = {
  onPrivacyClick: () => {}
};

export default Footer;
