import Home from './page/Home'; 
import Header from './components/header/Header';
import ChampionsPage from './page/ChampionsPage';
import { itensMenu } from './utils';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './app.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header menu={itensMenu} blog={'LOL'} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Champions" element={<ChampionsPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
