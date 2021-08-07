import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';


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

                <Button variant="text" color="inherit">About</Button>

            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainNav;
