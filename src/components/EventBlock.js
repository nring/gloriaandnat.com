import React, { Component } from 'react';

import '../styles/EventBlock.css';

class EventBlock extends Component {
  render() {

    const bgStyle = {
      backgroundImage: 'url(' + this.props.image + ')'
    }

    return (
      <div className="EventBlock clearfix">

        {this.props.image &&
          <div className="EventBlock__image" style={bgStyle}></div>}

        <div className="EventBlock__content">
          <h3 className="EventBlock__title">{this.props.title}</h3>
          <div className="EventBlock__date">{this.props.date}</div>
          <div className="EventBlock__desc">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

EventBlock.propTypes = {
  title: React.PropTypes.string.isRequired,
  date: React.PropTypes.string,
  image: React.PropTypes.string,
  desc: React.PropTypes.string.isRequired
}

export default EventBlock;