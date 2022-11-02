import Admin from "./Pages/Admin";
import MyDocument from "./Pages/Preview";
import Adminp from "./Pages/Adminp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Admin} />
        <Route exact path="/yo" component={MyDocument} />
        <Route path="/applications/:id" component={Adminp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
