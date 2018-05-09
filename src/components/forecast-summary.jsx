import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => (
  <div className="ForecastSummary">
    <p className="ForecastSummaryDate">{props.date}</p>
    <p className="ForecastSummaryTemperature">{props.temperature}</p>
    <p className="ForecastSummaryDescription">{props.description}</p>
    <p className="ForecastSummaryIcon">{props.icon}</p>
  </div>);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;
