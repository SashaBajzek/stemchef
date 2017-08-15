import React, { Component } from 'react';
import './styles/Footer.scss';

class Footer extends Component {
	year = new Date().getFullYear();
	
  render() {
    return (
      <div className="Footer">
				<small className="Footer__copyright">&copy; {this.year} StemChef</small>
      </div>
    );
  }
}

export default Footer;
