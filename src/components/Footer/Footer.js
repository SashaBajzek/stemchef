import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
	year = new Date().getFullYear();
	
  render() {
    return (
      <div className="Footer">
				<div className="Footer__logo-image"></div>
				<small className="Footer__copyright">&copy; {this.year} StemChef</small>
      </div>
    );
  }
}

export default Footer;
