import { AppBar, Button, Grid, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link, Route } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import { Chess } from '@chesslablab/redux-chess';
import About from "./About.js";
import logo from './assets/img/logo.png';

const useStyles = makeStyles({
  chess: {
    margin: 15,
  },
});

const MainNav = () => {
  const classes = useStyles();

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
        render={(props) => <div className={classes.chess}>
          <Chess props={{
            server: {
              prot: 'wss',
              host: 'pchess.net',
              port: '8443'
            }
          }} />
        </div>}
      />
      <Route
        path="/about"
        render={(props) => <About {...props} />}
      />
    </div>
  );
}

export default MainNav;
