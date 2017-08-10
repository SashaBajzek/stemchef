import React, { Component } from 'react';
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Scientific Cooking for kids</h1>
				<button>Pre-order Limited Edition DIY Kits!</button>
				<section>
					<div className="Home__hero_image"></div>
					<p>StemChef was founded with the vision to inspire little ones to love and appreciate science and math through "experimental" cooking.</p>
					<p>Our motto is: Feed your brain through your tummy!</p>
					<p>We turn everyday cooking and eating into curiosity-filled culinary experiments.</p>	
					<p>Kids get to wear the chef's hat literally and figuratively.</p>
					<p>Every class is an enriching experience complete with a new recipe, a new scientific and a new mathematical concept.</p>
				</section>
				<div className="Home__science-image"></div>
				<section>
					<h2>WHAT?</h2>
					<p>A new approach to STEM learning for kids through food and cooking</p>
				</section>
				<section>
					<h2>WHO</h2>
					<p>Curiosity and learning knows no age boundaries. But our program is designed for kids ages 5 – 10. Our classes are divided to accommodate for the age and skill level of the individual kids.</p>
					<p>Older kids are welcome: we can cater to a more challenging crowd.</p>
				</section>
				<section>
					<h2>WHY</h2>
					<p>Textbook learning gets mundane....... But there is a way for kids to have fun and learn at the same time</p>
					<p>Imagine teaching a 6 year old Calculus? Or Organic chemistry? Or Thermodynamics?</p>
					<p>Now imagine this being done by a team of five and seven year old scientists in chef hats while building yummy recipes and  getting messy.</p>
					<p>Enter StemChef</p>
					<div className="Home__chocolate-image"></div>
				</section>
				<section>
					<h2>HOW</h2>
					<p>Think about simple everyday kitchen happenings:</p>
					<p>Cooking an egg; Baking a cupcake; Making an ice-pop</p>
					<p>The working principles behind these rather common activities (along with some very uncommon recipes we have up our sleeve) will be questioned and understood by your very own little chefs after our program.</p>
					<p>We don’t promise that they will learn the first law of thermodynamics verbatim but we do promise they will understand the concept behind it and be thirsty for the second and third and perhaps be enroute to discovering the fifth!</p>
				</section>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/G8Q4YfWwRTE" frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }
}

export default App;
