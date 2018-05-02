import React from 'react';

import PropTypes from 'prop-types';

const App = props => <h1>{`Hello ${props.name} you are ${props.age}!`}</h1>;

App.propTypes = {
  name: PropTypes.string.isRequired,
};

App.propTypes = {
  age: PropTypes.number.isRequired,
};

export default App;
