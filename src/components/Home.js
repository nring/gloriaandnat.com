import React, { Component } from 'react';
import EventBlock from './EventBlock';

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

        <EventBlock
          title="Pre-Wedding Drinks"
          date="Friday, August 25, 2017 - 9:30 PM"
          image="http://www.lostinthebeeraisle.com/wp-content/uploads/2012/03/Mead-Hall.jpg">
            <p>123 Street Ave<br/>Cambridge, MA 02141</p>
            <p>If you're in town early for our wedding, we will be grabbing drinks somewhere (TBD) after our rehearsal dinner!</p>
        </EventBlock>

        <EventBlock
          title="Ceremony and Reception"
          date="Saturday, August 26, 2017"
          image="http://www.mcginleykalsow.com/projects/images/commanding.jpg">
          <p>440 Talcott Ave<br />Watertown, MA 02472</p>
          <p>Join us for a night of delicious food and dancing at the Commander's Mansion in Watertown.</p>
        </EventBlock>

        <EventBlock
          title="Shuttle from Hotel to Venue"
          date="Saturday, August 26, 2017 - 4:00PM"
          image="http://www.rustywalrus.com/images/lg/8q.jpg">
            <p>Boston Marriott Cambridge<br />50 Broadway, Cambridge, MA 02142</p>
            <p>The shuttle will be leaving at 4:15pm sharp and will return to Kendall Square after the wedding. Please RSVP to let us know whether you're interested in getting a ride to/from Kendall Square. We'll follow up separately once we're closer to the date.</p>
        </EventBlock>


        <div className="events">

        </div>
      </div>
    )
  }
};


export default Home;