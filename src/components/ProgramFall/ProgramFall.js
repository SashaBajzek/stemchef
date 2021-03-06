import React, { Component } from 'react';
import './ProgramFall.scss';

class ProgramFall extends Component {
	render() {
    return (
      <div className="ProgramFall">
				<h2>FALL ENRICHMENT 2017</h2>
				<div className="ProgramFall__content">
					<section className="ProgramFall__section">
						<h3>Youth <span className="ProgramFall__age">(Ages 6-10)</span></h3>
						<a href ="https://apm.activecommunities.com/danvilleca/Activity_Search/new-scientific-cooking-for-kids-6-11yr/8671" className="ProgramFall__class ProgramFall__class-youth">
							<h4>Town of Danville</h4>
							<p>Scientific Cooking for Kids: Code 13751</p>
							<ul>
								<li>Location: Oak Hill Park</li>
								<li>Time: 4:00pm - 5:30pm every Thursday</li>
								<li>Dates: Sept 14 - Oct 19</li>
							</ul>
							<p className="ProgramFall__cta ProgramFall__cta1">Price: $195</p>
							<p className="ProgramFall__cta ProgramFall__cta2"><span className="ProgramFall__cta-underline">REGISTER HERE</span></p>
						</a>
						<a href ="https://econnect.sanramon.ca.gov/econnect/Activities/ActivitiesCourseDetails.asp?UseLink=true&cid=120608" className="ProgramFall__class ProgramFall__class-youth">
							<h4>City of San Ramon Class 1</h4>
							<p>Scientific Cooking for Kids: Code 105707</p>
							<ul>
								<li>Location: Community Ctr at Central Park</li>
								<li>Time: 4:30pm - 6:00pm every Wednesday</li>
								<li>Dates: Sept 13 - Oct 11</li>
							</ul>
							<p className="ProgramFall__cta ProgramFall__cta1">Price: $150</p>
							<p className="ProgramFall__cta ProgramFall__cta2"><span className="ProgramFall__cta-underline">REGISTER HERE</span></p>
						</a>
						<a href ="https://econnect.sanramon.ca.gov/econnect/Activities/ActivitiesCourseDetails.asp?UseLink=true&cid=120609" className="ProgramFall__class ProgramFall__class-youth">
							<h4>City of San Ramon Class 2</h4>
							<p>Scientific Cooking for Kids: Code 105708</p>
							<ul>
								<li>Location: Bella Vista Elementary</li>
								<li>Time: 3:10 pm - 4:40pm every Friday</li>
								<li>Dates: Sept 15 - Oct 20</li>
							</ul>
							<p className="ProgramFall__cta ProgramFall__cta1">Price: $125</p>
							<p className="ProgramFall__cta ProgramFall__cta2"><span className="ProgramFall__cta-underline">REGISTER HERE</span></p>
						</a>
					</section>
					<section className="ProgramFall__section">
						<h3>Teens <span className="ProgramFall__age">(Ages 11-15)</span></h3>
						<a href ="https://apm.activecommunities.com/danvilleca/Activity_Search/scientific-cooking/8583" className="ProgramFall__class ProgramFall__class-teen">
							<h4>Town of Danville Class 1</h4>
							<p>Scientific Cooking for Teens: Code 13663</p>
							<ul>
								<li>Location: CWMS Teen Center</li>
								<li>Time: 3:00pm - 4:30pm every Tuesday</li>
								<li>Dates: Sept 12 - Oct 17</li>
							</ul>
							<p className="ProgramFall__cta ProgramFall__cta1">Price: $195</p>
							<p className="ProgramFall__cta ProgramFall__cta2"><span className="ProgramFall__cta-underline">REGISTER HERE</span></p>
						</a>
						<a href ="https://apm.activecommunities.com/danvilleca/Activity_Search/scientific-cooking/8584" className="ProgramFall__class ProgramFall__class-teen">
							<h4>Town of Danville Class 2</h4>
							<p>Scientific Cooking for Teens: Code 13664</p>
							<ul>
								<li>Location: DVMS Teen Center</li>
								<li>Time: 3:00pm - 4:30pm every Tuesday</li>
								<li>Dates: Sept 11 - Oct 16</li>
							</ul>
							<p className="ProgramFall__cta ProgramFall__cta1">Price: $195</p>
							<p className="ProgramFall__cta ProgramFall__cta2"><span className="ProgramFall__cta-underline">REGISTER HERE</span></p>
						</a>
					</section>
				</div>
      </div>
    );
  }
}

export default ProgramFall;
