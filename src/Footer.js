import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Typography from '@mui/material/Typography';
import CookieConsent from 'react-cookie-consent';

const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Grid container style={{ marginTop: 50, borderTop: '1px solid #ccc', padding: 30 }}>
        <Grid item xs={12} sm={12} md={1} />
        <Grid item xs={12} sm={12} md={5}>
          <Typography color="secondary" variant="subtitle2">
            ChesslabLab,<br/>
            Open Source community<br/>
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
