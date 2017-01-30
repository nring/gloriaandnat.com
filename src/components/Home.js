import React, { Component } from 'react';

import jump from '../img/iceland-jump.jpg';
import seattle from '../img/seattle.jpg';

class Home extends Component {
  render() {

    const divStyle = {
      backgroundImage: 'url(' + jump + ')'
    };

    return (
      <div>
        <div className="fullBleed" style={divStyle}>
          <div className="fullBleed__content">
            <h1>Gloria and Nat</h1>
            <h3>August 26, 2017<br />Watertown, MA</h3>
          </div>
        </div>

        <div className="meeting">
          <div className="meeting__content">
            <h2>Our Story</h2>
            <p>We met at a very classy establishment in the South End. Nat was there with his brother (and best man) Charlie for a going away party, and I was there because it was a Thursday. Nat and I made eye contact a few times throughout the night before he finally came up to my friends and I and talked to me. My friends quickly excused themselves to another part of the bar, and Nat and I talked till the bar closed. As the bar was closing, he asked if he could give me a ride home on his (non-tandem) bike. The moment was very cute and awkward and set the tone for the rest of our relationship!</p>
          </div>
          <div className="meeting__pic">
            
          </div>
        </div>

      </div>
    )
  }
};


export default Home;