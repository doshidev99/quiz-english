import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./pages/Home";
import LuyenDe from "./pages/LuyenDe";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* // children props component */}
          <HomePage />
        </Route>
        <Route path="/luyen-de">
          <Header />
          <LuyenDe />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
