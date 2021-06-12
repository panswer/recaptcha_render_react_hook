import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { RenderRecaptcha } from "./components/context/Recaptcha";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <RenderRecaptcha.Provider value={true}>
      <Router>
        <div>
          <Navbar />
        </div>
        <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Home />
              </Route>
        </Switch>
      </Router>
    </RenderRecaptcha.Provider>
  );
}

export default App;
