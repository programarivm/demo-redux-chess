import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import { Link, Route } from 'react-router-dom';
import DescriptionIcon from '@material-ui/icons/Description';
import { Chess } from '@chesslab/redux-chess';
import Docs from "./Docs.js";
import Terms from "./Terms.js";
import PrivacyPolicy from "./PrivacyPolicy.js";
import CookiesPolicy from "./CookiesPolicy.js";
import logo from './assets/img/logo.png';

const MainNav = () => {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <img src={logo} className="logo" alt="logo" />
              </Link>
            </Grid>
            <Grid item style={{ marginTop: 10 }}>
              <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
                <Button
                  variant="text"
                  color="inherit"
                  style={{textTransform: 'none'}}
                  startIcon={<DescriptionIcon />}
                >
                  Documentation
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div style={{ margin: 15 }}>
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
      </div>
      <Route
        path="/about"
        render={(props) => <Docs {...props} />}
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
