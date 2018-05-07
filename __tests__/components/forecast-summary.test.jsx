import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

it('renders the passed date, temperature, description and icon in a p tag', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummary date="foo" temperature="bar" description="woo" icon="???" />
  ));

  const text = wrapper.find('p').text();

  expect(text).toEqual('foo, bar, woo, ???');
});
