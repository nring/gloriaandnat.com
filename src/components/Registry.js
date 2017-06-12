import React, { Component } from 'react';
import '../styles/Registry.css';

import bedbathbeyond from '../img/bedbathbeyond.jpg';
import amazon from '../img/amazon.png';

class Registry extends Component {

  render() {
    return (
      <div className="registry">
        <h1 className="header--registry">Registry</h1>
        <p>While gifts are appreciated, please know that your well wishes and presence is a present enough.</p>
        <p><a href="https://www.zola.com/registry/natandgloria"><img src="https://36hrw115apll2tgpf9vbfhw1-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/Zola_Logo_ZOLA-WEDDING-REGISTRY-Black-2.png" alt="Zola Registry" /></a></p><br />
        <p><a href="https://www.bedbathandbeyond.com:443/store/giftregistry/view_registry_guest.jsp?registryId=543803275&eventType=Wedding&pwsurl="><img src={bedbathbeyond} alt="Crate & Barrell" /></a></p>
        <p><a href="https://www.amazon.com/wedding/share/gloriaandnat"><img src={amazon} alt="Amazon Registry" /></a></p>
      </div>
    )
  }
}

export default Registry;