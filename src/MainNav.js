import { AppBar, Grid, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Chess } from '@chesslablab/redux-chess';
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
              <img src={logo} className="logo" alt="logo" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.chess}>
        <Chess props={{
          api: {
            prot: 'https',
            host: 'pchess.net',
            port: '443'
          },
          server: {
            prot: 'wss',
            host: 'pchess.net',
            port: '8443'
          }
        }} />
      </div>
    </div>
  );
}

export default MainNav;
