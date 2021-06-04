import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/not-found";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
