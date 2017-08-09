import React, { Component } from 'react';

class Locations extends Component {
  render() {
    return (
      <div className="Locations">
        <h1>Locations</h1>
			
				<section>
					<h2>After School Program:</h2>
					<p>We are currently offering our program at various after school facilities in Danville, Dublin, Livermore, Pleasanton and San Ramon. Contact your child's after school provider to register.</p>
  				<p>If you would like to bring StemChef to your child's school or after-school program please contact the after school provider.</p>
				</section>
			
				<section>
					<h2>Summer Program:</h2>
					<p>Our Summer Camp will be located at: 101-E Town and Country Drive, Danville, CA 94526</p>
					<h3>INSERT MAP</h3>
					<button>Sign up for Summer 2017</button>
				</section>
      </div>
    );
  }
}

export default Locations;