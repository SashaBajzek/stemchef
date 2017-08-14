import React, { Component } from 'react';
import SimpleMap from './GoogleMap';
import './styles/SummerCamp.scss';

class SummerCamp extends Component {
  render() {
    return (
      <div className="SummerCamp">
        <h1>Summer Camp </h1>
				<section>
					<h3>Week 1: Young Chemists: June 19 - Jun 23</h3>
					<div className="SummerCamp__image SummerCamp__week-1-image"></div>
					<p>Ever wondered if learning organic chemistry could have been more fun - or rather tasty?? Well kids are just about to   discover that and plenty more fizz as we take a trip to chemistry town with edible substances. Muah-ha-ha we are mad scientists disguised as chefs!!</p>
					<p>Monday-Friday: 9:00am - 12:00pm</p>
				</section>
				<section>
					<h3>Week 2: Young Physicists: June 26 - Jun 30</h3>
					<div className="SummerCamp__image SummerCamp__week-2-image"></div>
					<p>Newton discovered gravity with an apple. Kids are going to discover plenty more phenomena through edible treats that they will conjure up using the natural laws of physics!!</p>
					<p>Monday-Friday: 9:00am - 12:00pm</p>
				</section>
				<section>
					<h3>Week 3: Young Architects: July 24 - July 28</h3>
					<p>Legos are fun but are they edible? Nope! We will travel through continents and ages learning about the basic premise of architecture while building awe-inspiring wonders and you guessed it........ devouring them afterwards!!</p>
					<p>Monday - Friday: 12pm - 3pm</p>
					<p>CLASS FULL!!</p>
				</section>
				<section>
					<h3>Week 4: Young Chocolatier: Aug 7 - Aug 11</h3>
					<div className="SummerCamp__image SummerCamp__week-4-image"></div>
					<p>School starting in a week? Fret not.... we will give you a reason to rejoice with one week worth of chocolatey goodness - our young chefs will learn the tricks and treats of making gourmet quality chocolates using the scientific basis to create artistic inventions!!</p>
					<p>Monday - Friday: 12pm - 3pm</p>
					<p>CLASS FULL!!</p>
				</section>
				<section>
					<h2>Location: 101-E Town and Country Drive, Danville, CA 94526</h2>
					<div className="mapContainer">
						<SimpleMap/>
					</div>
					<h3>Price</h3>
					<p>Regular until June 12th : $225/week</p>
					<p>Last minute after June 12th : $250/week</p>
					<p>!!!! Limited spots remaining. Register now!!!!!</p>
				</section>
				<section>
					<p>Every child is different and we appreciate the uniqueness and strength brought by each individual.</p>
        	<p>Keeping this in mind we group children in teams by age and ability to promote co-operation, communication, leadership development and critical thinking in a collaborative environment.</p>
				</section>
      </div>
    );
  }
}

export default SummerCamp;