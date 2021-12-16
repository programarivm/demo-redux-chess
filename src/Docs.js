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
          Last Revised: December 16, 2021
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
              text={`$ npm i @chesslablab/redux-chess`}
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
import { Chess } from '@chesslablab/redux-chess';

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
              Initialization with a custom <Link href="https://github.com/chesslablab/chess-server">local chess server</Link>:
            </Typography>
            <CopyBlock
              text={`import React from 'react';
import ReactDOM from 'react-dom';
import { Chess } from '@chesslablab/redux-chess';

const props = {
  server: {
    prot: 'ws',
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
              It may appear as if being quite challenging provided it requires this chess server up and running. <code>@chesslablab/redux-chess</code> is "just a chessboard" as lightweight as it can possibly be.
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
/draw {"action":["accept","decline","propose"]} Allows to offer a draw.
/events Gets the events taking place on the game.
/fen Prints the FEN string representation of the game.
/heuristicpicture Takes a balanced heuristic picture of the current game.
/history The current game's history.
/ischeck Finds out if the game is in check.
/ismate Finds out if the game is over.
/piece {"position":"string"} Gets a piece by its position on the board.
/pieces {"color":["w","b"]} Gets the pieces on the board by color.
/playfen {"fen":"string"} Plays a chess move in shortened FEN format.
/quit Quits a game.
/rematch {"action":["accept","decline","propose"]} Allows to offer a rematch.
/resign {"action":["accept"]} Allows to resign a game.
/restart {"hash":"string"} Restarts a game.
/start {"mode":["analysis","loadfen","playfriend"],"fen":"string","color":["w","b"],"min":"int","increment":"int"} Starts a new game.
/status The current game status.
/takeback {"action":["accept","decline","propose"]} Allows to manage a takeback.
/undomove Undoes the last move.

Listening to commands...`}
              language="text"
              theme={dracula}
              showLineNumbers={false}
              codeBlock
            />
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
              See the <Link href="https://github.com/chesslablab/redux-chess/blob/master/CONTRIBUTING.md">contributing guidelines</Link>. Happy learning and coding! Thank you, and keep it up.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </div>
}

export default Docs;
