import React from 'react';
import { Link } from '@reach/router';
import { Pane, Text, Heading } from 'evergreen-ui';

import './App.css';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? 'red' : 'blue'
        }
      };
    }}
  />
);

function App(props) {
  return (
    <div className="App">
      <header>
        <nav>
          <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
            <Pane flex={1} alignItems="center" display="flex">
              <Heading size={600}>Student Management</Heading>
            </Pane>
            <Pane>
              <NavLink to={process.env.PUBLIC_URL + '/'}>
                <Text marginRight={16}>Home</Text>
              </NavLink>
              <NavLink to={process.env.PUBLIC_URL + '/students'}>
                <Text marginRight={16}>Student Search</Text>
              </NavLink>
              <NavLink to={process.env.PUBLIC_URL + '/add-student'}>
                <Text>Add Student</Text>
              </NavLink>
            </Pane>
          </Pane>
        </nav>
      </header>
      {props.children}
    </div>
  );
}

export default App;
