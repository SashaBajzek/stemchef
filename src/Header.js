import React, { Component } from 'react';
import './styles/Header.scss';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="Header__logo"><NavLink to="/">StemChef</NavLink></h1>
				<ul className="Header__menu">
					<li>
						<ul>
							<li>ABOUT</li>
							<li className="menu__dropdown"><NavLink to="/locations">LOCATIONS</NavLink></li>
							<li className="menu__dropdown"><NavLink to="/jobs">VOLUNTEER</NavLink></li>
						</ul>
					</li>
					<li><NavLink to="/summer-camp-2017">SUMMER CAMP 2017</NavLink></li>
					<li><NavLink to="/our-story">OUR STORY</NavLink></li>
					<li><NavLink to="/contact">CONTACT</NavLink></li>
				</ul>
      </div>
    );
  }
}

export default Header;
