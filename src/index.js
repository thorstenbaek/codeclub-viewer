import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';


// ReactDOM.render(
//   <FrontPage />,
//   document.getElementById('app')
// );



render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
);
