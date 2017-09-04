import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.scss';

class Home extends Component {

  render() {
    return (
      <div className="Home">
				<div className="Home__hero">
					<div className="Home__modal">
						<h1>Scientific Cooking for Kids</h1>
						<p>StemChef was founded with the vision to inspire little ones to love and appreciate science and math through "experimental" cooking. We turn everyday cooking and eating into curiosity-filled culinary experiments, where every class is complete with a new recipe, a new scientific principle and a new mathematical concept.</p>
						<NavLink to="/programs/after-school" className="Home__cta">Register for Fall Enrichment</NavLink>
					</div>
				</div>
				<div className="Home__container">
					<section className="Home__section">
						<div className="Home__text">
							<h2>WHAT?</h2>
							<p>A new approach to STEM (Science, Technology, Engineering, and Mathematics) learning for kids through food and cooking.</p>
						</div>
						<div className="Home__image Home__chefs-image"></div>
					</section>
					<section className="Home__section">
						<div className="Home__text">
							<h2>WHO?</h2>
							<p>Curiosity and learning knows no bounds. However, our program is designed for kids ages 5 – 10 and teens ages 11-15. Classes are divided to accommodate for the age and skill level of each child.</p>
						</div>
						<div className="Home__image Home__kids-image"></div>
					</section>
					<section className="Home__section">
						<div className="Home__text">
							<h2>WHY?</h2>
							<p>Textbook learning gets mundane, especially for young children.</p>
							<p>StemChef makes science and math both fun and relatable as children learn through following yummy recipes and getting messy.</p>
						</div>
						<div className="Home__image Home__syringe-image"></div>
					</section>
					<section className="Home__section">
						<div className="Home__text">
							<h2>HOW?</h2>
							<p>Think about simple everyday kitchen happenings:</p>
							<p>Cooking an egg, Baking a cupcake, Making an ice-pop</p>
							<p>The working principles behind these rather common activities will be explored and understood by your very own little chefs. They will be solving yummy challenges mathematically while whipping up delicious edible experiments.</p>
						</div>
						<div className="Home__image Home__baking-image"></div>
					</section>
				</div>
      </div>
    );
  }
}

export default Home;
