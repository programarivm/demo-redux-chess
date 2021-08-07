import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import { Link, Route } from 'react-router-dom';
import About from "./About.js";
import Terms from "./Terms.js";
import PrivacyPolicy from "./PrivacyPolicy.js";
import { Chess } from 'redux-chess';

const MainNav = () => {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                Redux Chess Demo
              </Link>
            </Grid>
            <Grid item style={{ marginTop: 10 }}>
              <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
                <Button variant="text" color="inherit">About</Button>
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
    </div>
  );
}

export default MainNav;
