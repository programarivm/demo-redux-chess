import React from 'react';
import ReactDOM from 'react-dom';
import { Chess } from 'redux-chess';

const props = {};

ReactDOM.render(
  <Chess props={props} />,
  document.getElementById('redux-chess')
);
