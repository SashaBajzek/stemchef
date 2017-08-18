import React, { Component } from 'react';
import './styles/Header.scss';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
				<div className="Header__container">
					<NavLink to="/" className="Header__logo">
						<div className="Header__logo-image"></div>
						<h1 className="Header__logo-text">
							<span className="Header__logo-text--part1">Stem</span>
							<span className="Header__logo-text--part2">Chef</span>
						</h1>
					</NavLink>
					<ul className="Header__menu">
						<li><NavLink exact to="/" className="Header__navItem" activeClassName="Header__navItem--selected"><span className="Header__underline">HOME</span></NavLink></li>
						<li><NavLink to="/programs/after-school" className="Header__navItem" activeClassName="Header__navItem--selected"><span className="Header__underline">PROGRAMS</span></NavLink></li>
						<li><NavLink to="/our-story" className="Header__navItem" activeClassName="Header__navItem--selected"><span className="Header__underline">OUR STORY</span></NavLink></li>
						<li><NavLink to="/contact" className="Header__navItem" activeClassName="Header__navItem--selected"><span className="Header__underline">CONTACT</span></NavLink></li>
						<li><a href="https://www.facebook.com/stemchef/" className="Header__fb">Facebook</a></li>
					</ul>
				</div>
      </div>
    );
  }
}

export default Header;
