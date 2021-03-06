import React, { Component } from 'react';
import './Programs.scss';

class Programs extends Component {
	render() {
		return (
			<div className="Programs">
				<div className="Programs__hero">
					<div className="Programs__modal">
						<h1>Programs</h1>
						<p>We have delicious programs in store for our young scientists. Young chefs will explore questions in chemistry, physics, biology, architecture and more as they solve yummy challenges mathematically while whipping up delicious edible experiments.</p>
					</div>
				</div>
				{this.props.children}
			</div>
		)
	}
}

export default Programs;