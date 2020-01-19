import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Students from './pages/Students';
import General from './pages/General';
import { Router } from '@reach/router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <App path="/">
      <Home path="/" />
      <Students path="/students" />
      <General path="/general" />
    </App>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
