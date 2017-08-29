import React, { Component } from 'react';
import './styles/Contact.scss';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
				<div className="Contact__hero">
					<div className="Contact__modal">
						<h1>Contact</h1>
						<p>Feel free to reach out to us at the email address below:</p>
						<a href="mailto:info@stemchef.com" className="Contact__email">info@stemchef.com</a>
						<p>Or check us out on Facebook!</p>
						<a href="https://www.facebook.com/stemchef/" className="Contact__fb">Facebook</a>
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