import { makeStyles } from '@mui/styles';
import { Chess } from '@chesslablab/redux-chess';

const useStyles = makeStyles({
  myChess: {
    margin: 15,
  },
});

const MyChess = () => {
  const classes = useStyles();

  return (
    <div className={classes.myChess}>
      <Chess props={{
          api: {
            prot: 'https',
            host: 'pchess.net',
            port: '443'
          },
          server: {
            prot: 'wss',
            host: 'pchess.net',
            port: '8443'
          }
        }}
      />
    </div>
  );
}

export default MyChess;
