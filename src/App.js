import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import RestaurantList from "./components/RestaurantList";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/restaurants/:city" component={RestaurantList} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
