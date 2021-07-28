import React from 'react';
import ReactDOM from 'react-dom';
import { Chess } from 'redux-chess';

const props = {
  server: {
    prot: 'wss',
    host: 'pchess.net',
    port: '8443'
  }
};

ReactDOM.render(
  <Chess props={props} />,
  document.getElementById('redux-chess')
);
