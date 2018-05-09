import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummary from './forecast-summary';

const App = props => (
  <div>
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />
    <ForecastSummary
      date={props.forecasts[0].date}
      temperature={props.forecasts[0].temperature.max}
      description={props.forecasts[0].description}
      icon={props.forecasts[0].icon}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
    }),
    description: PropTypes.string,
    icon: PropTypes.string,
  })),
};

App.defaultProps = {
  forecasts: [],
};

export default App;
