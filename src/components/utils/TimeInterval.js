import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TimeInterval extends Component {
  render() {
      const { times } = this.props;
    return (
      <div>
        {times.map((time, i) => {
            return (
                <div className>
                    <p>{time}</p>
                </div>
            )
        })}
      </div>
    )
  }
}

TimeInterval.propTypes({
    times: PropTypes.array
})