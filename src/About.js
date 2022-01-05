import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { CopyBlock, dracula } from "react-code-blocks";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BarChartIcon from '@mui/icons-material/BarChart';
// icons
import BugReportIcon from '@mui/icons-material/BugReport';
import JavascriptIcon from '@mui/icons-material/Javascript';
import PhpIcon from '@mui/icons-material/Php';
import StorageIcon from '@mui/icons-material/Storage';

const useStyles = makeStyles({
  title: {
    color: '#505050',
  },
  subtitle: {
    color: '#505050',
    marginBottom: '0.25em !important',
  },
  header: {
    color: '#505050',
    marginTop: '1.95em !important',
    marginBottom: '1.15em !important',
    textAlign: 'center',
  },
  skill: {
    color: '#505050',
    marginTop: '1em !important',
    textAlign: 'center'
  },
  link: {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#2f7bbd',
    '&:hover': {
      textDecoration: 'underline !important'
    }
  }
});

function About() {
  const classes = useStyles();

  return <div>
    <Container maxWidth="lg">
      <Box sx={{ m: 2, p: 2 }}>
        <Typography className={classes.title} variant="h4" component="h1" align="center">
          ChesslabLab
        </Typography>
        <Typography className={classes.subtitle} variant="h5" align="center">
          Open Source community
        </Typography>
        <Typography variant="caption" component="p" align="center">
          Last Revised: January 3, 2022
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Paper sx={{ p: 5 }}>
            <Typography variant="body1" paragraph>
              The game of chess involves quite a few different aspects of software development,
              which makes it a perfect topic for learning full-stack web development as well as
              for playing around with machine learning libraries. A bunch of public chess repos ranging
              from React and JavaScript to PHP are available on the <a className={classes.link} href="https://github.com/chesslablab" style={{ textDecoration: 'none' }}>ChesslabLab</a> community on GitHub.
            </Typography>
            <Typography className={classes.header} variant="h5">
              Contributing guidelines
            </Typography>
            <Typography variant="body1" paragraph>
              <ul>
                <li>Find a <a className={classes.link} href="https://github.com/chesslablab">ChesslabLab</a> repo and make sure to read its <code>CONTRIBUTING.md</code> file.</li>
                <li>Look at the open issues.</li>
                <li>Leave the following comment on the issue you want to be assigned to: "Hi there, happy learning and coding!"</li>
                <li>Be prepared to create a friendly PR once the issue has been assigned to you.</li>
              </ul>
            </Typography>
            <Typography variant="body1" paragraph>
              Once you’re ready, <a className={classes.link} href="https://docs.github.com/es/get-started/quickstart/fork-a-repo">fork the repo</a> and create a new branch from <code>master</code> as per the following convention:
            </Typography>
            <CopyBlock
              text={`$ git checkout -b issue/n-the-title-of-the-issue`}
              language="text"
              theme={dracula}
              showLineNumbers={false}
              codeBlock
            />
            <Typography variant="body1" paragraph style={{marginTop: 20}}>
              For example, if the title of the issue is <a className={classes.link} href="https://github.com/chesslablab/redux-chess/issues/236">Update to MUI 5 #236</a> then its corresponding Git branch should be checked out from <code>master</code> like this.
            </Typography>
            <CopyBlock
              text={`$ git checkout -b issue/236-update-to-MUI-5`}
              language="text"
              theme={dracula}
              showLineNumbers={false}
              codeBlock
            />
            <Typography variant="body1" paragraph style={{marginTop: 20}}>
              That's it.
            </Typography>
            <Typography className={classes.header} variant="h5" gutterBottom>
              But hang on a minute
            </Typography>
            <Typography variant="body1" paragraph>
              It's not always peaches and cream, especially at the beginning of your career path to becoming a full-stack developer.
              So I thought that it'd be helpful to share some of my favorite episodes on creating a startupish product,
              from tesing and DevOps to data science, among others.
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={5}>
                  <Typography className={classes.skill} variant="h6">
                    React
                  </Typography>
                  <List>
                    <a className={classes.link} href="https://javascript.plainenglish.io/what-is-redux-chess-6264c99c1eca">
                      <ListItem>
                        <ListItemIcon>
                          <JavascriptIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="What Is Redux Chess?"
                          secondary="An easy-to-use chess plugin embedded into your React apps"
                        />
                      </ListItem>
                    </a>
                    <a className={classes.link} href="https://javascript.plainenglish.io/check-out-the-redux-chess-demo-acbea003d710">
                      <ListItem>
                        <ListItemIcon>
                          <JavascriptIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Check Out the Redux Chess Demo"
                          secondary="Please sit back and enjoy a cup of your favorite brew"
                        />
                      </ListItem>
                    </a>
                    <a className={classes.link} href="https://javascript.plainenglish.io/getting-ready-for-debugging-react-redux-apps-a1eefea535">
                      <ListItem>
                        <ListItemIcon>
                          <JavascriptIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Getting Ready for Debugging React Redux Apps"
                          secondary="While listening to music that helps you feel calm and happy"
                        />
                      </ListItem>
                    </a>
                  </List>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Typography className={classes.skill} variant="h6">
                    PHP
                  </Typography>
                  <List>
                    <a className={classes.link} href="https://medium.com/geekculture/why-php-cannot-die-2e03cde66ff8">
                      <ListItem>
                        <ListItemIcon>
                          <PhpIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Why PHP Cannot Die"
                          secondary="Because PHP was in the right place at the right time"
                        />
                      </ListItem>
                    </a>
                    <a className={classes.link} href="https://medium.com/geekculture/installing-multiple-alternative-versions-of-php-on-ubuntu-b2acc7af3260">
                      <ListItem>
                        <ListItemIcon>
                          <PhpIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Installing Multiple Alternative Versions of PHP on Ubuntu"
                          secondary="This tutorial also applies to any other Debian based Linux distro"
                        />
                      </ListItem>
                    </a>
                    <a className={classes.link} href="https://ai.plainenglish.io/preparing-a-dataset-for-machine-learning-with-php-fd68dd85187e">
                      <ListItem>
                        <ListItemIcon>
                          <PhpIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Preparing a Dataset for Machine Learning With PHP"
                          secondary="Contrary to popular belief, Python is not the only programming language for data science"
                        />
                      </ListItem>
                    </a>
                  </List>
                </Grid>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={5}>
                  <Typography className={classes.skill} variant="h6">
                    Testing
                  </Typography>
                  <List>
                    <a className={classes.link} href="https://javascript.plainenglish.io/looking-forward-to-testing-react-components-with-joy-5bb3f86c21d7">
                      <ListItem>
                        <ListItemIcon>
                          <BugReportIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="How to Test React Components With Joy"
                          secondary="There’s some joy in the realization that I’m taking it easy"
                        />
                      </ListItem>
                    </a>
                    <a className={classes.link} href="https://javascript.plainenglish.io/my-first-integration-test-in-a-redux-hooked-app-3b189addd46e">
                      <ListItem>
                        <ListItemIcon>
                          <BugReportIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="My First Integration Test in a Redux Hooked App"
                          secondary="Since I’m not a big fan of mocking I used the app’s real store"
                        />
                      </ListItem>
                    </a>
                    <a className={classes.link} href="https://medium.com/geekculture/how-to-unit-test-automatically-generated-images-e8cd1fb668a8">
                      <ListItem>
                        <ListItemIcon>
                          <BugReportIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="How to Unit Test Automatically Generated Images"
                          secondary="Two images can be easily compared by matching their checksums"
                        />
                      </ListItem>
                    </a>
                  </List>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Typography className={classes.skill} variant="h6">
                    DevOps
                  </Typography>
                  <List>
                    <a className={classes.link} href="https://medium.com/geekculture/creating-a-local-websocket-server-with-tls-ssl-is-easy-as-pie-de1a2ef058e0">
                      <ListItem>
                        <ListItemIcon>
                          <StorageIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Creating a Local WebSocket Server With TLS/SSL Is Easy as Pie"
                          secondary="Make it easy peasy with an SSL certificate issued instantly online by a CA"
                        />
                      </ListItem>
                    </a>
                    <a className={classes.link} href="https://medium.com/geekculture/a-simple-example-of-ssl-tls-websocket-with-reactphp-and-ratchet-e03be973f521">
                      <ListItem>
                        <ListItemIcon>
                          <StorageIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="A Simple Example of SSL/TLS WebSocket With ReactPHP and Ratchet"
                          secondary="Remember to append the CA bundle to the end of the trusted certificate"
                        />
                      </ListItem>
                    </a>
                    <a className={classes.link} href="https://medium.com/geekculture/newbie-tutorial-on-how-to-rate-limit-a-websocket-server-8e28642ad5ff">
                      <ListItem>
                        <ListItemIcon>
                          <StorageIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Newbie Tutorial on How to Rate-Limit a WebSocket Server"
                          secondary="I hardened a secure WebSocket server with ufw on Ubuntu Server"
                        />
                      </ListItem>
                    </a>
                  </List>
                </Grid>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={5}>
                  <Typography className={classes.skill} variant="h6">
                    Data Science
                  </Typography>
                  <List>
                    <a className={classes.link} href="https://medium.com/geekculture/how-to-take-normalized-heuristic-pictures-79ca0df4cdec">
                      <ListItem>
                        <ListItemIcon>
                          <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="How to Take Normalized Heuristic Pictures"
                          secondary="Think of a chess game in terms of snapshots describing what’s going on on the board"
                        />
                      </ListItem>
                    </a>
                    <a className={classes.link} href="https://medium.com/geekculture/visualizing-chess-openings-before-mlp-classification-fd2a3e8c266">
                      <ListItem>
                        <ListItemIcon>
                          <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Visualizing Chess Openings Before MLP Classification"
                          secondary="Chess positions are encoded as a combination of numbers between -1 and 1"
                        />
                      </ListItem>
                    </a>
                    <a className={classes.link} href="https://medium.com/geekculture/using-restricted-permutations-to-classify-chess-positions-for-further-supervised-learning-27eeb3f71d82">
                      <ListItem>
                        <ListItemIcon>
                          <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Using Restricted Permutations to Classify Chess Positions for Further Supervised Learning"
                          secondary="Let the grandmasters label thousands of chess positions"
                        />
                      </ListItem>
                    </a>
                  </List>
                </Grid>
              </Grid>
            </Box>
            <Typography className={classes.header} variant="h5" gutterBottom>
              Pricing
            </Typography>
            <Typography variant="body1" paragraph>
              If you're looking forward to working on a startupish product —  or want to transfer your skills to a different stack —  but it still feels a little over your head, you may want to work together with a mentor solving ChesslabLab issues on GitHub.
              Become a sponsor to Jordi today and let's create something awesome!
            </Typography>
            <Card sx={{ my: 1 }} variant="outlined">
              <CardContent>
                <Typography variant="h6">
                  $35 one time tier
                </Typography>
                <Typography variant="p">
                  Let's work together on a ChesslabLab issue labeled with <code>sponsored</code>.
                </Typography>
              </CardContent>
              <CardActions>
                <Button target="_blank" href="https://github.com/sponsors/programarivm?frequency=one-time">Become a sponsor</Button>
              </CardActions>
            </Card>
            <Card sx={{ my: 1 }} variant="outlined">
              <CardContent>
                <Typography variant="h6">
                  $85 one time tier
                </Typography>
                <Typography variant="p">
                  Let's work together on three ChesslabLab issues labeled with <code>sponsored</code>.
                </Typography>
              </CardContent>
              <CardActions>
                <Button target="_blank" href="https://github.com/sponsors/programarivm?frequency=one-time">Become a sponsor</Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </div>
}

export default About;
