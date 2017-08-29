import React, { Component } from 'react';
import './styles/OurStory.scss';

class OurStory extends Component {
  render() {
    return (
      <div className="OurStory">
				<div className="OurStory__hero">
					<div className="OurStory__modal">
						<h1>Our Story</h1>
						<p>From a Bio-scientist to a new Mom to a scientist-chef, it all began at the dinner table.</p>
					</div>
				</div>
				<div className="OurStory__container">
					<h1>Ashie Bhandiwad, PhD</h1>
					<p>From a Bio-scientist to a new Mom to a scientist-chef, it has been quite a journey. It wasn’t until my daughter was four years old that I discovered I had a passion for teaching science to kids as much as I had a passion for hard-core science. And it all started at the dinner table...</p>
					<p>Every evening at dinnertime, my daughter would ask me questions about the food in front of her. And every evening, I would demonstrate a lesson in science or math in explanation to her question. Innovative STEM teaching became my part-time job besides being a full-time scientist at UC Berkeley. Trying to explain to my five year old: how bread puffs up, why pasta when cooked turns soft and egg when cooked turns hard, what gives lemons their sour (hint: acidic) taste, or her favorite, when will jell-o set while exploring the answers hands-on and then eating the result has been unexplainably rewarding.</p>
					<p>I am putting together these tried, tested and tasted  experimental experiences in bite sized (pun intended) culinary programs for kids to enjoy!</p>
					<p></p>
				</div>
				<div className="OurStory__container">
					<section>
						<h2>BIO</h2>
						<div className="OurStory__image"></div>
						<p>Ashie Bhandiwad holds a PhD in Engineering from Dartmouth College. In her previous life, Ashie worked at UC Berkeley trying to save the world at the Energy Biosciences Institute, UCB campus working to produce renewable energy.</p>
						<p>Ashie lives with her husband and five year old daughter in San Ramon and never misses going to the Saturday Farmer's market.</p>
					</section>
				</div>
      </div>
    );
  }
}

export default OurStory;