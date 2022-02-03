import Header from "./components/header/Header";

import './app.scss';
function App() {

  const itensMenu = [<span>Home</span>, <span>Accounts</span>,<span>About</span>, <span>Feedback</span>, <span>News</span>]

  return (
    <div className="App">
      <Header menu={itensMenu.map(itens => itens)} blog={'LOL'}/>
    </div>
  );
}

export default App;
