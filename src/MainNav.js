import { Link } from "react-router-dom";
import { AppBar, Button, Grid, Toolbar } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import logo from './assets/img/logo.png';

const MainNav = () => {
  return (
    <AppBar position="static" style={{ background: '#fff' }}>
      <Toolbar>
        <Grid container justifyContent="space-between">
          <Grid item>
            <img src={logo} className="logo" alt="logo" />
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
  );
}

export default MainNav;
