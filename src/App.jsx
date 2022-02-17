import Index from "./components/Index";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
