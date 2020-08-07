import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar"
import Search from "./pages/Search";
import About from "./pages/About";



function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/search" component={Search} />
      <Route exact path="/" component={About} />

    </Router>

  );
}

export default App;
