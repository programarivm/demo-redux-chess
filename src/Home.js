import { Chess } from 'redux-chess';
import './ReduxChessDemo.css';

const props = {
  server: {
    prot: 'wss',
    host: 'pchess.net',
    port: '8443'
  }
};

function Home() {
  return (
    <div className="redux-chess-demo">
      <Chess props={props} />
    </div>
  );
}

export default Home;
