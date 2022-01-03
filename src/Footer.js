import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@mui/material/Typography';
import CookieConsent from 'react-cookie-consent';
import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 45,
    paddingTop: 35,
    paddingBottom: 35,
    backgroundColor: '#e8e8e8'
  },
  company: {
    padding: theme.spacing(3),
  },
}));

const Footer = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={12} md={1} />
        <Grid item xs={12} sm={12} md={5} className={classes.company}>
          <Typography color="secondary" variant="subtitle2">
            ChesslabLab,<br/>
            Open-source community<br/>
            Let's create something awesome!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <List component="nav" aria-label="social">
            <a href="https://github.com/programarivm/redux-chess" style={{ textDecoration: 'none' }}>
              <ListItem button>
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText secondary="GitHub" />
              </ListItem>
            </a>
            <a href="https://twitter.com/programarivm" style={{ textDecoration: 'none' }}>
              <ListItem button>
                <ListItemIcon>
                  <TwitterIcon />
                </ListItemIcon>
                <ListItemText secondary="Twitter" />
              </ListItem>
            </a>
          </List>
        </Grid>
      </Grid>
      <CookieConsent>
        Cookies? Mmm, they are delicious! This website does not collect personal data through third-party cookies.
      </CookieConsent>
    </>
  );
}

export default Footer;
