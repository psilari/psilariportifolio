import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contato from "./pages/Contato";
import Curriculo from "./pages/Curriculo";
import SobreMim from "./pages/SobreMim";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/inicio" exact component={Inicio} />
        <Route path="/sobremim" exact component={SobreMim} />
        <Route path="/curriculo" exact component={Curriculo} />
        <Route path="/contato" exact component={Contato} />
      </Switch>
    </Router>
  );
}

export default App;
