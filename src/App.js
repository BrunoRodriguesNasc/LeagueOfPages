import Header from "./components/header/Header";
import { itensMenu } from "./utils";
import './app.scss';
import ContainerInfo from "./components/containerInfo/ContainerInfo";
function App() {

  

  return (
    <div className="App">
      <Header menu={itensMenu.map(itens => itens)} blog={'LOL'}/>
      <ContainerInfo/>
    </div>
  );
}

export default App;
