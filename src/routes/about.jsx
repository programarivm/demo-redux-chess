import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from '@mui/material';
import { CopyBlock, dracula } from "react-code-blocks";
import { makeStyles } from '@mui/styles';
import BarChartIcon from '@mui/icons-material/BarChart';
import BugReportIcon from '@mui/icons-material/BugReport';
import JavascriptIcon from '@mui/icons-material/Javascript';
import PhpIcon from '@mui/icons-material/Php';
import StorageIcon from '@mui/icons-material/Storage';
import Footer from '../Footer';
import MainNav from '../MainNav';

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

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <MainNav />
      <Container maxWidth="lg">
        <Box sx={{ m: 2, p: 2 }}>
          <Typography className={classes.title} variant="h4" component="h1" align="center">
            ChesslabLab
          </Typography>
          <Typography className={classes.subtitle} variant="h5" align="center">
            Open Source community
          </Typography>
          <Typography variant="caption" component="p" align="center">
            Last Revised: May 17, 2022
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
             <Paper sx={{ p: 5 }}>
               <Typography variant="body1" paragraph>
                 Chess involves quite a few different aspects of software development
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
                 That's it!
               </Typography>
               <Typography className={classes.header} variant="h5">
                 Thanks so much for reading
               </Typography>
               <Typography variant="body1" paragraph>
                 Well, I know it may look quite challenging, especially at the beginning of your career path to becoming a full-stack developer.
                 We've all been there, so I thought I'd share some of my favorite episodes on creating chess web apps. I hope this will be helpful.
                 Keep it up, and happy learning and coding.
               </Typography>
               <Box sx={{ flexGrow: 1 }} style={{marginTop: 30, marginBottom: 30}}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <Card>
                        <CardActionArea href="https://javascript.plainenglish.io/what-is-redux-chess-6264c99c1eca" target="_blank">
                          <CardMedia
                            component="img"
                            alt="What Is Redux Chess?"
                            height="140"
                            image="what-is-redux-chess.png"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                              What Is Redux Chess?
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              An easy-to-use chess plugin embedded into your React apps
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card>
                        <CardActionArea href="https://medium.com/codex/php-became-strongly-typed-66f2b2ae917" target="_blank">
                          <CardMedia
                            component="img"
                            alt="PHP Became Strongly-Typed"
                            height="140"
                            image="php-became-strongly-typed.jpeg"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                              PHP Became Strongly-Typed
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Over time with gradual updates
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card>
                        <CardActionArea href="https://medium.com/geekculture/why-typescript-and-php-are-good-friends-964360fb75f6" target="_blank">
                          <CardMedia
                            component="img"
                            alt="Why TypeScript and PHP Are Good Friends"
                            height="140"
                            image="why-typescript-and-php-are-good-friends.jpeg"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                              Why TypeScript and PHP Are Good Friends
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              The full guide
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card>
                        <CardActionArea href="https://medium.com/design-bootcamp/what-does-it-mean-to-tdd-a-class-4dbb9bd6b5e2" target="_blank">
                          <CardMedia
                            component="img"
                            alt="What Does It Mean to TDD a Class?"
                            height="140"
                            image="what-does-it-mean-to-tdd-a-class.jpeg"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                              What Does It Mean to TDD a Class?
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              It’s all about using an accurate, technical language
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card>
                        <CardActionArea href="https://medium.com/codex/how-to-write-a-reusable-react-loading-indicator-9e576ba84ce3" target="_blank">
                          <CardMedia
                            component="img"
                            alt="How to Write a Reusable React Loading Indicator"
                            height="140"
                            image="How-to-Write-a-Reusable-React-Loading-Indicator.jpeg"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                              How to Write a Reusable React Loading Indicator
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              With Redux and MUI components
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card>
                        <CardActionArea href="https://medium.com/design-bootcamp/learning-object-oriented-programming-on-github-dddf8aaa3e1f" target="_blank">
                          <CardMedia
                            component="img"
                            alt="Learning Object-Oriented Programming on GitHub"
                            height="140"
                            image="Learning-Object-Oriented-Programming-on-GitHub.jpeg"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                              Learning Object-Oriented Programming on GitHub
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Contributions welcome!
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Grid>
              </Box>
              <Button
                href="https://programarivm.medium.com"
                target="_blank"
                variant="contained"
              >
                Read more on Medium
              </Button>
            </Paper>
          </Grid>
        </Grid>
       </Container>
      <Footer />
    </div>
  );
}

export default About;
