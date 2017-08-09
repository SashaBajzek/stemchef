import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1><NavLink to="/">StemChef</NavLink></h1>
				<h1><NavLink to="/about">About</NavLink></h1>
      </div>
    );
  }
}

export default Header;
