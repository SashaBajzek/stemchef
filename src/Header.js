import React, { Component } from 'react';
import './styles/Header.scss';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <NavLink to="/" className="Header__logo"><div className="Header__logo-image"></div><h1 className="Header__logo-text">StemChef</h1></NavLink>
				<ul className="Header__menu">
					<li><NavLink to="/programs/summer-camp" className="Header__navItem" activeClassName="Header__navItem--selected">PROGRAMS</NavLink></li>
					<li><NavLink to="/our-story" className="Header__navItem" activeClassName="Header__navItem--selected">OUR STORY</NavLink></li>
					<li><NavLink to="/contact" className="Header__navItem" activeClassName="Header__navItem--selected">CONTACT</NavLink></li>
				</ul>
      </div>
    );
  }
}

export default Header;
