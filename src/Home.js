import React, { Component } from 'react';
import IntroVideo from './IntroVideo';
import { NavLink } from 'react-router-dom';
import './styles/Home.scss';

class Home extends Component {

  render() {
    return (
      <div className="Home">
				<div className="Home__container">
					<h1>Scientific Cooking for Kids</h1>
					<NavLink to="/programs/after-school" className="Home__navItem">Register for Fall Enrichment</NavLink>
					<section className="Home__hero">
						<div className="Home__hero_image"></div>
						<p>StemChef was founded with the vision to inspire little ones to love and appreciate science and math through "experimental" cooking.</p>
						<p>We turn everyday cooking and eating into curiosity-filled culinary experiments, where kids get to wear the chef's hat literally and figuratively.</p>
						<p>Every class is an enriching experience complete with a new recipe, a new scientific principle and a new mathematical concept.</p>
					</section>
				</div>
				<div className="Home__container">
					<div className="Home__science-image"></div>
					<section>
						<h2>WHAT?</h2>
						<p>A new approach to STEM learning for kids through food and cooking.</p>
					</section>
				</div>
				<div className="Home__container">
					<section>
						<h2>WHO?</h2>
						<p>Curiosity and learning knows no age boundaries. But our program is designed for kids ages 5 – 10 and teens ages 11-15. Our classes are divided to accommodate for the age and skill level of the individual kids.</p>
					</section>
				</div>
				<div className="Home__container">
					<section>
						<h2>WHY?</h2>
						<p>Textbook learning gets mundane, but there is a way for kids to have fun and learn at the same time!</p>
						<p>Imagine teaching a 6 year old Calculus? Or Organic chemistry? Or Thermodynamics?</p>
						<p>Now imagine this being done by a team of five and seven year old scientists in chef hats while building yummy recipes and  getting messy. StemChef makes learning both fun and tasty.</p>
						<div className="Home__syringe-image"></div>
					</section>
				</div>
				<div className="Home__container">
					<section>
						<h2>HOW?</h2>
						<p>Think about simple everyday kitchen happenings:</p>
						<p>Cooking an egg; Baking a cupcake; Making an ice-pop</p>
						<p>The working principles behind these rather common activities (along with some other very uncommon recipes we have up our sleeve) will be questioned and understood by your very own little chefs after our program.</p>
						<p>We don’t promise that they will learn the first law of thermodynamics verbatim, but we do promise they will understand the concept behind it and be thirsty for the second and third and perhaps be enroute to discovering the fifth!</p>
					</section>
				</div>
				<div className="Home__container">
					<IntroVideo />
				</div>
      </div>
    );
  }
}

export default Home;
