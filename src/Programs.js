import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Programs.scss';

class Programs extends Component {
	render() {
		return (
			<div className="Programs">
				<h1>Programs</h1>
				<section>
					<div className="Programs__image"></div>
					<p>We have delicious programs in store for our young scientists. Young chefs will explore questions in chemistry, physics, biology, architecture and more as they solve yummy challenges mathematically while whipping up delicious edible experiments.</p>
				</section>
				<ul className="Programs__nav">
					<li><NavLink to="/programs/summer-camp" className="Header__navItem" activeClassName="Header__navItem--selected">SUMMER CAMP</NavLink></li>
					<li><NavLink to="/programs/after-school" className="Header__navItem" activeClassName="Header__navItem--selected">FALL ENRICHMENT</NavLink></li>
					<li><NavLink to="/programs/winter-program" className="Header__navItem" activeClassName="Header__navItem--selected">WINTER PROGRAM</NavLink></li>
				</ul>
				{this.props.children}
			</div>
		)
		
	}
	
}

export default Programs;