import React from 'react';
import ReactDOM from 'react-dom';
import MainNav from './MainNav';
import Footer from './Footer';
import Home from './Home.js';
import { HashRouter } from "react-router-dom";
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <HashRouter>
    <CssBaseline />
    <MainNav />
    <Home />
    <Footer />
  </HashRouter>,
  document.getElementById('redux-chess')
);
