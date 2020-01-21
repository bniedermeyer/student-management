import React from 'react';
import Home from './Home';
import renderer from 'react-test-renderer';

it('should render the home page', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
