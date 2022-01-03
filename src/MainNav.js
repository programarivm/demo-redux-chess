import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import { Link, Route } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import { Chess } from '@chesslablab/redux-chess';
import About from "./About.js";
import Terms from "./Terms.js";
import PrivacyPolicy from "./PrivacyPolicy.js";
import CookiesPolicy from "./CookiesPolicy.js";
import logo from './assets/img/logo.png';

const MainNav = () => {
  return (
    <div>
      <AppBar position="relative" style={{ background: '#fff' }}>
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <img src={logo} className="logo" alt="logo" />
              </Link>
            </Grid>
            <Grid item style={{ marginTop: 10 }}>
              <Link to="/about" style={{ textDecoration: 'none', color: '#505050'}}>
                <Button
                  variant="text"
                  color="inherit"
                  style={{textTransform: 'none'}}
                  startIcon={<InfoIcon />}
                >
                  About
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Route
        exact path="/"
        render={(props) => <Chess props={ {
          server: {
            prot: 'wss',
            host: 'pchess.net',
            port: '8443'
          }
        }} />}
      />
      <Route
        path="/about"
        render={(props) => <About {...props} />}
      />
      <Route
        path="/terms"
        render={(props) => <Terms {...props} />}
      />
      <Route
        path="/privacy-policy"
        render={(props) => <PrivacyPolicy {...props} />}
      />
      <Route
        path="/cookies-policy"
        render={(props) => <CookiesPolicy {...props} />}
      />
    </div>
  );
}

export default MainNav;
