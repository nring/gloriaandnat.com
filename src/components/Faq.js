import React, { Component } from 'react';
import '../styles/Faq.css';

class Details extends Component {
  render() {
    return (
      <div>
        <div className="contentWell">
          <h2 className="header--faq" id="faq">FAQ</h2>
        </div>
        <ul className="list--faq">
          <li><strong>Will this be an outdoor wedding?</strong><br/>Indeed. The actual ceremony will be held outside at the same venue as the cocktail hour and reception location (outdoor tented area) - no traveling between wedding events necessary! The mansion will have air conditioning for those in need of respite.</li>
          <li><strong>What should I wear?</strong><br/>Garden formal - think summer/cocktail dresses and suits. For those who specifically asked, we would discourage wearing undertaker outfits and tuxedo t-shirts (though let's be honest, no one is going to stop you). </li>
          <li><strong>What sort of shoes should I wear?</strong><br/>Wear your dancing shoes; though keep in mind that our ceremony will take place on grass. </li>
          <li><strong>Is there an open bar?</strong><br/>Yes - please come thirsty.</li>
          <li><strong>Will there be food?</strong><br/>Yes! We'll have passed hors d'oeuvres at cocktail hour, a plated dinner and lots of dessert. Still hungry? Good. We'll also have late night breakfast sandwiches. Still hungry after that? Go to 7-11.</li>
          <li><strong>What is the parking situation like?</strong><br/> There will be plenty of parking at the Commander's Mansion. If you're planning on getting toasty, then feel free to leave your car there for the night and take an uber to your hotel or our school bus back to Boston/Cambridge. Safety first!</li>
          <li><strong>How much time should I estimate getting to Commander's Mansion from Boston?</strong><br/> Great question! It is about 25-30 minutes from our hotel block in Kendall Square. However, because we don't know where everyone is staying, we would suggest googling it, and tack on about 10-15 minutes to account for traffic. </li>
          <li><strong>Are children invited?</strong><br/> Please reach out to either of us if you want to bring your kids! Because Gloria is still recovering from the trauma, we should warn you that she was kicked in the face at a wedding by a drunk attendee. </li>
          <li><strong>Will there be an afterparty be?</strong><br/> TBD - we're thinking fratty and cheap. Beacon Hill Pub (BHP) comes to mind, which by the way has pop a shot and buck hunter. Be aware this is a cash-only establishment. </li>
          <li><strong>Where are you going for your honeymoon?</strong><br/> We're going to land of the kiwis -- New Zealand -- in January 2018, and a "mini-moon" right after our wedding.</li>
        </ul>
        <p>Any other questions? Feel free to shoot us a message and we'll add it to our running FAQs.</p>
      </div>
    )
  }
}

export default Details;