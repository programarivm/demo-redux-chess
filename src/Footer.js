import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
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
        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                ChesslabLab
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Open Source community to learn web development and chess. Happy learning and coding!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={1} />
        <Grid item xs={12} sm={12} md={3}>
          <List component="nav" aria-label="social">
            <a href="https://github.com/chesslablab" style={{ textDecoration: 'none' }}>
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
      <CookieConsent buttonText="Accept">
        Cookies? Mmm, they are delicious! This website does not collect personal data through third-party cookies.
      </CookieConsent>
    </>
  );
}

export default Footer;
