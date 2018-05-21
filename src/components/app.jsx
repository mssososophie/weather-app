import React from 'react';
import PropTypes from 'prop-types';

import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';

import '../styles/app.scss';

const App = props => (
  <div>
    <LocationDetails
      className="forecast"
      city={props.location.city}
      country={props.location.country}
    />
    <ForecastSummaries
      className="forecast-summaries"
      forecasts={props.forecasts}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

App.defaultProps = {
  forecasts: [],
};

export default App;
