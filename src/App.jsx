import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Route exact path="/watch" component={Watch} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
