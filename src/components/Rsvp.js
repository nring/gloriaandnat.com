import React, { Component } from 'react';
import '../styles/Rsvp.css';

class Rsvp extends Component {


  //https://www.surveymonkey.com/r/6S8WNBW
  //<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScW03qUAzq-g_uDJOT2gxQ8oqOuUBlS9OFd3nlyHzB5Bf-IJQ/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
  //<iframe style={style} src="https://docs.google.com/forms/d/e/1FAIpQLScW03qUAzq-g_uDJOT2gxQ8oqOuUBlS9OFd3nlyHzB5Bf-IJQ/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

  render() {
    return (
      <div>
        <h1 style={{ "textAlign":"center", "padding": "5rem"}}>RSVP Form will be right back!</h1>
        {/*<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScW03qUAzq-g_uDJOT2gxQ8oqOuUBlS9OFd3nlyHzB5Bf-IJQ/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>*/}
      </div>
    )
  }
}

export default Rsvp;