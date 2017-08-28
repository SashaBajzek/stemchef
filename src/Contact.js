import React, { Component } from 'react';
import './styles/Contact.scss';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
				<div className="Contact__hero">
					<div className="Contact__modal">
						<h1>Contact</h1>
						<p>Please use the form below to contact us. We will get back to you as soon as possible.</p>
						<form action="https://docs.google.com/forms/d/e/1FAIpQLScqEyw4PcA_gKLqr9k4P2ab-r-HU2Sti9zV3r2ABXa8ynEbuQ/formResponse" >
							<label htmlFor="name">Name</label>
							<input name="entry.1224692193" type="text" id="name" />
							<label htmlFor="email">Email</label>
							<input name="entry.416179720" type="text" id="email" />
							<label htmlFor="phone">Phone</label>
							<input name="entry.2048256201" type="text" id="phone" />
							<label htmlFor="message">Message</label>
							<textarea name="entry.543787284" type="text" id="message"></textarea>
							<input className="Contact__button" type="submit" value="Submit" />
						</form>
					</div>
				</div>
				<div className="Contact__container">
					<section>
						<h2>After School Program:</h2>
						<p>We are currently offering our program at various after school facilities in Danville, Dublin, Livermore, Pleasanton and San Ramon. Contact your child's after school provider to register.</p>
						<p>If you would like to bring StemChef to your child's school or after-school program, please contact the after school provider.</p>
					</section>
				</div>
				<div className="Contact__container">
					<div className="Jobs">
						<h1>Looking for Volunteers with a passion</h1>
						<ul>
							<li>You have a passion for educating kids</li>
							<li>You are fulfilled by challenging the next-gen kids intellectually</li>
							<li>You get immense satisfaction in demonstrating hard-to-explain concepts in a funny and quirky manner</li>
							<li>You love food, cooking and anything to do with food and cooking</li>
							<li>You are not allergic to learning new & novel concepts and/or recipes</li>
						</ul>
						<p>If you answered yes to over 50% questions, we would like to talk to you.</p>
						<h2>Who you are:</h2>
						<ul>
							<li>Formally or informally trained educator looking for flexible work hours</li>
							<li>Available during the summer vacation and after regular school hours </li>
							<li>Willing to commute between different locations within Tri-Valley area</li>
						</ul>
						<p>If you think this might be a good fit for you, send us your resume and cover letter at <a href="mailto:info@stemchef.com" className="Contact__email">info@stemchef.com</a> with the subject line "Volunteer 2017".</p>
					</div>
				</div>
      </div>
    );
  }
}

export default Contact;