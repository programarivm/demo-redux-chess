import { CssBaseline } from '@material-ui/core';
import { Chess } from 'redux-chess';
import MainNav from './MainNav';
import Footer from './Footer';
import './ReduxChessDemo.css';

const props = {
  server: {
    prot: 'wss',
    host: 'pchess.net',
    port: '8443'
  }
};

function App() {
  return (
    <div className="redux-chess-demo">
      <CssBaseline />
      <MainNav />
      <Chess props={props} />
      <Footer />
    </div>
  );
}

export default App;
