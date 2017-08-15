import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Programs.scss';

class Programs extends Component {
	render() {
		return (
			<div className="Programs">
				<div className="Programs__hero">
					<div className="Programs__modal">
						<h1>Program</h1>
						<section>
							<div className="Programs__image"></div>
							<p>We have delicious programs in store for our young scientists. Young chefs will explore questions in chemistry, physics, biology, architecture and more as they solve yummy challenges mathematically while whipping up delicious edible experiments.</p>
						</section>
					</div>
				</div>
				{this.props.children}
			</div>
		)
		
	}
	
}

export default Programs;