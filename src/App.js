import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "assets/scss/_index.scss";
import Dashboard from "pages/dashboard/Dashboard";

function App() {
  return (
      <Router>
          <Switch>
              <Route
                  exact
                  path='/'
                  component={Dashboard}
              />
          </Switch>
      </Router>
  );
}

export default App;
