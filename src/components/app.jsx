import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';

const App = props => (
  <div>
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />
    <ForecastSummaries
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
