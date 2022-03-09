import Home from './page/Home'; 
import Header from './components/headers/Header/Header';
import ChampionsPage from './page/ChampionsPage';
import InfoChampions from './components/InfoChampions/InfoChampions';
import { itensMenu } from './utils';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './app.scss';
import Accounts from './page/Accounts';

function App() {
  return (
    <div className="App">
      <Router>
        <Header menu={itensMenu} blog={''} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Champions" element={<ChampionsPage/>} />
          <Route path="/Champions/:champion" element={<InfoChampions/>} />
          <Route path="/Accounts" element={<Accounts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
