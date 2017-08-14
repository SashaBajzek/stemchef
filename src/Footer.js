import React, { Component } from 'react';
import './styles/Footer.scss';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
	year = new Date().getFullYear();
	
  render() {
    return (
      <div className="Footer">
				<div className="Footer__nav">
					<NavLink to="/" className="Footer__logo"><div className="Footer__logo-image"></div><h1 className="Footer__logo-text">StemChef</h1></NavLink>
					<ul className="Footer__menu">
						<li><NavLink to="/programs" className="Footer__navItem" activeClassName="Footer__navItem--selected">PROGRAMS</NavLink></li>
						<li><NavLink to="/our-story" className="Footer__navItem" activeClassName="Footer__navItem--selected">OUR STORY</NavLink></li>
						<li><NavLink to="/contact" className="Footer__navItem" activeClassName="Footer__navItem--selected">CONTACT</NavLink></li>
					</ul>
				</div>
				<small className="Footer__copyright">&copy; {this.year} StemChef</small>
      </div>
    );
  }
}

export default Footer;
