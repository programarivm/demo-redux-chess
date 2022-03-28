import { Link } from "react-router-dom";
import { AppBar, Button, CssBaseline, Grid, Toolbar } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import logo from './assets/img/logo.png';

const MainNav = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" style={{ background: '#fff' }}>
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Link to="/">
                <img src={logo} className="logo" alt="logo" />
              </Link>
            </Grid>
          </Grid>
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
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MainNav;
