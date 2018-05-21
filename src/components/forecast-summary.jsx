import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';

const ForecastSummary = props => (
  <div className="ForecastSummary">
    <p className="ForecastSummaryDate">{props.date}</p>
    <p className="ForecastSummaryTemperature">{props.temperature}</p>
    <p className="ForecastSummaryDescription">{props.description}</p>
    <div className="forecast-summary__icon">
      <WeatherIcon name="owm" iconId={props.icon} />
    </div>

  </div>);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;
