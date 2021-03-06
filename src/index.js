import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, IndexLink, Link } from 'react-router';
import App from './App';
import Home from './components/Home';
import Details from './components/Details';
import Faq from './components/Faq';
import Photos from './components/Photos';
import Registry from './components/Registry';
import Rsvp from './components/Rsvp';
import NoPassword from './components/NoPassword';
import './styles/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="details" component={Details} />
      <Route path="FAQ" component={Faq} />
      <Route path="photos" component={Photos} />
      <Route path="registry" component={Registry} />
      <Route path="rsvp" component={Rsvp} />
    </Route>
    <Route path="noPassword" component={NoPassword} />
  </Router>,
  document.getElementById('root')
);
