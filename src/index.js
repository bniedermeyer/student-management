import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Students from './pages/Students';
import AddStudent from './pages/AddStudent';
import { Router } from '@reach/router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <App path={process.env.PUBLIC_URL + '/'}>
      <Home path={process.env.PUBLIC_URL + '/'} />
      <Students path={process.env.PUBLIC_URL + '/students'} />
      <AddStudent path={process.env.PUBLIC_URL + '/add-student'} />
    </App>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
