import React, { Component } from 'react';
import '../styles/Subnav.css';
import '../styles/Details.css';
import Ttd from './Ttd.js';
import EventBlock from './EventBlock';

class Details extends Component {
  render() {
    return (
      <div className="contentWell">
        {/*<nav className="subnav">
          <a href="#tbd">The Big Day</a>
          <a href="#acc">Accomodations</a>
          <a href="#">Things to Do</a>
        </nav>*/}

        <h2 className="header--details" id="tbd">The Big Day</h2>
        <div className="eb">
          <EventBlock
            title="Pre-Wedding Drinks"
            date="Friday, August 25, 2017 - 9:30 PM"
            image="http://www.lostinthebeeraisle.com/wp-content/uploads/2012/03/Mead-Hall.jpg">
              <p>If you're in town early for our wedding, we will be grabbing drinks somewhere (TBD) after our rehearsal dinner!</p>
          </EventBlock>

          <EventBlock
            title="Ceremony and Reception"
            date="Saturday, August 26, 2017 - 5:00PM"
            image="http://www.mcginleykalsow.com/projects/images/commanding.jpg">
            <p>440 Talcott Ave<br />Watertown, MA 02472</p>
            <p>Join us for a night of delicious food and dancing at the Commander's Mansion in Watertown.</p>
            <p>Commander's Mansion has plenty of parking, but for those who want to partake in the open bar, we highly recommend taking the shuttle from Kendall Square or an uber/lyft from your hotel. FYI - an uberX from Kendall Square to Commander's Mansion will cost ~$20.</p>
          </EventBlock>

          <EventBlock
            title="Shuttle from Hotel to Venue"
            date="Saturday, August 26, 2017 - 4:15PM"
            image="http://www.rustywalrus.com/images/lg/8q.jpg">
              <p>Boston Marriott Cambridge<br />50 Broadway, Cambridge, MA 02142</p>
              <p>The shuttle will be leaving at 4:15pm sharp and will return to Kendall Square after the wedding. Please RSVP to let us know whether you're interested in getting a ride to/from Kendall Square. We'll follow up separately once we're closer to the date. The return trip back to Cambridge will also drop guests off at our after-party.</p>
          </EventBlock>
        </div>

        <h2 className="header--details" id="acc">Accomodations</h2>
        <div className="card-group">
          <div className="card">
            <div className="card__img"><img src="//media.xogrp.com/images/ac69c616-8e38-49b1-a6dc-4f2c01c88142~rs_840.h" /></div>
            <div className="card__block--title">
              <h3 className="card__title">Boston Marriott Cambridge</h3>
              <p className="card__address">50 Broadway,<br />Cambridge, MA 02142, USA<br />617-494-6600</p>
            </div>
            <div className="card__block--deets">
              <p className="card-text">We have 20 rooms blocked off for Friday and Saturday for $219/night. Please book your room by calling Marriott (617-494-6600) and telling them you are part of the Mak/Ring Wedding. Rooms are on a first-come first-booked basis, and must be booked by August 4, 2017.</p>
              <p className="card-text"><small className="text-muted">*NOTE that this is different than the Marriott Residences.</small></p>
              <p className="card-text">Please call the hotel directly for other discounted rates, including any advanced purchase rates that it may have (these may offer you a better rate than our room blocks).</p>
            </div>
          </div>
          <div className="card">
            <div className="card__img"><img src="//media.xogrp.com/images/2e7ba8ed-9d13-4653-a027-844c2d670bc3" /></div>
            <div className="card__block--title">
              <h3 className="card__title">Residence Inn Boston Cambridge</h3>
              <p className="card__address">120 Broadway,<br />Cambridge, MA 02142, USA<br />(617) 349-0700</p>
            </div>
            <div className="card__block--deets">
              <p className="card-text">We have 20 studio rooms blocked off for Friday and Saturday for $219/night. Please book your room by calling Marriott (617-349-0700) and telling them you are part of the Mak/Ring Wedding. Rooms are on a first-come first-booked basis, and must be booked by July 28, 2017.</p>
              <p className="card-text">Please call the hotel directly for other discounted rates, including any advanced purchase rates that it may have (these may offer you a better rate than our room blocks).</p>
            </div>
          </div>
          <div className="card">
            <div className="card__img"><img src="//media.xogrp.com/images/4f98af7e-b4ae-483e-8230-595a9159db59" /></div>
            <div className="card__block--title">
              <h3 className="card__title">Other Accomodations</h3>
            </div>
            <div className="card__block--deets">
              <p className="card-text">No pressure to use one of our hotel blocks. We highly encourage guests to do what is most cost-effective and convenient for them! You may be able to find cheaper hotels closer to our wedding venue in Watertown, or to pull together a group of friends and family to get a house via airbnb or VRBO. If you want to take advantage of our shuttles, an accommodation closer to Kendall Square would be best.</p>
              <p className="card-text">Feel free to reach out to one of us to discuss potential accommodations!</p>
            </div>
          </div>
        </div>

        <h2 className="header--details" id="ttd">Things to Do</h2>
        <ul className="ttd">
          <Ttd className="ttd--taza">
            <div className="ttd__overlay">
              <h3>Taza Chocolate</h3>
              <p>561 Windsor St.<br />
              Somerville, MA 02143, USA</p>
              <p>Head over to Taza for a tour of a chocolate factory. Reservations are required and they usually fill up quick.</p>
              <p><a href="#">Visit Website</a></p>
            </div>
          </Ttd>
          <Ttd className="ttd--bantam">
            <div className="ttd__overlay">
              <h3>Bantam Cider Company</h3>
              <p>40 Merriam St.<br />
              Somerville, MA 02143</p>
              <p>Awesome dry cidery right in our backyard.</p>
              <p><a href="#">Visit Website</a></p>
            </div>
          </Ttd>
          <Ttd className="ttd--lamplighter">
            <div className="ttd__overlay">
              <h3>Lamplighter Brewing</h3>
              <p>284 Broadway<br />
              Cambridge, MA 02139</p>
              <p>Prefer beer over cider? Lamplighter is under a year old and already kicking out some fantastic beers. It doubles as a cafe until 3pm.</p>
              <p><a href="#">Visit Website</a></p>
            </div>
          </Ttd>
          <Ttd className="ttd--fenway">
            <div className="ttd__overlay">
              <h3>Fenway Park</h3>
              <p>4 Yawkey Way<br />
              Boston, MA 02215</p>
              <p>The O's are in town all weekend (we didn't plan that)! Sunday at 1:35 might be your best bet.</p>
            </div>
          </Ttd>
          <Ttd className="ttd--mos">
            <div className="ttd__overlay">
              <h3>Museum of Science</h3>
              <p>1 Science Park<br />
              Boston, MA 02114</p>
              <p>The hotels are a short walk away from the Museum of Science. Check out their website for current exhibits: <a href="https://www.mos.org/">https://www.mos.org/</a>.</p>
            </div>
          </Ttd>
          <Ttd className="ttd--map">
            <div className="ttd__overlay">
              <h3>Map</h3>
              <p>Check out our <a href="https://drive.google.com/open?id=1b2qByCNWzvTxhOPlyLXHbWByVxA&usp=sharing">map</a> for suggestions around the neighborhood and directions to wedding-related spots.</p>
            </div>
          </Ttd>
          <Ttd className="ttd--run">
            <div className="ttd__overlay">
              <h3>Run or Walk Around the Charles</h3>
              <p>Get great views of the Boston skyline, Cambridge, and MIT by running along the Charles. There are options for a <a href="http://www.mapmyrun.com/routes/view/1703393081">3 mile route</a>, a <a href="http://www.mapmyrun.com/routes/view/1703389352">5K route</a>, and a <a href="http://www.mapmyrun.com/routes/view/1703395535">4.25 mile route</a>.</p>
            </div>
          </Ttd>
          <Ttd className="ttd--comingSoon">
            <h3>More things to do are on the way!</h3>
          </Ttd>
        </ul>
      </div>
    )
  }
}

export default Details;