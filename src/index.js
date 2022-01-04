import React from 'react';
import ReactDOM from 'react-dom';
import MainNav from './MainNav';
import Footer from './Footer';
import { HashRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";

ReactDOM.render(
  <HashRouter>
    <CssBaseline />
    <MainNav />
    <Footer />
  </HashRouter>,
  document.getElementById('demo')
);
