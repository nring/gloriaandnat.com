import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

import i1 from '../img/photos/1.jpg';
import i1t from '../img/photos/1-thumb.jpg';
import i2 from '../img/photos/2.jpg';
import i2t from '../img/photos/2-thumb.jpg';
import i3 from '../img/photos/3.jpg';
import i3t from '../img/photos/3-thumb.jpg';
import i4 from '../img/photos/4.jpg';
import i4t from '../img/photos/4-thumb.jpg';
import i5 from '../img/photos/5.jpg';
import i5t from '../img/photos/5-thumb.jpg';
import i6 from '../img/photos/6.jpg';
import i6t from '../img/photos/6-thumb.jpg';
import i7 from '../img/photos/7.jpg';
import i7t from '../img/photos/7-thumb.jpg';
import i8 from '../img/photos/8.jpg';
import i8t from '../img/photos/8-thumb.jpg';
import i9 from '../img/photos/9.jpg';
import i9t from '../img/photos/9-thumb.jpg';
import i10 from '../img/photos/10.jpg';
import i10t from '../img/photos/10-thumb.jpg';
import i11 from '../img/photos/11.jpg';
import i11t from '../img/photos/11-thumb.jpg';
import i12 from '../img/photos/12.jpg';
import i12t from '../img/photos/12-thumb.jpg';
import i14 from '../img/photos/14.jpg';
import i14t from '../img/photos/14-thumb.jpg';
import i15 from '../img/photos/15.jpg';
import i15t from '../img/photos/15-thumb.jpg';
import i16 from '../img/photos/16.jpg';
import i16t from '../img/photos/16-thumb.jpg';
import i17 from '../img/photos/17.jpg';
import i17t from '../img/photos/17-thumb.jpg';

import bamboo from '../img/photos/bamboo.jpg';
import bamboot from '../img/photos/bamboo-thumb.jpg';
import boot from '../img/photos/boot.jpg';
import boott from '../img/photos/boot-thumb.jpg';
import captain from '../img/photos/captain.jpg';
import captaint from '../img/photos/captain-thumb.jpg';
import crater from '../img/photos/crater.jpg';
import cratert from '../img/photos/crater-thumb.jpg';
import jenga from '../img/photos/jenga.jpg';
import jengat from '../img/photos/jenga-thumb.jpg';
import owl from '../img/photos/owl.jpg';
import owlt from '../img/photos/owl-thumb.jpg';
import pumpkin from '../img/photos/pumpkin.jpg';
import pumpkint from '../img/photos/pumpkin-thumb.jpg';
import run from '../img/photos/run.jpg';
import runt from '../img/photos/run-thumb.jpg';
import santa from '../img/photos/santa.jpg';
import santat from '../img/photos/santa-thumb.jpg';
import yuzawa from '../img/photos/yuzawa.jpg';
import yuzawat from '../img/photos/yuzawa-thumb.jpg';


const IMAGES = [
  {
    src: i1t,
    width:720,
    height:720,
    aspectRatio: 1,
    lightboxImage: {
      src: i1
    }
  },
  {
    src: i2t,
    width:662,
    height:662,
    aspectRatio: 1,
    lightboxImage: {
      src: i2
    }
  },
  {
    src: i3t,
    width:1440,
    height:720,
    aspectRatio: 2,
    lightboxImage: {
      src: i3
    }
  },
  {
    src: i4t,
    width:1440,
    height:720,
    aspectRatio: 2,
    lightboxImage: {
      src: i4
    }
  },
  {
    src: i5t,
    width:720,
    height:720,
    aspectRatio: 1,
    lightboxImage: {
      src: i5
    }
  },
  {
    src: i6t,
    width:720,
    height:720,
    aspectRatio: 1,
    lightboxImage: {
      src: i6
    }
  },
  {
    src: i7t,
    width:720,
    height:720,
    aspectRatio: 1,
    lightboxImage: {
      src: i7
    }
  },
  {
    src: i8t,
    width:1440,
    height:720,
    aspectRatio: 2,
    lightboxImage: {
      src: i8
    }
  },
  {
    src: i9t,
    width:960,
    height:960,
    aspectRatio: 1,
    lightboxImage: {
      src: i9
    }
  },
  {
    src: i10t,
    width:720,
    height:720,
    aspectRatio: 1,
    lightboxImage: {
      src: i10
    }
  },
  {
    src: i11t,
    width:720,
    height:720,
    aspectRatio: 1,
    lightboxImage: {
      src: i11
    }
  },
  {
    src: i12t,
    width:1440,
    height:720,
    aspectRatio: 2,
    lightboxImage: {
      src: i12
    }
  },
  {
    src: i14t,
    width:720,
    height:720,
    aspectRatio: 1,
    lightboxImage: {
      src: i14
    }
  },
  {
    src: i15t,
    width:720,
    height:720,
    aspectRatio: 1,
    lightboxImage: {
      src: i15
    }
  },
  {
    src: i16t,
    width:720,
    height:720,
    aspectRatio: 1,
    lightboxImage: {
      src: i16
    }
  },
  {
    src: i17t,
    width:1440,
    height:720,
    aspectRatio: 2,
    lightboxImage: {
      src: i17
    }
  },
  {
    src: bamboot,
    width:720,
    height:720,
    aspectRatio: 1,
    lightboxImage: {
      src: bamboo
    }
  },
  {
    src: boott,
    width:720,
    height:720,
    aspectRatio: 1,
    lightboxImage: {
      src: boot
    }
  },
  {
    src: captaint,
    width:1024,
    height:512,
    aspectRatio: 2,
    lightboxImage: {
      src: captain
    }
  },
  {
    src: cratert,
    width:1440,
    height:720,
    aspectRatio: 2,
    lightboxImage: {
      src: crater
    }
  },
  {
    src: jengat,
    width:672,
    height:672,
    aspectRatio: 1,
    lightboxImage: {
      src: jenga
    }
  },
  {
    src: owlt,
    width:720,
    height:720,
    aspectRatio: 1,
    lightboxImage: {
      src: owl
    }
  },
  {
    src: pumpkint,
    width:717,
    height:717,
    aspectRatio: 1,
    lightboxImage: {
      src: pumpkin
    }
  },
  {
    src: runt,
    width:720,
    height:720,
    aspectRatio: 1,
    lightboxImage: {
      src: run
    }
  },
  {
    src: santat,
    width:960,
    height:480,
    aspectRatio: 2,
    lightboxImage: {
      src: santa
    }
  },
  {
    src: yuzawat,
    width:720,
    height:720,
    aspectRatio: 1,
    lightboxImage: {
      src: yuzawa
    }
  }
]

class Photos extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <Gallery photos={IMAGES} />
    )
  }
}

export default Photos;