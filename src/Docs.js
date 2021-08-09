import { Box, Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CopyBlock, dracula } from "react-code-blocks";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
  },
}));

function Docs() {
  const classes = useStyles();

  return <div>
    <Container maxWidth="lg">
      <Box className={classes.box}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Redux Chess
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          An easily embeddable chessboard into your React app
        </Typography>
        <Typography variant="caption" component="p" align="center">
          Last Revised: August 9, 2021
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Install
            </Typography>
            <Typography variant="body1" paragraph>
              Via npm:
            </Typography>
            <CopyBlock
              text={`$ npm i redux-chess`}
              language="text"
              theme={dracula}
              showLineNumbers={false}
              codeBlock
            />
            <Typography variant="h5" style={{marginTop: 20}} gutterBottom>
              Examples
            </Typography>
            <Typography variant="body1" paragraph>
              Initialization with the sandbox chess server:
            </Typography>
            <CopyBlock
              text={`import React from 'react';
import ReactDOM from 'react-dom';
import { Chess } from 'redux-chess';

const props = {
  server: {
    prot: 'wss',
    host: 'pchess.net',
    port: '8443'
};

ReactDOM.render(
  <Chess props={props} />,
  document.getElementById('redux-chess')
);`}
              language="jsx"
              theme={dracula}
              codeBlock
            />
            <Typography variant="body1" paragraph style={{marginTop: 10}}>
              Please note that at this moment the sandbox server may not be up all the time.
            </Typography>
            <Typography variant="body1" paragraph>
              Initialization with a custom <Link href="https://github.com/programarivm/chess-server">local chess server</Link>:
            </Typography>
            <CopyBlock
              text={`import React from 'react';
import ReactDOM from 'react-dom';
import { Chess } from 'redux-chess';

const props = {
  server: {
    port: 'ws',
    host: '127.0.0.1',
    port: '8080'
  }
};

ReactDOM.render(
  <Chess props={props} />,
  document.getElementById('redux-chess')
);`}
              language="jsx"
              theme={dracula}
              codeBlock
            />
            <Typography variant="h5" style={{marginTop: 20}} gutterBottom>
              Learn more
            </Typography>
            <Typography variant="body1" paragraph>
              Thank you for your interest in this exciting project!
            </Typography>
            <Typography variant="body1" paragraph>
              It may appear as if being quite challenging provided it requires this chess server up and running. <code>redux-chess</code> is "just a chessboard" as lightweight as it can possibly be.
            </Typography>
            <Typography variant="body1" paragraph>
              The chessboard just sends messages to a WebSocket server so make sure the chess server is running on localhost:
            </Typography>
            <CopyBlock
              text={`$ php cli/ws-server.php
Welcome to PHP Chess Server
Commands available:
/accept {"id":"id"} Accepts a friend request to play a game.
/ascii Prints the ASCII representation of the game.
/castling Gets the castling status.
/captures Gets the pieces captured by both players.
/fen Prints the FEN string representation of the game.
/history The current game's history.
/ischeck Finds out if the game is in check.
/ismate Finds out if the game is over.
/piece {"position":"string"} Gets a piece by its position on the board.
/pieces {"color":["w","b"]} Gets the pieces on the board by color.
/playfen {"fen":"string"} Plays a chess move in shortened FEN format.
/quit Quits a game.
/start {"mode":["analysis","playfriend"],"color":["w","b"],"min":"int"} Starts a new game.
/status The current game status.

Listening to commands...`}
              language="text"
              theme={dracula}
              showLineNumbers={false}
              codeBlock
            />
            <Typography variant="body1" paragraph style={{marginTop: 10}}>
              For further information on developing this awesome npm package, you're all invited to read my learning journey:
              <ul>
                <li><Link href="https://medium.com/geekculture/demystifying-ai-through-a-human-like-chess-engine-5f71e3896cc9">Demystifying AI Through a Human-Like Chess Engine</Link></li>
                <li><Link href="https://medium.com/geekculture/two-things-that-my-ai-project-required-50000297053b">Two Things That My AI Project Required</Link></li>
                <li><Link href="https://medium.com/geekculture/what-are-some-healthy-tips-to-reduce-cognitive-load-4f91b695a3cb">What Are Some Healthy Tips to Reduce Cognitive Load?</Link></li>
                <li><Link href="https://medium.com/geekculture/how-to-take-normalized-heuristic-pictures-79ca0df4cdec">How to Take Normalized Heuristic Pictures</Link></li>
                <li><Link href="https://medium.com/geekculture/equilibrium-yin-yang-chess-292e044be46b">Equilibrium, Yin-Yang Chess</Link></li>
                <li><Link href="https://medium.com/geekculture/adding-classes-to-a-solid-codebase-without-breaking-anything-else-99e6c5a5f3e4">Adding Classes to a SOLID Codebase Without Breaking Anything Else</Link></li>
                <li><Link href="https://ai.plainenglish.io/preparing-a-dataset-for-machine-learning-with-php-fd68dd85187e">Preparing a Dataset for Machine Learning With PHP</Link></li>
                <li><Link href="https://medium.com/geekculture/converting-a-fen-chess-position-into-a-pgn-move-4a278d81b21f">Converting a FEN Chess Position Into a PGN Move</Link></li>
                <li><Link href="https://medium.com/geekculture/a-react-chessboard-with-redux-and-hooks-in-few-lines-6009cb724bb">A React Chessboard with Redux and Hooks in Few Lines</Link></li>
                <li><Link href="https://javascript.plainenglish.io/testing-a-local-react-npm-package-with-ease-7d0668676ddb">How to Test a Local React NPM Package With Ease</Link></li>
                <li><Link href="https://medium.com/geekculture/tdding-a-react-app-with-jest-the-easy-way-8ddb64aeaba6">TDDing a React App With Jest the Easy Way</Link></li>
                <li><Link href="https://javascript.plainenglish.io/looking-forward-to-testing-react-components-with-joy-5bb3f86c21d7">How to Test React Components With Joy</Link></li>
                <li><Link href="https://programarivm.medium.com/my-first-integration-test-in-a-redux-hooked-app-3b189addd46e">My First Integration Test in a Redux Hooked App</Link></li>
                <li><Link href="https://medium.com/geekculture/creating-a-local-websocket-server-with-tls-ssl-is-easy-as-pie-de1a2ef058e0">Creating a Local WebSocket Server With TLS/SSL Is Easy as Pie</Link></li>
                <li><Link href="https://medium.com/geekculture/a-simple-example-of-ssl-tls-websocket-with-reactphp-and-ratchet-e03be973f521">A Simple Example of SSL/TLS WebSocket With ReactPHP and Ratchet</Link></li>
                <li><Link href="https://medium.com/geekculture/newbie-tutorial-on-how-to-rate-limit-a-websocket-server-8e28642ad5ff">Newbie Tutorial on How to Rate-Limit a WebSocket Server</Link></li>
              </ul>
            </Typography>
            <Typography variant="h5" style={{marginTop: 20}} gutterBottom>
              License
            </Typography>
            <Typography variant="body1" paragraph>
              The MIT License.
            </Typography>
            <Typography variant="h5" style={{marginTop: 20}} gutterBottom>
              Contributions
            </Typography>
            <Typography variant="body1" paragraph style={{marginTop: 10}}>
              Would you help make this app better?
              <ul>
                <li>Look at the <Link href="https://github.com/programarivm/redux-chess/issues">open issues</Link></li>
                <li>Send a pull request</li>
                <li>Drop <Link href="https://programarivm.com/about">an email</Link></li>
                <li>Leave me a <Link href="https://twitter.com/programarivm">message on Twitter</Link></li>
              </ul>
              Happy learning! Thank you, and keep it up.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </div>
}

export default Docs;
