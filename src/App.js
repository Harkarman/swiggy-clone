import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./components/Home";
import RestaurantList from "./components/RestaurantList";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={RestaurantList} exact />
        {/* <Route path="/restaurant" component={RestaurantList} /> */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
