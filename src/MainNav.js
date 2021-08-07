import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import { Link, Route, Redirect } from 'react-router-dom';
import About from "./About.js";

const MainNav = () => {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
                <img src="logo.png" alt="Redux Chess Demo" />
            </Grid>
            <Grid item style={{ marginTop: 10 }}>
              <Link to="/about">
                <Button variant="text" color="inherit">About</Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Route exact path="/" render={() => (<Redirect to="/" />)} />
      <Route
          path="/about"
          render={(props) => <About {...props} />}
        />
    </div>
  );
}

export default MainNav;
