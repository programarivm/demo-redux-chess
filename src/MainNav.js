import { Link } from "react-router-dom";
import { AppBar, Button, CssBaseline, Grid, Toolbar } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
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
          <Link to="/about" style={{ textDecoration: 'none', color: '#505050', marginRight: 15}}>
            <Button
              variant="text"
              color="inherit"
              style={{textTransform: 'none'}}
              startIcon={<InfoIcon />}
            >
              About
            </Button>
          </Link>
          <a href="https://programarivm.medium.com" style={{ textDecoration: 'none', color: '#505050'}}>
            <Button
              variant="text"
              color="inherit"
              style={{textTransform: 'none'}}
              startIcon={<MenuBookIcon />}
            >
              Blog
            </Button>
          </a>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MainNav;
