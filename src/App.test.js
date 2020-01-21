import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('renders the app', () => {
  const tree = renderer
    .create(
      <App>
        <div>My Other Components</div>
      </App>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
